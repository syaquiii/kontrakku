import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function BerandaView() {
  return (
    <div className="bg-[#f8f9fc] font-body-md text-body-md text-on-surface antialiased min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="w-full pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Hero Section: Focused, Calm, High-Impact */}
          <section className="bg-surface-container-lowest rounded-3xl p-8 sm:p-12 border border-surface-container-high/60 shadow-sm relative overflow-hidden">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Platform Perlindungan Hak Ketenagakerjaan
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-on-surface leading-[1.15]">
                Pahami kontrak kerjamu sebelum tanda tangan.
              </h1>

              <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
                Deteksi klausul pinalti sepihak, hitung uang kompensasi PKWT atau pesangon PHK secara akurat, dan konsultasikan masalah kerja di ruang aman anonim.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/analisis-kontrak"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-on-primary font-semibold hover:bg-primary/90 transition-all shadow-sm"
                >
                  <span className="material-symbols-outlined text-[20px]">upload_file</span>
                  <span>Periksa Kontrak Saya</span>
                </Link>

                <Link
                  href="/hitung-hak-kerja"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-surface-container text-on-surface font-semibold hover:bg-surface-container-high transition-all"
                >
                  <span className="material-symbols-outlined text-[20px]">calculate</span>
                  <span>Kalkulator Hak Kerja</span>
                </Link>
              </div>

              <div className="flex items-center gap-6 pt-4 text-xs text-on-surface-variant border-t border-surface-container/80">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-secondary">lock</span>
                  Data dokumen rahasia & tidak disimpan permanen
                </span>
                <span className="hidden sm:flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-secondary">gavel</span>
                  Merujuk UU Cipta Kerja & PP 35/2021
                </span>
              </div>
            </div>
          </section>

          {/* Core Modules: Clean 3-Column Layout without visual noise */}
          <section className="space-y-4">
            <div className="flex items-baseline justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-on-surface">Fitur Utama</h2>
                <p className="text-sm text-on-surface-variant mt-0.5">Instrumen praktis untuk meninjau dan mempertahankan hak kerja Anda</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {/* Card 1: Analisis Kontrak */}
              <Link
                href="/analisis-kontrak"
                className="group bg-surface-container-lowest p-6 rounded-2xl border border-surface-container-high/60 shadow-sm hover:border-primary/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[22px]">description</span>
                  </div>
                  <h3 className="text-base font-bold text-on-surface group-hover:text-primary transition-colors">
                    Audit Klausul Kontrak
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Identifikasi pasal berisiko: penahanan ijazah, denda resign dini, dan jam kerja yang melanggar hukum.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-surface-container/60 flex items-center justify-between text-xs font-bold text-primary">
                  <span>Mulai Audit Dokumen</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </Link>

              {/* Card 2: Kalkulator Hak */}
              <Link
                href="/hitung-hak-kerja"
                className="group bg-surface-container-lowest p-6 rounded-2xl border border-surface-container-high/60 shadow-sm hover:border-secondary/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[22px]">calculate</span>
                  </div>
                  <h3 className="text-base font-bold text-on-surface group-hover:text-secondary transition-colors">
                    Kalkulator Hak Kerja
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Hitung pasti uang kompensasi PKWT berakhir, pesangon PHK, dan simulasi lembur bulanan PP 35/2021.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-surface-container/60 flex items-center justify-between text-xs font-bold text-secondary">
                  <span>Hitung Sekarang</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </Link>

              {/* Card 3: Panduan Negosiasi */}
              <Link
                href="/panduan-negosiasi"
                className="group bg-surface-container-lowest p-6 rounded-2xl border border-surface-container-high/60 shadow-sm hover:border-primary/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[22px]">record_voice_over</span>
                  </div>
                  <h3 className="text-base font-bold text-on-surface group-hover:text-primary transition-colors">
                    Panduan &amp; Draft Negosiasi
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Template komunikasi santun &amp; berbobot hukum ke HRD untuk menolak tahan ijazah &amp; menuntut kompensasi.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-surface-container/60 flex items-center justify-between text-xs font-bold text-primary">
                  <span>Lihat Template Draft</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </Link>

              {/* Card 4: Forum Anonim */}
              <Link
                href="/forum-anonim"
                className="group bg-surface-container-lowest p-6 rounded-2xl border border-surface-container-high/60 shadow-sm hover:border-primary/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[22px]">forum</span>
                  </div>
                  <h3 className="text-base font-bold text-on-surface group-hover:text-primary transition-colors">
                    Forum Pekerja Anonim
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Tanyakan situasi kontrakmu atau baca pengalaman rekan kerja lain tanpa khawatir identitas asli bocor.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-surface-container/60 flex items-center justify-between text-xs font-bold text-primary">
                  <span>Buka Diskusi Komunitas</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </Link>

            </div>
          </section>

          {/* Quick Guidance / Workflow: Clear & reassuring */}
          <section className="bg-surface-container-lowest rounded-2xl p-8 border border-surface-container-high/60 shadow-sm">
            <h2 className="text-lg font-bold text-on-surface mb-6">Bagaimana KontrakKu Membantumu?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="text-primary font-bold text-lg">01. Unggah Kontrak</div>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Unggah draf kontrak kerja dalam format PDF atau ketik poin klausul yang ingin kamu periksa.
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-primary font-bold text-lg">02. Pemindaian Otomatis</div>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Sistem mengevaluasi klausul terhadap regulasi sah (UU Ciptaker & PP 35/2021) dan menandai poin berisiko.
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-primary font-bold text-lg">03. Rekomendasi Negosiasi</div>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Dapatkan usulan counter-draft sopan dan rasional untuk diajukan ke HRD sebelum penandatanganan.
                </p>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
