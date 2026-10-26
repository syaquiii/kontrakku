import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function SyaratKetentuanView() {
  return (
    <div className="bg-[#f8f9fc] font-body-md text-body-md text-on-surface antialiased min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="w-full pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-10 border border-surface-container-high/60 shadow-sm space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px]">gavel</span>
              <span>Syarat &amp; Ketentuan Layanan</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-on-surface tracking-tight">
              Syarat &amp; Ketentuan Penggunaan
            </h1>
            <p className="text-xs sm:text-sm text-on-surface-variant">
              Terakhir diperbarui: 24 Oktober 2024 • Mohon dibaca secara seksama sebelum menggunakan layanan KontrakKu.
            </p>
          </div>

          <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-10 border border-surface-container-high/60 shadow-sm space-y-6 text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            
            <section className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-on-surface">1. Ketentuan Umum &amp; Penerimaan Layanan</h2>
              <p>
                Dengan mendaftar, mengakses, atau menggunakan platform <strong>KontrakKu</strong>, Anda menyatakan telah membaca, memahami, dan menyetujui untuk terikat oleh Syarat dan Ketentuan ini serta Kebijakan Privasi kami. Jika Anda tidak menyetujui salah satu klausul di bawah ini, Anda dipersilakan untuk tidak melanjutkan penggunaan platform.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-on-surface">2. Sifat Layanan &amp; Penafian Hukum (Disclaimer)</h2>
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 space-y-1.5">
                <span className="font-bold flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px] text-amber-700">info</span>
                  Pemberitahuan Penting:
                </span>
                <p>
                  Platform KontrakKu adalah perangkat teknologi hukum (LegalTech) yang dirancang untuk memberikan edukasi, simulasi matematis hak ketenagakerjaan, dan analisis klausul kontrak berdasarkan perundang-undangan Republik Indonesia (khususnya UU Ketenagakerjaan No. 13/2003 dan PP No. 35/2021). 
                </p>
                <p>
                  Informasi, lembar kalkulasi, dan template negosiasi yang dihasilkan <strong>bersifat edukatif dan alat bantu advokasi mandiri</strong>, serta tidak dapat diartikan sebagai hubungan resmi antara advokat dan klien atau pengganti nasihat perwakilan hukum di Pengadilan Hubungan Industrial (PHI).
                </p>
              </div>
            </section>

            <section className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-on-surface">3. Tata Tertib Komunitas Forum Anonim</h2>
              <p>
                Forum Diskusi Pekerja disediakan sebagai ruang aman untuk berbagi kendala ketenagakerjaan. Pengguna wajib mematuhi aturan berikut:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Menyamarkan nama entitas perusahaan atau pihak ketiga (contoh: gunakan sebutan <em>PT X</em> atau <em>Perusahaan Y</em>) guna menghindari potensi tuduhan pencemaran nama baik.</li>
                <li>Dilarang mengunggah informasi rahasia dagang, kode sumber internal, atau rahasia bisnis terlarang.</li>
                <li>Dilarang menyebarkan ujaran kebencian, diskriminasi SARA, pelecehan, atau konten ilegal.</li>
                <li>KontrakKu berhak memoderasi, menyembunyikan, atau menghapus postingan yang melanggar aturan ini.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-on-surface">4. Kepemilikan Dokumen &amp; Hak Kekayaan Intelektual</h2>
              <p>
                Pengguna tetap memegang hak milik penuh atas dokumen yang diunggah ke platform. KontrakKu tidak mengklaim kepemilikan atas berkas kontrak atau naskah Anda dan hanya memprosesnya untuk keperluan analisis teknis yang Anda minta.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-on-surface">5. Batasan Tanggung Jawab</h2>
              <p>
                KontrakKu tidak bertanggung jawab atas kerugian tidak langsung, putusan pengadilan, atau sanksi perselisihan hubungan kerja yang timbul dari keputusan negosiasi yang diambil pengguna berdasarkan simulasi di platform ini tanpa konsultasi lanjutan kepada instansi resmi ketenagakerjaan (Disnaker/LBH).
              </p>
            </section>

            <section className="space-y-2 pt-2 border-t border-surface-container">
              <h2 className="text-base sm:text-lg font-bold text-on-surface">6. Perubahan Ketentuan</h2>
              <p>
                Kami dapat memperbarui Syarat dan Ketentuan ini dari waktu ke waktu sesuai dengan perkembangan regulasi ketenagakerjaan di Indonesia. Perubahan material akan diumumkan melalui situs web kami.
              </p>
            </section>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
