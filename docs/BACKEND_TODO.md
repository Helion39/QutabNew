# Qutab Backend Development - TODO Checklist

**Project:** Qutab - Qurban Tanpa Batas  
**Last Updated:** 10 January 2026

---

## Overview

This document outlines all backend development tasks for both Customer and Affiliate systems.

**Priority Legend:**
- 🔴 **P0** - Critical (Must have for launch)
- 🟠 **P1** - High (Important for core functionality)
- 🟡 **P2** - Medium (Enhances user experience)
- 🟢 **P3** - Low (Nice to have)

---

# CUSTOMER SYSTEM

## 1. Authentication

| Task | Priority | Status | Notes |
|------|----------|--------|-------|
| Customer registration API | 🔴 P0 | ⬜ TODO | name, email, phone, password |
| Customer login API | 🔴 P0 | ⬜ TODO | JWT token generation |
| Password hashing | 🔴 P0 | ⬜ TODO | Use bcrypt |
| Email verification | 🟠 P1 | ⬜ TODO | Send verification email |
| Forgot password API | 🟠 P1 | ⬜ TODO | Send reset link |
| Reset password API | 🟠 P1 | ⬜ TODO | Token validation |
| Logout API | 🟡 P2 | ⬜ TODO | Invalidate token |
| Session management | 🟡 P2 | ⬜ TODO | Token expiry handling |

---

## 2. Products

| Task | Priority | Status | Notes |
|------|----------|--------|-------|
| Get all products API | 🔴 P0 | ⬜ TODO | List all qurban packages |
| Get product by ID | 🔴 P0 | ⬜ TODO | Single product details |
| Product categories | 🔴 P0 | ⬜ TODO | Sapi, Kambing, Domba |
| Product stock/availability | 🟠 P1 | ⬜ TODO | Track available units |
| Product images storage | 🟠 P1 | ⬜ TODO | Image upload/CDN |

---

## 3. Orders

| Task | Priority | Status | Notes |
|------|----------|--------|-------|
| Create order API | 🔴 P0 | ⬜ TODO | Place new order |
| Get customer orders | 🔴 P0 | ⬜ TODO | Order history |
| Get order by ID | 🔴 P0 | ⬜ TODO | Order details |
| Order status updates | 🔴 P0 | ⬜ TODO | pending, paid, processing, completed |
| Order tracking | 🟠 P1 | ⬜ TODO | Distribution status |
| Recipient info storage | 🔴 P0 | ⬜ TODO | Name, location for distribution |
| Order cancellation | 🟠 P1 | ⬜ TODO | Before payment only |
| Order invoice/receipt | 🟡 P2 | ⬜ TODO | PDF generation |

---

## 4. Payments

| Task | Priority | Status | Notes |
|------|----------|--------|-------|
| Zendit payment integration | 🔴 P0 | ⬜ TODO | Payment gateway |
| Create payment request | 🔴 P0 | ⬜ TODO | Generate payment link |
| Payment webhook handler | 🔴 P0 | ⬜ TODO | Receive payment status |
| Payment status check | 🟠 P1 | ⬜ TODO | Query payment status |
| Payment expiry handling | 🟠 P1 | ⬜ TODO | Cancel expired payments |
| Refund processing | 🟡 P2 | ⬜ TODO | Manual admin trigger |

---

## 5. Customer Profile

| Task | Priority | Status | Notes |
|------|----------|--------|-------|
| Get profile API | 🔴 P0 | ⬜ TODO | Return customer data |
| Update profile API | 🟠 P1 | ⬜ TODO | Update name, phone |
| Change password API | 🟠 P1 | ⬜ TODO | Verify old password |
| Delete account | 🟢 P3 | ⬜ TODO | Account deletion (GDPR) |

---

# AFFILIATE SYSTEM

## 6. Affiliate Authentication

| Task | Priority | Status | Notes |
|------|----------|--------|-------|
| Affiliate registration API | 🔴 P0 | ⬜ TODO | Submit application |
| Store social media links | 🔴 P0 | ⬜ TODO | Instagram, TikTok, etc. |
| Affiliate login API | 🔴 P0 | ⬜ TODO | Separate from customer |
| Application status check | 🔴 P0 | ⬜ TODO | pending, approved, rejected |
| Generate affiliate code | 🔴 P0 | ⬜ TODO | On approval (e.g., XK7mP2q) |
| Logout API | 🟡 P2 | ⬜ TODO | End session |

---

## 7. Affiliate Admin (Application Review)

| Task | Priority | Status | Notes |
|------|----------|--------|-------|
| List pending applications | 🔴 P0 | ⬜ TODO | Admin panel |
| View application details | 🔴 P0 | ⬜ TODO | Full info |
| Approve application | 🔴 P0 | ⬜ TODO | Generate code, send email |
| Reject application | 🔴 P0 | ⬜ TODO | Store rejection reason |
| Assign custom affiliate code | 🟡 P2 | ⬜ TODO | Optional personalization |

---

## 8. Referral Link & Tracking

| Task | Priority | Status | Notes |
|------|----------|--------|-------|
| Get affiliate referral link | 🔴 P0 | ⬜ TODO | Return unique URL |
| Track link clicks | 🔴 P0 | ⬜ TODO | Log to referral_clicks |
| Link click redirect | 🔴 P0 | ⬜ TODO | /r/{code} → landing page |
| Store referral code in session | 🔴 P0 | ⬜ TODO | Cookie for attribution |
| Get promotional materials | 🟠 P1 | ⬜ TODO | Banners, graphics list |

---

## 9. Statistics & Dashboard

| Task | Priority | Status | Notes |
|------|----------|--------|-------|
| Dashboard summary API | 🔴 P0 | ⬜ TODO | clicks, sales, commission |
| Statistics by date range | 🔴 P0 | ⬜ TODO | today, 7d, 30d, custom |
| Chart data API | 🟠 P1 | ⬜ TODO | Daily breakdown |
| Recent activity API | 🟠 P1 | ⬜ TODO | Latest transactions |
| **⚠️ Create daily_stats table** | 🔴 P0 | ⬜ TODO | Performance optimization |
| **⚠️ Add database indexes** | 🔴 P0 | ⬜ TODO | See BACKEND_IMPLEMENTATION_NOTES.md |

---

## 10. Bank Account (Rekening)

| Task | Priority | Status | Notes |
|------|----------|--------|-------|
| Save bank account API | 🔴 P0 | ⬜ TODO | bank, account#, holder name |
| Get bank account API | 🔴 P0 | ⬜ TODO | Return saved info |
| Update bank account | 🟠 P1 | ⬜ TODO | Modify details |
| KTP upload API | 🔴 P0 | ⬜ TODO | Image upload for verification |
| KTP file storage | 🔴 P0 | ⬜ TODO | Secure storage |
| Verification status | 🔴 P0 | ⬜ TODO | pending, verified, rejected |

---

## 11. Commissions

| Task | Priority | Status | Notes |
|------|----------|--------|-------|
| Calculate commission on sale | 🔴 P0 | ⬜ TODO | On payment webhook |
| Create commission record | 🔴 P0 | ⬜ TODO | status: pending |
| Get available balance | 🔴 P0 | ⬜ TODO | **⚠️ Calculate dynamically** |
| Get pending balance | 🔴 P0 | ⬜ TODO | In holding period |
| **⚠️ 30-day maturation cron** | 🔴 P0 | ⬜ TODO | Move pending → available |
| **⚠️ Void commission on refund** | 🔴 P0 | ⬜ TODO | Cancel commission if order cancelled |

---

## 12. Payouts

| Task | Priority | Status | Notes |
|------|----------|--------|-------|
| Request payout API | 🔴 P0 | ⬜ TODO | **⚠️ Use DB transactions** |
| Get payout history | 🔴 P0 | ⬜ TODO | List past payouts |
| Check payout eligibility | 🔴 P0 | ⬜ TODO | Min amount, verified account |
| Admin: List payout requests | 🔴 P0 | ⬜ TODO | Admin panel |
| Admin: Process payout | 🔴 P0 | ⬜ TODO | Mark as paid |
| Payout notification | 🟡 P2 | ⬜ TODO | Email/WhatsApp notification |

---

## 13. Referrals (Leads)

| Task | Priority | Status | Notes |
|------|----------|--------|-------|
| Get referred customers | 🔴 P0 | ⬜ TODO | List with masking |
| Filter by status | 🟠 P1 | ⬜ TODO | pending, confirmed, paid |
| Pagination | 🟠 P1 | ⬜ TODO | For large lists |
| Total referrals count | 🔴 P0 | ⬜ TODO | Summary number |

---

## 14. Discount Coupons

| Task | Priority | Status | Notes |
|------|----------|--------|-------|
| Get affiliate coupons | 🔴 P0 | ⬜ TODO | List assigned codes |
| Validate coupon at checkout | 🔴 P0 | ⬜ TODO | Check validity |
| Apply coupon to order | 🔴 P0 | ⬜ TODO | Calculate discount |
| Track coupon usage | 🟠 P1 | ⬜ TODO | Usage count |
| Admin: Assign coupon | 🔴 P0 | ⬜ TODO | Create for affiliate |
| Admin: Deactivate coupon | 🟡 P2 | ⬜ TODO | Disable code |

---

## 15. Helpdesk

| Task | Priority | Status | Notes |
|------|----------|--------|-------|
| Get FAQ list | 🟠 P1 | ⬜ TODO | Q&A content |
| Get support contact info | 🟠 P1 | ⬜ TODO | WhatsApp, email |
| WhatsApp link generator | 🟢 P3 | ⬜ TODO | Pre-filled message |

---

## 16. Affiliate Profile

| Task | Priority | Status | Notes |
|------|----------|--------|-------|
| Get profile API | 🔴 P0 | ⬜ TODO | Return affiliate data |
| Update profile API | 🟠 P1 | ⬜ TODO | Name, phone, social links |
| Upload profile photo | 🟡 P2 | ⬜ TODO | Image upload |
| Change password | 🟠 P1 | ⬜ TODO | Verify old password |

---

# SHARED / INFRASTRUCTURE

## 17. Database

| Task | Priority | Status | Notes |
|------|----------|--------|-------|
| Design database schema | 🔴 P0 | ⬜ TODO | All tables |
| Create users table | 🔴 P0 | ⬜ TODO | Customers |
| Create affiliates table | 🔴 P0 | ⬜ TODO | Affiliate accounts |
| Create orders table | 🔴 P0 | ⬜ TODO | Customer orders |
| Create products table | 🔴 P0 | ⬜ TODO | Qurban packages |
| Create referral_clicks table | 🔴 P0 | ⬜ TODO | Click tracking |
| Create referrals table | 🔴 P0 | ⬜ TODO | Attributed sales |
| Create commissions table | 🔴 P0 | ⬜ TODO | Earnings |
| Create payouts table | 🔴 P0 | ⬜ TODO | Withdrawal history |
| Create bank_accounts table | 🔴 P0 | ⬜ TODO | Payment info |
| Create coupons table | 🔴 P0 | ⬜ TODO | Discount codes |
| Create daily_stats table | 🔴 P0 | ⬜ TODO | **Performance** |
| **⚠️ Add all indexes** | 🔴 P0 | ⬜ TODO | See BACKEND_IMPLEMENTATION_NOTES.md |

---

## 18. Security

| Task | Priority | Status | Notes |
|------|----------|--------|-------|
| JWT authentication | 🔴 P0 | ⬜ TODO | Token-based auth |
| Password hashing (bcrypt) | 🔴 P0 | ⬜ TODO | Never store plain text |
| Rate limiting | 🟠 P1 | ⬜ TODO | Prevent abuse |
| Input validation | 🔴 P0 | ⬜ TODO | Sanitize all inputs |
| SQL injection prevention | 🔴 P0 | ⬜ TODO | Parameterized queries |
| XSS prevention | 🔴 P0 | ⬜ TODO | Escape outputs |
| CORS configuration | 🔴 P0 | ⬜ TODO | Allow frontend domain |
| HTTPS enforcement | 🔴 P0 | ⬜ TODO | SSL certificate |
| KTP file encryption | 🟠 P1 | ⬜ TODO | Secure sensitive docs |

---

## 19. Cron Jobs

| Task | Priority | Status | Notes |
|------|----------|--------|-------|
| Commission maturation | 🔴 P0 | ⬜ TODO | Daily, 30-day rule |
| Daily stats aggregation | 🟠 P1 | ⬜ TODO | Hourly |
| Payment expiry check | 🟠 P1 | ⬜ TODO | Cancel expired orders |
| Old clicks cleanup | 🟢 P3 | ⬜ TODO | Archive 90+ days |

---

## 20. Notifications

| Task | Priority | Status | Notes |
|------|----------|--------|-------|
| Email service setup | 🔴 P0 | ⬜ TODO | SMTP or API |
| Registration confirmation | 🟠 P1 | ⬜ TODO | Customer & affiliate |
| Order confirmation email | 🔴 P0 | ⬜ TODO | After payment |
| Affiliate approval email | 🟠 P1 | ⬜ TODO | With referral code |
| Payout processed email | 🟡 P2 | ⬜ TODO | Confirmation |
| WhatsApp notifications | 🟢 P3 | ⬜ TODO | Optional integration |

---

## 21. File Storage

| Task | Priority | Status | Notes |
|------|----------|--------|-------|
| Setup file storage | 🔴 P0 | ⬜ TODO | Local or cloud (S3) |
| KTP image upload | 🔴 P0 | ⬜ TODO | Secure storage |
| Profile photo upload | 🟡 P2 | ⬜ TODO | Image resizing |
| Product images | 🟠 P1 | ⬜ TODO | CDN delivery |
| Banner/graphic storage | 🟠 P1 | ⬜ TODO | Promotional materials |

---

# ADMIN PANEL

## 22. Admin Features

| Task | Priority | Status | Notes |
|------|----------|--------|-------|
| Admin authentication | 🔴 P0 | ⬜ TODO | Separate login |
| Dashboard overview | 🟠 P1 | ⬜ TODO | Sales, affiliates summary |
| Manage affiliates | 🔴 P0 | ⬜ TODO | Approve/reject/view |
| Manage orders | 🔴 P0 | ⬜ TODO | View/update status |
| Process payouts | 🔴 P0 | ⬜ TODO | Approve withdrawals |
| Manage coupons | 🔴 P0 | ⬜ TODO | Create/deactivate |
| Manage products | 🟠 P1 | ⬜ TODO | Add/edit products |
| View reports | 🟡 P2 | ⬜ TODO | Sales analytics |

---

# ⚠️ CRITICAL IMPLEMENTATION NOTES

Before starting backend development, read:
- **`docs/BACKEND_IMPLEMENTATION_NOTES.md`** - Contains critical fixes for:
  1. Race condition in balance/payouts (use DB transactions)
  2. Performance optimization (indexes, summary tables)
  3. 30-day holding period logic (void on refund)
  4. Self-referral fraud prevention

---

## Summary

| Category | Total Tasks | P0 Critical |
|----------|-------------|-------------|
| Customer Auth | 8 | 3 |
| Products | 5 | 3 |
| Orders | 8 | 5 |
| Payments | 6 | 4 |
| Customer Profile | 4 | 1 |
| Affiliate Auth | 6 | 5 |
| Affiliate Admin | 5 | 4 |
| Referral Tracking | 5 | 4 |
| Statistics | 6 | 4 |
| Bank Account | 6 | 5 |
| Commissions | 6 | 6 |
| Payouts | 6 | 5 |
| Referrals | 4 | 2 |
| Coupons | 6 | 4 |
| Helpdesk | 3 | 0 |
| Affiliate Profile | 4 | 1 |
| Database | 13 | 13 |
| Security | 9 | 7 |
| Cron Jobs | 4 | 1 |
| Notifications | 6 | 2 |
| File Storage | 5 | 2 |
| Admin Panel | 8 | 5 |

**Total: ~128 tasks | ~86 P0 Critical**

---

## Document Version

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 10 January 2026 | Initial TODO list |
