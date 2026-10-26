import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <div className="bg-[#f8f9fc] font-body-md text-body-md text-on-surface antialiased min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="w-full pt-28 pb-20 flex-1 flex items-center justify-center">
        <div className="max-w-md mx-auto px-6 text-center space-y-5">
          <div className="w-20 h-20 rounded-3xl bg-primary/10 text-primary flex items-center justify-center mx-auto shadow-xs">
            <span className="material-symbols-outlined text-[42px]">gavel</span>
          </div>

          <div className="space-y-2">
            <span className="text-4xl sm:text-5xl font-black text-primary tracking-tight">404</span>
            <h1 className="text-xl sm:text-2xl font-bold text-on-surface">Halaman Tidak Ditemukan</h1>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Halaman yang Anda tuju mungkin telah dipindahkan, diubah tautannya, atau tidak tersedia.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-all shadow-xs"
            >
              Kembali ke Beranda
            </Link>
            <Link
              href="/hitung-hak-kerja"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-surface-container bg-surface-container-lowest text-on-surface text-xs font-bold hover:bg-surface-container transition-all"
            >
              Kalkulator Hak
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
