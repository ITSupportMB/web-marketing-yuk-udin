# Website Marketing Yuk Udin

Landing marketing publik untuk Yuk Udin — aplikasi pesan material bangunan.
Satu daftar belanja, banyak penawaran dari toko terverifikasi.

- **Struktur & konten**: `marketing-site-blueprint.md`
- **Tema visual**: `design-spec-website.md` (terang & hangat, primary oranye `#D65108`, latar krem `#FDF6EE`)

## Stack

| Aspek | Pilihan |
|---|---|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS v4 (token via `@theme` di `app/globals.css`) |
| Animasi | Framer Motion (`LazyMotion` + `domAnimation`, bundle ringan) |
| Font | Inter Tight / Inter / JetBrains Mono (self-host via `next/font`) |
| Form lead | Route handler `app/api/vendor-lead` (validasi + honeypot) |

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build produksi (SSG)
npm start        # jalankan hasil build
```

## Struktur halaman

```
/                    Homepage (customer-first)
/vendor              Landing vendor + form lead
/cara-kerja          Alur customer & vendor (tab)
/bantuan             FAQ customer & vendor (tab + accordion)
/tentang             Perusahaan & legalitas
/kontak              WhatsApp, email, alamat
/kebijakan-privasi   Legal (draf — perlu tinjauan hukum)
/syarat-ketentuan    Legal (draf — perlu tinjauan hukum)
```

Alias: `/daftar-vendor → /vendor`, `/faq → /bantuan`, `/privacy → /kebijakan-privasi`.

## Peta file

```
app/                 Route & layout (App Router)
components/
  layout/            Navbar, Footer, StickyCta, ConsentBanner
  home/              Hero (signature "nota jadi penawaran") + seksi homepage
  vendor/            Form lead vendor
  ui/                Button, Card, Accordion, Tabs, Reveal, icons, dll
lib/
  content.ts         Sumber tunggal semua copy (Bahasa Indonesia, "kamu")
  analytics.ts       Event tracking (aktif hanya setelah consent)
```

## Yang masih perlu diisi (bukan tugas kode)

Lihat blueprint §9. Ringkas:

- Nomor WhatsApp bisnis, email, domain final → `lib/content.ts` (`site`)
- Nama legal, NIB, alamat → `lib/content.ts` (`companyInfo`)
- Angka bukti yang boleh dipublikasikan → `proofStats`
- Testimoni asli + izin → `testimonials`
- Screenshot app asli → placeholder di `/cara-kerja`
- QR code store scannable → slot `.qr-slot` di `components/home/DownloadCta.tsx`
- Teks legal final (privasi & ketentuan) yang sudah ditinjau hukum

## Integrasi lead vendor

`app/api/vendor-lead/route.ts` sudah memvalidasi dan siap dialirkan ke Supabase
`vendor_leads` (service-role, server-side). Lihat komentar `TODO(integrasi)`.
Set `SUPABASE_SERVICE_ROLE_KEY` di `.env.local` saat menyambungkannya.

## Analitik

Event minimum (blueprint §7.4): `hero_cta_click`, `sticky_cta_click`,
`store_redirect`, `vendor_lead_submit`, `faq_open`, `scroll_75`. Semua event
hanya menembak setelah pengunjung menyetujui cookie analitik. Pasang sink
(`gtag`/`dataLayer`) saat memasang alat analitik.

## Catatan tema

Blueprint aslinya menyebut brand hijau `#0F6E56`; sesuai permintaan, tema visual
memakai **design-spec-website** (oranye/krem). Semua token warna, tipografi, dan
spasi berasal dari `app/globals.css`.
