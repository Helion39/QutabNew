# Qutab Affiliate Dashboard - Feature Review

This document lists all possible features for the affiliate dashboard.
Mark each feature as KEEP, SKIP, or LATER based on what's realistic for Qutab.

**Legend:**
- ✅ KEEP - Essential, implement now
- ⏳ LATER - Nice to have, implement in future
- ❌ SKIP - Not needed for Qutab

---

## 1. BANNER DAN LINK (Banner and Link)

**Purpose:** Central hub for affiliates to access promotional materials and unique tracking links.

| Feature | Recommendation | Notes |
|---------|----------------|-------|
| Unique affiliate referral link with Copy button | | |
| Deep link generator to create links to specific product pages | | Qutab has single landing page |
| Search/filter functionality to find specific links | | Only 1 link needed |
| Link preview showing the destination URL (URL Target) | | |
| Embed code (Kode Sumber) for placing links on websites | | |
| Banner images in various sizes for promotional use | | Need to create banners |
| Pre-made social media graphics | | Need to design graphics |
| Product cards with title, affiliate link, and target URL | | Only 1 product |
| Click tracking statistics per link | | |
| Option to shorten or customize link appearance | | |

---

## 2. STATISTIK (Statistics)

**Purpose:** Display affiliate performance metrics and analytics.

| Feature | Recommendation | Notes |
|---------|----------------|-------|
| Total Klik (Total Clicks) | | Essential |
| Total Konversi (Total Conversions) | | Essential |
| Conversion Rate (click to sale %) | | |
| Total Komisi (Total Commission) | | Essential |
| Earnings Per Click (EPC) | | Advanced metric |
| Grafik performance over time (charts) | | |
| Traffic source breakdown | | Complex tracking needed |
| Top performing links or campaigns | | Only 1 campaign |
| Date range filters | | |
| Comparison with previous periods | | |
| Real-time or near real-time data updates | | Backend complexity |

---

## 3. REKENING PEMBAYARAN KOMISI (Bank Account)

**Purpose:** Allow affiliates to input bank account for payouts.

| Feature | Recommendation | Notes |
|---------|----------------|-------|
| Nama Bank (Bank Name) - dropdown or text | | |
| Nomor Rekening (Account Number) | | |
| Nama Pemilik Rekening (Account Holder Name) | | Must match KTP |
| Cabang Bank (Bank Branch) | | Optional field |
| Bukti Kepemilikan Rekening (screenshot proof) | | Optional upload |
| Note that name must match ID | | |
| Simpan Rekening (Save) button | | |
| Status indicator (verified/unverified) | | |
| Alternative payment (OVO, Dana, ShopeePay) | | |

---

## 4. PEMBAYARAN KOMISI (Commission Payment/Payout)

**Purpose:** Display payout history and allow withdrawal requests.

| Feature | Recommendation | Notes |
|---------|----------------|-------|
| Saldo Tersedia (Available Balance) | | Essential |
| Pending Komisi (Pending Commission) | | |
| Minimum Payout threshold display | | e.g., Rp 100.000 |
| Request Payout button | | |
| Payout History table: | | |
| - Tanggal (Date) | | |
| - Jumlah (Amount) | | |
| - Metode (Method) | | |
| - Status (Pending/Dibayar/Processing) | | |
| - Keterangan (Notes/Transaction ID) | | |
| Payout schedule information | | |
| Holding period explanation | | e.g., 30-day hold |

---

## 5. LEADS ANDA (Your Referrals)

**Purpose:** Display list of customers who purchased via referral link.

| Feature | Recommendation | Notes |
|---------|----------------|-------|
| Total Leads count | | |
| Referral table: | | |
| - Nama (Customer name - masked) | | Privacy |
| - Email (Customer email - masked) | | Privacy |
| - Produk (Product purchased) | | |
| - Tanggal (Purchase date) | | |
| - Nilai Order (Order value) | | |
| - Komisi (Commission earned) | | |
| - Status (Pending/Confirmed/Paid/Refunded) | | |
| Filter by date range | | |
| Filter by status | | |
| Search functionality | | |
| Export to CSV or Excel | | |

---

## 6. HELPDESK (Support)

**Purpose:** Channel for affiliates to get assistance.

| Feature | Recommendation | Notes |
|---------|----------------|-------|
| Submit Ticket form: | | |
| - Subject | | |
| - Category/Type dropdown | | |
| - Message/Description | | |
| - Attachment upload | | |
| Ticket History: | | |
| - Ticket ID | | |
| - Subject | | |
| - Status (Open/In Progress/Closed) | | |
| - Date submitted | | |
| - Last response date | | |
| FAQ section | | |
| Contact info (email, WhatsApp) | | Just show contact |
| Response time expectations | | |
| Link to documentation/guides | | |

---

## 7. PROFIL MEMBER (Member Profile)

**Purpose:** Manage personal information and account settings.

| Feature | Recommendation | Notes |
|---------|----------------|-------|
| Nama Depan & Belakang | | |
| Alamat Email (read-only) | | |
| No. WhatsApp | | |
| Link Instagram | | |
| Link TikTok | | |
| Link YouTube | | |
| Foto Profil (profile photo upload) | | |
| Kata Sandi (Ubah Password button) | | |
| NPWP (Tax ID) | | For Indonesian tax |
| Notification preferences | | |
| Account verification status | | |
| Tanggal Bergabung (Join date) | | |

---

## 8. KATA KUNCI (Keywords) - Advanced

**Purpose:** Track which keywords/tags drive conversions.

| Feature | Recommendation | Notes |
|---------|----------------|-------|
| List of tracked keywords/tags | | Complex tracking |
| Performance metrics per keyword | | |
| Custom tracking tags (Sub IDs) | | |
| Search volume and conversion data | | |

---

## 9. AMBIL KUPON DISKON (Discount Coupons)

**Purpose:** Provide unique discount codes for affiliates to share.

| Feature | Recommendation | Notes |
|---------|----------------|-------|
| Unique affiliate coupon code | | e.g., "AFFNAME10" |
| Discount value (% or fixed) | | |
| Validity period | | |
| Usage count and limit | | |
| Copy button | | |
| Request personalized coupon codes | | |

---

## 10. TAUTAN BONUS AFILIASI (Sub-Affiliate/MLM)

**Purpose:** Multi-tier affiliate program for recruiting sub-affiliates.

| Feature | Recommendation | Notes |
|---------|----------------|-------|
| Referral link for recruiting affiliates | | MLM-style |
| List of recruited sub-affiliates | | |
| Commission from sub-affiliate sales | | |
| Sub-affiliate performance metrics | | |
| Tier/level bonus information | | |

---

## Summary Decision Table

| Section | Keep? | Priority | Notes |
|---------|-------|----------|-------|
| 1. Banner dan Link | | | |
| 2. Statistik | | | |
| 3. Rekening Pembayaran | | | |
| 4. Pembayaran Komisi | | | |
| 5. Leads Anda | | | |
| 6. Helpdesk | | | |
| 7. Profil Member | | | |
| 8. Kata Kunci | | | |
| 9. Kupon Diskon | | | |
| 10. Sub-Affiliate | | | |

---

## Notes

_Add your decisions and notes here after review._
