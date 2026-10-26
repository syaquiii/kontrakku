"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getCurrentUser } from "@/actions/auth";
import { upgradeToProAction, processDonationAction } from "@/actions/payment";

export default function PricingView() {
  const [currentUser, setCurrentUser] = useState<{ id: string; email: string; name: string; plan: "free" | "pro" } | null>(null);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [donationModalOpen, setDonationModalOpen] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("QRIS");
  const [donationAmount, setDonationAmount] = useState<number>(25000);
  const [donorName, setDonorName] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [upgradeSuccess, setUpgradeSuccess] = useState(false);
  const [donationMessage, setDonationMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    getCurrentUser().then((user) => {
      if (user) {
        setCurrentUser({
          id: user.id,
          email: user.email,
          name: user.name,
          plan: user.plan,
        });
      }
    });
  }, []);

  const handleOpenCheckout = () => {
    setErrorMessage(null);
    if (!currentUser) {
      setErrorMessage("Silakan masuk (login) ke akun Anda terlebih dahulu untuk mengaktifkan paket Advokasi Penuh.");
      return;
    }
    setCheckoutModalOpen(true);
  };

  const handleConfirmUpgrade = async () => {
    setIsProcessing(true);
    setErrorMessage(null);

    const res = await upgradeToProAction(selectedMethod);
    setIsProcessing(false);

    if (res.error) {
      setErrorMessage(res.error);
      return;
    }

    if (res.success) {
      setUpgradeSuccess(true);
      if (currentUser) {
        setCurrentUser({ ...currentUser, plan: "pro" });
      }
      setTimeout(() => {
        setCheckoutModalOpen(false);
        setUpgradeSuccess(false);
      }, 2500);
    }
  };

  const handleProcessDonation = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    const res = await processDonationAction({
      amount: donationAmount,
      donorName,
      paymentMethod: selectedMethod,
    });
    setIsProcessing(false);
    setDonationMessage(res.message);
    setTimeout(() => {
      setDonationModalOpen(false);
      setDonationMessage(null);
    }, 4000);
  };

  return (
    <div className="bg-[#f8f9fc] font-body-md text-body-md text-on-surface antialiased min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="w-full pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Hero Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              <span>Transparansi Biaya &amp; Solidaritas Advokasi</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-on-surface tracking-tight leading-tight">
              Akses Hukum Kerja Terjangkau untuk Seluruh Pekerja
            </h1>
            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
              Kami percaya perlindungan hukum ketenagakerjaan adalah hak asasi setiap pekerja. Layanan inti kami selalu gratis, dengan opsi advokasi lengkap untuk perundingan yang lebih kuat.
            </p>

            {errorMessage && (
              <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-800 text-xs font-semibold flex items-center justify-between gap-2 max-w-xl mx-auto animate-in fade-in">
                <span>{errorMessage}</span>
                <Link href="/masuk" className="px-3 py-1 rounded-xl bg-red-600 text-white font-bold shrink-0">
                  Masuk Sekarang
                </Link>
              </div>
            )}
          </div>

          {/* Pricing Cards Comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
            
            {/* Card 1: Paket Gratis (Pekerja Mandiri) */}
            <div className="bg-surface-container-lowest rounded-3xl p-8 border border-surface-container-high/60 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-surface-container text-on-surface-variant text-xs font-bold uppercase tracking-wide">
                  Pekerja Mandiri
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-on-surface">Rp 0</span>
                    <span className="text-xs text-on-surface-variant font-medium">/ selamanya</span>
                  </div>
                  <p className="text-xs text-on-surface-variant mt-1.5 leading-relaxed">
                    Ideal untuk simulasi cepat hak kompensasi dan konsultasi kasus ketenagakerjaan sehari-hari.
                  </p>
                </div>

                <div className="pt-4 border-t border-surface-container space-y-3 text-xs text-on-surface-variant">
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-emerald-600 text-[18px]">check_circle</span>
                    <span>Kalkulator Kompensasi PKWT, Pesangon, Lembur, &amp; THR</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-emerald-600 text-[18px]">check_circle</span>
                    <span>Akses Kamus Hukum &amp; Glosarium Edukasi Lengkap</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-emerald-600 text-[18px]">check_circle</span>
                    <span>Tanya Jawab di Forum Komunitas Anonim Terproteksi</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-emerald-600 text-[18px]">check_circle</span>
                    <span>Simpan hingga 3 riwayat simulasi di akun Anda</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-emerald-600 text-[18px]">check_circle</span>
                    <span>Cetak lembar ringkasan perhitungan resmi</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-surface-container">
                <Link
                  href="/hitung-hak-kerja"
                  className="w-full py-3 rounded-2xl bg-surface-container text-on-surface font-bold text-xs hover:bg-surface-container-high transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Gunakan Layanan Gratis</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Card 2: Paket Advokasi Penuh (Pro) */}
            <div className="bg-surface-container-lowest rounded-3xl p-8 border-2 border-primary shadow-md flex flex-col justify-between space-y-6 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 rounded-full bg-primary text-white text-[11px] font-bold uppercase tracking-wider shadow-xs">
                  Paling Populer
                </span>
              </div>

              <div className="space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wide">
                  Advokasi Penuh
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-primary">Rp 29.000</span>
                    <span className="text-xs text-on-surface-variant font-medium">/ sekali bayar</span>
                  </div>
                  <p className="text-xs text-on-surface-variant mt-1.5 leading-relaxed">
                    Tanpa langganan bulanan berulang. Solusi tuntas bagi Anda yang sedang mempersiapkan perundingan atau klaim hak.
                  </p>
                </div>

                <div className="pt-4 border-t border-surface-container space-y-3 text-xs text-on-surface">
                  <div className="flex items-center gap-2.5 font-semibold">
                    <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                    <span>Seluruh Fitur Paket Mandiri (Gratis)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                    <span><strong>Simpan riwayat tak terbatas (Unlimited)</strong></span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                    <span><strong>Unduh Dokumen PDF Resmi Bebas Watermark</strong> untuk Disnaker</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                    <span><strong>Akses 15+ Template Draft Negosiasi Lengkap</strong> (Word &amp; WA)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                    <span>Prioritas kurasi tanggapan di Forum Diskusi Anonim</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                    <span>Lencana Anggota Advokasi Terverifikasi</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-surface-container">
                {currentUser?.plan === "pro" ? (
                  <div className="w-full py-3 rounded-2xl bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">check_circle</span>
                    <span>Paket Advokasi Penuh Aktif</span>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={handleOpenCheckout}
                    className="w-full py-3 rounded-2xl bg-primary text-white font-bold text-xs hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span className="material-symbols-outlined text-[18px]">shield</span>
                    <span>Aktifkan Advokasi Penuh — Rp 29.000</span>
                  </button>
                )}
              </div>
            </div>

          </div>

          {/* Solidarity Section: Tip Jar / Donasi Buruh */}
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary-container/20 to-surface-container-lowest rounded-3xl p-6 sm:p-10 border border-primary/20 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
                <span className="material-symbols-outlined text-[16px]">volunteer_activism</span>
                <span>Solidaritas Pekerja Independen</span>
              </div>
              <h3 className="text-xl font-bold text-on-surface">Dukung Keberlanjutan Platform KontrakKu</h3>
              <p className="text-xs text-on-surface-variant max-w-xl leading-relaxed">
                Platform ini beroperasi secara independen tanpa sponsor korporasi. Donasi sukarela Anda membantu biaya server, riset regulasi, dan menjaga platform tetap bebas dari iklan yang mengganggu.
              </p>
            </div>

            <div className="shrink-0">
              <button
                type="button"
                onClick={() => setDonationModalOpen(true)}
                className="px-6 py-3 rounded-2xl bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-all shadow-sm flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">favorite</span>
                <span>Kirim Donasi Solidaritas</span>
              </button>
            </div>
          </div>

        </div>
      </main>

      {/* Checkout Upgrade Modal */}
      {checkoutModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-surface-container space-y-6 animate-in zoom-in-95 duration-150">
            {upgradeSuccess ? (
              <div className="py-8 text-center space-y-4 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined text-[36px]">check_circle</span>
                </div>
                <h3 className="text-xl font-bold text-on-surface">Pembayaran Berhasil Dikonfirmasi!</h3>
                <p className="text-xs text-on-surface-variant">
                  Selamat! Akun Anda kini memiliki status <strong>Advokasi Penuh</strong>. Anda dapat menyimpan simulasi tak terbatas dan mengunduh berkas PDF resmi kapan saja.
                </p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between border-b border-surface-container pb-4">
                  <div>
                    <h3 className="text-lg font-bold text-on-surface">Aktivasi Advokasi Penuh</h3>
                    <span className="text-xs text-on-surface-variant">Pembayaran Satu Kali (One-Time)</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setCheckoutModalOpen(false)}
                    className="p-1 rounded-lg text-on-surface-variant hover:text-on-surface"
                  >
                    <span className="material-symbols-outlined text-[20px]">close</span>
                  </button>
                </div>

                <div className="p-4 rounded-2xl bg-surface-container/40 border border-surface-container space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-on-surface-variant">Item Pembelian:</span>
                    <span className="font-bold text-on-surface">Paket Advokasi Penuh</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-on-surface-variant">Masa Berlaku:</span>
                    <span className="font-semibold text-emerald-700">Seumur Hidup Akun</span>
                  </div>
                  <div className="flex justify-between text-base font-extrabold text-primary pt-2 border-t border-surface-container">
                    <span>Total Pembayaran:</span>
                    <span>Rp 29.000</span>
                  </div>
                </div>

                {/* Payment Method Selection */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-on-surface">Pilih Metode Pembayaran:</label>
                  <div className="grid grid-cols-3 gap-2">
                    {["QRIS", "BCA VA", "Mandiri VA"].map((method) => (
                      <button
                        key={method}
                        type="button"
                        onClick={() => setSelectedMethod(method)}
                        className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                          selectedMethod === method
                            ? "bg-primary text-white border-primary shadow-xs"
                            : "bg-surface-container/30 border-surface-container text-on-surface hover:bg-surface-container/60"
                        }`}
                      >
                        {method}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Simulated Payment Box */}
                <div className="p-4 rounded-2xl bg-surface-container/30 border border-surface-container text-center space-y-2">
                  {selectedMethod === "QRIS" ? (
                    <div>
                      <div className="w-32 h-32 mx-auto bg-white rounded-xl border border-surface-container-high flex flex-col items-center justify-center p-2 shadow-xs">
                        <span className="material-symbols-outlined text-[48px] text-on-surface">qr_code_2</span>
                        <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">QRIS STANDAR</span>
                      </div>
                      <p className="text-[11px] text-on-surface-variant mt-2">
                        Pindai QRIS menggunakan GoPay, OVO, Dana, ShopeePay, atau Mobile Banking
                      </p>
                    </div>
                  ) : (
                    <div>
                      <span className="text-[11px] text-on-surface-variant block">Nomor Virtual Account Simulasi:</span>
                      <span className="text-base font-mono font-bold text-primary block mt-1 tracking-wider">
                        8801-9238-4821-0012
                      </span>
                      <span className="text-[10px] text-gray-500 block mt-1">Dicek otomatis tanpa bukti transfer fisik</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setCheckoutModalOpen(false)}
                    className="flex-1 py-3 rounded-2xl border border-surface-container font-semibold text-xs text-on-surface hover:bg-surface-container"
                  >
                    Batal
                  </button>
                  <button
                    type="button"
                    disabled={isProcessing}
                    onClick={handleConfirmUpgrade}
                    className="flex-1 py-3 rounded-2xl bg-primary text-white font-bold text-xs hover:bg-primary/90 disabled:opacity-50 transition-all flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      {isProcessing ? "progress_activity" : "verified"}
                    </span>
                    <span>{isProcessing ? "Memproses..." : "Konfirmasi Bayar"}</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Donation / Tip Jar Modal */}
      {donationModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-surface-container space-y-6 animate-in zoom-in-95 duration-150">
            {donationMessage ? (
              <div className="py-6 text-center space-y-3 animate-in fade-in">
                <span className="material-symbols-outlined text-[40px] text-pink-600">volunteer_activism</span>
                <p className="text-xs sm:text-sm text-on-surface font-semibold leading-relaxed">
                  {donationMessage}
                </p>
              </div>
            ) : (
              <form onSubmit={handleProcessDonation} className="space-y-4">
                <div className="flex items-center justify-between border-b border-surface-container pb-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[20px] text-primary">favorite</span>
                    <h3 className="text-base font-bold text-on-surface">Donasi Solidaritas</h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setDonationModalOpen(false)}
                    className="p-1 rounded-lg text-on-surface-variant hover:text-on-surface"
                  >
                    <span className="material-symbols-outlined text-[20px]">close</span>
                  </button>
                </div>

                <div>
                  <label className="block text-xs font-bold text-on-surface mb-1">Nama Donatur (Boleh Anonim):</label>
                  <input
                    type="text"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    placeholder="Contoh: Pekerja Pabrik Bekasi / Hamba Allah"
                    className="w-full h-10 px-3.5 rounded-xl border border-surface-container bg-surface-container/20 text-xs text-on-surface focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-on-surface mb-1.5">Pilih Nominal Donasi:</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[10000, 25000, 50000].map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => setDonationAmount(amt)}
                        className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                          donationAmount === amt
                            ? "bg-primary text-white border-primary"
                            : "bg-surface-container/30 border-surface-container text-on-surface"
                        }`}
                      >
                        Rp {amt.toLocaleString("id-ID")}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-surface-container/40 border border-surface-container text-center">
                  <span className="text-[11px] text-on-surface-variant block">Metode Pembayaran:</span>
                  <span className="text-sm font-bold text-primary block mt-0.5">QRIS Instan (Semua E-Wallet)</span>
                  <span className="text-base font-black text-on-surface block mt-1">
                    Rp {donationAmount.toLocaleString("id-ID")}
                  </span>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setDonationModalOpen(false)}
                    className="flex-1 py-2.5 rounded-xl border border-surface-container font-semibold text-xs text-on-surface hover:bg-surface-container"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="flex-1 py-2.5 rounded-xl bg-primary text-white font-bold text-xs hover:bg-primary/90 disabled:opacity-50 transition-all flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>{isProcessing ? "Mengirim..." : "Kirim Donasi"}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
