"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getCurrentUser } from "@/actions/auth";
import { getUserCalculations, deleteCalculationAction, type CalculationRecord } from "@/actions/calculation";
import { getUserContractsAction, deleteContractAction } from "@/actions/analysis";

interface UserProfile {
  id: string;
  email: string;
  name: string;
  role: string;
  province?: string | null;
  city?: string | null;
  employmentStatus?: string | null;
  plan?: "free" | "pro";
}

interface SavedContractFinding {
  id: string;
  clause_number: string;
  clause_title: string;
  severity: "critical" | "ambiguous" | "compliant";
  issue_explanation: string;
  legal_basis: string;
  recommendation: string;
  suggested_counter_draft: string | null;
}

interface SavedContract {
  id: string;
  file_name: string;
  file_size_bytes: number;
  overall_risk_score: number | null;
  summary: string | null;
  created_at: string;
  contract_findings?: SavedContractFinding[];
}

const TYPE_LABEL_MAP: Record<string, string> = {
  pkwt_compensation: "Uang Kompensasi PKWT",
  severance_pay: "Uang Pesangon / PHK",
  overtime: "Estimasi Upah Lembur",
  thr: "Tunjangan Hari Raya (THR)",
};

const STATUS_LABEL_MAP: Record<string, string> = {
  pkwt: "PKWT (Kontrak)",
  pkwtt: "PKWTT (Tetap)",
  freelance: "Freelance / Kemitraan",
};

export default function RiwayatProfilView() {
  const [activeTab, setActiveTab] = useState<"contracts" | "calculations">("calculations");
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [calculations, setCalculations] = useState<CalculationRecord[]>([]);
  const [contracts, setContracts] = useState<SavedContract[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const loadData = useCallback(async () => {
    setIsLoading(true);
    const [userRes, calcRes, contractRes] = await Promise.all([
      getCurrentUser(),
      getUserCalculations(),
      getUserContractsAction(),
    ]);

    if (userRes) {
      setUserProfile({
        id: userRes.id,
        email: userRes.email,
        name: userRes.name,
        role: userRes.role,
        province: userRes.profile?.province,
        city: userRes.profile?.city,
        employmentStatus: userRes.profile?.employment_status,
        plan: userRes.plan || "free",
      });
    }

    if (calcRes.data) {
      setCalculations(calcRes.data);
    }

    if (contractRes.data) {
      setContracts(contractRes.data as SavedContract[]);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleDeleteCalculation = async (id: string) => {
    if (!confirm("Apakah Anda yakin ingin menghapus riwayat perhitungan ini?")) return;
    setDeletingId(id);
    const res = await deleteCalculationAction(id);
    if (res.success) {
      setCalculations((prev) => prev.filter((item) => item.id !== id));
    }
    setDeletingId(null);
  };

  const handleDeleteContract = async (id: string) => {
    if (!confirm("Apakah Anda yakin ingin menghapus arsip audit kontrak ini?")) return;
    setDeletingId(id);
    const res = await deleteContractAction(id);
    if (res.success) {
      setContracts((prev) => prev.filter((item) => item.id !== id));
    }
    setDeletingId(null);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="bg-[#f8f9fc] font-body-md text-body-md text-on-surface antialiased min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="w-full pt-20 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Profile Header Card */}
          {isLoading ? (
            <div className="bg-surface-container-lowest rounded-2xl p-8 border border-surface-container text-center text-on-surface-variant">
              <span className="material-symbols-outlined text-[32px] animate-spin text-primary">progress_activity</span>
              <p className="text-sm font-semibold mt-2">Memuat profil Anda...</p>
            </div>
          ) : userProfile ? (
            <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 border border-surface-container-high/60 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-primary text-on-primary font-bold text-2xl flex items-center justify-center shadow-sm shrink-0">
                  {userProfile.name.charAt(0).toUpperCase()}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h1 className="text-xl sm:text-2xl font-bold text-on-surface">{userProfile.name}</h1>
                    <span className="px-2.5 py-0.5 rounded-full bg-surface-container text-xs font-semibold text-primary">
                      {userProfile.employmentStatus ? (STATUS_LABEL_MAP[userProfile.employmentStatus] || userProfile.employmentStatus) : "Belum diatur"}
                    </span>
                  </div>
                  <p className="text-sm text-on-surface-variant font-medium">
                    {userProfile.role || "Pekerja"}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-on-surface-variant pt-0.5">
                    <span>📍 {userProfile.city ? `${userProfile.city}, ${userProfile.province || ""}` : "Wilayah belum diatur"}</span>
                    <span>•</span>
                    <span>✉️ {userProfile.email}</span>
                  </div>

                  {/* Membership Tier Badge */}
                  <div className="pt-2 flex items-center gap-2">
                    {userProfile.plan === "pro" ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 text-xs font-bold">
                        <span className="material-symbols-outlined text-[16px] text-amber-600">workspace_premium</span>
                        Advokasi Penuh (Pro) • Akses Tanpa Batas
                      </span>
                    ) : (
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container text-xs font-medium text-on-surface-variant">
                          Paket: Pekerja Mandiri (Gratis)
                        </span>
                        <Link
                          href="/pricing"
                          className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
                        >
                          <span>Upgrade ke Pro (Rp 29k)</span>
                          <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap sm:flex-col items-stretch sm:items-end gap-2.5 shrink-0">
                <div className="flex items-center gap-2">
                  <Link
                    href="/daftar/profil"
                    className="px-4 py-2 rounded-xl bg-surface-container text-xs font-semibold text-on-surface hover:bg-surface-container-high transition-colors"
                  >
                    Ubah Profil
                  </Link>
                  <Link
                    href="/pricing"
                    className="px-3 py-2 rounded-xl border border-surface-container-high text-xs font-semibold text-on-surface hover:bg-surface-container transition-colors flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-[15px] text-amber-600">stars</span>
                    <span>Paket</span>
                  </Link>
                </div>
                <Link
                  href="/hitung-hak-kerja"
                  className="px-4 py-2 rounded-xl bg-primary text-on-primary text-xs font-semibold hover:bg-primary/90 transition-colors shadow-sm flex items-center justify-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[16px]">calculate</span>
                  <span>Hitung Hak Baru</span>
                </Link>
              </div>
            </div>
          ) : (
            <div className="bg-surface-container-lowest rounded-2xl p-6 border border-surface-container text-center space-y-3">
              <span className="material-symbols-outlined text-[40px] text-on-surface-variant">account_circle</span>
              <p className="text-sm font-semibold text-on-surface">Silakan masuk untuk melihat riwayat akun Anda.</p>
              <Link
                href="/masuk"
                className="inline-block px-5 py-2 rounded-xl bg-primary text-white text-xs font-bold"
              >
                Masuk Sekarang
              </Link>
            </div>
          )}

          {/* Clean Segmented Tab Control */}
          <div className="flex items-center gap-6 border-b border-surface-container-high/60 pb-3">
            <button
              type="button"
              onClick={() => setActiveTab("calculations")}
              className={`text-sm font-semibold pb-1 border-b-2 transition-all flex items-center gap-2 ${
                activeTab === "calculations"
                  ? "border-primary text-primary font-bold"
                  : "border-transparent text-on-surface-variant hover:text-on-surface"
              }`}
            >
              <span>Riwayat Simulasi Hak</span>
              <span className="px-2 py-0.5 rounded-full bg-surface-container text-xs">
                {calculations.length}
              </span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("contracts")}
              className={`text-sm font-semibold pb-1 border-b-2 transition-all flex items-center gap-2 ${
                activeTab === "contracts"
                  ? "border-primary text-primary font-bold"
                  : "border-transparent text-on-surface-variant hover:text-on-surface"
              }`}
            >
              <span>Arsip Audit Kontrak</span>
              <span className="px-2 py-0.5 rounded-full bg-surface-container text-xs">
                {contracts.length}
              </span>
            </button>
          </div>

          {/* Tab 1: Calculations List */}
          {activeTab === "calculations" && (
            <div className="space-y-4">
              {isLoading ? (
                <div className="p-8 text-center text-xs text-on-surface-variant">Memuat riwayat...</div>
              ) : calculations.length === 0 ? (
                <div className="p-10 rounded-2xl bg-surface-container-lowest border border-surface-container text-center space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto">
                    <span className="material-symbols-outlined text-[24px]">bookmark_border</span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-on-surface">Belum Ada Riwayat Perhitungan</h3>
                    <p className="text-xs text-on-surface-variant max-w-md mx-auto mt-1 leading-relaxed">
                      Gunakan kalkulator hak tenaga kerja untuk mensimulasikan kompensasi PKWT, pesangon PHK, lembur, atau THR dan simpan hasilnya di sini.
                    </p>
                  </div>
                  <Link
                    href="/hitung-hak-kerja"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-on-primary text-xs font-bold hover:bg-primary/90 transition-all shadow-sm"
                  >
                    <span>Buka Kalkulator Hak</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              ) : (
                calculations.map((calc) => (
                  <div
                    key={calc.id}
                    className="bg-surface-container-lowest rounded-2xl p-6 border border-surface-container-high/60 shadow-sm hover:border-surface-container-high transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1.5 max-w-xl">
                      <div className="flex items-center gap-2">
                        <span className="text-base font-bold text-on-surface">
                          {calc.breakdownDetail?.title || TYPE_LABEL_MAP[calc.calcType] || calc.calcType}
                        </span>
                        <span className="text-xs text-on-surface-variant">• {formatDate(calc.createdAt)}</span>
                      </div>
                      <p className="text-xs text-on-surface-variant">
                        Masa kerja {calc.durationMonths} bulan • Upah Pokok Rp {calc.baseSalary.toLocaleString("id-ID")}
                        {calc.fixedAllowance > 0 && ` + Tunjangan Rp ${calc.fixedAllowance.toLocaleString("id-ID")}`}
                      </p>
                      {calc.breakdownDetail?.rule && (
                        <span className="text-[11px] font-semibold text-primary block">
                          ⚖️ {calc.breakdownDetail.rule}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-4 shrink-0">
                      <div className="text-right">
                        <div className="text-lg font-extrabold text-primary">
                          Rp {calc.resultTotal.toLocaleString("id-ID")}
                        </div>
                        <span className="text-[11px] text-on-surface-variant font-medium">
                          {calc.breakdownDetail?.ratio || "Hasil Simulasi"}
                        </span>
                      </div>
                      <button
                        type="button"
                        disabled={deletingId === calc.id}
                        onClick={() => handleDeleteCalculation(calc.id)}
                        title="Hapus riwayat"
                        className="w-9 h-9 rounded-xl flex items-center justify-center text-on-surface-variant hover:text-error hover:bg-error-container/30 transition-colors"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          {deletingId === calc.id ? "progress_activity" : "delete"}
                        </span>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* Tab 2: Contracts List */}
          {activeTab === "contracts" && (
            <div className="space-y-4">
              {isLoading ? (
                <div className="p-8 text-center text-xs text-on-surface-variant">Memuat arsip kontrak...</div>
              ) : contracts.length === 0 ? (
                <div className="p-10 rounded-2xl bg-surface-container-lowest border border-surface-container text-center space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto">
                    <span className="material-symbols-outlined text-[24px]">description</span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-on-surface">Belum Ada Dokumen Kontrak</h3>
                    <p className="text-xs text-on-surface-variant max-w-md mx-auto mt-1 leading-relaxed">
                      Lakukan audit perjanjian kerja dengan AI untuk mendeteksi klausul berisiko dan simpan hasilnya di sini.
                    </p>
                  </div>
                  <Link
                    href="/analisis-kontrak"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-on-primary text-xs font-bold hover:bg-primary/90 transition-all shadow-sm"
                  >
                    <span>Mulai Audit Kontrak Sekarang</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              ) : (
                contracts.map((c) => {
                  const score = c.overall_risk_score ?? 70;
                  const findingsCount = c.contract_findings?.length ?? 0;
                  const isHighRisk = score < 60;
                  const isModerate = score >= 60 && score < 85;

                  return (
                    <div
                      key={c.id}
                      className="bg-surface-container-lowest rounded-2xl p-6 border border-surface-container-high/60 shadow-sm hover:border-surface-container-high transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div className="space-y-1.5 max-w-xl">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-base font-bold text-on-surface">
                            {c.file_name}
                          </span>
                          <span className="text-xs text-on-surface-variant">• {formatDate(c.created_at)}</span>
                        </div>
                        <p className="text-xs text-on-surface-variant line-clamp-2">
                          {c.summary || "Hasil audit klausul kepatuhan hukum ketenagakerjaan."}
                        </p>
                        <div className="flex items-center gap-2 pt-0.5">
                          <span className="text-[11px] font-semibold text-primary">
                            📄 {findingsCount} Poin Temuan Teranalisis
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 shrink-0">
                        <div className="text-right">
                          <div
                            className={`text-2xl font-black ${
                              isHighRisk
                                ? "text-error"
                                : isModerate
                                ? "text-amber-600"
                                : "text-emerald-600"
                            }`}
                          >
                            {score}
                            <span className="text-xs font-normal text-on-surface-variant">/100</span>
                          </div>
                          <span
                            className={`text-[10px] font-bold uppercase tracking-wider ${
                              isHighRisk
                                ? "text-error"
                                : isModerate
                                ? "text-amber-700"
                                : "text-emerald-700"
                            }`}
                          >
                            {isHighRisk ? "Berisiko Tinggi" : isModerate ? "Perlu Negosiasi" : "Aman"}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <Link
                            href="/analisis-kontrak"
                            className="px-3 py-1.5 rounded-xl bg-surface-container text-xs font-semibold text-on-surface hover:bg-surface-container-high transition-colors"
                          >
                            Buka Audit
                          </Link>
                          <button
                            type="button"
                            disabled={deletingId === c.id}
                            onClick={() => handleDeleteContract(c.id)}
                            title="Hapus arsip"
                            className="w-9 h-9 rounded-xl flex items-center justify-center text-on-surface-variant hover:text-error hover:bg-error-container/30 transition-colors"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              {deletingId === c.id ? "progress_activity" : "delete"}
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
