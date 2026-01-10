# Qutab Platform - Backend Feature Requirements

**Purpose:** Document features requiring backend API implementation  
**Last Updated:** 10 January 2026

---

## Table of Contents

1. [Customer Dashboard](#customer-dashboard)
2. [Affiliate Dashboard](#affiliate-dashboard)

---

# Customer Dashboard

## 1. Authentication

### 1.1 Login
| API Endpoint | Method | Description |
|--------------|--------|-------------|
| `/api/auth/login` | POST | Authenticate customer |
| `/api/auth/logout` | POST | End session |
| `/api/auth/forgot-password` | POST | Send reset email |
| `/api/auth/reset-password` | POST | Reset password with token |

**Request Fields:**
- email (string, required)
- password (string, required)

**Response:**
- access_token
- user object (id, name, email)

### 1.2 Registration
| API Endpoint | Method | Description |
|--------------|--------|-------------|
| `/api/auth/register` | POST | Create new customer account |

**Request Fields:**
- name (string, required)
- email (string, required)
- phone (string, required)
- password (string, required)

---

## 2. Order Management

### 2.1 Order List
| API Endpoint | Method | Description |
|--------------|--------|-------------|
| `/api/orders` | GET | Get customer's orders |
| `/api/orders/:id` | GET | Get order details |
| `/api/orders` | POST | Create new order |

**Order Object:**
| Field | Type | Description |
|-------|------|-------------|
| id | string | Order ID |
| product_id | string | Purchased product |
| product_name | string | Product name |
| quantity | number | Number of animals |
| total_amount | number | Total price (Rp) |
| status | enum | pending, paid, processing, completed |
| created_at | datetime | Order date |
| payment_method | string | Payment method used |
| recipient_name | string | Qurban recipient name |
| recipient_location | string | Distribution location |

### 2.2 Order Status Tracking
| API Endpoint | Method | Description |
|--------------|--------|-------------|
| `/api/orders/:id/tracking` | GET | Get order tracking updates |

**Status Flow:**
```
Pending → Paid → Processing → Distributed → Completed
```

---

## 3. Customer Profile

### 3.1 Profile Management
| API Endpoint | Method | Description |
|--------------|--------|-------------|
| `/api/profile` | GET | Get customer profile |
| `/api/profile` | PUT | Update profile |
| `/api/profile/password` | PUT | Change password |

**Profile Fields:**
| Field | Type | Editable |
|-------|------|----------|
| name | string | ✅ |
| email | string | ❌ |
| phone | string | ✅ |
| address | string | ✅ |

---

# Affiliate Dashboard

## 1. Affiliate Authentication

### 1.1 Login
| API Endpoint | Method | Description |
|--------------|--------|-------------|
| `/api/affiliate/auth/login` | POST | Authenticate affiliate |
| `/api/affiliate/auth/logout` | POST | End session |

### 1.2 Registration
| API Endpoint | Method | Description |
|--------------|--------|-------------|
| `/api/affiliate/auth/register` | POST | Submit affiliate application |

**Request Fields:**
| Field | Type | Required |
|-------|------|----------|
| first_name | string | ✅ |
| last_name | string | ✅ |
| email | string | ✅ |
| password | string | ✅ |
| whatsapp | string | ✅ |
| city | string | ✅ |
| instagram | string | ❌ |
| tiktok | string | ❌ |
| youtube | string | ❌ |
| facebook | string | ❌ |
| primary_platform | enum | ✅ |
| reason | text | ✅ |

### 1.3 Application Status
| API Endpoint | Method | Description |
|--------------|--------|-------------|
| `/api/affiliate/status` | GET | Check application status |

**Response:**
| Field | Type | Values |
|-------|------|--------|
| status | enum | pending, approved, rejected |
| rejection_reason | string | If rejected |
| approved_at | datetime | If approved |
| affiliate_code | string | If approved |

---

## 2. Dashboard Home

| API Endpoint | Method | Description |
|--------------|--------|-------------|
| `/api/affiliate/dashboard/summary` | GET | Get dashboard summary stats |

**Response:**
| Field | Type | Description |
|-------|------|-------------|
| total_clicks | number | Total link clicks |
| total_conversions | number | Successful referrals |
| conversion_rate | number | Click-to-sale percentage |
| total_commission | number | Total earned (Rp) |
| available_balance | number | Withdrawable amount |
| pending_commission | number | In holding period |

| API Endpoint | Method | Description |
|--------------|--------|-------------|
| `/api/affiliate/dashboard/activity` | GET | Get recent activity |

**Activity Item:**
| Field | Type | Description |
|-------|------|-------------|
| type | enum | sale, click, payout |
| description | string | Activity description |
| amount | number | Related amount |
| created_at | datetime | When it happened |

---

## 3. Banner dan Link

| API Endpoint | Method | Description |
|--------------|--------|-------------|
| `/api/affiliate/referral-link` | GET | Get affiliate's unique referral link |
| `/api/affiliate/materials` | GET | Get promotional materials |

**Referral Link Response:**
| Field | Type | Description |
|-------|------|-------------|
| referral_code | string | Unique code (e.g., XK7mP2q) |
| referral_url | string | Full URL (qutab.id/r/XK7mP2q) |
| target_url | string | Destination URL |
| embed_code | string | HTML embed code |
| total_clicks | number | Link click count |

**Materials Response:**
| Field | Type | Description |
|-------|------|-------------|
| banners | array | Banner images (various sizes) |
| social_graphics | array | Social media images |

---

## 4. Statistik

| API Endpoint | Method | Description |
|--------------|--------|-------------|
| `/api/affiliate/statistics` | GET | Get performance statistics |

**Query Parameters:**
| Param | Type | Values |
|-------|------|--------|
| period | enum | today, 7days, 30days, this_month, custom |
| start_date | date | For custom period |
| end_date | date | For custom period |

**Response:**
| Field | Type | Description |
|-------|------|-------------|
| total_clicks | number | Clicks in period |
| total_conversions | number | Sales in period |
| total_commission | number | Earned in period |
| chart_data | array | Daily breakdown for graphs |

**Chart Data Item:**
| Field | Type | Description |
|-------|------|-------------|
| date | date | Day |
| clicks | number | Clicks that day |
| conversions | number | Sales that day |
| commission | number | Earned that day |

---

## 5. Rekening Pembayaran (Bank Account)

| API Endpoint | Method | Description |
|--------------|--------|-------------|
| `/api/affiliate/bank-account` | GET | Get saved bank account |
| `/api/affiliate/bank-account` | POST | Save/update bank account |
| `/api/affiliate/bank-account/verify` | POST | Submit KTP for verification |

**Bank Account Fields:**
| Field | Type | Required |
|-------|------|----------|
| bank_name | string | ✅ |
| account_number | string | ✅ |
| account_holder_name | string | ✅ |
| ktp_image | file | ✅ |
| verification_status | enum | pending, verified, rejected |

**Verification Status Values:**
- `pending` - KTP submitted, waiting admin review
- `verified` - Account verified, can receive payouts
- `rejected` - KTP doesn't match, needs resubmission

---

## 6. Pembayaran Komisi (Commission Payments)

### 6.1 Balance & Payout Request
| API Endpoint | Method | Description |
|--------------|--------|-------------|
| `/api/affiliate/balance` | GET | Get current balance |
| `/api/affiliate/payout/request` | POST | Request withdrawal |

**Balance Response:**
| Field | Type | Description |
|-------|------|-------------|
| available_balance | number | Ready to withdraw (Rp) |
| pending_commission | number | In holding period (Rp) |
| minimum_payout | number | Minimum withdrawal (Rp) |
| can_request_payout | boolean | If above minimum |

**Payout Request:**
| Field | Type | Description |
|-------|------|-------------|
| amount | number | Requested amount |

### 6.2 Payout History
| API Endpoint | Method | Description |
|--------------|--------|-------------|
| `/api/affiliate/payout/history` | GET | Get payout history |

**Payout Record:**
| Field | Type | Description |
|-------|------|-------------|
| id | string | Payout ID |
| amount | number | Amount paid |
| status | enum | pending, processing, paid, failed |
| requested_at | datetime | Request date |
| processed_at | datetime | Payment date |
| bank_name | string | Destination bank |
| account_number | string | Masked account |
| notes | string | Transaction notes |

---

## 7. Leads Anda (Referrals)

| API Endpoint | Method | Description |
|--------------|--------|-------------|
| `/api/affiliate/referrals` | GET | Get referred customers |

**Query Parameters:**
| Param | Type | Description |
|-------|------|-------------|
| status | enum | all, pending, confirmed, paid |
| page | number | Pagination |
| limit | number | Items per page |

**Referral Record:**
| Field | Type | Description |
|-------|------|-------------|
| id | string | Referral ID |
| customer_name | string | Masked (Dar**** Pu***) |
| customer_email | string | Masked (dar***@gmail.com) |
| product_name | string | Purchased product |
| order_date | datetime | Purchase date |
| order_value | number | Order total (Rp) |
| commission | number | Commission earned (Rp) |
| status | enum | pending, confirmed, paid |

**Status Meanings:**
- `pending` - Order placed, awaiting payment confirmation
- `confirmed` - Payment confirmed, in holding period
- `paid` - Commission paid to affiliate

---

## 8. Kupon Diskon (Discount Coupons)

| API Endpoint | Method | Description |
|--------------|--------|-------------|
| `/api/affiliate/coupons` | GET | Get affiliate's coupons |

**Coupon Record:**
| Field | Type | Description |
|-------|------|-------------|
| id | string | Coupon ID |
| code | string | Coupon code (e.g., DARMAWAN10) |
| discount_type | enum | percentage, fixed |
| discount_value | number | Discount amount |
| valid_from | datetime | Start date |
| valid_until | datetime | Expiry date |
| usage_count | number | Times used |
| usage_limit | number | Maximum uses |
| is_active | boolean | Currently active |

---

## 9. Helpdesk

| API Endpoint | Method | Description |
|--------------|--------|-------------|
| `/api/affiliate/faq` | GET | Get FAQ list |
| `/api/affiliate/support/contact` | GET | Get support contact info |

**FAQ Item:**
| Field | Type | Description |
|-------|------|-------------|
| question | string | Question text |
| answer | string | Answer text |
| category | string | FAQ category |

**Contact Info:**
| Field | Type | Description |
|-------|------|-------------|
| whatsapp | string | WhatsApp number |
| email | string | Support email |
| response_time | string | Expected response time |

---

## 10. Profil Member

| API Endpoint | Method | Description |
|--------------|--------|-------------|
| `/api/affiliate/profile` | GET | Get affiliate profile |
| `/api/affiliate/profile` | PUT | Update profile |
| `/api/affiliate/profile/photo` | POST | Upload profile photo |
| `/api/affiliate/profile/password` | PUT | Change password |

**Profile Fields:**
| Field | Type | Editable |
|-------|------|----------|
| id | string | ❌ |
| first_name | string | ✅ |
| last_name | string | ✅ |
| email | string | ❌ |
| whatsapp | string | ✅ |
| city | string | ✅ |
| instagram | string | ✅ |
| tiktok | string | ✅ |
| profile_photo | string | ✅ |
| affiliate_code | string | ❌ |
| joined_at | datetime | ❌ |
| verification_status | enum | ❌ |

---

## Database Models Summary

### Customer Tables
| Table | Description |
|-------|-------------|
| users | Customer accounts |
| orders | Customer orders |
| order_tracking | Order status history |

### Affiliate Tables
| Table | Description |
|-------|-------------|
| affiliates | Affiliate accounts |
| affiliate_applications | Registration applications |
| bank_accounts | Affiliate bank details |
| referral_clicks | Link click tracking |
| referrals | Referred orders |
| commissions | Commission records |
| payouts | Payout requests & history |
| coupons | Affiliate discount codes |
| coupon_usage | Coupon redemption tracking |

---

## Webhook Requirements

### Payment Gateway (Zendit)
| Event | Action |
|-------|--------|
| `payment.success` | Confirm order, record commission as pending |
| `payment.failed` | Mark order as failed |

### Commission Flow
```
Order Paid → Commission Created (pending)
             ↓
      After 30 days (holding period)
             ↓
      Commission moves to "available"
             ↓
      Affiliate requests payout
             ↓
      Admin approves & transfers
             ↓
      Commission marked as "paid"
```

---

## Document Version

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 10 January 2026 | Initial backend requirements |
