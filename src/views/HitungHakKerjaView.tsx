import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function HitungHakKerjaView() {
  return (
    <div className="bg-background font-body-md text-body-md text-on-surface antialiased">
      <Navbar />
      <main className="w-full pt-16 bg-background min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col w-full">

            <section className="bg-surface-container-lowest rounded-2xl p-7 shadow-sm mb-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container/10 text-primary-container font-label-sm text-label-sm uppercase">
                    <span className="material-symbols-outlined text-[16px]">verified</span>
                    Regulasi Terpadu Kemnaker RI
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface-variant">
                    Pembaruan 2025
                  </span>
                </div>
                <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">Kalkulator Hak Ketenagakerjaan Resmi</h1>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Simulasi perhitungan hak pesangon PHK, uang kompensasi PKWT, upah lembur resmi, dan THR berbasis parameter imperatif <strong className="text-on-surface font-semibold">PP No. 35/2021</strong> &amp; <strong className="text-on-surface font-semibold">PP No. 36/2021</strong>.
                </p>
              </div>

              <div className="bg-surface-container-low rounded-xl p-4 min-w-[320px] shrink-0 space-y-2 shadow-inner">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Wilayah Acuan Statutori</span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container/20 text-on-secondary-container font-label-sm text-label-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    Plafon Sah
                  </span>
                </div>
                <div className="relative">
                  <div className="flex items-center gap-2 bg-surface-container-lowest px-3.5 py-2.5 rounded-lg shadow-sm">
                    <span className="material-symbols-outlined text-primary-container text-[20px]">location_on</span>
                    <select defaultValue="5067381" className="w-full bg-transparent font-title-md text-title-md text-on-surface focus:outline-none cursor-pointer pr-4" id="select-umk">
                      <option value="5067381">DKI Jakarta 2025 - Rp 5.067.381</option>
                      <option value="5390000">Kota Bekasi 2025 - Rp 5.390.000</option>
                      <option value="5210000">Kab. Karawang 2025 - Rp 5.210.000</option>
                      <option value="4870000">Kota Surabaya 2025 - Rp 4.870.000</option>
                      <option value="3150000">Kota Semarang 2025 - Rp 3.150.000</option>
                    </select>
                  </div>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-primary">info</span>
                  Upah riil tidak boleh lebih rendah dari batas UMK wilayah ini.
                </p>
              </div>
            </section>

            <nav aria-label="Kategori Kalkulator" className="flex flex-wrap items-center gap-2.5 mb-8">
              <button className="calc-tab flex items-center gap-2 bg-primary-container text-on-primary px-5 py-2.5 rounded-xl font-label-lg text-label-lg shadow-sm hover:opacity-95 transition-all" id="tab-pkwt" type="button">
                <span className="material-symbols-outlined text-[18px]">history_edu</span>
                <span className="">Uang Kompensasi PKWT</span>
                <span className="text-[11px] bg-white/20 px-2 py-0.5 rounded-full font-label-sm">Kontrak Berakhir</span>
              </button>
              <button className="calc-tab flex items-center gap-2 bg-surface-container-lowest text-on-surface-variant px-5 py-2.5 rounded-xl font-label-lg text-label-lg shadow-sm hover:bg-surface-container transition-all" id="tab-phk" type="button">
                <span className="material-symbols-outlined text-[18px]">gavel</span>
                <span className="">Pesangon &amp; UPMH</span>
                <span className="text-[11px] bg-surface-container-high text-on-surface-variant px-2 py-0.5 rounded-full font-label-sm">PHK Sepihak</span>
              </button>
              <button className="calc-tab flex items-center gap-2 bg-surface-container-lowest text-on-surface-variant px-5 py-2.5 rounded-xl font-label-lg text-label-lg shadow-sm hover:bg-surface-container transition-all" id="tab-lembur" type="button">
                <span className="material-symbols-outlined text-[18px]">schedule</span>
                <span className="">Upah Kerja Lembur</span>
                <span className="text-[11px] bg-surface-container-high text-on-surface-variant px-2 py-0.5 rounded-full font-label-sm">Overtime</span>
              </button>
              <button className="calc-tab flex items-center gap-2 bg-surface-container-lowest text-on-surface-variant px-5 py-2.5 rounded-xl font-label-lg text-label-lg shadow-sm hover:bg-surface-container transition-all" id="tab-thr" type="button">
                <span className="material-symbols-outlined text-[18px]">redeem</span>
                <span className="">THR Keagamaan</span>
                <span className="text-[11px] bg-surface-container-high text-on-surface-variant px-2 py-0.5 rounded-full font-label-sm">Proporsional/Penuh</span>
              </button>
            </nav>

            <div className="grid grid-cols-12 gap-8 mb-10">

              <div className="col-span-12 xl:col-span-7 bg-surface-container-lowest p-7 lg:p-8 rounded-2xl shadow-sm flex flex-col justify-between gap-6">
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2.5 h-6 rounded-full bg-primary-container"></span>
                      <h2 className="font-headline-sm text-headline-sm text-on-surface">Parameter Kompensasi PKWT</h2>
                    </div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Pasal 15 PP 35/2021</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="font-title-md text-title-md text-on-surface" htmlFor="input-upah-pokok">Upah Pokok Bulanan</label>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Komponen Wajib (Min. 75% Total Gaji)</span>
                    </div>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 font-title-md text-title-md text-on-surface-variant">Rp</span>
                      <input className="w-full h-11 pl-12 pr-4 rounded-lg bg-surface-container-lowest text-on-surface font-title-md text-title-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-container" id="input-upah-pokok" min="0" placeholder="Contoh: 10000000" step="500000" type="number" defaultValue="10000000" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="font-title-md text-title-md text-on-surface" htmlFor="input-tunjangan-tetap">Tunjangan Tetap Bulanan</label>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Tunjangan Jabatan, Keluarga, dll</span>
                    </div>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 font-title-md text-title-md text-on-surface-variant">Rp</span>
                      <input className="w-full h-11 pl-12 pr-4 rounded-lg bg-surface-container-lowest text-on-surface font-title-md text-title-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-container" id="input-tunjangan-tetap" min="0" placeholder="Contoh: 2000000" step="250000" type="number" defaultValue="2000000" />
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-surface-container-high/60 text-on-surface">
                      <span className="font-label-md text-label-md">Total Upah Acuan Kompensasi (Gaji Pokok + Tunj. Tetap):</span>
                      <span className="font-title-md text-title-md text-primary font-bold" id="badge-total-upah">Rp&nbsp;12.000.000</span>
                    </div>
                  </div>

                  <div className="space-y-3 bg-surface-container-low p-4 rounded-xl">
                    <div className="flex justify-between items-center">
                      <label className="font-title-md text-title-md text-on-surface" htmlFor="slider-durasi">Durasi Kontrak Kerja yang Selesai</label>
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-container-lowest shadow-sm">
                        <span className="font-headline-sm text-headline-sm text-primary font-bold" id="label-durasi-display">12</span>
                        <span className="font-label-md text-label-md text-on-surface-variant">Bulan</span>
                      </div>
                    </div>
                    <input className="w-full h-2 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary-container" id="slider-durasi" max="60" min="1" type="range" defaultValue="12" />
                    <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant px-1">
                      <span className="">1 Bulan (Min. Hak Timbul)</span>
                      <span className="">12 Bulan (1 Thn Penuh)</span>
                      <span className="">24 Bulan</span>
                      <span className="">36 Bulan</span>
                      <span className="">60 Bulan (Maks. PKWT)</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <span className="font-title-md text-title-md text-on-surface block">Jenis Hubungan Kerja / Status Pengakhiran</span>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <label className="flex flex-col p-3 rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface-container transition-all">
                        <div className="flex items-center gap-2 mb-1">
                          <input defaultChecked className="accent-primary-container" name="pkwt_type" type="radio" value="normal" />
                          <span className="font-title-md text-title-md text-on-surface">PKWT Pertama</span>
                        </div>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">Selesai masa kontrak tepat waktu</span>
                      </label>
                      <label className="flex flex-col p-3 rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface-container transition-all">
                        <div className="flex items-center gap-2 mb-1">
                          <input className="accent-primary-container" name="pkwt_type" type="radio" value="perpanjangan" />
                          <span className="font-title-md text-title-md text-on-surface">Perpanjangan</span>
                        </div>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">Kompensasi periode addendum</span>
                      </label>
                      <label className="flex flex-col p-3 rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface-container transition-all">
                        <div className="flex items-center gap-2 mb-1">
                          <input className="accent-primary-container" name="pkwt_type" type="radio" value="pasal62" />
                          <span className="font-title-md text-title-md text-on-surface">Pasal 62 UU</span>
                        </div>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">Putus sebelum batas waktu</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                  <button className="w-full sm:w-auto flex-1 h-12 px-6 rounded-xl bg-secondary-container text-on-secondary-container font-title-md text-title-md font-bold shadow-md hover:bg-secondary-fixed-dim transition-all flex items-center justify-center gap-2" type="button">
                    <span className="material-symbols-outlined text-[20px]">calculate</span>
                    Hitung Hak Otomatis Sekarang
                  </button>
                  <button className="w-full sm:w-auto h-12 px-5 rounded-xl bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-all font-label-lg text-label-lg flex items-center justify-center gap-1.5" type="button">
                    <span className="material-symbols-outlined text-[18px]">restart_alt</span>
                    Reset Formulir
                  </button>
                </div>
              </div>

              <div className="col-span-12 xl:col-span-5 bg-surface-container-low p-7 lg:p-8 rounded-2xl shadow-sm flex flex-col justify-between gap-6">
                <div className="space-y-6">

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary-container text-[22px]">account_balance_wallet</span>
                      <span className="font-label-lg text-label-lg text-primary font-bold uppercase tracking-wide">Ringkasan Hak Finansial Sah</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-surface-container-lowest text-primary font-label-sm text-label-sm shadow-sm font-semibold">
                      Status: Imperatif
                    </span>
                  </div>

                  <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm relative overflow-hidden">
                    <div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full bg-primary-container/5 pointer-events-none"></div>
                    <div className="space-y-2 relative z-10">
                      <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider block">
                        Total Hak Kompensasi PKWT Wajib Dibayar:
                      </span>
                      <div className="font-headline-lg text-headline-lg text-primary font-extrabold tracking-tight" id="result-nominal-display">Rp&nbsp;12.000.000,00</div>
                      <div className="flex items-start gap-2 pt-2">
                        <span className="material-symbols-outlined text-emerald-600 text-[18px] shrink-0 mt-0.5">check_circle</span>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Wajib dibayarkan saat hubungan kerja kontrak berakhir <strong className="text-on-surface font-semibold">tanpa potongan penalti apapun</strong> oleh pengusaha (Pasal 15 PP 35/2021).
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-title-md text-title-md text-on-surface flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary-container text-[18px]">functions</span>
                        Rincian Rumus Statutori
                      </span>
                      <span className="font-label-sm text-label-sm text-primary font-semibold">PP 35/2021 Ps. 16</span>
                    </div>
                    <div className="bg-surface-container-low p-3.5 rounded-lg space-y-1.5 font-mono text-[13px] text-on-surface">
                      <div className="text-on-surface-variant text-[11px] font-sans font-medium uppercase tracking-wide">Kalkulasi Matematis:</div>
                      <div className="text-primary font-semibold" id="formula-text-breakdown">(12 Bulan / 12) × Rp&nbsp;12.000.000 = 1.00 × Rp&nbsp;12.000.000</div>
                      <div className="text-[12px] text-on-surface-variant font-sans pt-1">
                        Faktor Rasio: <strong className="text-on-surface font-semibold" id="ratio-factor-display">1.00 Kali Upah Bulanan Penuh</strong>
                      </div>
                    </div>

                    <div className="hidden p-3 rounded-lg bg-error-container/40 text-on-error-container space-y-1" id="pasal62-warning">
                      <div className="flex items-center gap-1.5 font-label-md text-label-md font-bold">
                        <span className="material-symbols-outlined text-[18px]">warning</span>
                        Klausul Ganti Rugi Pasal 62 UU Ketenagakerjaan
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Jika pemutusan sepihak dilakukan sebelum masa berakhir, pihak yang mengakhiri wajib membayar ganti rugi sisa masa kontrak selain uang kompensasi ini.
                      </p>
                    </div>

                    <div className="pt-2 space-y-2">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">Yurisdiksi &amp; Dasar Hukum:</span>
                      <ul className="space-y-1.5 font-body-sm text-body-sm text-on-surface">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                          <span className="">PP No. 35 Tahun 2021 Pasal 15 s.d. Pasal 17</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                          <span className="">UU No. 6 Tahun 2023 Penetapan Perppu Cipta Kerja</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <button className="w-full h-12 rounded-xl bg-primary-container text-on-primary font-title-md text-title-md shadow hover:bg-primary transition-all flex items-center justify-center gap-2" type="button">
                    <span className="material-symbols-outlined text-[20px]">description</span>
                    Generate Surat Klaim Hak Kompensasi (Word/PDF)
                  </button>
                  <a className="w-full h-11 rounded-xl bg-surface-container-lowest text-on-surface hover:bg-surface-container transition-all font-label-lg text-label-lg shadow-sm flex items-center justify-center gap-2" href="#lapor-disnaker">
                    <span className="material-symbols-outlined text-secondary text-[18px]">policy</span>
                    Laporkan ke Pengawas Ketenagakerjaan / Disnaker
                  </a>
                </div>
              </div>
            </div>

            <section className="bg-surface-container-lowest p-7 lg:p-8 rounded-2xl shadow-sm space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-6 rounded-full bg-secondary-container"></span>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">Tabel Rujukan Statutori Komparasi &amp; Upah Lembur</h2>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Standar perhitungan upah per jam resmi mengacu pada angka pembagi mutlak <strong className="text-on-surface font-semibold">1/173 kali upah bulanan</strong> sesuai Pasal 32 PP No. 35/2021.
                  </p>
                </div>

                <div className="flex items-center gap-4 bg-surface-container-low px-4 py-3 rounded-xl shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary-container">
                    <span className="material-symbols-outlined text-[24px]">timelapse</span>
                  </div>
                  <div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Upah Per Jam Anda</span>
                    <div className="font-title-md text-title-md text-primary font-bold" id="stat-hourly-rate">Rp&nbsp;69.364 / jam</div>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto rounded-xl">
                <table className="w-full text-left font-body-md text-body-md border-collapse">
                  <thead>
                    <tr className="bg-surface-container-high text-on-surface font-title-md text-title-md">
                      <th className="py-3.5 px-4 rounded-l-xl">Kategori Jam Lembur</th>
                      <th className="py-3.5 px-4">Pengali Statutori (PP 35/2021)</th>
                      <th className="py-3.5 px-4">Estimasi Hak Finansial Per Jam</th>
                      <th className="py-3.5 px-4">Batas Maksimum Regulasi</th>
                      <th className="py-3.5 px-4 rounded-r-xl">Ketentuan Khusus</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-container-high font-body-sm text-body-sm text-on-surface">

                    <tr className="hover:bg-surface-container-low transition-colors">
                      <td className="py-4 px-4 font-title-md text-title-md text-on-surface flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                        Hari Kerja Biasa (Jam Pertama)
                      </td>
                      <td className="py-4 px-4 font-semibold text-primary">1,5 × Upah Sejam</td>
                      <td className="py-4 px-4 font-bold text-on-surface" id="rate-jam-1">Rp&nbsp;104.046</td>
                      <td className="py-4 px-4 text-on-surface-variant">Maks. 4 Jam / Hari</td>
                      <td className="py-4 px-4 text-on-surface-variant">Wajib persetujuan tertulis pekerja (Pasal 28)</td>
                    </tr>

                    <tr className="hover:bg-surface-container-low transition-colors">
                      <td className="py-4 px-4 font-title-md text-title-md text-on-surface flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-secondary-container"></span>
                        Hari Kerja Biasa (Jam Kedua dst.)
                      </td>
                      <td className="py-4 px-4 font-semibold text-secondary">2,0 × Upah Sejam</td>
                      <td className="py-4 px-4 font-bold text-on-surface" id="rate-jam-2">Rp&nbsp;138.728</td>
                      <td className="py-4 px-4 text-on-surface-variant">Maks. 18 Jam / Minggu</td>
                      <td className="py-4 px-4 text-on-surface-variant">Disediakan makan/minum min 1.400 kkal jika ≥ 4 jam</td>
                    </tr>

                    <tr className="hover:bg-surface-container-low transition-colors">
                      <td className="py-4 px-4 font-title-md text-title-md text-on-surface flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-error"></span>
                        Hari Istirahat Mingguan / Libur Resmi
                      </td>
                      <td className="py-4 px-4 font-semibold text-error">2,0 × hingga 4,0 ×</td>
                      <td className="py-4 px-4 font-bold text-on-surface" id="rate-jam-libur">Rp&nbsp;138.728 - Rp&nbsp;277.456</td>
                      <td className="py-4 px-4 text-on-surface-variant">Sesuai shift 5 / 6 hari kerja</td>
                      <td className="py-4 px-4 text-on-surface-variant">Pengali berjenjang naik pada jam ke-8, 9, dan ke-10</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-3 text-on-surface-variant font-body-sm text-body-sm">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-primary">gavel</span>
                  <span className="">Pasal 185 UU Ketenagakerjaan: Pelanggaran pembayaran lembur dikenakan sanksi pidana kurungan &amp; denda hingga Rp 400 Juta.</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="font-label-md text-label-md text-primary font-bold hover:underline flex items-center gap-1" type="button">
                    Kembali ke Simulasi
                    <span className="material-symbols-outlined text-[16px]">arrow_upward</span>
                  </button>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
