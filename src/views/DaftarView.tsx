"use client";

import Link from "next/link";

export default function DaftarView() {
  return (
    <div className="bg-background font-body-md text-body-md text-on-surface antialiased min-h-screen flex flex-col justify-between selection:bg-primary-fixed selection:text-on-primary-fixed">
<header className="w-full bg-surface-container-lowest/80 backdrop-blur-xl border-b border-surface-container-high z-50"><div className="h-16 max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop flex items-center justify-between"><div className="flex items-center gap-space-md"><div className="flex items-center gap-space-xs"><div className="w-9 h-9 rounded-xl bg-primary-container flex items-center justify-center text-on-primary shadow-sm"><span className="material-symbols-outlined text-[22px]">gavel</span></div><span className="font-headline-sm text-headline-sm text-primary tracking-tight font-bold">KontrakKu</span></div><div className="h-4 w-px bg-outline-variant hidden sm:block"></div><span className="hidden sm:inline-block font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant bg-surface-container px-2 py-0.5 rounded-md font-semibold">Labor Law &amp; Audit</span></div><div className="flex items-center gap-space-md"><div className="hidden md:flex items-center gap-space-xs px-3 py-1 bg-surface-container-low border border-surface-container rounded-full text-on-surface-variant font-label-md text-label-md"><span className="material-symbols-outlined text-secondary text-[16px]">verified_user</span><span className="">256-bit SSL Enkripsi</span></div><Link href="/bantuan" className="flex items-center gap-1.5 font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined text-[18px]">help_outline</span><span className="hidden sm:inline">Bantuan</span></Link></div></div></header><main className="flex-1 flex flex-col items-center justify-center w-full px-4 sm:px-6 lg:px-8 py-8 lg:py-12 relative"><div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#001382_1.2px,transparent_1.2px)] [background-size:20px_20px]"></div><div className="relative w-full max-w-6xl mx-auto z-10"><div className="w-full rounded-2xl bg-surface-container-lowest shadow-[0_12px_40px_rgba(20,27,43,0.08)] border border-surface-container-high/60 overflow-hidden min-h-[640px] grid grid-cols-1 lg:grid-cols-12">

<div className="lg:col-span-5 bg-primary-container text-on-primary p-8 sm:p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden">

<div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary opacity-60 blur-3xl pointer-events-none"></div>
<div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-secondary-container opacity-25 blur-3xl pointer-events-none"></div>
<div className="relative z-10">

<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-primary-fixed text-label-sm font-label-sm uppercase tracking-wider mb-6 border border-white/10">
<span className="material-symbols-outlined text-[16px] text-secondary-container" style={{fontVariationSettings: "'FILL' 1"}}>shield_person</span>
<span className="">Platform Ketenagakerjaan Terpercaya</span>
</div>

<h2 className="font-headline-lg text-headline-lg text-white font-bold tracking-tight leading-[1.25] mb-4">
Lindungi Karir &amp; Hak Anda Sejak Hari Pertama.
</h2>
<p className="font-body-md text-body-md text-primary-fixed leading-relaxed mb-8 opacity-90">
Audit independen berbasis UU No. 13/2003, UU Cipta Kerja, dan regulasi ketenagakerjaan terkini tanpa perlu membayar jasa konsultan mahal.
</p>

<div className="space-y-4">

<div className="flex items-start gap-4 p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/5 transition-all hover:bg-white/15">
<div className="w-10 h-10 rounded-lg bg-error/90 text-on-error flex items-center justify-center shrink-0 shadow-sm mt-0.5">
<span className="material-symbols-outlined text-[22px]">warning</span>
</div>
<div>
<h3 className="font-title-md text-title-md text-white font-semibold mb-1">Audit Otomatis Klausul Berisiko</h3>
<p className="font-body-sm text-body-sm text-primary-fixed leading-relaxed">
Deteksi dini penalti resign tidak wajar, klausul penahanan ijazah ilegal, hingga batasan <em>non-compete</em> yang merugikan.
</p>
</div>
</div>

<div className="flex items-start gap-4 p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/5 transition-all hover:bg-white/15">
<div className="w-10 h-10 rounded-lg bg-secondary-container text-on-secondary-fixed flex items-center justify-center shrink-0 shadow-sm mt-0.5">
<span className="material-symbols-outlined text-[22px]">calculate</span>
</div>
<div>
<h3 className="font-title-md text-title-md text-white font-semibold mb-1">Kalkulator Hak Tenaga Kerja Akurat</h3>
<p className="font-body-sm text-body-sm text-primary-fixed leading-relaxed">
Hitung kompensasi PKWT, pesangon PHK, lembur, serta cek perbandingan upah riil terhadap UMK 2025 resmi secara presisi.
</p>
</div>
</div>

<div className="flex items-start gap-4 p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/5 transition-all hover:bg-white/15">
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest text-primary flex items-center justify-center shrink-0 shadow-sm mt-0.5">
<span className="material-symbols-outlined text-[22px]" style={{fontVariationSettings: "&quot"}}>forum</span>
</div>
<div>
<h3 className="font-title-md text-title-md text-white font-semibold mb-1">Forum Anonim &amp; Komunitas Pekerja</h3>
<p className="font-body-sm text-body-sm text-primary-fixed leading-relaxed">Berbagi pengalaman dan berdiskusi aman dengan 50.000+ pekerja se-Indonesia tanpa risiko teridentifikasi oleh HR perusahaan.</p>
</div>
</div>
</div>
</div>

<div className="relative z-10 mt-8 pt-4">
<div className="p-4 rounded-xl bg-primary/80 backdrop-blur-md border border-white/10 shadow-lg">
<div className="flex items-start gap-3.5">
<div className="w-8 h-8 rounded-lg bg-secondary-container/20 flex items-center justify-center shrink-0 text-secondary-container">
<span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>lock</span>
</div>
<div>
<div className="font-label-lg text-label-lg text-secondary-fixed font-bold mb-1">
Jaminan Anti-Doxing &amp; Kerahasiaan Penuh
</div>
<p className="font-body-sm text-body-sm text-primary-fixed leading-snug">
Data kontrak, berkas PDF, serta identitas Anda tidak pernah dibagikan atau dijual kepada perusahaan pemberi kerja manapun.
</p>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7 bg-surface-container-lowest p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
<div>

<div className="flex items-center justify-between pb-4 mb-6 border-b border-surface-container">
<div className="inline-flex p-1 rounded-xl bg-surface-container-low border border-surface-container">
<Link href="/masuk" className="px-5 py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors font-medium">
Masuk (Login)
</Link>
<button className="px-5 py-2 rounded-lg font-label-md text-label-md bg-surface-container-lowest text-primary shadow-sm font-bold" type="button">
Daftar Akun (Sign Up)
</button>
</div>
<div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm bg-surface-container-low px-3 py-1.5 rounded-full border border-surface-container">
<span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="font-semibold text-on-surface">Audit Siap Digunakan</span>
</div>
</div>

<div className="mb-6">
<h1 className="font-headline-md text-headline-md text-on-surface font-bold tracking-tight mb-1.5">
Buat Akun KontrakKu
</h1>
<p className="font-body-md text-body-md text-on-surface-variant">
Mulai amankan hak dan audit kontrak kerja Anda secara gratis dalam hitungan menit.
</p>
</div>

<div className="mb-5"><button className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl border border-surface-container-high bg-surface-container-low hover:bg-surface-container hover:border-outline-variant text-on-surface font-label-lg text-label-lg transition-all active:scale-[0.99] shadow-sm" type="button"><svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"></path></svg><span className="font-semibold">Daftar dengan Google</span></button></div>

<div className="relative flex items-center justify-center my-6">
<div className="w-full h-px bg-surface-container-high"></div>
<span className="absolute bg-surface-container-lowest px-4 font-label-sm text-label-sm text-outline tracking-wider uppercase">
atau daftar dengan email kerja / pribadi
</span>
</div>

<form className="space-y-4" id="signup-form" onSubmit={(e) => e.preventDefault()}>
<div className="mb-5 p-3.5 rounded-xl bg-surface-container-low border border-surface-container">
  <div className="flex items-center justify-between mb-2">
    <div className="flex items-center gap-2">
      <span className="px-2.5 py-0.5 rounded-full bg-[#E98E35] text-white text-[11px] font-bold tracking-wide uppercase">Langkah 1 dari 2</span>
      <span className="font-label-md text-label-md font-bold text-primary">Pilih Status &amp; Kredensial Akun</span>
    </div>
    <span className="text-[12px] font-bold text-[#E98E35]">50% Selesai</span>
  </div>
  <div className="w-full h-2 rounded-full bg-surface-container overflow-hidden flex">
    <div className="h-full w-1/2 rounded-full bg-[#E98E35] transition-all duration-300"></div>
    <div className="h-full w-1/2 rounded-full bg-transparent"></div>
  </div>
  
  <div className="mt-2.5 pt-2 border-t border-surface-container/60 flex items-center gap-2 text-[11px] text-on-surface-variant">
    <span className="material-symbols-outlined text-[15px] text-outline">lock_clock</span>
    <span className=""><strong className="text-on-surface">Langkah 2 berikutnya:</strong> Nama Lengkap, Nomor WhatsApp, dan Toggle Switch Samarkan Identitas Otomatis untuk Forum Anonim</span>
  </div>
</div>


<div>
  <label className="block font-label-lg text-label-lg text-primary mb-2 font-bold">
    Status Pekerjaan Saat Ini
  </label>
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5" id="role-selector">
    <button className="role-btn text-left p-3 rounded-xl bg-primary-container text-on-primary font-label-md text-label-md font-semibold transition-all shadow-sm border border-transparent" data-role="pkwt" type="button">
      <div className="font-bold text-sm">Karyawan PKWT</div>
      <div className="text-[11px] font-normal opacity-85 mt-0.5">Kontrak Tertentu</div>
    </button>
    <button className="role-btn text-left p-3 rounded-xl bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-md text-label-md font-semibold transition-all border border-surface-container" data-role="pkwtt" type="button">
      <div className="font-bold text-sm">Karyawan PKWTT</div>
      <div className="text-[11px] font-normal opacity-70 mt-0.5">Karyawan Tetap</div>
    </button>
    <button className="role-btn text-left p-3 rounded-xl bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-md text-label-md font-semibold transition-all border border-surface-container" data-role="freelance" type="button">
      <div className="font-bold text-sm">Freelance</div>
      <div className="text-[11px] font-normal opacity-70 mt-0.5">Mitra / Lepas</div>
    </button>
    <button className="role-btn text-left p-3 rounded-xl bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-md text-label-md font-semibold transition-all border border-surface-container" data-role="freshgrad" type="button">
      <div className="font-bold text-sm">Fresh Grad</div>
      <div className="text-[11px] font-normal opacity-70 mt-0.5">Pencari / Magang</div>
    </button>
  </div>
</div>


<div>
  <label className="block font-label-md text-label-md text-primary mb-1.5 font-bold" htmlFor="emailAddr">
    Alamat Email Aktif
  </label>
  <input className="w-full h-11 px-3.5 rounded-xl bg-surface-container-low border border-surface-container text-on-surface placeholder:text-outline font-body-md text-body-md focus:bg-surface-container-lowest focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" id="emailAddr" placeholder="nama@email.com atau nama@kantor.co.id" type="email" required />
  <p className="font-body-sm text-[11px] text-on-surface-variant mt-1">Digunakan untuk pengiriman berkas audit independen Anda.</p>
</div>


<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  <div>
    <label className="block font-label-md text-label-md text-primary mb-1.5 font-bold" htmlFor="passInput">
      Kata Sandi
    </label>
    <div className="relative">
      <input className="w-full h-11 px-3.5 pr-10 rounded-xl bg-surface-container-low border border-surface-container text-on-surface placeholder:text-outline font-body-md text-body-md focus:bg-surface-container-lowest focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" id="passInput" placeholder="Min. 8 karakter" type="password" required />
      <button className="absolute right-3 top-2.5 text-outline hover:text-on-surface transition-colors" id="togglePass" type="button">
        <span className="material-symbols-outlined text-[20px]" id="eyeIcon">visibility</span>
      </button>
    </div>
  </div>
  <div>
    <label className="block font-label-md text-label-md text-primary mb-1.5 font-bold" htmlFor="passConfirm">
      Konfirmasi Kata Sandi
    </label>
    <div className="relative">
      <input className="w-full h-11 px-3.5 rounded-xl bg-surface-container-low border border-surface-container text-on-surface placeholder:text-outline font-body-md text-body-md focus:bg-surface-container-lowest focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" id="passConfirm" placeholder="Ulangi kata sandi" type="password" required />
    </div>
  </div>
</div>


<div className="p-3.5 rounded-xl bg-surface-container-low border border-surface-container">
  <div className="flex items-center justify-between mb-2 font-label-sm text-label-sm">
    <span className="text-on-surface-variant font-medium">Tingkat Keamanan Sandi:</span>
    <span className="font-bold text-outline" id="strengthText">Masukkan Sandi</span>
  </div>
  <div className="w-full h-1.5 rounded-full bg-surface-container overflow-hidden flex gap-1.5">
    <div className="h-full w-1/4 rounded-full bg-outline-variant transition-all duration-300" id="bar1"></div>
    <div className="h-full w-1/4 rounded-full bg-outline-variant transition-all duration-300" id="bar2"></div>
    <div className="h-full w-1/4 rounded-full bg-outline-variant transition-all duration-300" id="bar3"></div>
    <div className="h-full w-1/4 rounded-full bg-outline-variant transition-all duration-300" id="bar4"></div>
  </div>
  <div className="flex flex-wrap gap-x-5 gap-y-1 mt-2.5 text-[11px] text-on-surface-variant">
    <span className="flex items-center gap-1.5" id="req-len">
      <span className="material-symbols-outlined text-[14px] text-outline">circle</span>
      Minimal 8 Karakter
    </span>
    <span className="flex items-center gap-1.5" id="req-cap">
      <span className="material-symbols-outlined text-[14px] text-outline">circle</span>
      Huruf Kapital
    </span>
    <span className="flex items-center gap-1.5" id="req-num">
      <span className="material-symbols-outlined text-[14px] text-outline">circle</span>
      Angka
    </span>
  </div>
</div>


<div className="pt-2">
  <button className="w-full py-3.5 px-6 rounded-xl bg-[#E98E35] hover:bg-[#d97f26] active:bg-[#c6711c] text-white font-title-md text-title-md font-bold shadow-[0_4px_14px_rgba(233,142,53,0.35)] hover:shadow-[0_6px_20px_rgba(233,142,53,0.45)] transition-all flex items-center justify-center gap-2 group" type="button">
    <span className="">Lanjutkan ke Data Profil</span>
    <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1.5">arrow_forward</span>
  </button>
</div>


<div className="pt-2 flex items-center justify-center gap-2 text-center">
  <span className="material-symbols-outlined text-secondary text-[16px] shrink-0">verified_user</span>
  <p className="font-body-sm text-[11px] text-on-surface-variant leading-relaxed">
    Data dienkripsi end-to-end (AES-256) &amp; patuh penuh terhadap UU PDP No. 27/2022. Garansi Anonimitas 100%.
  </p>
</div></form>
</div>

<div className="mt-8 pt-4 border-t border-surface-container flex flex-col sm:flex-row items-center justify-between gap-3">
<div className="flex items-center gap-3 font-label-sm text-label-sm text-on-surface-variant">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-secondary text-[16px]">verified</span>100% Gratis Fitur Dasar</span>
<span className="">•</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-secondary text-[16px]">lock</span>Data Terenkripsi End-to-End</span>
</div>
<div className="font-label-md text-label-md text-on-surface-variant">
Sudah punya akun? <Link href="/masuk" className="text-primary hover:underline font-bold">Masuk di sini</Link>
</div>
</div>
</div>
</div>
</div>
</main><footer className="w-full bg-surface-container-lowest py-space-lg border-t border-surface-container-high"><div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row items-center justify-between gap-space-sm font-body-sm text-body-sm text-on-surface-variant"><div className="flex items-center gap-space-xs"><span className="material-symbols-outlined text-secondary text-[16px]">security</span><span className="">Kepatuhan Regulasi: UU PDP No. 27/2022 Terjamin</span></div><div className="flex items-center gap-space-md"><Link href="/kebijakan-privasi" className="hover:text-primary transition-colors">Kebijakan Privasi</Link><span className="">•</span><Link href="/syarat-ketentuan" className="hover:text-primary transition-colors">Syarat &amp; Ketentuan</Link><span className="">•</span><span className="">© 2024 KontrakKu</span></div></div></footer>
    </div>
  );
}
