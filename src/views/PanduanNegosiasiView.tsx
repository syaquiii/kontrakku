"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface Scenario {
  id: string;
  badge: string;
  badgeColor: string;
  title: string;
  problem: string;
  legalBasis: string;
  tactics: string[];
  templateTitle: string;
  templateContent: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "penahanan-ijazah",
    badge: "Klausul Jaminan Ijazah",
    badgeColor: "bg-red-100 text-red-800",
    title: "Cara Menolak Penahanan Ijazah Asli Tanpa Menimbulkan Konflik",
    problem:
      "Perusahaan meminta ijazah asli atau sertifikat fisik disimpan oleh HRD selama masa kontrak berlangsung dengan dalih 'komitmen kerja' atau jaminan tidak resign mendadak.",
    legalBasis:
      "Undang-Undang Ketenagakerjaan RI tidak pernah mengatur kewenangan pengusaha menahan dokumen pribadi. Penahanan dokumen secara paksa berpotensi melanggar Pasal 1320 KUHPerdata (syarat sah perjanjian tidak boleh melanggar ketertiban umum) dan Pasal 372 KUHP (penggelapan) jika menolak mengembalikan setelah kontrak selesai.",
    tactics: [
      "Tunjukkan antusiasme bergabung dengan perusahaan, namun jelaskan prinsip kepatuhan dokumen pribadi.",
      "Tawarkan solusi alternatif yang setara: serahkan fotokopi ijazah yang dilegalisir basah oleh universitas atau notaris.",
      "Tawarkan surat pernyataan kesediaan bertanggung jawab secara perdata jika menimbulkan kerugian terbukti bagi perusahaan.",
    ],
    templateTitle: "Draft Template Email / Pesan WhatsApp ke HRD",
    templateContent: `Yth. Bapak/Ibu [Nama HRD / Talent Acquisition]
[Nama Perusahaan]

Terima kasih banyak atas tawaran kerja yang diberikan untuk posisi [Posisi Pekerjaan]. Saya sangat antusias dan bersemangat untuk dapat berkontribusi bersama tim [Nama Perusahaan].

Terkait kelengkapan dokumen administrasi mengenai penyerahan ijazah asli, dengan hormat saya ingin menyampaikan bahwa sesuai anjuran perlindungan dokumen kependudukan resmi dan regulasi ketenagakerjaan, saya tidak dapat menitipkan berkas fisik ijazah asli kepada pihak luar.

Sebagai alternatif komitmen profesional dan integritas saya, saya bersedia:
1. Memperlihatkan fisik ijazah asli untuk dicocokkan langsung saat verifikasi (cross-check).
2. Menyerahkan salinan (fotokopi) ijazah yang telah dilegalisir basah oleh universitas/notaris.
3. Menandatangani Surat Pernyataan Pakta Integritas profesional selama masa kerja berlangsung.

Besar harapan saya solusi ini dapat diakomodasi dengan baik agar kita dapat segera memproses perjanjian kerja sama. Terima kasih atas pengertian dan kerja sama Bapak/Ibu.

Hormat saya,
[Nama Lengkap Anda]
[Nomor Kontak]`,
  },
  {
    id: "kompensasi-pkwt",
    badge: "Hak Akhir Kontrak",
    badgeColor: "bg-emerald-100 text-emerald-800",
    title: "Menuntut Uang Kompensasi PKWT yang Tidak Dibayarkan",
    problem:
      "Masa kontrak PKWT selesai, namun perusahaan tidak mencairkan uang kompensasi dengan alasan: 'budget belum turun', 'proyek rugi', atau 'karena karyawan sendiri yang menolak perpanjangan kontrak'.",
    legalBasis:
      "Pasal 15 ayat (1) & (2) PP No. 35/2021 menegaskan: Pengusaha WAJIB memberikan uang kompensasi kepada pekerja kontrak yang memiliki masa kerja minimal 1 bulan terus-menerus pada saat kontrak berakhir, baik kontrak diperpanjang maupun tidak diperpanjang.",
    tactics: [
      "Kirimkan permohonan tertulis resmi sebelum atau maksimal pada hari terakhir kerja.",
      "Sertakan rincian perhitungan matematis baku (Masa Kerja / 12 × Upah 1 Bulan) beserta referensi pasal hukumnya.",
      "Gunakan bahasa profesional, administratif, dan terukur agar terdokumentasi rapi bila nantinya perlu mediasi Disnaker.",
    ],
    templateTitle: "Draft Surat Permohonan Pencairan Kompensasi PKWT",
    templateContent: `Kepada Yth.
Bapak/Ibu Manajemen / HRD
[Nama Perusahaan]
di Tempat

Perihal: Permohonan Pembayaran Uang Kompensasi PKWT

Dengan hormat,
Sehubungan dengan berakhirnya jangka waktu Perjanjian Kerja Waktu Tertentu (PKWT) saya pada tanggal [Tanggal Berakhir Kontrak] untuk posisi [Posisi Pekerjaan] dengan masa kerja selama [Jumlah Bulan] bulan ([Tanggal Mulai] s.d. [Tanggal Selesai]), bersama surat ini saya mengajukan permohonan pencairan hak Uang Kompensasi PKWT.

Berdasarkan ketentuan imperatif Pasal 15 ayat (1) Peraturan Pemerintah No. 35 Tahun 2021:
“Pengusaha wajib memberikan uang kompensasi kepada pekerja/buruh yang hubungan kerjanya berdasarkan PKWT saat berakhirnya jangka waktu perjanjian kerja.”

Adapun estimasi perhitungan kompensasi sesuai formula statutory adalah:
• Masa Kerja: [Contoh: 12] Bulan
• Upah Pokok + Tunjangan Tetap: Rp [Nominal Gaji]
• Total Hak Kompensasi: ([Masa Kerja] / 12) × Rp [Nominal Gaji] = Rp [Total Kompensasi]

Mohon konfirmasi terkait jadwal proses transfer pembayaran hak tersebut ke rekening payroll saya. Atas perhatian dan kerja sama yang baik selama masa kerja saya di [Nama Perusahaan], saya ucapkan terima kasih.

Hormat saya,
[Nama Lengkap Anda]
NIK / ID Karyawan: [Nomor Karyawan]`,
  },
  {
    id: "denda-pinalti-resign",
    badge: "Pinalti Resign Dini",
    badgeColor: "bg-amber-100 text-amber-800",
    title: "Menghadapi Ancaman Denda Pinalti Resign Dini Sepihak",
    problem:
      "Pekerja mengajukan resign sebelum durasi PKWT habis karena alasan valid (lembur tidak dibayar, beban kerja melebihi kesepakatan, atau keselamatan kerja terabaikan), namun HRD menagih denda sisa kontrak puluhan juta rupiah.",
    legalBasis:
      "Meskipun Pasal 62 UU Ketenagakerjaan mengatur ganti rugi sisa masa kontrak, asas hukum perjanjian timbal balik (Exceptio Non Adimpleti Contractus) menegaskan: Pihak yang telah melanggar kewajiban normatifnya sendiri (misal tidak membayar lembur atau melanggar jam kerja) gugur haknya untuk menuntut ganti rugi kepada pihak lain.",
    tactics: [
      "Kumpulkan seluruh bukti pelanggaran normatif perusahaan: rekap jam kerja, chat penugasan larut malam, ketiadaan SPL, atau bukti gaji di bawah standar.",
      "Ajukan Perundingan Bipartit tertulis terlebih dahulu, jangan pernah menandatangani surat pengakuan hutang penalti di bawah intimidasi.",
      "Tawarkan penyelesaian kompromi 'Mutual Agreement' (pengakhiran atas kesepakatan bersama) tanpa saling menuntut ganti rugi.",
    ],
    templateTitle: "Draft Respon Klarifikasi Klausul Penalti & Usulan Bipartit",
    templateContent: `Yth. Tim HRD & Manajemen
[Nama Perusahaan]

Menanggapi komunikasi mengenai permohonan pengunduran diri saya tertanggal [Tanggal Resign] dan adanya klausul penalti sisa masa kontrak PKWT sebesar Rp [Nominal Penalti], bersama ini saya ingin menyampaikan klarifikasi secara objektif dan itikad baik:

1. Keputusan pengunduran diri saya didasarkan pada ketidaksesuaian beban kerja riil dengan perjanjian awal, di mana akumulasi jam kerja saya melebihi ketentuan waktu kerja resmi tanpa adanya Surat Perintah Lembur (SPL) maupun kompensasi upah lembur sebagaimana diamanatkan Pasal 31 PP No. 35/2021.
2. Berdasarkan asas keseimbangan hukum perjanjian (Pasal 1338 KUHPerdata), pemenuhan kewajiban bersifat timbal balik antara kedua belah pihak.

Oleh karena itu, demi menjaga hubungan baik dan penyelesaian secara profesional, saya mengusulkan perundingan bipartit tertulis untuk menyepakati pengakhiran kontrak secara bersama (Mutual Separation Agreement) tanpa adanya tuntutan penalti finansial.

Saya siap berdiskusi secara musyawarah untuk menentukan proses serah terima pekerjaan (handover) yang rapi hingga tanggal kerja terakhir saya. Terima kasih.

Hormat saya,
[Nama Lengkap Anda]`,
  },
  {
    id: "lembur-tanpa-spl",
    badge: "Upah & Lembur",
    badgeColor: "bg-blue-100 text-blue-800",
    title: "Menolak Kerja Lembur Ilegal atau Menuntut Pembayaran Upah Lembur",
    problem:
      "Perusahaan sering mewajibkan bekerja hingga larut malam atau weekend tanpa menerbitkan Surat Perintah Lembur (SPL) dan tidak membayarkan uang lembur dengan dalih 'loyalitas' atau 'pekerjaan belum beres'.",
    legalBasis:
      "Pasal 26-31 PP No. 35/2021: Waktu kerja lembur wajib mendapat persetujuan tertulis pekerja, dibatasi maksimal 4 jam sehari atau 18 jam seminggu, serta wajib dibayarkan upah lembur dengan perhitungan matematis baku (1.5x jam pertama, 2x jam berikutnya). Tidak membayar upah lembur sah diancam pidana kurungan 1-12 bulan atau denda Rp10jt - Rp100jt (Pasal 187 UU Cipta Kerja).",
    tactics: [
      "Buat rekap catatan pribadi jam mulai dan jam selesai kerja setiap hari (beserta bukti screenshot email/chat penugasan).",
      "Ajukan permohonan penerbitan SPL resmi sebelum bersedia menjalankan penugasan lembur berikutnya.",
      "Gunakan Kalkulator Hak KontrakKu untuk menghitung akumulasi total nominal hak upah lembur yang belum terbayar.",
    ],
    templateTitle: "Draft Konfirmasi Jam Kerja & Pengajuan SPL Lembur",
    templateContent: `Yth. Bapak/Ibu [Nama Atasan / Manajer]
cc: Tim HRD [Nama Perusahaan]

Selamat pagi/siang,
Melalui email ini, saya ingin menyampaikan konfirmasi terkait penugasan pekerjaan [Nama Proyek / Tugas] yang memerlukan waktu kerja tambahan di luar jam kerja reguler kantor.

Mengingat batas waktu kerja baku saya berakhir pada pukul [Jam Pulang Kantor], saya siap mendukung penyelesaian tugas tersebut dengan ketentuan:
1. Diterbitkannya Surat Perintah Lembur (SPL) resmi sebagaimana diatur dalam Pasal 28 PP No. 35/2021.
2. Pencatatan jam lembur riil untuk diproses dalam komponen upah lembur bulan berjalan.

Hal ini penting bagi kita bersama untuk menjaga transparansi administrasi ketenagakerjaan dan akuntabilitas jam kerja. Mohon arahannya terkait persetujuan SPL tersebut agar penugasan dapat segera saya jalankan. Terima kasih atas pengertian Bapak/Ibu.

Salam hormat,
[Nama Lengkap Anda]
[Posisi Kerja]`,
  },
];

export default function PanduanNegosiasiView() {
  const [activeScenarioId, setActiveScenarioId] = useState<string>("penahanan-ijazah");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const activeScenario = SCENARIOS.find((s) => s.id === activeScenarioId) || SCENARIOS[0];

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="bg-[#f8f9fc] font-body-md text-body-md text-on-surface antialiased min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="w-full pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Header Hero */}
          <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-10 border border-surface-container-high/60 shadow-sm space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px]">record_voice_over</span>
              <span>Advokasi Taktis Pekerja Indonesia</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-on-surface tracking-tight">
              Panduan Negosiasi &amp; Template Bipartit Ketenagakerjaan
            </h1>
            <p className="text-sm sm:text-base text-on-surface-variant max-w-3xl leading-relaxed">
              Ketahui hak hukum Anda saat berhadapan dengan klausul perjanjian kerja yang merugikan. Lengkap dengan taktik perundingan dan draft komunikasi siap salin ke HRD/manajemen.
            </p>
          </div>

          {/* Scenario Selector Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {SCENARIOS.map((s) => {
              const isActive = activeScenarioId === s.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActiveScenarioId(s.id)}
                  className={`p-4 rounded-2xl text-left border transition-all space-y-2 ${
                    isActive
                      ? "bg-surface-container-lowest border-primary shadow-sm ring-2 ring-primary/15"
                      : "bg-surface-container-low/50 hover:bg-surface-container-lowest border-surface-container"
                  }`}
                >
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${s.badgeColor}`}>
                    {s.badge}
                  </span>
                  <h2 className="text-xs sm:text-sm font-bold text-on-surface line-clamp-2">
                    {s.title}
                  </h2>
                </button>
              );
            })}
          </div>

          {/* Active Scenario Detail Card */}
          <div className="grid grid-cols-12 gap-8 items-start">
            
            {/* Left 6 Cols: Legal Basis & Tactics */}
            <div className="col-span-12 lg:col-span-6 space-y-6">
              
              <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-8 border border-surface-container-high/60 shadow-sm space-y-5">
                <div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${activeScenario.badgeColor}`}>
                    {activeScenario.badge}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-on-surface mt-3 leading-snug">
                    {activeScenario.title}
                  </h2>
                </div>

                <div className="p-4 rounded-2xl bg-surface-container/40 border border-surface-container text-xs text-on-surface-variant space-y-1.5">
                  <span className="font-bold text-on-surface flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-error">warning</span>
                    Masalah yang Kerap Dihadapi:
                  </span>
                  <p className="leading-relaxed">{activeScenario.problem}</p>
                </div>

                <div className="p-4 rounded-2xl bg-primary/5 border border-primary/20 text-xs text-on-surface space-y-1.5">
                  <span className="font-bold text-primary flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">gavel</span>
                    Payung Regulasi &amp; Dasar Hukum:
                  </span>
                  <p className="leading-relaxed text-on-surface-variant">{activeScenario.legalBasis}</p>
                </div>

                <div className="space-y-3 pt-2">
                  <h3 className="text-sm font-bold text-on-surface flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px] text-secondary">psychology</span>
                    Langkah &amp; Taktik Perundingan:
                  </h3>
                  <ul className="space-y-2 text-xs text-on-surface-variant">
                    {activeScenario.tactics.map((tactic, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-primary/10 text-primary font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span className="leading-relaxed">{tactic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Cross-Link Callout to Calculator */}
              <div className="p-6 rounded-3xl bg-surface-container-lowest border border-surface-container-high/60 shadow-sm flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-on-surface">Hitung Hak Finansialmu Sekarang</h3>
                  <p className="text-xs text-on-surface-variant">
                    Simulasikan besaran rupiah hak Anda sebelum mengirimkan pesan negosiasi.
                  </p>
                </div>
                <Link
                  href="/hitung-hak-kerja"
                  className="px-4 py-2 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-colors shadow-xs shrink-0"
                >
                  Buka Kalkulator
                </Link>
              </div>

            </div>

            {/* Right 6 Cols: Ready-to-Copy Template */}
            <div className="col-span-12 lg:col-span-6 space-y-4">
              <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-8 border border-surface-container-high/60 shadow-sm space-y-4">
                <div className="flex items-center justify-between gap-2 border-b border-surface-container pb-3">
                  <div>
                    <h3 className="text-base font-bold text-on-surface">{activeScenario.templateTitle}</h3>
                    <span className="text-xs text-on-surface-variant">Bahasa formal, santun, dan berkekuatan hukum</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(activeScenario.id, activeScenario.templateContent)}
                    className="px-3.5 py-1.5 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-all flex items-center gap-1.5 shadow-xs shrink-0"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      {copiedId === activeScenario.id ? "check" : "content_copy"}
                    </span>
                    <span>{copiedId === activeScenario.id ? "Tersalin!" : "Salin Template"}</span>
                  </button>
                </div>

                <div className="p-4 rounded-2xl bg-surface-container/30 border border-surface-container font-mono text-xs text-on-surface leading-relaxed whitespace-pre-wrap max-h-[520px] overflow-y-auto">
                  {activeScenario.templateContent}
                </div>

                <div className="p-3 rounded-xl bg-surface-container/50 text-[11px] text-on-surface-variant flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-secondary">info</span>
                  <span>
                    Ganti teks di dalam kurung siku <strong>[seperti ini]</strong> dengan data riil Anda sebelum mengirim.
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
