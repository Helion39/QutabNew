# Affiliate System Reference - KlikDigital.id

Reference dari platform affiliate KlikDigital.id untuk inspirasi Qutab Affiliate System.

---

## 1. Dashboard Member

### Navbar Menu
| Menu | Keterangan |
|------|------------|
| **Dasbor** | Halaman utama member |
| **Profil Member** | Edit profil & data diri |
| **Info Affiliate** | Dropdown dengan submenu affiliate |
| **Helpdesk** | Support ticket |
| **Keluar** | Logout |
| **Lisensi** | Manajemen lisensi produk |

### Konten Dashboard
- **Notifikasi Tiket** - Alert di atas untuk tiket yang perlu perhatian
- **Produk Yang Dibeli** - List produk yang sudah dibeli dengan:
  - Nama produk
  - Tanggal tagihan selanjutnya
  - Masa aktif (1 Tahun / Seumur Hidup)
  - Status perpanjangan
- **Akses Produk** - Quick links ke panduan & akses produk
- **Promo Banner** - Banner promosi produk

---

## 2. Profil Member

### Form Fields
| Field | Type | Required | Keterangan |
|-------|------|----------|------------|
| **Nama Depan** | Text | ✅ | First name |
| **Nama Belakang** | Text | ✅ | Last name |
| **Alamat Email** | Email | ✅ | Email konfirmasi dikirim ke sini |
| **No. WhatsApp** | Tel | ✅ | Format: 08xxxxxxxxxx |
| **Kata Sandi** | Password | - | Button "Perubahan" untuk ganti password |

### Action Button
- **Simpan Profil** - Save changes

---

## 3. Info Affiliate (Dropdown Menu)

### Submenu Items
| Menu | Fungsi |
|------|--------|
| **Banner dan Link** | Ambil link affiliate & banner promosi |
| **Statistik** | Lihat statistik klik, konversi, dll |
| **Rekening Pembayaran Komisi** | Input rekening untuk terima komisi |
| **Pembayaran Komisi** | Riwayat pembayaran komisi |
| **Kata Kunci** | Keywords untuk tracking |
| **Ambil Kupon Diskon** | Generate kupon diskon untuk promosi |
| **Leads Anda** | Daftar leads yang masuk |
| **Tautan Bonus Afiliasi** | Link bonus tambahan |

---

## 4. Banner dan Link

### Format Link Affiliate
```
Base URL:     https://member.klikdigital.co.id/aff/go/
Username:     misterzaq
Parameter:    ?i=28 (product ID)

Full Link:    https://member.klikdigital.co.id/aff/go/misterzaq?i=28
```

### Komponen
| Element | Contoh | Fungsi |
|---------|--------|--------|
| **Judul** | Landingpage WBSPRO | Nama produk/landing page |
| **Tautan Afiliasi** | `/aff/go/misterzaq?i=28` | Link yang dibagikan affiliate |
| **URL Target** | https://wbspro.id | Halaman tujuan setelah klik |
| **Copy Button** | [Copy] | Salin link ke clipboard |
| **Kode Sumber** | HTML embed code | Untuk embed di website |

### Search
- Input search untuk mencari banner/link berdasarkan keyword

---

## Adaptasi untuk Qutab

### Perbandingan Format Link

| Platform | Format |
|----------|--------|
| **KlikDigital** | `/aff/go/{username}?i={product_id}` |
| **Qutab (keputusan)** | `/r/{random_code}` |

### Mengapa Qutab Berbeda?
- Tidak pakai username di URL (lebih aman)
- Random code 7+ karakter yang di-map ke database
- Tidak perlu product ID karena landing page tunggal

### Fitur yang Perlu Diadaptasi untuk Qutab

| Fitur KlikDigital | Adaptasi Qutab |
|-------------------|----------------|
| Banner dan Link | ✅ Link referral + copy button |
| Statistik | ✅ Dashboard dengan stats |
| Rekening Pembayaran | ✅ Input rekening bank |
| Pembayaran Komisi | ✅ Riwayat pembayaran |
| Leads Anda | ✅ Daftar customer dari referral |
| Kupon Diskon | ❓ Opsional (fase lanjutan) |

---

## Qutab Affiliate Dashboard - Proposed Structure

### Menu Navbar
```
| Dasbor | Profil | Link Referral | Komisi | Statistik | Logout |
```

### Halaman Dasbor
- Total Referral (jumlah customer)
- Total Komisi (Rp)
- Pending Komisi
- Link Referral dengan Copy button
- List customer terbaru dari referral

### Halaman Profil
- Nama Lengkap
- Email
- No. WhatsApp
- Link Instagram/TikTok
- Rekening Bank (untuk payout)
- Ganti Password

### Halaman Link Referral
- Link unik affiliate: `https://qutab.id/r/XK7mP2q`
- Copy button
- QR Code (opsional)
- Statistik singkat (klik, konversi)

### Halaman Komisi
- Riwayat pembayaran
- Request payout
- Status payout (pending/paid)

### Halaman Statistik
- Total klik
- Total checkout (konversi)
- Conversion rate
- Grafik per bulan

---

## Next Steps

1. [ ] Design UI mockup untuk Qutab Affiliate Dashboard
2. [ ] Implement halaman-halaman di atas
3. [ ] Build backend API untuk support fitur
4. [ ] Test flow end-to-end
