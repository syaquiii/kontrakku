# KontrakKu (Next.js + TypeScript + React)

Konversi dari desain HTML di `kode.txt` ke Next.js App Router, TypeScript, dan Tailwind CSS 3.

## Jalankan

```bash
npm install
npm run dev
```

Buka http://localhost:3000.

## Peta halaman

| Rute | Komponen | Desain asal |
| --- | --- | --- |
| `/` | `BerandaView` | Beranda |
| `/masuk` | `MasukView` | Masuk |
| `/daftar` | `DaftarView` | Daftar Akun, langkah 1 |
| `/daftar/profil` | `DaftarProfilView` | Daftar Akun, langkah 2 (Profil & Privasi) |
| `/analisis-kontrak` | `AnalisisKontrakView` | Analisis Kontrak AI |
| `/hitung-hak-kerja` | `HitungHakKerjaView` | Hitung Hak Kerja |
| `/forum-anonim` | `ForumAnonimView` | Forum Komunitas Pekerja Anonim |
| `/riwayat-profil` | `RiwayatProfilView` | Profil & Riwayat Kontrak |
| `/edukasi-glosarium` | `EdukasiGlosariumView` | Edukasi & Glosarium |
| `/kebijakan-privasi`, `/syarat-ketentuan`, `/bantuan`, `/lupa-kata-sandi`, `/panduan-negosiasi` | placeholder | dirujuk oleh tautan, belum ada desainnya |

Setiap `page.tsx` di `src/app` hanya memasang metadata dan memanggil komponen di `src/views`.

## Belum selesai

1. **Perilaku interaktif belum dipindah ke React.** Tampilan sudah sama dengan desain, tetapi skrip aslinya (toggle sandi, kekuatan sandi, kalkulator hak kerja, filter audit, glosarium, forum) disimpan apa adanya di `docs/legacy-scripts/`. Port satu per satu ke `useState`/handler. Atribut `onclick`/`oninput` di markup sudah dibuang.
2. **Satu file per halaman.** Header, footer, dan kartu yang berulang masih tertanam di tiap view. Pecah ke `src/components/` (misalnya `Navbar`, `Footer`) agar tidak duplikat.
3. **Konten masih data contoh** (angka statistik, testimoni, riwayat kontrak). Ganti dengan data dari API.
4. **Gambar** memakai `<img>`. Pindah ke `next/image` jika sumbernya sudah tetap.
5. Form masuk dan daftar hanya memanggil `preventDefault`; belum ada autentikasi.
