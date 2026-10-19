import Link from "next/link";

export default function AnalisisKontrakView() {
  return (
    <div className="bg-background font-body-md text-body-md text-on-surface antialiased">
      <header className="fixed top-0 inset-x-0 z-50 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-20 max-w-7xl mx-auto px-6 flex items-center justify-between gap-4"><div className="flex items-center gap-3 shrink-0"><div className="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center shadow-sm"><span className="material-symbols-outlined text-on-primary text-[24px]">gavel</span></div><div className="flex flex-col"><span className="font-headline-sm text-headline-sm text-primary tracking-tight">KontrakKu</span><span className="font-label-sm text-label-sm tracking-wider uppercase text-on-surface-variant font-bold">Labor Law &amp; Audit</span></div></div><nav className="hidden xl:flex items-center gap-1.5 p-1 rounded-full bg-surface-container-low" data-active-classes="bg-primary-container text-on-primary font-title-md"><Link href="/" className="px-3.5 py-1.5 rounded-full font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all">Beranda</Link><Link href="/analisis-kontrak" aria-current="page" className="px-3.5 py-1.5 rounded-full transition-all bg-primary-container text-on-primary font-title-md">Analisis Kontrak</Link><Link href="/hitung-hak-kerja" className="px-3.5 py-1.5 rounded-full font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all">Hitung Hak Kerja</Link><Link href="/forum-anonim" className="px-3.5 py-1.5 rounded-full font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all">Forum Anonim</Link><Link href="/edukasi-glosarium" className="px-3.5 py-1.5 rounded-full font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all">Edukasi &amp; Glosarium</Link><Link href="/riwayat-profil" className="px-3.5 py-1.5 rounded-full font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all">Riwayat &amp; Profil</Link></nav><div className="flex items-center gap-3 shrink-0"><div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-high"><span className="w-2 h-2 rounded-full bg-secondary-container"></span><span className="font-label-sm text-label-sm font-bold text-on-surface">3 Kontrak Terverifikasi</span></div><div className="relative hidden md:block w-44 lg:w-48"><span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">search</span><input className="w-full pl-9 pr-3 py-1.5 rounded-full bg-surface-container-low font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary-container" placeholder="Cari klausul / UU..." type="text" /></div><div className="flex items-center gap-1"><button aria-label="Notifications" className="relative w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" type="button"><span className="material-symbols-outlined text-[20px]">notifications</span><span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-error ring-2 ring-surface-container-lowest"></span></button><button aria-label="Help &amp; FAQ" className="w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" type="button"><span className="material-symbols-outlined text-[20px]">help</span></button></div><div className="flex items-center gap-2 pl-2"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div><div className="hidden sm:flex flex-col text-left"><span className="font-label-md text-label-md text-on-surface font-semibold leading-tight">John Terry</span><span className="font-label-sm text-label-sm text-on-surface-variant leading-tight">Karyawan • DKI Jakarta</span></div></div></div></div></header><main className="w-full pt-20 bg-background min-h-screen"><div className="max-w-7xl mx-auto px-6 py-8"><div className="flex flex-col w-full">

        <section className="bg-surface-container-lowest p-6 rounded-xl shadow-sm mb-8 transition-all">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">

            <div className="flex flex-col gap-3 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-primary-container font-label-md text-label-md">
                  <span className="material-symbols-outlined text-[16px]">picture_as_pdf</span>
                  PKWTT_PT_Innoventum_Digital.pdf
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">• 1.8 MB • Diunggah 24 Okt 2024</span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span>
                  Audit Selesai (AI PP 35/2021 &amp; UU Ciptaker)
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">John Terry</h1>
                <span className="font-title-md text-title-md text-on-surface-variant">Senior Backend Engineer — Divisi Platform Core</span>
              </div>
              <div className="flex items-center gap-4 text-on-surface-variant font-body-sm text-body-sm">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-primary-container">domain</span>
                  PT Innoventum Digital Nusantara
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-primary-container">schedule</span>
                  Durasi Kontrak: PKWTT (Tetap)
                </span>
              </div>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap items-center gap-5 lg:pl-6 bg-surface-container-low lg:bg-transparent p-4 lg:p-0 rounded-xl">

              <div className="flex items-center gap-4 bg-surface-container-lowest px-4 py-3 rounded-xl shadow-sm">
                <div className="relative w-14 h-14 flex items-center justify-center">
                  <svg className="w-14 h-14 -rotate-90" viewBox="0 0 36 36">
                    <path className="text-surface-container-high" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5"></path>
                    <path className="text-secondary-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="68, 100" strokeLinecap="round" strokeWidth="3.5"></path>
                  </svg>
                  <span className="absolute font-headline-sm text-headline-sm text-on-surface">68</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Skor Kepatuhan</span>
                  <span className="inline-flex items-center gap-1 font-label-md text-label-md text-error font-semibold">
                    <span className="material-symbols-outlined text-[14px]">warning</span>
                    Risiko Klausul Sepihak
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">2 Klausul Berbahaya Ditemukan</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 w-full sm:w-auto">
                <button className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary-container text-on-primary font-label-lg text-label-lg hover:opacity-95 shadow-sm transition-all active:scale-[0.98]" id="btnDownloadAudit">
                  <span className="material-symbols-outlined text-[18px]">download</span>
                  Unduh Rekomendasi Audit (PDF)
                </button>
                <button className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-surface-container text-primary-container font-label-md text-label-md hover:bg-surface-container-high transition-all">
                  <span className="material-symbols-outlined text-[18px]">balance</span>
                  Bandingkan dengan UU 13/2003
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">

          <div className="lg:col-span-6 flex flex-col bg-surface-container-lowest p-6 rounded-xl shadow-sm min-h-[780px]">

            <div className="flex items-center justify-between pb-4 mb-4 bg-surface-container-low px-4 py-2.5 rounded-lg">
              <div className="flex items-center gap-2">
                <button className="w-8 h-8 rounded-lg bg-surface-container-lowest text-on-surface flex items-center justify-center hover:bg-surface-container transition-colors shadow-xs" title="Halaman Sebelumnya">
                  <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                </button>
                <span className="font-label-md text-label-md text-on-surface font-semibold px-2">Halaman 1 dari 8</span>
                <button className="w-8 h-8 rounded-lg bg-surface-container-lowest text-on-surface flex items-center justify-center hover:bg-surface-container transition-colors shadow-xs" title="Halaman Berikutnya">
                  <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                </button>
              </div>

              <div className="flex items-center gap-1 sm:gap-2">
                <div className="relative hidden sm:block">
                  <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[16px]">search</span>
                  <input className="w-36 lg:w-44 pl-8 pr-2 py-1 text-body-sm font-body-sm bg-surface-container-lowest rounded-md text-on-surface focus:outline-none focus:ring-1 focus:ring-primary-container" placeholder="Cari dalam dokumen..." type="text" />
                </div>
                <button className="w-8 h-8 rounded-lg bg-surface-container-lowest text-on-surface-variant flex items-center justify-center hover:text-on-surface hover:bg-surface-container" title="Perbesar">
                  <span className="material-symbols-outlined text-[18px]">zoom_in</span>
                </button>
                <button className="w-8 h-8 rounded-lg bg-surface-container-lowest text-on-surface-variant flex items-center justify-center hover:text-on-surface hover:bg-surface-container" title="Perkecil">
                  <span className="material-symbols-outlined text-[18px]">zoom_out</span>
                </button>
                <button className="w-8 h-8 rounded-lg bg-surface-container-lowest text-on-surface-variant flex items-center justify-center hover:text-on-surface hover:bg-surface-container" title="Layar Penuh">
                  <span className="material-symbols-outlined text-[18px]">fullscreen</span>
                </button>
              </div>
            </div>

            <div className="flex-1 bg-surface-container-low p-6 rounded-xl flex flex-col gap-6 overflow-y-auto max-h-[580px]">
              <div className="text-center pb-3">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Draft Resmi Perjanjian Kerja</span>
                <h2 className="font-title-md text-title-md text-on-surface mt-1">SURAT PERJANJIAN KERJA WAKTU TIDAK TERTENTU</h2>
                <span className="font-body-sm text-body-sm text-on-surface-variant">NOMOR: 412/HRD-INV/PKWTT/X/2024</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface leading-relaxed">
                Pada hari ini, Kamis tanggal dua puluh empat bulan Oktober tahun dua ribu dua puluh empat (24-10-2024), bertempat di Jakarta Selatan, para pihak yang bertanda tangan di bawah ini sepakat mengikatkan diri dalam hubungan industrial dengan butir-butir ketentuan sah berikut:
              </p>

              <div className="bg-surface-container-lowest p-4 rounded-xl shadow-xs transition-all hover:shadow-md cursor-pointer group">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-label-md text-label-md font-bold text-on-surface flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A]"></span>
                    Pasal 5 — Waktu Kerja &amp; Lembur
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#DCFCE7] text-[#16A34A] font-label-sm text-label-sm font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px]">check_circle</span>
                    Patuh Standar Regulasi
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface bg-[#16A34A]/5 p-3 rounded-lg leading-relaxed">
                  &quot;Waktu kerja bagi PIHAK KEDUA ditetapkan selama <strong>40 (empat puluh) jam per minggu</strong>, yang terbagi dalam 5 (lima) hari kerja operasional (Senin hingga Jumat, pukul 09.00 - 18.00 WIB termasuk 1 jam waktu istirahat). Kelebihan jam kerja akan diperhitungkan sebagai lembur berbayar sesuai ketentuan perundang-undangan ketenagakerjaan yang berlaku di Republik Indonesia.&quot;
                </p>
              </div>

              <div className="bg-surface-container-lowest p-4 rounded-xl shadow-xs transition-all hover:shadow-md cursor-pointer ring-2 ring-error/20" id="clause-penalty">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-label-md text-label-md font-bold text-on-surface flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-error"></span>
                    Pasal 8 Ayat 2 — Ikatan Waktu &amp; Ganti Rugi Resign
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px]">error</span>
                    Risiko Kritis Tinggi
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface bg-error-container/40 p-3 rounded-lg leading-relaxed">
                  &quot;PIHAK KEDUA dilarang secara mutlak mengajukan pengunduran diri secara sukarela dalam masa ikatan kerja <strong>24 (dua puluh empat) bulan pertama</strong>. Apabila terjadi pelanggaran ketentuan ini, PIHAK KEDUA berkewajiban membayarkan denda ganti rugi seketika sebesar <strong>6x (enam kali) gaji pokok bruto bulanan</strong> serta mengembalikan 100% total kumulatif tunjangan fasilitas yang pernah diterima.&quot;
                </p>
                <div className="mt-2.5 flex items-center gap-2 text-error font-label-sm text-label-sm font-semibold">
                  <span className="material-symbols-outlined text-[15px]">priority_high</span>
                  Deteksi AI: Potensi Denda Tak Proporsional Sebesar Rp 72.000.000
                </div>
              </div>

              <div className="bg-surface-container-lowest p-4 rounded-xl shadow-xs transition-all hover:shadow-md cursor-pointer" id="clause-diploma">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-label-md text-label-md font-bold text-on-surface flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary-container"></span>
                    Pasal 12 — Jaminan Dokumen Asli
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px]">warning</span>
                    Klausul Melanggar Edaran
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface bg-secondary-fixed/30 p-3 rounded-lg leading-relaxed">
                  &quot;PIHAK PERUSAHAAN berhak secara sah <strong>menahan dokumen Ijazah Asli pendidikan terakhir</strong> milik PIHAK KEDUA selama masa ikatan kerja berlangsung sebagai jaminan integritas operasional kerja tanpa adanya kompensasi premi asuransi atas risiko kerusakan, kehilangan, maupun bencana pada berkas fisik.&quot;
                </p>
                <div className="mt-2.5 flex items-center gap-2 text-secondary font-label-sm text-label-sm font-semibold">
                  <span className="material-symbols-outlined text-[15px]">info</span>
                  Deteksi AI: Menahan Ijazah tanpa dasar klausul ganti rugi simpan adalah cacat prosedur
                </div>
              </div>

              <div className="bg-surface-container-lowest p-4 rounded-xl shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-label-md text-label-md font-bold text-on-surface">Pasal 15 — Kerahasiaan Informasi (NDA)</span>
                  <span className="text-on-surface-variant font-label-sm text-label-sm">Standar Industri</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  &quot;PIHAK KEDUA bersedia menjaga kerahasiaan proprietary software, source code, data klien, serta data finansial perseroan yang diakses selama menjalankan kewajiban profesional...&quot;
                </p>
              </div>
            </div>

            <div className="mt-4 p-4 rounded-xl bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary-container shrink-0 shadow-xs">
                  <span className="material-symbols-outlined text-[20px]">upload_file</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md text-on-surface font-semibold">Ada Addendum atau Perubahan Draft?</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Tarik file PDF versi revisi untuk perbandingan diff instan</span>
                </div>
              </div>
              <button className="px-3.5 py-1.5 rounded-lg bg-surface-container-lowest text-primary font-label-md text-label-md hover:bg-surface-container font-semibold shrink-0 shadow-xs transition-all">
                Pilih File Baru
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col space-y-6">

            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              <button className="px-3.5 py-1.5 rounded-full bg-primary-container text-on-primary font-label-md text-label-md font-semibold transition-all shrink-0" id="filter-all">
                Semua Temuan (3)
              </button>
              <button className="px-3.5 py-1.5 rounded-full bg-surface-container text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-high transition-all shrink-0" id="filter-risk">
                Klausul Berisiko (2)
              </button>
              <button className="px-3.5 py-1.5 rounded-full bg-surface-container text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-high transition-all shrink-0" id="filter-negotiation">
                Langkah Negosiasi (3)
              </button>
              <button className="px-3.5 py-1.5 rounded-full bg-surface-container text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-high transition-all shrink-0" id="filter-statute">
                Dasar Hukum UU
              </button>
            </div>

            <div className="bg-error-container/30 rounded-xl p-5 shadow-xs transition-all duration-200" id="finding-critical">

              <div className="flex items-start justify-between gap-4 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-error text-on-error flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[18px]">gavel</span>
                  </div>
                  <div>
                    <span className="font-label-sm text-label-sm uppercase font-bold text-error tracking-wide">Peringatan Kritis Ketenagakerjaan</span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">Pinalti Resign Tidak Wajar (Rp 72.000.000)</h3>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-error text-on-error font-label-sm text-label-sm font-bold">Pasal 8 Ayat 2</span>
              </div>

              <div className="space-y-3 pt-3 font-body-md text-body-md text-on-surface">
                <p className="leading-relaxed">
                  Ketentuan penalti sebesar <strong>6x upah bulanan</strong> serta pengembalian seluruh tunjangan tanpa mempertimbangkan biaya investasi riil perusahaan (misalnya pelatihan bersertifikasi resmi) berpotensi melanggar <strong>Pasal 1338 KUHPerdata</strong> (Asas Itikad Baik &amp; Kepatutan) dan batasan ganti rugi dalam <strong>PP No. 35/2021</strong>.
                </p>

                <div className="bg-surface-container-lowest p-3.5 rounded-lg">
                  <span className="font-label-sm text-label-sm text-primary font-bold block mb-1">Rujukan Dasar Hukum RI:</span>
                  <ul className="text-body-sm font-body-sm text-on-surface-variant space-y-1 list-disc list-inside">
                    <li className="">Pasal 1338 ayat (3) KUHPerdata: Suatu perjanjian harus dilaksanakan dengan itikad baik.</li>
                    <li className="">Pasal 62 UU Ketenagakerjaan No. 13/2003: Batasan penalti dibatasi hanya pada sisa upah proporsional jika tanpa pelatihan khusus.</li>
                  </ul>
                </div>

                <div className="bg-surface-container-high/60 p-4 rounded-xl flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-primary-container font-label-md text-label-md font-bold"><span className="material-symbols-outlined text-[18px]">lightbulb</span> Rekomendasi Klausul Standar Regulasi:</div>
                  <p className="font-body-sm text-body-sm text-on-surface">
                    Ajukan adendum agar denda hanya berupa <em>&quot;penggantian biaya sertifikasi yang dibuktikan dengan kuitansi sah (at-cost)&quot;</em> yang terdepresiasi secara berkala setiap bulan bekerja.
                  </p>
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <button className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary font-semibold transition-all">
                      <span className="material-symbols-outlined text-[16px]">content_copy</span>
                      Salin Draf Surat Negosiasi HR
                    </button>
                    <button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md hover:bg-surface-container transition-all">
                      <span className="material-symbols-outlined text-[16px]">visibility</span>
                      Lihat Contoh Klausul Tandingan
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary-fixed/40 rounded-xl p-5 shadow-xs transition-all duration-200" id="finding-ambiguous">

              <div className="flex items-start justify-between gap-4 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[18px]">lock</span>
                  </div>
                  <div>
                    <span className="font-label-sm text-label-sm uppercase font-bold text-secondary tracking-wide">Pelanggaran Hak Pribadi</span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">KLAUSUL ILEGAL: Penahanan Ijazah Asli</h3>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold">Pasal 12</span>
              </div>

              <div className="space-y-3 pt-3 font-body-md text-body-md text-on-surface">
                <p className="leading-relaxed">
                  Kemenaker melalui <strong>Surat Edaran Dirjen PHI No. B.174/PHIJSK/VII/2018</strong> melarang praktik penahanan ijazah tanpa kesepakatan tertulis mengenai resiko ganti rugi, ruang penyimpanan tahan api/bencana, dan sertifikasi asuransi. Selain itu, bertentangan dengan semangat perlindungan aset dokumen esensial di bawah <strong>UU PDP No. 27/2022</strong>.
                </p>

                <div className="bg-surface-container-lowest p-4 rounded-xl flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-on-secondary-container font-label-md text-label-md font-bold">
                    <span className="material-symbols-outlined text-[18px]">verified</span>
                    Solusi Negosiasi Aman:
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Tawarkan penyerahan <strong>Salinan Ijazah Legalisir Basah Notaris</strong> atau penyerahan e-Certificate terverifikasi PDDikti Kemendikbudristek sebagai pengganti jaminan fisik.
                  </p>
                  <div className="flex items-center gap-2 pt-1">
                    <button className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary font-semibold transition-all">
                      <span className="material-symbols-outlined text-[16px]">content_copy</span>
                      Salin Argumen Hukum Penolakan Ijazah
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-xl p-5 shadow-xs" id="finding-compliant">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[16px]">check</span>
                  </div>
                  <span className="font-title-md text-title-md text-on-surface">Klausul Jam Kerja (Pasal 5) Sudah Sesuai Standar</span>
                </div>
                <span className="font-label-sm text-label-sm text-[#16A34A] font-semibold bg-[#DCFCE7] px-2.5 py-0.5 rounded-full">Sesuai PP 35/2021</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">

              <div className="bg-surface-container p-4 rounded-xl flex flex-col justify-between gap-3 shadow-xs hover:shadow-sm transition-all">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary-container text-on-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">forum</span>
                  </div>
                  <div>
                    <h4 className="font-title-md text-title-md text-on-surface">Panduan Negosiasi Bipartit</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Pelajari teknik diplomasi &amp; kalimat argumen taktis untuk berunding mandiri bersama HR.</p>
                  </div>
                </div>
                <Link href="/panduan-negosiasi" className="inline-flex items-center justify-between px-3 py-2 rounded-lg bg-surface-container-lowest text-primary font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-all">
                  <span className="">Buka Panduan Diplomasi</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>

              <div className="bg-surface-container-high p-4 rounded-xl flex flex-col justify-between gap-3 shadow-xs hover:shadow-sm transition-all"><div className="flex items-start gap-3"><div className="w-9 h-9 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0"><span className="material-symbols-outlined text-[20px]">description</span></div><div><h4 className="font-title-md text-title-md text-on-surface">Template Surat Bipartit</h4><p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Unduh format resmi draf perundingan dan somasi mandiri untuk diajukan ke HR / manajemen perusahaan.</p></div></div><button className="inline-flex items-center justify-between px-3 py-2 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:opacity-90 transition-all"><span className="">Unduh Draf Word/PDF</span><span className="material-symbols-outlined text-[16px]">download</span></button></div>
            </div>
          </div>
        </div>

        <textarea
          className="hidden"
          id="draft-penalty"
          defaultValue={`Yth. Tim People Operation / HR PT Innoventum Digital Nusantara,

Menindaklanjuti draf PKWTT (No: 412/HRD-INV/PKWTT/X/2024), khususnya pada Pasal 8 Ayat 2 mengenai ketentuan denda pengunduran diri 6x upah bulanan:

Dengan merujuk pada asas kepatutan Pasal 1338 KUHPerdata serta praktik regulasi hubungan industrial yang proporsional, saya bermaksud memohon penyesuaian klausul ganti rugi tersebut. Saya mengusulkan klausul penggantian berbasis 'actual costs' (biaya riil pelatihan/sertifikasi spesifik perusahaan) yang telah disepakati sebelumnya dan didepresiasi secara proporsional sesuai masa kerja, alih-alih denda nominal tetap tanpa rincian biaya langsung.

Saya sangat antusias untuk bergabung dan berkontribusi secara optimal bersama tim Platform Core, dan berharap penyelarasan draf ini dapat disepakati bersama dengan itikad baik.

Hormat saya,
John Terry`}
        />
        <textarea
          className="hidden"
          id="draft-diploma"
          defaultValue={`Yth. Manajemen HRD PT Innoventum Digital Nusantara,

Terkait ketentuan Pasal 12 draf PKWTT perihal penyerahan Ijazah Asli:
Mempertimbangkan Surat Edaran Kemenaker No. B.174/PHIJSK/VII/2018 dan ketentuan perlindungan dokumen krusial di bawah UU Perlindungan Data Pribadi (UU No. 27/2022), saya bersedia menyerahkan Salinan Ijazah Legalisir Basah Notaris atau Sertifikat Digital PDDikti sebagai jaminan verifikasi kualifikasi pendidikan saya.

Mohon pertimbangan Bapak/Ibu demi kelancaran administrasi kepatuhan hukum kedua belah pihak. Terima kasih atas pengertiannya.`}
        />

        <div className="fixed bottom-6 right-6 z-50 transform translate-y-20 opacity-0 transition-all duration-300 bg-inverse-surface text-inverse-on-surface px-4 py-3 rounded-xl shadow-lg flex items-center gap-3" id="toastNotification">
          <span className="material-symbols-outlined text-secondary-fixed-dim text-[20px]">done_all</span>
          <span className="font-body-sm text-body-sm" id="toastMsg">Draf surat negosiasi berhasil disalin ke clipboard!</span>
        </div>


      </div>
      </div></main><footer className="w-full bg-surface-container-low py-10"><div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4"><div className="flex items-center gap-2"><span className="material-symbols-outlined text-primary-container text-[20px]">verified_user</span><span className="font-body-sm text-body-sm text-on-surface-variant">Kepatuhan Regulasi: <strong className="text-on-surface font-semibold">UU PDP No. 27/2022 Terjamin</strong></span></div><div className="flex items-center gap-6"><Link href="/kebijakan-privasi" className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors">Kebijakan Privasi</Link><Link href="/syarat-ketentuan" className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors">Syarat &amp; Ketentuan</Link><span className="font-body-sm text-body-sm text-on-surface-variant">© 2024 KontrakKu. Hak Cipta Dilindungi.</span></div></div></footer>
    </div>
  );
}
