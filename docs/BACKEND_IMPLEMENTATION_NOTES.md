# Qutab Platform - Backend Implementation Notes

**Purpose:** Critical considerations for backend development  
**Last Updated:** 10 January 2026

---

## ⚠️ CRITICAL ISSUES TO ADDRESS

These issues MUST be handled correctly to avoid financial loss or server problems at scale (10,000+ sales).

---

## 1. 🔴 Race Condition: Balance Double-Spending

### The Problem
If `available_balance` is stored as a simple number, affiliates can exploit race conditions to withdraw more than their actual balance.

**Attack Scenario:**
1. Affiliate has Rp 5,000,000 balance
2. Opens two browser tabs
3. Clicks "Withdraw Rp 5,000,000" in both tabs simultaneously
4. Both requests check balance (both see 5jt)
5. Both requests process (affiliate gets Rp 10,000,000)

### The Solution

**❌ DON'T: Store balance as a field**
```sql
-- BAD: Easy to exploit
UPDATE affiliates SET balance = balance - 5000000 WHERE id = ?;
```

**✅ DO: Calculate balance dynamically**
```sql
-- GOOD: Calculate real-time
SELECT 
  (SELECT COALESCE(SUM(amount), 0) 
   FROM commissions 
   WHERE affiliate_id = ? AND status = 'available')
  - 
  (SELECT COALESCE(SUM(amount), 0) 
   FROM payouts 
   WHERE affiliate_id = ? AND status IN ('pending', 'processing', 'paid'))
AS real_balance;
```

**✅ DO: Use database transactions with row locking**
```sql
BEGIN TRANSACTION;

-- Lock the affiliate row to prevent concurrent modifications
SELECT id FROM affiliates WHERE id = ? FOR UPDATE;

-- Calculate actual balance
SET @balance = (
  SELECT COALESCE(SUM(amount), 0) FROM commissions 
  WHERE affiliate_id = ? AND status = 'available'
) - (
  SELECT COALESCE(SUM(amount), 0) FROM payouts 
  WHERE affiliate_id = ? AND status IN ('pending', 'processing', 'paid')
);

-- Check if withdrawal is valid
IF @balance >= @requested_amount THEN
  INSERT INTO payouts (affiliate_id, amount, status) VALUES (?, @requested_amount, 'pending');
END IF;

COMMIT;
```

### Implementation Checklist
- [ ] Never store `balance` as a column in `affiliates` table
- [ ] Calculate balance from `commissions` minus `payouts` on every request
- [ ] Wrap payout requests in database transactions
- [ ] Use `SELECT ... FOR UPDATE` to lock rows during payout processing

---

## 2. 🟠 Performance: Click History Explosion

### The Problem
Generating dashboard charts requires scanning the `referral_clicks` table. With 300,000+ clicks, this causes:
- Slow dashboard loading
- High CPU usage
- Potential timeout on customer checkout pages

### The Solution

**Step 1: Add Database Indexes**
```sql
-- CRITICAL: Without this, queries will be very slow
CREATE INDEX idx_clicks_affiliate_date 
ON referral_clicks(affiliate_code, created_at);

CREATE INDEX idx_referrals_affiliate_status 
ON referrals(affiliate_id, status, created_at);

CREATE INDEX idx_commissions_affiliate_status 
ON commissions(affiliate_id, status, created_at);
```

**Step 2: Create Summary Table**
```sql
CREATE TABLE daily_stats (
  id INT PRIMARY KEY AUTO_INCREMENT,
  date DATE NOT NULL,
  affiliate_id INT NOT NULL,
  total_clicks INT DEFAULT 0,
  total_conversions INT DEFAULT 0,
  total_commission DECIMAL(12,2) DEFAULT 0,
  UNIQUE KEY unique_daily (date, affiliate_id),
  INDEX idx_affiliate_date (affiliate_id, date)
);
```

**Step 3: Update Summary Periodically**
```sql
-- Run via cron job every hour or on each click event
INSERT INTO daily_stats (date, affiliate_id, total_clicks, total_conversions, total_commission)
VALUES (CURDATE(), ?, 1, 0, 0)
ON DUPLICATE KEY UPDATE total_clicks = total_clicks + 1;
```

**Step 4: Query Summary Table for Dashboard**
```sql
-- Fast: Query pre-aggregated data
SELECT date, total_clicks, total_conversions, total_commission
FROM daily_stats
WHERE affiliate_id = ? AND date BETWEEN ? AND ?
ORDER BY date;
```

### Implementation Checklist
- [ ] Add composite indexes to `referral_clicks`, `referrals`, `commissions`
- [ ] Create `daily_stats` summary table
- [ ] Update summary table on each click/sale event
- [ ] Dashboard charts query `daily_stats`, not raw logs

---

## 3. 🔴 Business Logic: 30-Day Holding Period Loophole

### The Problem
Commissions automatically mature after 30 days, but what if the order is cancelled/refunded on Day 29?

**Scenario:**
1. Customer buys qurban on June 1st
2. Affiliate earns Rp 100,000 commission (status: pending)
3. On June 25th, customer requests refund (order cancelled)
4. On July 1st, cron job runs and moves commission to "available"
5. Affiliate withdraws Rp 100,000 for a cancelled order

### The Solution

**Rule 1: Order cancellation IMMEDIATELY voids commission**
```sql
-- Trigger when order is cancelled/refunded
UPDATE commissions 
SET status = 'voided', 
    voided_at = NOW(),
    voided_reason = 'order_cancelled'
WHERE order_id = ? 
  AND status IN ('pending', 'available');
```

**Rule 2: Maturation cron job checks order status**
```sql
-- Run nightly: Only mature commissions for COMPLETED orders
UPDATE commissions
SET status = 'available', matured_at = NOW()
WHERE status = 'pending'
  AND created_at <= NOW() - INTERVAL 30 DAY
  AND order_id IN (
    SELECT id FROM orders WHERE status = 'completed'
  );
```

**Rule 3: Document all commission status changes**
```sql
-- Commission status values
'pending'    -- Order placed, waiting for holding period
'available'  -- Holding period complete, can be withdrawn
'paid'       -- Included in a payout that was completed
'voided'     -- Order cancelled/refunded, commission invalid
```

### Implementation Checklist
- [ ] Add `voided` status to commission status enum
- [ ] Add `voided_at` and `voided_reason` columns to commissions
- [ ] Create trigger/event to void commission when order is cancelled
- [ ] Cron job only matures commissions for completed orders
- [ ] Prevent withdrawal of voided commissions

---

## 4. 🟡 Fraud Prevention: Self-Referral

### The Problem
An affiliate "Budi" can:
1. Sign up as affiliate with code "BUDI10"
2. Buy qurban for himself using "BUDI10"
3. Get 5% commission as a "discount"

### Business Decision Required

| Option | Allow Self-Referral? | Implementation |
|--------|---------------------|----------------|
| A | ✅ Yes, fully allow | No extra code needed |
| B | ❌ No, block completely | Check email/phone match |
| C | ⚠️ Limited | Allow once, or reduced commission |

### Option A: Allow (Recommended for MVP)
- Simplest to implement
- Acts as loyalty discount for affiliates
- Common in many affiliate programs

### Option B: Block
```sql
-- Check before creating referral
SELECT COUNT(*) FROM affiliates 
WHERE email = @customer_email 
   OR whatsapp = @customer_phone;

-- If count > 0, reject the referral code
```

### Option C: Limit
```sql
-- Allow self-referral but with reduced commission
IF customer_email = affiliate_email THEN
  commission_rate = 0.02  -- 2% instead of 5%
END IF;
```

### Recommendation
**Start with Option A (Allow)** for MVP simplicity. Monitor usage patterns. If abuse is detected, implement Option C (reduced rate) later.

---

## Database Schema Additions

Based on the issues above, add these fields/tables:

### Commissions Table Updates
```sql
ALTER TABLE commissions ADD COLUMN voided_at DATETIME NULL;
ALTER TABLE commissions ADD COLUMN voided_reason VARCHAR(255) NULL;
ALTER TABLE commissions ADD COLUMN matured_at DATETIME NULL;

-- Update status enum
-- status: 'pending' | 'available' | 'paid' | 'voided'
```

### Daily Stats Table (New)
```sql
CREATE TABLE daily_stats (
  id INT PRIMARY KEY AUTO_INCREMENT,
  date DATE NOT NULL,
  affiliate_id INT NOT NULL,
  total_clicks INT DEFAULT 0,
  total_conversions INT DEFAULT 0,
  total_commission DECIMAL(12,2) DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY unique_daily (date, affiliate_id),
  INDEX idx_affiliate_date (affiliate_id, date)
);
```

### Required Indexes
```sql
-- Performance indexes
CREATE INDEX idx_clicks_affiliate_date ON referral_clicks(affiliate_code, created_at);
CREATE INDEX idx_referrals_affiliate_status ON referrals(affiliate_id, status, created_at);
CREATE INDEX idx_commissions_affiliate_status ON commissions(affiliate_id, status, created_at);
CREATE INDEX idx_commissions_order ON commissions(order_id);
CREATE INDEX idx_payouts_affiliate_status ON payouts(affiliate_id, status);
```

---

## Cron Jobs Required

| Job | Frequency | Purpose |
|-----|-----------|---------|
| Mature Commissions | Daily 00:00 | Move pending → available after 30 days |
| Update Daily Stats | Hourly | Aggregate click/sale data |
| Clean Old Clicks | Weekly | Archive clicks older than 90 days |

### Mature Commissions Cron
```sql
-- /cron/mature-commissions.sql
UPDATE commissions
SET status = 'available', matured_at = NOW()
WHERE status = 'pending'
  AND created_at <= NOW() - INTERVAL 30 DAY
  AND order_id IN (SELECT id FROM orders WHERE status = 'completed');
```

### Update Daily Stats Cron
```sql
-- /cron/update-daily-stats.sql
INSERT INTO daily_stats (date, affiliate_id, total_clicks)
SELECT DATE(created_at), affiliate_id, COUNT(*)
FROM referral_clicks
WHERE created_at >= CURDATE()
GROUP BY DATE(created_at), affiliate_id
ON DUPLICATE KEY UPDATE total_clicks = VALUES(total_clicks);
```

---

## Summary Checklist

### Before Production Launch
- [ ] **Balance Calculation:** Remove stored balance, calculate dynamically
- [ ] **Transaction Locking:** Wrap payouts in transactions with row locks
- [ ] **Database Indexes:** Add all performance indexes
- [ ] **Summary Tables:** Create and populate `daily_stats`
- [ ] **Commission Voiding:** Implement order cancellation → void commission
- [ ] **Cron Jobs:** Set up maturation and stats jobs
- [ ] **Self-Referral Policy:** Decide and document policy

### Monitoring at Scale
- [ ] Monitor database query times
- [ ] Alert on payout anomalies (multiple requests same minute)
- [ ] Track commission void rate (high = refund issues)
- [ ] Review affiliate earnings distribution (detect abuse)

---

## Document Version

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 10 January 2026 | Initial backend implementation notes |
