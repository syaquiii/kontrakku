import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function KebijakanPrivasiView() {
  return (
    <div className="bg-[#f8f9fc] font-body-md text-body-md text-on-surface antialiased min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="w-full pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-10 border border-surface-container-high/60 shadow-sm space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px]">verified_user</span>
              <span>Kepatuhan UU PDP No. 27/2022</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-on-surface tracking-tight">
              Kebijakan Privasi &amp; Perlindungan Data
            </h1>
            <p className="text-xs sm:text-sm text-on-surface-variant">
              Terakhir diperbarui: 24 Oktober 2024 • Efektif berlaku untuk seluruh pengguna platform KontrakKu.
            </p>
          </div>

          <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-10 border border-surface-container-high/60 shadow-sm space-y-6 text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            
            <section className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-on-surface">1. Komitmen Kami</h2>
              <p>
                Platform <strong>KontrakKu</strong> berkomitmen penuh melindungi hak privasi dan kerahasiaan data setiap pekerja dan pencari kerja di Indonesia. Kami menyadari sensitivitas dokumen perjanjian kerja dan kendala ketenagakerjaan, sehingga perlindungan informasi Anda menjadi prioritas mutlak sistem kami.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-on-surface">2. Data yang Kami Kumpulkan</h2>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  <strong className="text-on-surface">Data Akun:</strong> Alamat email, nama lengkap, dan kredensial login yang dienkripsi secara aman melalui penyedia infrastruktur Supabase.
                </li>
                <li>
                  <strong className="text-on-surface">Data Wilayah &amp; Pekerjaan:</strong> Informasi provinsi, kota tempat bekerja, serta jenis hubungan kerja (PKWT/PKWTT/Freelance) semata-mata digunakan untuk mengaitkan besaran Upah Minimum Regional (UMK/UMP) secara presisi pada fitur kalkulasi.
                </li>
                <li>
                  <strong className="text-on-surface">Data Perhitungan Hak:</strong> Riwayat nominal gaji dan masa kerja yang Anda simpan untuk keperluan arsip pribadi Anda.
                </li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-on-surface">3. Prinsip Anonimitas Forum Diskusi</h2>
              <p>
                Di Forum Anonim KontrakKu, identitas asli Anda (nama dan email) <strong>tidak pernah dipublikasikan</strong> ke pengguna lain maupun pihak luar. Setiap aktivitas diskusi menggunakan identitas alias acak (misal: <em>#PekerjaJakarta21</em>) guna mencegah risiko pelacakan oleh pihak pemberi kerja.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-on-surface">4. Enkripsi dan Keamanan Berkas</h2>
              <p>
                Seluruh komunikasi data di platform KontrakKu dilindungi enkripsi SSL 256-bit standar industri perbankan. Berkas dokumen kontrak kerja yang Anda unggah disimpan dalam penyimpanan privat terenkripsi (private secure bucket) dengan kontrol akses Row Level Security (RLS) ketat yang hanya dapat diakses oleh akun Anda sendiri.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-on-surface">5. Hak Anda atas Data Pribadi</h2>
              <p>
                Sesuai dengan ketentuan Undang-Undang Perlindungan Data Pribadi (UU PDP No. 27/2022), Anda memiliki hak penuh untuk:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Mengakses dan memperbarui data profil Anda kapan saja melalui menu Profil.</li>
                <li>Menghapus riwayat perhitungan atau riwayat unggahan kontrak secara instan.</li>
                <li>Mengajukan permohonan penutupan akun permanen melalui kontak dukungan kami.</li>
              </ul>
            </section>

            <section className="space-y-2 pt-2 border-t border-surface-container">
              <h2 className="text-base sm:text-lg font-bold text-on-surface">6. Kontak Layanan Privasi</h2>
              <p>
                Bila Anda memiliki pertanyaan atau kekhawatiran terkait pengelolaan data pribadi Anda di KontrakKu, silakan hubungi Tim Perlindungan Data kami melalui email: <a href="mailto:privasi@kontrakku.id" className="text-primary font-bold hover:underline">privasi@kontrakku.id</a>.
              </p>
            </section>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
