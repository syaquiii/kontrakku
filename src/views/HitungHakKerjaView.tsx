"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { saveCalculationAction } from "@/actions/calculation";

type CalcType = "pkwt" | "phk" | "lembur" | "thr";

export default function HitungHakKerjaView() {
  const [activeTab, setActiveTab] = useState<CalcType>("pkwt");
  const [baseSalary, setBaseSalary] = useState<number>(10000000);
  const [fixedAllowance, setFixedAllowance] = useState<number>(2000000);
  const [durationMonths, setDurationMonths] = useState<number>(12);
  const [overtimeHours, setOvertimeHours] = useState<number>(10);
  const [showLegalDetails, setShowLegalDetails] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [loginPromptOpen, setLoginPromptOpen] = useState(false);


  // Total wage base
  const totalWage = useMemo(() => {
    return Math.max(0, (baseSalary || 0) + (fixedAllowance || 0));
  }, [baseSalary, fixedAllowance]);

  // Calculations based on PP 35/2021
  const calculationResult = useMemo(() => {
    switch (activeTab) {
      case "pkwt": {
        // Kompensasi PKWT: (Masa kerja dalam bulan / 12) * 1 bulan upah
        const amount = Math.round((durationMonths / 12) * totalWage);
        return {
          title: "Uang Kompensasi PKWT",
          amount,
          ratio: (durationMonths / 12).toFixed(2),
          formula: `(${durationMonths} Bulan / 12) × Rp ${totalWage.toLocaleString("id-ID")}`,
          rule: "Pasal 15 s.d. 17 PP No. 35/2021",
          note: "Wajib dibayarkan saat jangka waktu PKWT berakhir, minimal telah bekerja 1 bulan penuh secara berturut-turut.",
        };
      }
      case "phk": {
        // Standar pesangon dasar berdasarkan masa kerja
        let severanceMultiplier = 1;
        if (durationMonths >= 96) severanceMultiplier = 9; // >= 8 tahun
        else if (durationMonths >= 84) severanceMultiplier = 8;
        else if (durationMonths >= 72) severanceMultiplier = 7;
        else if (durationMonths >= 60) severanceMultiplier = 6;
        else if (durationMonths >= 48) severanceMultiplier = 5;
        else if (durationMonths >= 36) severanceMultiplier = 4;
        else if (durationMonths >= 24) severanceMultiplier = 3;
        else if (durationMonths >= 12) severanceMultiplier = 2;
        else severanceMultiplier = 1;

        const amount = Math.round(severanceMultiplier * totalWage);
        return {
          title: "Estimasi Uang Pesangon Pokok (UP)",
          amount,
          ratio: `${severanceMultiplier}x Upah`,
          formula: `${severanceMultiplier} × Rp ${totalWage.toLocaleString("id-ID")}`,
          rule: "Pasal 40 ayat (2) PP No. 35/2021",
          note: "Nominal ini adalah uang pesangon pokok (belum termasuk Uang Penghargaan Masa Kerja atau Uang Penggantian Hak jika berlaku).",
        };
      }
      case "lembur": {
        // Upah sejam = 1/173 x upah sebulan
        const hourlyRate = Math.round(totalWage / 173);
        // Estimasi lembur hari biasa: 1 jam pertama (1.5x), jam berikutnya (2x)
        const firstHourRate = Math.round(hourlyRate * 1.5);
        const nextHourRate = Math.round(hourlyRate * 2.0);
        const amount = overtimeHours > 0
          ? firstHourRate + Math.max(0, overtimeHours - 1) * nextHourRate
          : 0;

        return {
          title: "Estimasi Upah Lembur",
          amount,
          ratio: `Rp ${hourlyRate.toLocaleString("id-ID")} / jam`,
          formula: `1/173 × Upah Bulanan × Koefisien Jam Lembur (${overtimeHours} Jam)`,
          rule: "Pasal 31 & 32 PP No. 35/2021",
          note: "1 jam pertama di hari kerja dihitung 1,5x upah per jam, jam selanjutnya dihitung 2x upah per jam.",
        };
      }
      case "thr": {
        // THR: jika >= 12 bulan dapat 1 bulan upah, jika < 12 bulan proporsional (bulan/12 * upah)
        const factor = durationMonths >= 12 ? 1 : durationMonths / 12;
        const amount = Math.round(factor * totalWage);
        return {
          title: "Tunjangan Hari Raya (THR)",
          amount,
          ratio: durationMonths >= 12 ? "1 Bulan Penuh" : `${(durationMonths / 12).toFixed(2)} Proporsional`,
          formula: durationMonths >= 12
            ? `1 Bulan Gaji Penuh (Rp ${totalWage.toLocaleString("id-ID")})`
            : `(${durationMonths} Bulan / 12) × Rp ${totalWage.toLocaleString("id-ID")}`,
          rule: "Permenaker No. 6 Tahun 2016",
          note: "Wajib dibayarkan paling lambat 7 hari sebelum hari raya keagamaan.",
        };
      }
    }
  }, [activeTab, durationMonths, totalWage, overtimeHours]);

  const handleCopy = () => {
    const text = `${calculationResult.title}: Rp ${calculationResult.amount.toLocaleString("id-ID")}\nFormula: ${calculationResult.formula}\nDasar Hukum: ${calculationResult.rule}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSaveCalculation = async () => {
    setIsSaving(true);
    setSaveError(null);
    setSaveSuccess(false);

    const typeMapping: Record<CalcType, "pkwt_compensation" | "severance_pay" | "overtime" | "thr"> = {
      pkwt: "pkwt_compensation",
      phk: "severance_pay",
      lembur: "overtime",
      thr: "thr",
    };

    const res = await saveCalculationAction({
      calcType: typeMapping[activeTab],
      baseSalary,
      fixedAllowance,
      durationMonths,
      resultTotal: calculationResult.amount,
      breakdownDetail: {
        title: calculationResult.title,
        ratio: calculationResult.ratio,
        formula: calculationResult.formula,
        rule: calculationResult.rule,
        note: calculationResult.note,
        overtimeHours: activeTab === "lembur" ? overtimeHours : undefined,
      },
    });

    setIsSaving(false);

    if (res.requireLogin) {
      setLoginPromptOpen(true);
      return;
    }

    if (res.error) {
      setSaveError(res.error);
      return;
    }

    if (res.success) {
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 5000);
    }
  };


  return (
    <div className="bg-[#f8f9fc] font-body-md text-body-md text-on-surface antialiased min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="w-full pt-20 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Header: Clean & Uncluttered */}
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-on-surface">
              Kalkulator Hak Tenaga Kerja
            </h1>
            <p className="text-sm sm:text-base text-on-surface-variant max-w-2xl">
              Hitung estimasi hak finansialmu secara transparan sesuai regulasi PP No. 35/2021 & UU Cipta Kerja.
            </p>
          </div>

          {/* Clean Segmented Tab Control */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-surface-container/60 p-1.5 rounded-2xl border border-surface-container-high/60">
            <button
              onClick={() => setActiveTab("pkwt")}
              className={`py-2.5 px-4 rounded-xl text-sm font-semibold transition-all ${
                activeTab === "pkwt"
                  ? "bg-surface-container-lowest text-primary shadow-sm"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              Kompensasi PKWT
            </button>

            <button
              onClick={() => setActiveTab("phk")}
              className={`py-2.5 px-4 rounded-xl text-sm font-semibold transition-all ${
                activeTab === "phk"
                  ? "bg-surface-container-lowest text-primary shadow-sm"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              Pesangon PHK
            </button>

            <button
              onClick={() => setActiveTab("lembur")}
              className={`py-2.5 px-4 rounded-xl text-sm font-semibold transition-all ${
                activeTab === "lembur"
                  ? "bg-surface-container-lowest text-primary shadow-sm"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              Upah Lembur
            </button>

            <button
              onClick={() => setActiveTab("thr")}
              className={`py-2.5 px-4 rounded-xl text-sm font-semibold transition-all ${
                activeTab === "thr"
                  ? "bg-surface-container-lowest text-primary shadow-sm"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              THR Keagamaan
            </button>
          </div>

          {/* 2-Column Responsive Layout: Inputs on Left, Result on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Form Inputs (7 Cols) */}
            <div className="lg:col-span-7 bg-surface-container-lowest p-6 sm:p-8 rounded-2xl border border-surface-container-high/60 shadow-sm space-y-6">
              <h2 className="text-base font-bold text-on-surface">Data Gaji & Masa Kerja</h2>

              {/* Gaji Pokok */}
              <div className="space-y-1.5">
                <label htmlFor="baseSalary" className="text-sm font-semibold text-on-surface flex justify-between">
                  <span>Gaji Pokok Bulanan</span>
                  <span className="text-xs text-on-surface-variant font-normal">Komponen Utama</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-on-surface-variant font-medium">Rp</span>
                  <input
                    id="baseSalary"
                    type="number"
                    value={baseSalary || ""}
                    onChange={(e) => setBaseSalary(Number(e.target.value))}
                    step="500000"
                    placeholder="10000000"
                    className="w-full h-11 pl-11 pr-4 rounded-xl border border-surface-container-high bg-surface-container-lowest text-on-surface text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              {/* Tunjangan Tetap */}
              <div className="space-y-1.5">
                <label htmlFor="fixedAllowance" className="text-sm font-semibold text-on-surface flex justify-between">
                  <span>Tunjangan Tetap Bulanan</span>
                  <span className="text-xs text-on-surface-variant font-normal">Jabatan, Kehadiran Tetap, dll</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-on-surface-variant font-medium">Rp</span>
                  <input
                    id="fixedAllowance"
                    type="number"
                    value={fixedAllowance || ""}
                    onChange={(e) => setFixedAllowance(Number(e.target.value))}
                    step="250000"
                    placeholder="2000000"
                    className="w-full h-11 pl-11 pr-4 rounded-xl border border-surface-container-high bg-surface-container-lowest text-on-surface text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              {/* Masa Kerja (Slider + Input) */}
              <div className="space-y-2 pt-2 border-t border-surface-container/60">
                <div className="flex justify-between items-center text-sm font-semibold text-on-surface">
                  <label htmlFor="durationMonths">Masa Kerja yang Telah Dijalani</label>
                  <span className="text-primary font-bold">{durationMonths} Bulan</span>
                </div>
                <input
                  id="durationMonths"
                  type="range"
                  min="1"
                  max="60"
                  value={durationMonths}
                  onChange={(e) => setDurationMonths(Number(e.target.value))}
                  className="w-full h-2 bg-surface-container-high rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-xs text-on-surface-variant">
                  <span>1 Bulan</span>
                  <span>12 Bulan (1 Thn)</span>
                  <span>24 Bulan</span>
                  <span>36 Bulan</span>
                  <span>60 Bulan</span>
                </div>
              </div>

              {/* Overtime input when tab is lembur */}
              {activeTab === "lembur" && (
                <div className="space-y-1.5 pt-2 border-t border-surface-container/60">
                  <label htmlFor="overtimeHours" className="text-sm font-semibold text-on-surface flex justify-between">
                    <span>Estimasi Jam Lembur dalam 1 Bulan</span>
                    <span className="text-xs text-on-surface-variant font-normal">Maks. 18 Jam/Pekan</span>
                  </label>
                  <div className="relative">
                    <input
                      id="overtimeHours"
                      type="number"
                      min="1"
                      max="100"
                      value={overtimeHours || ""}
                      onChange={(e) => setOvertimeHours(Number(e.target.value))}
                      placeholder="10"
                      className="w-full h-11 px-4 rounded-xl border border-surface-container-high bg-surface-container-lowest text-on-surface text-sm focus:outline-none focus:border-primary transition-colors"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-on-surface-variant">Jam</span>
                  </div>
                </div>
              )}

              {/* Acuan Total Gaji Ringkasan */}
              <div className="p-3.5 rounded-xl bg-surface-container/50 flex items-center justify-between text-xs sm:text-sm">
                <span className="text-on-surface-variant">Total Upah Acuan (Pokok + Tunjangan):</span>
                <span className="font-bold text-on-surface">Rp {totalWage.toLocaleString("id-ID")}</span>
              </div>
            </div>

            {/* Result Card (5 Cols, Sticky) */}
            <div className="lg:col-span-5 bg-surface-container-lowest p-6 sm:p-8 rounded-2xl border border-surface-container-high/60 shadow-sm space-y-6 lg:sticky lg:top-24">
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                  {calculationResult.title}
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
                  Rp {calculationResult.amount.toLocaleString("id-ID")}
                </div>
              </div>

              {/* Simple breakdown */}
              <div className="p-4 rounded-xl bg-surface-container/50 space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between text-on-surface-variant">
                  <span>Formula Acuan:</span>
                  <span className="font-semibold text-on-surface">{calculationResult.ratio}</span>
                </div>
                <div className="text-xs text-on-surface-variant font-mono bg-surface-container-lowest p-2 rounded-lg border border-surface-container/80">
                  {calculationResult.formula}
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed pt-1">
                  {calculationResult.note}
                </p>
              </div>

              {/* Notification Banners */}
              {saveSuccess && (
                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center justify-between gap-2 animate-in fade-in">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-emerald-600">check_circle</span>
                    <span>Tersimpan di Riwayat Akun Anda!</span>
                  </div>
                  <Link
                    href="/riwayat-profil"
                    className="font-bold underline hover:text-emerald-950 text-xs shrink-0"
                  >
                    Lihat Riwayat
                  </Link>
                </div>
              )}

              {saveError && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2 animate-in fade-in">
                  <span className="material-symbols-outlined text-[18px] text-red-600 shrink-0">error</span>
                  <span>{saveError}</span>
                </div>
              )}

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <button
                  type="button"
                  disabled={isSaving}
                  onClick={handleSaveCalculation}
                  className="w-full py-3 px-4 rounded-xl bg-primary text-on-primary font-bold text-sm hover:bg-primary/90 disabled:opacity-50 transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {isSaving ? "progress_activity" : "bookmark_add"}
                  </span>
                  <span>{isSaving ? "Menyimpan ke Database..." : "Simpan Hasil ke Riwayat Saya"}</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="w-full py-2.5 px-4 rounded-xl bg-surface-container text-on-surface font-semibold text-xs hover:bg-surface-container-high transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    {copied ? "check" : "content_copy"}
                  </span>
                  <span>{copied ? "Tersalin ke Clipboard!" : "Salin Ringkasan Perhitungan"}</span>
                </button>

                <button
                  type="button"
                  onClick={() => window.print()}
                  className="w-full py-2.5 px-4 rounded-xl border border-surface-container text-on-surface font-semibold text-xs hover:bg-surface-container transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[16px]">print</span>
                  <span>Cetak / Unduh Ringkasan (PDF)</span>
                </button>
              </div>

              {/* Modal Prompt Login */}
              {loginPromptOpen && (
                <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
                  <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-surface-container space-y-4 animate-in zoom-in-95 duration-150">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[26px]">lock</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-on-surface">Masuk untuk Menyimpan Riwayat</h3>
                      <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                        Simpan hasil perhitungan ini secara aman di akun Anda untuk dijadikan bukti rujukan hukum saat berdiskusi dengan perusahaan atau Disnaker.
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-surface-container/40 border border-surface-container text-xs space-y-1">
                      <span className="font-semibold text-primary block">{calculationResult.title}</span>
                      <span className="text-base font-extrabold text-on-surface">
                        Rp {calculationResult.amount.toLocaleString("id-ID")}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setLoginPromptOpen(false)}
                        className="flex-1 py-2.5 rounded-xl border border-surface-container font-semibold text-xs text-on-surface hover:bg-surface-container transition-colors"
                      >
                        Nanti Saja
                      </button>
                      <Link
                        href="/masuk"
                        className="flex-1 py-2.5 rounded-xl bg-primary text-on-primary font-bold text-xs text-center hover:bg-primary/90 transition-colors shadow-sm"
                      >
                        Masuk Akun
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* Progressive Disclosure: Accordion for Legal Basis */}
              <div className="pt-2 border-t border-surface-container/80">
                <button
                  type="button"
                  onClick={() => setShowLegalDetails(!showLegalDetails)}
                  className="w-full flex items-center justify-between text-xs font-semibold text-on-surface-variant hover:text-on-surface py-1"
                >
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-secondary">gavel</span>
                    Dasar Regulasi & Payung Hukum
                  </span>
                  <span className="material-symbols-outlined text-[18px] transition-transform">
                    {showLegalDetails ? "expand_less" : "expand_more"}
                  </span>
                </button>

                {showLegalDetails && (
                  <div className="mt-3 p-3.5 rounded-xl bg-surface-container/30 text-xs text-on-surface-variant space-y-2">
                    <p className="font-semibold text-on-surface">{calculationResult.rule}</p>
                    <p className="leading-relaxed">
                      Sesuai aturan ketenagakerjaan RI, hak ini bersifat imperatif (wajib dipenuhi pengusaha). Setiap perjanjian kerja yang menetapkan nominal lebih rendah dari rumus baku ini batal demi hukum untuk bagian tersebut.
                    </p>
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>
      </main>

      {/* Official Print Layout (Only rendered when printing) */}
      <div className="hidden print:block fixed inset-0 bg-white p-10 z-[9999] text-black">
        <div className="border-b-2 border-black pb-4 mb-6 flex justify-between items-end">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">KONTRAKKU — LEMBAR PERHITUNGAN HAK KERJA</h1>
            <p className="text-xs text-gray-600 mt-1">Platform Advokasi Hak Ketenagakerjaan &amp; Validasi Regulasi RI</p>
          </div>
          <div className="text-right text-xs">
            <p className="font-semibold">Tanggal Cetak: {new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</p>
            <p className="text-gray-500">ID Dokumen: KTK-{Date.now().toString().slice(-6)}</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-4 bg-gray-50 border border-gray-300 rounded-lg">
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-700">Rincian Komponen Hak Finansial</h2>
            <div className="text-xl font-bold mt-1 text-black">{calculationResult.title}</div>
            <div className="text-2xl font-black mt-2 text-indigo-900">Rp {calculationResult.amount.toLocaleString("id-ID")}</div>
            <p className="text-xs text-gray-700 mt-1">Koefisien / Rasio: {calculationResult.ratio}</p>
          </div>

          <div className="border border-gray-300 rounded-lg p-4 space-y-3">
            <h3 className="text-xs font-bold uppercase text-gray-700">Parameter Input Perhitungan</h3>
            <table className="w-full text-xs">
              <tbody>
                <tr className="border-b">
                  <td className="py-2 text-gray-600 font-medium">Upah Pokok Bulanan</td>
                  <td className="py-2 text-right font-bold">Rp {baseSalary.toLocaleString("id-ID")}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 text-gray-600 font-medium">Tunjangan Tetap</td>
                  <td className="py-2 text-right font-bold">Rp {fixedAllowance.toLocaleString("id-ID")}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 text-gray-600 font-medium">Total Dasar Upah (Pokok + Tunjangan Tetap)</td>
                  <td className="py-2 text-right font-bold">Rp {totalWage.toLocaleString("id-ID")}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 text-gray-600 font-medium">Masa Kerja / Durasi</td>
                  <td className="py-2 text-right font-bold">{durationMonths} Bulan</td>
                </tr>
                {activeTab === "lembur" && (
                  <tr className="border-b">
                    <td className="py-2 text-gray-600 font-medium">Akumulasi Jam Lembur</td>
                    <td className="py-2 text-right font-bold">{overtimeHours} Jam</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="p-4 border border-gray-300 rounded-lg space-y-2">
            <h3 className="text-xs font-bold uppercase text-gray-700">Formula Matematis &amp; Dasar Hukum</h3>
            <p className="font-mono text-xs bg-gray-100 p-2 rounded">{calculationResult.formula}</p>
            <p className="text-xs font-semibold text-gray-800">⚖️ Dasar Regulasi: {calculationResult.rule}</p>
            <p className="text-xs text-gray-600 leading-relaxed">{calculationResult.note}</p>
          </div>

          <div className="p-4 bg-gray-50 border-l-4 border-black text-xs text-gray-700 leading-relaxed">
            <strong>Catatan Yuridis:</strong> Sesuai aturan ketenagakerjaan RI, hak ini bersifat imperatif (wajib dipenuhi pengusaha). Perjanjian kerja, peraturan perusahaan (PP), atau Perjanjian Kerja Bersama (PKB) yang menetapkan nominal lebih rendah dari rumus baku undang-undang adalah batal demi hukum.
          </div>
        </div>

        <div className="mt-12 pt-4 border-t text-[11px] text-gray-500 flex justify-between">
          <span>Dicetak melalui platform KontrakKu</span>
          <span>Lembar referensi bipartit ketenagakerjaan</span>
        </div>
      </div>

      <Footer />
    </div>
  );
}
