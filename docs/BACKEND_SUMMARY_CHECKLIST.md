# Qutab Backend - Summary Checklist

**Full plan:** `BACKEND_IMPLEMENTATION_PLAN.md`

---

## Phase 1: Foundation

- [x] Django project setup
- [x] SQLite database (PostgreSQL ready)
- [x] User model with roles
- [x] Customer auth (register/login)
- [x] Affiliate auth (register/login/status)
- [x] JWT authentication
- [x] CORS setup

## Phase 2: Products & Orders

- [x] Products model & API
- [x] Orders model & API
- [x] Order tracking
- [x] Wishlist

## Phase 3: Payments

- [x] Zendit integration (code ready, registration pending)
- [x] Create payment API
- [x] Payment webhook
- [x] Order status update on payment

## Phase 4: Affiliate Core

- [x] Affiliates model
- [x] Application submit/status API
- [x] Referral link generation
- [x] Click tracking (/r/{code})
- [x] Order attribution

## Phase 5: Commissions

- [x] Commissions model
- [x] Create commission on sale
- [x] Dynamic balance calculation
- [x] Commission voiding on refund
- [x] 30-day maturation cron

## Phase 6: Payouts

- [x] Bank accounts model & API
- [x] KTP upload
- [x] Payout request API (with locking)
- [x] Payout history API
- [x] Admin payout processing

## Phase 7: Dashboard & Statistics

- [ ] daily_stats table
- [ ] Stats aggregation cron
- [ ] Dashboard summary API
- [ ] Statistics by period API
- [ ] Database indexes

## Phase 8: Admin (Django Admin)

- [ ] Affiliate application review
- [ ] Payout processing
- [ ] Order management
- [ ] Coupon management

## Phase 9: Supporting Features

- [ ] Coupons model & API
- [ ] Coupon validation at checkout
- [ ] Leads/Referrals list API
- [ ] Email notifications
- [ ] File storage

## Cron Jobs

- [ ] Commission maturation (daily)
- [ ] Stats aggregation (hourly)
- [ ] Payment expiry check
- [ ] Old clicks cleanup (weekly)

---

**Last Updated:** 10 January 2026
