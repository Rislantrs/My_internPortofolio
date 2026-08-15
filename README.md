# ⚡ Blank Next.js Portfolio Starter

Starter project **Next.js (App Router)** kosongan dan bersih, siap untuk mulai mendesain dan membangun portofolio Anda dari awal.

---

## 🛠️ Tech Stack & Fitur Dasar

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (terkonfigurasi di `src/app/globals.css`)
- **Linting**: ESLint
- **Path Alias**: `@/*` mengarah ke folder `./src/*`

---

## 📂 Struktur Project

```text
├── public/                 # Tempat menyimpan aset statis (gambar, favicon, resume PDF)
├── src/
│   ├── app/
│   │   ├── globals.css     # Entry point CSS global & Tailwind
│   │   ├── layout.tsx      # Root Layout & Metadata (Title, Description)
│   │   └── page.tsx        # Halaman utama kosongan (mulai desain di sini)
│   └── components/         # Tempat menyimpan komponen React kustom Anda
├── next.config.ts          # Konfigurasi Next.js
├── tsconfig.json           # Konfigurasi TypeScript
└── package.json            # Daftar script & dependensi
```

---

## 🚀 Perintah Dasar

### 1. Jalankan Development Server
```bash
npm run dev
```
Buka browser di [http://localhost:3000](http://localhost:3000) untuk melihat halaman secara langsung dengan fitur *Fast Refresh*.

### 2. Build untuk Production (Siap Hosting)
```bash
npm run build
```

### 3. Jalankan Hasil Build
```bash
npm run start
```
