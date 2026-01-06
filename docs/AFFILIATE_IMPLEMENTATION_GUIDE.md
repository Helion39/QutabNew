# Panduan Implementasi Sistem Affiliate Qutab

## Daftar Isi
1. [Overview](#overview)
2. [Arsitektur Sistem](#arsitektur-sistem)
3. [Tech Stack](#tech-stack)
4. [Fase Implementasi](#fase-implementasi)
5. [Database Schema](#database-schema)
6. [API Endpoints](#api-endpoints)
7. [Frontend Implementation](#frontend-implementation)
8. [Testing](#testing)

---

## Overview

### Apa itu Sistem Affiliate?
Sistem yang memungkinkan partner (affiliator) untuk mempromosikan Qutab dan mendapatkan komisi dari setiap pembelian yang dilakukan melalui link referral mereka.

### Alur Sederhana
```
Affiliator dapat link unik → Bagikan ke customer → Customer klik & beli → Affiliator dapat komisi
```

---

## Arsitektur Sistem

```
┌─────────────────────────────────────────────────────────────────┐
│                        FRONTEND (React)                          │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  │
│  │  Landing Page   │  │ Customer        │  │ Affiliate       │  │
│  │  ?ref=CODE      │  │ Dashboard       │  │ Dashboard       │  │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                        BACKEND (Node.js/Express)                 │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  │
│  │  Auth API       │  │ Affiliate API   │  │ Order API       │  │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                        DATABASE                                  │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  │
│  │  Users          │  │ Affiliates      │  │ Orders          │  │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Tech Stack

### Rekomendasi Stack (Production Grade)

Berdasarkan riset industri, berikut adalah tech stack yang direkomendasikan untuk sistem affiliate e-commerce:

| Layer | Teknologi | Alasan |
|-------|-----------|--------|
| **Frontend** | React + TypeScript | Sudah ada di Qutab |
| **Backend** | **Django + Django REST Framework** | Batteries-included, admin panel gratis, scalable |
| **Database** | PostgreSQL | Industry standard, relational, cocok untuk tracking |
| **Hosting FE** | **Hostinger** | Domain & hosting sudah tersedia |
| **Hosting BE** | Railway / Render (FREE tier) | Backend terpisah, gratis |

### Kenapa Django?

| Fitur | Django | Node.js/Express |
|-------|--------|-----------------|
| Admin Panel | ✅ Gratis & Otomatis | ❌ Harus buat sendiri |
| User Auth | ✅ Built-in | ❌ Harus buat sendiri |
| ORM Database | ✅ Built-in | ⚠️ Perlu library tambahan |
| Email System | ✅ Built-in | ⚠️ Perlu library tambahan |
| Security (CSRF, XSS) | ✅ Built-in | ⚠️ Perlu config manual |
| Learning Curve | ⭐⭐⭐ Medium | ⭐⭐ Easy |

### Biaya (Cost Breakdown)

| Item | Biaya | Keterangan |
|------|-------|------------|
| **Django Framework** | ✅ GRATIS | Open source, selamanya gratis |
| **Python** | ✅ GRATIS | Open source |
| **Django REST Framework** | ✅ GRATIS | Open source |
| **PostgreSQL** | ✅ GRATIS | Open source |
| **Django Admin Panel** | ✅ GRATIS | Sudah termasuk Django |
| **Hosting Backend** | $0 - $10/bulan | Railway/Render punya free tier |
| **Domain** | Sudah punya | Hostinger |

**Total biaya minimum: GRATIS** (menggunakan free tier hosting)

### Arsitektur yang Direkomendasikan

```
┌─────────────────────────────────────────────────────────────────┐
│  FRONTEND (React + TypeScript)                                   │
│  Host: HOSTINGER (domain & hosting Anda)                        │
│  URL: qutab.com (atau domain Anda)                              │
└─────────────────────────────────────────────────────────────────┘
                              │ API calls
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  BACKEND (Django + Django REST Framework)                        │
│                                                                  │
│  ✅ Admin Panel otomatis (kelola affiliator)                    │
│  ✅ User authentication built-in                                 │
│  ✅ REST API untuk frontend                                      │
│  ✅ Email notifications                                          │
│                                                                  │
│  Host: Railway (FREE) atau Render (FREE)                        │
│  URL: api-qutab.up.railway.app (contoh)                         │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  DATABASE (PostgreSQL)                                           │
│  Host: Railway (FREE) - sudah termasuk dengan backend           │
└─────────────────────────────────────────────────────────────────┘
```

### Setup untuk Hostinger

Karena Anda menggunakan **Hostinger Shared Hosting**:

| Komponen | Lokasi | Keterangan |
|----------|--------|------------|
| **Frontend (React)** | Hostinger | Upload build files ke public_html |
| **Domain** | Hostinger | Sudah tersedia |
| **Backend (Django)** | Railway/Render | Terpisah, gratis |
| **Database** | Railway/Render | Termasuk dengan backend |

### Alternatif Stack

| Jika Anda Ingin... | Gunakan |
|--------------------|---------|
| Semua JavaScript | NestJS (TypeScript) + PostgreSQL |
| Hosting di Hostinger Shared | Laravel (PHP) + MySQL |
| Tanpa manage server | Supabase (BaaS) |
| Enterprise-grade | Spring Boot (Java) |

### Perbandingan Backend Frameworks

| Framework | Bahasa | Kelebihan | Digunakan Oleh |
|-----------|--------|-----------|----------------|
| **Django** | Python | Admin panel gratis, cepat develop | Instagram, Pinterest, Spotify |
| **Laravel** | PHP | Works di shared hosting | 9GAG, Deltanet |
| **NestJS** | TypeScript | Same language as frontend | Adidas, Roche |
| **Spring Boot** | Java | Enterprise-grade, sangat scalable | Netflix, Amazon |
| **ASP.NET Core** | C# | High performance, Microsoft | Stack Overflow |

---

## Fase Implementasi

### FASE 1: Frontend Only (Minggu 1)
**Goal:** Capture dan simpan referral code

```javascript
// Tambahkan di App.tsx
useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const refCode = params.get('ref');
  
  if (refCode) {
    localStorage.setItem('affiliate_ref', refCode);
    localStorage.setItem('affiliate_ref_timestamp', Date.now().toString());
  }
}, []);
```

**Testing:**
- Buka `localhost:3030/?ref=TEST123`
- Check localStorage di browser DevTools
- Pastikan code tersimpan

**Deliverables:**
- [ ] Referral code capture dari URL
- [ ] Storage di localStorage
- [ ] Expiry handling (30 hari)

---

### FASE 2: Affiliate Registration UI (Minggu 2)
**Goal:** Form pendaftaran affiliator di website

**Components to create:**
```
src/
├── components/
│   ├── AffiliateSection.tsx      # Section di landing page
│   └── AffiliateRegisterForm.tsx # Form pendaftaran
├── pages/
│   └── AffiliateRegister.tsx     # Halaman full form
```

**Form Fields:**
- Nama Lengkap *
- Email *
- Nomor WhatsApp *
- Kota/Domisili *
- Alasan ingin jadi affiliator
- Platform promosi (checkbox: Instagram, TikTok, YouTube, dll)
- Link sosial media

**Deliverables:**
- [ ] Section "Jadi Affiliator" di landing page
- [ ] Form pendaftaran affiliator
- [ ] Validasi form
- [ ] Submit ke backend (atau Supabase)

---

### FASE 3: Backend Setup (Minggu 3)
**Goal:** API untuk affiliates

**Option A: Custom Backend (Node.js)**
```
backend/
├── src/
│   ├── routes/
│   │   ├── affiliates.js
│   │   ├── orders.js
│   │   └── auth.js
│   ├── models/
│   │   ├── Affiliate.js
│   │   └── Order.js
│   ├── middleware/
│   │   └── auth.js
│   └── index.js
├── package.json
└── .env
```

**Option B: Supabase (Recommended untuk MVP)**
- Buat project di supabase.com
- Setup tables via SQL editor
- Use Supabase client di React

**Deliverables:**
- [ ] Database tables created
- [ ] API endpoints working
- [ ] Auth system ready

---

### FASE 4: Admin Approval System (Minggu 4)
**Goal:** Super Admin bisa approve/reject affiliator

**Flow:**
1. Affiliator submit form → Status: PENDING
2. Admin dapat email notification
3. Admin login ke admin panel
4. Review & Approve/Reject
5. Affiliator dapat email hasil

**Deliverables:**
- [ ] Admin panel untuk review
- [ ] Email notification system
- [ ] Approval workflow

---

### FASE 5: Affiliate Dashboard (Minggu 5)
**Goal:** Dashboard untuk affiliator yang sudah approved

**Dashboard Features:**
```
┌─────────────────────────────────────────────────────────┐
│  DASHBOARD AFFILIATOR                                    │
├─────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │ Total Klik  │  │ Total Order │  │ Komisi      │     │
│  │     150     │  │     25      │  │ Rp 2.500.000│     │
│  └─────────────┘  └─────────────┘  └─────────────┘     │
│                                                          │
│  📎 Link Referral Anda:                                 │
│  ┌────────────────────────────────────────────┐         │
│  │ https://qutab.com/?ref=ABDUL123    [COPY]  │         │
│  └────────────────────────────────────────────┘         │
│                                                          │
│  📊 Daftar Pelanggan Referral:                          │
│  ┌────────────────────────────────────────────┐         │
│  │ Nama    │ Produk   │ Tanggal  │ Status     │         │
│  │ Budi    │ Kambing  │ 05/01/26 │ ✅ Paid    │         │
│  │ Siti    │ Sapi 1/7 │ 04/01/26 │ ⏳ Pending │         │
│  └────────────────────────────────────────────┘         │
└─────────────────────────────────────────────────────────┘
```

**Deliverables:**
- [ ] Affiliate login page
- [ ] Dashboard with stats
- [ ] Referral link display + copy button
- [ ] Customer list table

---

### FASE 6: Order Tracking Integration (Minggu 6)
**Goal:** Link orders ke affiliator

**Implementation:**
```javascript
// Saat customer checkout
const affiliateRef = localStorage.getItem('affiliate_ref');

const orderData = {
  customer_name: "Budi",
  product: "Kambing",
  amount: 1899000,
  affiliate_code: affiliateRef || null,  // ← Link ke affiliate
  // ... other order data
};

await submitOrder(orderData);
```

**Deliverables:**
- [ ] Order includes affiliate_code
- [ ] Backend links order to affiliate
- [ ] Commission calculated

---

## Database Schema

### Tables

```sql
-- AFFILIATES TABLE
CREATE TABLE affiliates (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20) NOT NULL,
  city VARCHAR(100),
  referral_code VARCHAR(20) UNIQUE NOT NULL,
  platform TEXT[],
  social_links JSONB,
  reason TEXT,
  status VARCHAR(20) DEFAULT 'pending', -- pending, approved, rejected
  approved_at TIMESTAMP,
  approved_by UUID REFERENCES users(id),
  created_at TIMESTAMP DEFAULT NOW()
);

-- REFERRAL CLICKS TABLE (Optional - untuk tracking clicks)
CREATE TABLE referral_clicks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  affiliate_id UUID REFERENCES affiliates(id),
  ip_address VARCHAR(45),
  user_agent TEXT,
  clicked_at TIMESTAMP DEFAULT NOW()
);

-- ORDERS TABLE (tambahkan kolom affiliate)
ALTER TABLE orders
ADD COLUMN affiliate_code VARCHAR(20),
ADD COLUMN affiliate_id UUID REFERENCES affiliates(id),
ADD COLUMN commission_amount DECIMAL(12,2) DEFAULT 0,
ADD COLUMN commission_status VARCHAR(20) DEFAULT 'pending';
```

---

## API Endpoints

### Affiliate Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/affiliates/register` | Daftar jadi affiliator |
| GET | `/api/affiliates/me` | Get current affiliate data |
| GET | `/api/affiliates/stats` | Get affiliate statistics |
| GET | `/api/affiliates/referrals` | Get list of referrals |
| GET | `/api/affiliates/link` | Get referral link |

### Admin Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/admin/affiliates` | List all affiliates |
| GET | `/api/admin/affiliates/pending` | List pending applications |
| PUT | `/api/admin/affiliates/:id/approve` | Approve affiliate |
| PUT | `/api/admin/affiliates/:id/reject` | Reject affiliate |

### Public Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/ref/:code` | Validate referral code |
| POST | `/api/track-click` | Track referral link click |

---

## Frontend Implementation

### File Structure
```
src/
├── components/
│   ├── affiliate/
│   │   ├── AffiliateSection.tsx      # Landing page section
│   │   ├── AffiliateRegisterForm.tsx
│   │   ├── AffiliateDashboard.tsx
│   │   ├── AffiliateStats.tsx
│   │   ├── ReferralLink.tsx
│   │   └── ReferralTable.tsx
│   └── ...
├── pages/
│   ├── AffiliateRegister.tsx
│   ├── AffiliateLogin.tsx
│   └── AffiliateDashboard.tsx
├── hooks/
│   └── useReferral.ts               # Hook for referral tracking
├── services/
│   └── affiliateService.ts          # API calls
└── utils/
    └── referralStorage.ts           # localStorage helpers
```

### Key Hook: useReferral
```typescript
// src/hooks/useReferral.ts
import { useEffect } from 'react';

export function useReferral() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const refCode = params.get('ref');
    
    if (refCode) {
      // Store referral code
      localStorage.setItem('affiliate_ref', refCode);
      localStorage.setItem('affiliate_ref_time', Date.now().toString());
      
      // Optional: Track click to backend
      fetch('/api/track-click', {
        method: 'POST',
        body: JSON.stringify({ code: refCode }),
      });
    }
  }, []);
  
  const getReferralCode = () => {
    const code = localStorage.getItem('affiliate_ref');
    const timestamp = localStorage.getItem('affiliate_ref_time');
    
    // Check if expired (30 days)
    if (timestamp) {
      const thirtyDays = 30 * 24 * 60 * 60 * 1000;
      if (Date.now() - parseInt(timestamp) > thirtyDays) {
        localStorage.removeItem('affiliate_ref');
        localStorage.removeItem('affiliate_ref_time');
        return null;
      }
    }
    
    return code;
  };
  
  return { getReferralCode };
}
```

---

## Testing

### Local Testing

1. **Test Referral Capture:**
   ```
   http://localhost:3030/?ref=TEST123
   ```
   - Open DevTools → Application → Local Storage
   - Verify `affiliate_ref` = `TEST123`

2. **Test Registration Form:**
   - Fill all required fields
   - Submit and check database

3. **Test Order Link:**
   - Add `?ref=CODE` to URL
   - Make test purchase
   - Verify order has `affiliate_code`

### Test Scenarios

| Scenario | Expected Result |
|----------|-----------------|
| Visit with `?ref=CODE` | Code stored in localStorage |
| Visit without `?ref` | No code stored |
| Purchase with stored code | Order linked to affiliate |
| Code expired (>30 days) | Code removed, order not linked |
| Invalid code | Order proceeds, no commission |

---

## Checklist Summary

### Week 1-2: Foundation
- [ ] Implement referral code capture (useReferral hook)
- [ ] Add "Jadi Affiliator" section on landing page
- [ ] Create registration form

### Week 3-4: Backend
- [ ] Setup database (Supabase or custom)
- [ ] Create affiliate tables
- [ ] Implement registration API
- [ ] Setup admin approval workflow

### Week 5-6: Dashboards
- [ ] Affiliate dashboard
- [ ] Admin panel for approvals
- [ ] Order tracking integration

### Week 7+: Polish
- [ ] Email notifications
- [ ] Commission calculation
- [ ] Reporting & analytics

---

## Resources

- [Supabase Documentation](https://supabase.com/docs)
- [React Router](https://reactrouter.com/)
- [Zendit Payment Integration](https://zendit.com/docs)

---

## Questions?

Jika ada pertanyaan tentang implementasi, silakan tanyakan!
