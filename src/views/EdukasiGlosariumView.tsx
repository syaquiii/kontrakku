"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface GlossaryItem {
  id: string;
  term: string;
  category: "PKWT & Kontrak" | "Gaji & Upah Minimum" | "PHK & Pesangon" | "Hak Cuti & Lembur" | "Sengketa Bipartit";
  tag: string;
  tagColor?: string;
  definition: string;
  legalBasis: string;
  advice: string;
}

const GLOSSARY_DATA: GlossaryItem[] = [
  {
    id: "alih-daya",
    term: "Alih Daya (Outsourcing)",
    category: "PKWT & Kontrak",
    tag: "PP 35/2021",
    definition: "Hubungan kerja antara pekerja dengan perusahaan penyedia jasa pekerja (vendor) untuk melaksanakan sebagian pekerjaan pada perusahaan pemberi kerja. Wajib memenuhi asas Transfer of Undertaking Protection of Employment (TUPE).",
    legalBasis: "Bab IV PP No. 35/2021 & UU No. 6/2023",
    advice: "Pastikan kontrak outsourcing Anda menjamin kelanjutan masa kerja jika terjadi pergantian vendor penyedia jasa untuk pekerjaan yang sifatnya terus-menerus.",
  },
  {
    id: "bipartit",
    term: "Bipartit (Perundingan)",
    category: "Sengketa Bipartit",
    tag: "Penyelesaian Perselisihan",
    definition: "Perundingan musyawarah langsung antara pekerja/serikat pekerja dengan pengusaha untuk menyelesaikan perselisihan hubungan kerja sebelum menempuh jalur mediasi Disnaker.",
    legalBasis: "UU No. 2 Tahun 2004 tentang PPHI",
    advice: "Wajib dibuatkan Risalah Bipartit tertulis yang ditandatangani kedua belah pihak maksimal dalam jangka waktu 30 hari kerja sebagai syarat sah sebelum melapor ke Disnaker.",
  },
  {
    id: "denda-resign",
    term: "Ganti Rugi / Pinalti Resign Dini",
    category: "PKWT & Kontrak",
    tag: "Pasal 62 UU Ketenagakerjaan",
    definition: "Kewajiban pihak yang mengakhiri kontrak PKWT sebelum waktunya untuk membayar sisa upah hingga masa kontrak berakhir, kecuali pengusaha telah melanggar kewajiban normatifnya terlebih dahulu.",
    legalBasis: "Pasal 62 UU No. 13/2003",
    advice: "Jika Anda terpaksa resign dini karena upah lembur tidak dibayar atau keselamatan kerja dilanggar, penalti tidak dapat dituntut sepihak oleh perusahaan karena asas timbal balik perjanjian.",
  },
  {
    id: "cuti-tahunan",
    term: "Hak Cuti Tahunan",
    category: "Hak Cuti & Lembur",
    tag: "Min. 12 Hari Kerja",
    definition: "Hak istirahat berbayar bagi pekerja yang telah bekerja selama 12 bulan secara terus-menerus, dengan jumlah sekurang-kurangnya 12 hari kerja tanpa potongan gaji.",
    legalBasis: "Pasal 79 UU No. 13/2003 jo. UU Cipta Kerja",
    advice: "Cuti tahunan yang belum gugur dan belum diambil saat terjadi PHK/selesai kontrak wajib dikompensasikan ke dalam bentuk uang penggantian hak.",
  },
  {
    id: "kompensasi-pkwt",
    term: "Kompensasi PKWT",
    category: "PKWT & Kontrak",
    tag: "Wajib Tiap Kontrak Habis",
    definition: "Uang kompensasi yang wajib diberikan pengusaha kepada pekerja kontrak (PKWT) yang telah mempunyai masa kerja minimal 1 bulan pada saat jangka waktu kontrak berakhir.",
    legalBasis: "Pasal 15, 16, & 17 PP No. 35/2021",
    advice: "Rumus kompensasi adalah: (Masa Kerja dalam Bulan / 12) × 1 Bulan Upah. Hak ini tetap wajib dibayar meskipun pekerja menolak tawaran perpanjangan kontrak.",
  },
  {
    id: "masa-percobaan",
    term: "Masa Percobaan (Probation)",
    category: "PKWT & Kontrak",
    tag: "Hanya untuk PKWTT",
    definition: "Jangka waktu evaluasi kinerja maksimal 3 bulan yang hanya sah diterapkan pada perjanjian kerja tetap (PKWTT). Dilarang keras mensyaratkan masa percobaan pada kontrak PKWT.",
    legalBasis: "Pasal 58 UU Ketenagakerjaan",
    advice: "Jika kontrak PKWT Anda mencantumkan klausul masa percobaan (probation), maka secara hukum klausul tersebut batal demi hukum dan masa kerja tetap dihitung sejak hari pertama.",
  },
  {
    id: "penahanan-ijazah",
    term: "Penahanan Ijazah / Dokumen Asli",
    category: "PKWT & Kontrak",
    tag: "Klausul Berisiko Tinggi",
    definition: "Praktik pengusaha menahan berkas asli (ijazah/KTP) sebagai jaminan kerja atau penalti. Tidak diatur dan tidak memiliki dasar hukum statutory dalam undang-undang ketenagakerjaan RI.",
    legalBasis: "Pasal 1320 & 1337 KUHPerdata, UU HAM No. 39/1999",
    advice: "Anda berhak menolak penyerahan ijazah asli dan menawarkan fotokopi legalisir notaris/universitas. Penahanan dokumen tanpa tanda terima resmi dapat diadukan ke Disnaker.",
  },
  {
    id: "pesangon-up",
    term: "Pesangon & Uang Penghargaan Masa Kerja (UPMK)",
    category: "PHK & Pesangon",
    tag: "Hak Statuter PHK",
    definition: "Kompensasi wajib yang dibayarkan pengusaha saat terjadi PHK, terdiri dari Uang Pesangon (UP), Uang Penghargaan Masa Kerja (UPMK), dan Uang Penggantian Hak (UPH).",
    legalBasis: "Pasal 40-59 PP No. 35/2021",
    advice: "Besaran faktor pengali pesangon bergantung pada alasan PHK (efisiensi rugi 0.5x, peleburan usaha 0.75x, pensiun 1.75x, atau perusahaan tutup).",
  },
  {
    id: "pkwt-definisi",
    term: "PKWT (Perjanjian Kerja Waktu Tertentu)",
    category: "PKWT & Kontrak",
    tag: "Maks. 5 Tahun",
    definition: "Perjanjian kerja antara pekerja dengan pengusaha untuk pekerjaan yang selesai dalam waktu tertentu. PKWT tidak boleh diadakan untuk pekerjaan yang bersifat tetap.",
    legalBasis: "Pasal 56-59 UU No. 13/2003 jo. PP 35/2021",
    advice: "Jangka waktu keseluruhan PKWT beserta perpanjangannya tidak boleh melebihi 5 tahun. Jika dilanggar, status kontrak secara hukum demi hukum berubah menjadi karyawan tetap (PKWTT).",
  },
  {
    id: "pkwtt-definisi",
    term: "PKWTT (Perjanjian Kerja Waktu Tidak Tertentu)",
    category: "PKWT & Kontrak",
    tag: "Karyawan Tetap",
    definition: "Perjanjian kerja untuk mengadakan hubungan kerja yang bersifat tetap tanpa batasan tanggal berakhirnya kontrak sampai usia pensiun atau terjadi PHK sah.",
    legalBasis: "Pasal 60 & 61 UU No. 13/2003",
    advice: "PKWTT dapat dibuat secara lisan maupun tertulis. Jika dibuat lisan, pengusaha wajib menerbitkan Surat Pengangkatan Kerja tertulis.",
  },
  {
    id: "skorsing",
    term: "Skorsing Kerja",
    category: "Sengketa Bipartit",
    tag: "Upah Tetap Wajib Cair",
    definition: "Pemberhentian sementara pekerja dari tugas kedinasan selama proses pemutusan hubungan kerja atau investigasi pelanggaran berat sedang berlangsung.",
    legalBasis: "Pasal 157A UU Cipta Kerja",
    advice: "Selama masa skorsing, pengusaha tetap wajib membayarkan upah beserta hak-hak lainnya yang biasa diterima pekerja secara utuh 100%.",
  },
  {
    id: "surat-perintah-lembur",
    term: "Surat Perintah Lembur (SPL)",
    category: "Hak Cuti & Lembur",
    tag: "Syarat Sah Lembur",
    definition: "Instruksi tertulis resmi dari pemberi kerja dan persetujuan tertulis pekerja untuk melakukan kerja melebihi waktu kerja baku reguler.",
    legalBasis: "Pasal 28 PP No. 35/2021",
    advice: "Kerja lembur tanpa persetujuan pekerja dilarang undang-undang, kecuali untuk pekerjaan darurat bencana. Batas lembur maksimal 4 jam sehari atau 18 jam seminggu.",
  },
  {
    id: "thr-keagamaan",
    term: "Tunjangan Hari Raya (THR)",
    category: "Gaji & Upah Minimum",
    tag: "H-7 Hari Raya",
    definition: "Pendapatan non-upah yang wajib dibayarkan oleh pengusaha kepada pekerja menjelang hari raya keagamaan yang dianut masing-masing pekerja.",
    legalBasis: "Permenaker No. 6 Tahun 2016",
    advice: "Pekerja dengan masa kerja 1 bulan secara terus-menerus sudah berhak menerima THR secara proporsional. Terlambat membayar didenda 5% dari total THR.",
  },
  {
    id: "umk-ump",
    term: "Upah Minimum Regional (UMK / UMP)",
    category: "Gaji & Upah Minimum",
    tag: "Batas Jaring Pengaman",
    definition: "Upah bulanan terendah yang ditetapkan gubernur sebagai jaring pengaman bagi pekerja dengan masa kerja kurang dari 1 tahun di suatu wilayah kota/kabupaten.",
    legalBasis: "PP No. 51 Tahun 2023",
    advice: "Pengusaha dilarang keras membayar upah lebih rendah dari upah minimum. Tindakan membayar di bawah UMK merupakan tindak pidana kejahatan ketenagakerjaan.",
  },
  {
    id: "upah-lembur",
    term: "Upah Kerja Lembur",
    category: "Hak Cuti & Lembur",
    tag: "Rumus 1/173 Upah",
    definition: "Upah tambahan yang wajib dibayar atas pekerjaan di luar batas 40 jam seminggu. 1 jam pertama di hari kerja dinilai 1.5x upah per jam, jam selanjutnya 2x.",
    legalBasis: "Pasal 31-34 PP No. 35/2021",
    advice: "Upah lembur per jam dihitung dengan rumus baku: 1/173 × Upah Bulanan (Gaji Pokok + Tunjangan Tetap). Hitung estimasi presisinya di Kalkulator Hak KontrakKu.",
  },
];

const CATEGORIES = [
  "Semua Topik",
  "PKWT & Kontrak",
  "Gaji & Upah Minimum",
  "PHK & Pesangon",
  "Hak Cuti & Lembur",
  "Sengketa Bipartit",
] as const;

const ALPHABETS = ["Semua", "A", "B", "C", "D", "G", "H", "K", "M", "P", "S", "T", "U"];

export default function EdukasiGlosariumView() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua Topik");
  const [selectedLetter, setSelectedLetter] = useState<string>("Semua");
  const [expandedId, setExpandedId] = useState<string | null>("kompensasi-pkwt");

  const filteredItems = useMemo(() => {
    return GLOSSARY_DATA.filter((item) => {
      // Filter by category
      if (selectedCategory !== "Semua Topik" && item.category !== selectedCategory) {
        return false;
      }

      // Filter by alphabet
      if (selectedLetter !== "Semua") {
        if (!item.term.toUpperCase().startsWith(selectedLetter)) {
          return false;
        }
      }

      // Filter by search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesTerm = item.term.toLowerCase().includes(query);
        const matchesDef = item.definition.toLowerCase().includes(query);
        const matchesBasis = item.legalBasis.toLowerCase().includes(query);
        return matchesTerm || matchesDef || matchesBasis;
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedLetter]);

  return (
    <div className="bg-[#f8f9fc] font-body-md text-body-md text-on-surface antialiased min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="w-full pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Header & Search Hero */}
          <section className="bg-surface-container-lowest p-6 sm:p-10 rounded-3xl border border-surface-container-high/60 shadow-sm relative overflow-hidden">
            <div className="relative z-10 flex flex-col gap-6">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
                    <span className="material-symbols-outlined text-[16px]">menu_book</span>
                    <span>Pusat Pengetahuan Hak Tenaga Kerja</span>
                  </div>
                  <h1 className="text-2xl sm:text-4xl font-extrabold text-on-surface tracking-tight mb-2">
                    Edukasi Ketenagakerjaan &amp; Glosarium Hukum
                  </h1>
                  <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                    Pahami klausul hukum formal dalam bahasa yang lugas, transparan, dan terlindungi rujukan undang-undang sah Republik Indonesia.
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-surface-container/60 border border-surface-container">
                    <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center font-bold">
                      <span className="material-symbols-outlined text-[20px]">library_books</span>
                    </div>
                    <div>
                      <div className="text-base font-bold text-on-surface">{GLOSSARY_DATA.length} Istilah</div>
                      <span className="text-[11px] text-on-surface-variant">Tervalidasi PP 35/2021</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instant Search Bar */}
              <div className="relative w-full">
                <div className="flex items-center gap-3 p-2 rounded-2xl bg-surface-container/60 border border-surface-container-high focus-within:border-primary focus-within:bg-white transition-all">
                  <span className="material-symbols-outlined text-on-surface-variant text-[22px] pl-3">search</span>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari istilah hukum (contoh: PKWT, Pesangon, Penahanan Ijazah, Lembur)..."
                    className="w-full bg-transparent text-sm text-on-surface placeholder:text-outline focus:outline-none py-1.5"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="p-1 hover:text-on-surface text-on-surface-variant transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px]">close</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Category Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(cat);
                      setSelectedLetter("Semua");
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                      selectedCategory === cat
                        ? "bg-primary text-on-primary shadow-xs"
                        : "bg-surface-container/60 text-on-surface-variant hover:bg-surface-container hover:text-on-surface border border-surface-container"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Main Grid: Glossary Explorer (Left) & Practical Guides (Right) */}
          <div className="grid grid-cols-12 gap-8 items-start">
            
            {/* Left 7 Cols: Interactive Glossary */}
            <div className="col-span-12 lg:col-span-7 space-y-4 bg-surface-container-lowest p-6 rounded-3xl border border-surface-container-high/60 shadow-sm">
              <div className="flex items-center justify-between pb-2 border-b border-surface-container">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[22px]">spellcheck</span>
                  <h2 className="text-lg font-bold text-on-surface">Kamus Hukum Interaktif</h2>
                </div>
                <span className="text-xs text-on-surface-variant font-medium">
                  {filteredItems.length} hasil ditemukan
                </span>
              </div>

              {/* Alphabet Filters */}
              <div className="py-2 overflow-x-auto scrollbar-none flex items-center gap-1.5 bg-surface-container/40 p-2 rounded-2xl">
                {ALPHABETS.map((letter) => (
                  <button
                    key={letter}
                    type="button"
                    onClick={() => setSelectedLetter(letter)}
                    className={`h-8 px-2.5 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 transition-all ${
                      selectedLetter === letter
                        ? "bg-primary text-white shadow-xs"
                        : "text-on-surface-variant hover:bg-surface-container"
                    }`}
                  >
                    {letter}
                  </button>
                ))}
              </div>

              {/* Term List */}
              {filteredItems.length === 0 ? (
                <div className="p-8 text-center text-xs text-on-surface-variant space-y-2">
                  <span className="material-symbols-outlined text-[32px] text-outline">search_off</span>
                  <p className="font-semibold text-on-surface">Istilah tidak ditemukan untuk kata kunci tersebut.</p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("Semua Topik");
                      setSelectedLetter("Semua");
                    }}
                    className="text-primary font-bold hover:underline"
                  >
                    Reset Filter
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredItems.map((item) => {
                    const isExpanded = expandedId === item.id;

                    return (
                      <article
                        key={item.id}
                        onClick={() => setExpandedId(isExpanded ? null : item.id)}
                        className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                          isExpanded
                            ? "bg-surface-container-lowest border-primary/40 shadow-xs"
                            : "bg-surface-container-low/50 hover:bg-surface-container-low border-surface-container"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-on-surface">{item.term}</span>
                            <span className="material-symbols-outlined text-[16px] text-on-surface-variant transition-transform">
                              {isExpanded ? "expand_less" : "expand_more"}
                            </span>
                          </div>
                          <span className="px-2.5 py-0.5 rounded-full bg-surface-container text-primary font-semibold text-[11px] shrink-0">
                            {item.tag}
                          </span>
                        </div>

                        <p className="text-xs text-on-surface-variant leading-relaxed mt-2">
                          {item.definition}
                        </p>

                        {/* Expanded Details */}
                        {isExpanded && (
                          <div className="mt-3 pt-3 border-t border-surface-container space-y-2.5 animate-in fade-in duration-150">
                            <div className="flex items-start gap-2 text-xs">
                              <span className="material-symbols-outlined text-[16px] text-primary shrink-0 mt-0.5">gavel</span>
                              <div>
                                <span className="font-bold text-on-surface">Dasar Regulasi: </span>
                                <span className="text-on-surface-variant">{item.legalBasis}</span>
                              </div>
                            </div>
                            <div className="p-3 rounded-xl bg-primary/5 border border-primary/15 text-xs space-y-1">
                              <span className="font-bold text-primary flex items-center gap-1">
                                <span className="material-symbols-outlined text-[16px]">tips_and_updates</span>
                                Rekomendasi Taktis Pekerja:
                              </span>
                              <p className="text-on-surface leading-relaxed">{item.advice}</p>
                            </div>
                          </div>
                        )}
                      </article>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Right 5 Cols: Tactical Guides & Tool CTAs */}
            <div className="col-span-12 lg:col-span-5 space-y-6">
              
              {/* Feature Article Card */}
              <div className="bg-surface-container-lowest rounded-3xl p-6 border border-surface-container-high/60 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-xs text-primary font-bold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[18px]">article</span>
                  <span>Panduan Hukum Unggulan</span>
                </div>
                <h3 className="text-lg font-bold text-on-surface leading-snug">
                  Hak Karyawan Kontrak yang Di-PHK Sepihak Sebelum Kontrak Habis
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Perusahaan yang memutuskan hubungan kerja PKWT sebelum batas waktu berakhir diwajibkan membayar sisa upah bulan berjalan hingga akhir durasi kontrak, ditambah uang kompensasi prorata sesuai masa bakti yang telah diselesaikan.
                </p>
                <div className="p-3.5 rounded-2xl bg-surface-container/60 border-l-4 border-primary text-xs italic text-on-surface">
                  “Pasal 62 UU No. 13/2003: Pihak yang mengakhiri hubungan kerja sebelum berakhirnya jangka waktu wajib membayar ganti rugi sebesar upah pekerja sampai batas waktu berakhirnya kontrak.”
                </div>
                <div className="pt-2 flex items-center justify-between">
                  <Link
                    href="/panduan-negosiasi"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                  >
                    <span>Pelajari Cara Negosiasi</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                  <Link
                    href="/hitung-hak-kerja"
                    className="px-3.5 py-1.5 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-colors shadow-xs"
                  >
                    Hitung Hak
                  </Link>
                </div>
              </div>

              {/* Action Banner: Check Calculator */}
              <div className="p-6 rounded-3xl bg-primary text-on-primary space-y-4 shadow-sm relative overflow-hidden">
                <div className="relative z-10 space-y-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-white text-[11px] font-bold uppercase tracking-wider">
                    Simulasi Otomatis
                  </span>
                  <h4 className="text-lg font-bold">Kalkulator Hak Tenaga Kerja</h4>
                  <p className="text-xs text-primary-fixed leading-relaxed opacity-90">
                    Ketahui persis nilai rupiah hak kompensasi PKWT, pesangon PHK, upah lembur, dan THR Anda sesuai PP 35/2021 dalam 30 detik.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/hitung-hak-kerja"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-primary text-xs font-bold hover:bg-white/90 transition-all shadow-sm"
                    >
                      <span>Buka Kalkulator Hak</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Community Question Prompt */}
              <div className="p-6 rounded-3xl bg-surface-container-lowest border border-surface-container-high/60 shadow-sm space-y-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px] text-secondary">forum</span>
                  <h4 className="text-sm font-bold text-on-surface">Punya Masalah Kontrak Spesifik?</h4>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Tanyakan langsung ke komunitas sesama pekerja dan kurator regulasi di Forum Anonim tanpa perlu khawatir identitas Anda bocor.
                </p>
                <Link
                  href="/forum-anonim"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline pt-1"
                >
                  <span>Buka Forum Diskusi Anonim</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>

            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
