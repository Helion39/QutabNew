# Affiliate System - Complete Step-by-Step Checklist

## Quick Answer: What to Start First?

```
1️⃣ FRONTEND FIRST (Week 1-2)
   - Referral capture
   - UI components
   - Can test locally without backend

2️⃣ BACKEND SECOND (Week 3-4)
   - Django setup
   - Database
   - API endpoints

3️⃣ INTEGRATION LAST (Week 5-6)
   - Connect frontend to backend
   - Testing
   - Deployment
```

---

## 📋 KEPUTUSAN YANG SUDAH DIBUAT

### 1️⃣ Format Referral Link: PATH SEGMENT ✅

```
Format:   https://qutab.id/r/{RANDOM_CODE}
Contoh:   https://qutab.id/r/XK7mP2q
```

| Kriteria | Query Parameter `?ref=` | Path Segment `/r/` |
|----------|------------------------|-------------------|
| **Keamanan** | ⚠️ Visible di logs | ✅ Lebih aman |
| **Manipulasi** | ⚠️ Mudah diubah | ✅ Lebih sulit |
| **SEO** | ⚠️ Bisa duplicate | ✅ Cleaner URLs |

- ❌ TIDAK menggunakan nama affiliator di URL
- ✅ Random code 7+ karakter yang di-map ke database

---

### 2️⃣ Email Service: Gmail SMTP ✅

| Phase | Service | Why |
|-------|---------|-----|
| **Development** | Gmail SMTP | Free, easy setup |
| **Production** | Resend / Hostinger Email | Professional domain |

**Setup Gmail SMTP:**
1. Enable 2FA on Gmail
2. Create App Password (Google Account → Security → App passwords)
3. Store in `.env` file (NEVER commit!)

```python
# .env
EMAIL_HOST_PASSWORD=xxxx-xxxx-xxxx-xxxx
```

---

### 3️⃣ Registration Flow: User Buat Password Sendiri ✅

```
1. User isi form (email, password, nama, WA, link sosmed)
2. Akun dibuat dengan status PENDING
3. User lihat halaman "Menunggu Persetujuan"
4. Admin terima email notifikasi
5. Admin review (cek link sosmed)
6. Admin approve/reject
7. User terima email hasil
8. Jika approved → Login dengan password yang sudah dibuat
```

---

### 4️⃣ Verifikasi Influencer: Manual Review ✅

Admin melakukan:
- [ ] Cek link Instagram/TikTok valid
- [ ] Cek akun aktif dan tidak private
- [ ] Cek followers/engagement masuk akal
- [ ] Opsional: DM untuk konfirmasi identitas

---

### 5️⃣ Commission Model: Per Successful Checkout ✅

```
Commission = Based on number of customers who successfully checkout
             using the affiliate's referral link
             (NOT based on purchase amount)
```

Example:
- Customer A buys Kambing via ref link → Affiliate gets 1 commission
- Customer B buys Sapi via ref link → Affiliate gets 1 commission
- Commission amount per checkout: TBD (Rp 25.000 / Rp 50.000?)

---

### 6️⃣ Payment Integration: Zendit ✅

```
Payment flow:
1. Customer clicks affiliate link → /r/CODE
2. Code stored in localStorage
3. Customer proceeds to checkout
4. Payment via Zendit
5. On successful payment → Order linked to affiliate
6. Commission credited to affiliate dashboard
```

---

### 7️⃣ Email: Business Email (Later) ✅

```
Development: Gmail SMTP (your personal Gmail)
Production:  Business email (e.g., noreply@qutab.id via Hostinger)
```

---

## ❓ STILL TO BE DECIDED

| Item | Options | Status |
|------|---------|--------|
| **Commission amount** | Rp 25.000 / Rp 50.000 per checkout? | ❓ |
| **Cookie duration** | 7 days / 30 days / 90 days? | ❓ |
| **Minimum payout** | Rp 100.000 / Rp 250.000? | ❓ |
| **Payout method** | Bank transfer / e-wallet? | ❓ |

## Prerequisites - Install These First

### Your Computer Needs:

| Software | Check | Install Command / Link |
|----------|-------|------------------------|
| **Node.js** | ✅ Already have | (for React frontend) |
| **Python 3.10+** | ⬜ Check | `python --version` |
| **pip** | ⬜ Check | Comes with Python |
| **Git** | ✅ Already have | - |
| **VS Code** | ✅ Already have | - |

### Install Python (if not installed):
```powershell
# Check if Python is installed
python --version

# If not installed, download from:
# https://www.python.org/downloads/
# ⚠️ Make sure to check "Add Python to PATH" during installation
```

### VS Code Extensions (Recommended):
- [ ] Python (Microsoft)
- [ ] Pylance
- [ ] Django (Baptiste Darthenay)

---

## PHASE 1: FRONTEND (Week 1-2)

### Week 1: Referral Code Capture

#### 1.1 Create Referral Route Component
- [ ] Create file: `src/pages/ReferralRedirect.tsx`
```typescript
// Handles /r/:code route and redirects to landing page
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export function ReferralRedirect() {
  const { code } = useParams<{ code: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (code) {
      localStorage.setItem('affiliate_ref', code);
      localStorage.setItem('affiliate_ref_time', Date.now().toString());
      console.log('Referral code saved:', code);
    }
    // Redirect to landing page
    navigate('/', { replace: true });
  }, [code, navigate]);

  return <div>Redirecting...</div>;
}
```

#### 1.2 Create useReferral Hook
- [ ] Create file: `src/hooks/useReferral.ts`
```typescript
export function useReferral() {
  const getReferralCode = (): string | null => {
    const code = localStorage.getItem('affiliate_ref');
    const timestamp = localStorage.getItem('affiliate_ref_time');
    
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

#### 1.3 Add Route to App.tsx
- [ ] Add route in `App.tsx`:
```typescript
import { ReferralRedirect } from './pages/ReferralRedirect';

// In your routes:
<Route path="/r/:code" element={<ReferralRedirect />} />
```

#### 1.4 Test Referral Capture
- [ ] Open: `http://localhost:3030/r/TEST123`
- [ ] Should redirect to landing page
- [ ] Open DevTools → Application → Local Storage
- [ ] Verify: `affiliate_ref` = `TEST123`

---

### Week 2: Affiliate Section & Registration Form

#### 2.1 Create Folder Structure
- [ ] Create folder: `src/components/affiliate/`
- [ ] Create files:
  - [ ] `AffiliateSection.tsx` - Landing page section
  - [ ] `AffiliateRegisterForm.tsx` - Registration form

#### 2.2 Create "Jadi Affiliator" Section
- [ ] Design section with:
  - [ ] Hero text explaining program
  - [ ] Benefits list
  - [ ] CTA button "Daftar Sekarang"
  
#### 2.3 Create Registration Form
- [ ] Form fields:
  - [ ] Nama Lengkap (required)
  - [ ] Email (required)
  - [ ] WhatsApp (required)
  - [ ] Kota (required)
  - [ ] Alasan (textarea)
  - [ ] Platform promosi (checkboxes)
  - [ ] Link sosial media (optional)
- [ ] Form validation
- [ ] Submit handler (save to state for now)

#### 2.4 Add to Landing Page
- [ ] Import AffiliateSection to LandingPage
- [ ] Add between existing sections (after Testimony?)

---

## PHASE 2: BACKEND (Week 3-4)

### Week 3: Django Setup

#### 3.1 Create Backend Project
```powershell
# Navigate to Qutab parent folder
cd c:\Users\hp\OneDrive\Dokumen\Projects\Qutab

# Create backend folder
mkdir qutab-backend
cd qutab-backend

# Create virtual environment
python -m venv venv

# Activate virtual environment (Windows)
.\venv\Scripts\activate

# Install Django and dependencies
pip install django djangorestframework django-cors-headers psycopg2-binary python-dotenv

# Create Django project
django-admin startproject config .

# Create apps
python manage.py startapp affiliates
python manage.py startapp orders
```

#### 3.2 Project Structure After Setup
```
qutab-backend/
├── venv/                 # Virtual environment
├── config/               # Django project settings
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── affiliates/           # Affiliate app
│   ├── models.py
│   ├── views.py
│   ├── serializers.py
│   └── urls.py
├── orders/               # Orders app
├── manage.py
├── requirements.txt
└── .env
```

#### 3.3 Configure Django Settings
- [ ] Add to `config/settings.py`:
  - [ ] Add apps to INSTALLED_APPS
  - [ ] Configure CORS
  - [ ] Configure REST Framework
  - [ ] Configure database (SQLite for dev, PostgreSQL for prod)

#### 3.4 Create Affiliate Model
- [ ] Create file: `affiliates/models.py`
```python
from django.db import models
from django.contrib.auth.models import User
import uuid
import random
import string

class Affiliate(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('approved', 'Approved'),
        ('rejected', 'Rejected'),
    ]
    
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=20)
    city = models.CharField(max_length=100)
    referral_code = models.CharField(max_length=20, unique=True)
    platform = models.JSONField(default=list)  # ['instagram', 'tiktok']
    social_links = models.JSONField(default=dict)
    reason = models.TextField(blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    approved_at = models.DateTimeField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def save(self, *args, **kwargs):
        if not self.referral_code:
            self.referral_code = self.generate_referral_code()
        super().save(*args, **kwargs)
    
    def generate_referral_code(self):
        # Generate unique code like: ABDUL123
        name_part = ''.join(self.name.split()[:1]).upper()[:5]
        random_part = ''.join(random.choices(string.digits, k=3))
        return f"{name_part}{random_part}"
```

#### 3.5 Run Migrations
```powershell
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser  # Create admin user
```

#### 3.6 Create API Endpoints
- [ ] Create `affiliates/serializers.py`
- [ ] Create `affiliates/views.py`
- [ ] Create `affiliates/urls.py`
- [ ] Register in `config/urls.py`

#### 3.7 Test Backend
```powershell
python manage.py runserver
# Open: http://localhost:8000/admin
# Open: http://localhost:8000/api/affiliates/
```

---

### Week 4: Admin Approval & Email

#### 4.1 Configure Django Admin
- [ ] Register Affiliate model in admin
- [ ] Add approve/reject actions
- [ ] Customize list display

#### 4.2 Setup Email (Optional for now)
- [ ] Configure email settings
- [ ] Create email templates
- [ ] Send email on status change

---

## PHASE 3: INTEGRATION (Week 5-6)

### Week 5: Connect Frontend to Backend

#### 5.1 Create API Service
- [ ] Create `src/services/affiliateService.ts`
```typescript
const API_URL = 'http://localhost:8000/api';

export const affiliateService = {
  register: async (data: AffiliateFormData) => {
    const response = await fetch(`${API_URL}/affiliates/register/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  },
  
  // Add more methods...
};
```

#### 5.2 Connect Registration Form
- [ ] Import API service
- [ ] Handle form submission
- [ ] Show success/error messages

#### 5.3 Create Affiliate Dashboard Page
- [ ] Create `src/pages/AffiliateDashboard.tsx`
- [ ] Add stats cards
- [ ] Add referral link display
- [ ] Add referrals table

---

### Week 6: Deployment

#### 6.1 Deploy Backend to Railway
- [ ] Create Railway account
- [ ] Connect GitHub repo
- [ ] Add environment variables
- [ ] Deploy PostgreSQL database
- [ ] Deploy Django app

#### 6.2 Deploy Frontend to Hostinger
- [ ] Build React app: `npm run build`
- [ ] Upload `dist/` to Hostinger `public_html/`
- [ ] Update API URL to production

#### 6.3 Final Testing
- [ ] Test referral link flow
- [ ] Test registration
- [ ] Test admin approval
- [ ] Test affiliate dashboard

---

## Summary Checklist

### Prerequisites
- [ ] Python 3.10+ installed
- [ ] VS Code Python extensions

### Phase 1: Frontend (Week 1-2)
- [ ] Create useReferral hook
- [ ] Add hook to App.tsx
- [ ] Test referral capture
- [ ] Create AffiliateSection component
- [ ] Create AffiliateRegisterForm component
- [ ] Add section to landing page

### Phase 2: Backend (Week 3-4)
- [ ] Create Django project
- [ ] Create virtual environment
- [ ] Install dependencies
- [ ] Create Affiliate model
- [ ] Create API endpoints
- [ ] Setup Django admin
- [ ] Test API locally

### Phase 3: Integration (Week 5-6)
- [ ] Create API service in React
- [ ] Connect registration form
- [ ] Create affiliate dashboard page
- [ ] Deploy backend to Railway
- [ ] Deploy frontend to Hostinger
- [ ] Final testing

---

## Commands Quick Reference

```powershell
# Frontend (React)
cd Qutab/Qutab
npm run dev              # Start dev server
npm run build            # Build for production

# Backend (Django)
cd qutab-backend
.\venv\Scripts\activate  # Activate virtual environment
python manage.py runserver           # Start dev server
python manage.py makemigrations      # Create migrations
python manage.py migrate             # Apply migrations
python manage.py createsuperuser     # Create admin user
pip freeze > requirements.txt        # Save dependencies
```

---

## Ready to Start?

**Recommended: Start with Phase 1 (Frontend)**
- You can test referral capture immediately
- No backend needed yet
- Build the UI first

Want me to help you implement Phase 1 now?
