"use client";

import Link from "next/link";
import { useActionState, useState, useEffect } from "react";
import { updateProfileAction, type ActionState } from "@/actions/auth";
import { createClient } from "@/lib/supabase/client";

export default function DaftarProfilView() {
  const [state, formAction, isPending] = useActionState<ActionState | null, FormData>(
    updateProfileAction,
    null
  );

  const [fullName, setFullName] = useState("");
  const [province, setProvince] = useState("DKI Jakarta");
  const [city, setCity] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [employmentStatus, setEmploymentStatus] = useState<"pkwt" | "pkwtt" | "freelance">("pkwt");

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(async ({ data: { user } }) => {
      if (user) {
        const { data: profile } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single();

        if (profile) {
          setFullName(profile.full_name || user.user_metadata?.full_name || "");
          if (profile.province) setProvince(profile.province);
          if (profile.city) setCity(profile.city);
          if (profile.job_title) setJobTitle(profile.job_title);
          if (profile.employment_status) setEmploymentStatus(profile.employment_status);
        } else if (user.user_metadata?.full_name) {
          setFullName(user.user_metadata.full_name);
        }
      }
    });
  }, []);


  return (
    <div className="bg-background font-body-md text-body-md text-on-surface antialiased min-h-screen flex flex-col justify-between selection:bg-primary-fixed selection:text-on-primary-fixed">
      <header className="w-full bg-surface-container-lowest/80 backdrop-blur-xl border-b border-surface-container-high z-50">
        <div className="h-16 max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop flex items-center justify-between">
          <Link href="/" className="flex items-center gap-space-xs">
            <div className="w-9 h-9 rounded-xl bg-primary-container flex items-center justify-center text-on-primary shadow-sm">
              <span className="material-symbols-outlined text-[22px]">gavel</span>
            </div>
            <span className="font-headline-sm text-headline-sm text-primary tracking-tight font-bold">
              KontrakKu
            </span>
          </Link>
          <div className="flex items-center gap-space-md">
            <div className="hidden md:flex items-center gap-space-xs px-3 py-1 bg-surface-container-low border border-surface-container rounded-full text-on-surface-variant font-label-md text-label-md">
              <span className="material-symbols-outlined text-secondary text-[16px]">verified_user</span>
              <span>256-bit SSL Enkripsi</span>
            </div>
            <Link
              href="/bantuan"
              className="flex items-center gap-1.5 font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">help_outline</span>
              <span className="hidden sm:inline">Bantuan</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center w-full px-4 sm:px-6 lg:px-8 py-8 lg:py-12 relative">
        <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#001382_1.2px,transparent_1.2px)] [background-size:20px_20px]"></div>
        <div className="relative w-full max-w-6xl mx-auto z-10">
          <div className="w-full rounded-2xl bg-surface-container-lowest shadow-[0_12px_40px_rgba(20,27,43,0.08)] border border-surface-container-high/60 overflow-hidden min-h-[640px] grid grid-cols-1 lg:grid-cols-12">
            {/* Left Decorative Information Panel */}
            <div className="lg:col-span-5 bg-primary-container text-on-primary p-8 sm:p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary opacity-60 blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-secondary-container opacity-25 blur-3xl pointer-events-none"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-primary-fixed text-label-sm font-label-sm uppercase tracking-wider mb-6 border border-white/10">
                  <span className="material-symbols-outlined text-[16px] text-secondary-container">shield_person</span>
                  <span>Platform Ketenagakerjaan Terpercaya</span>
                </div>
                <h2 className="font-display-lg-mobile sm:font-display-lg text-white font-extrabold tracking-tight mb-4 leading-tight">
                  Personalisasi Wilayah &amp; Perlindungan Hukum.
                </h2>
                <p className="font-body-lg text-body-lg text-primary-fixed-dim/90 mb-8 leading-relaxed">
                  Data domisili wilayah kerja Anda digunakan untuk mengaitkan batas standar Upah Minimum Regional (UMK/UMP) secara tepat saat kalkulasi hak.
                </p>

                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-white font-label-md font-bold">
                    <span className="material-symbols-outlined text-secondary-container text-[18px]">lock</span>
                    Kerahasiaan UU PDP Terjamin
                  </div>
                  <p className="font-body-sm text-xs text-primary-fixed-dim/90 leading-relaxed">
                    Data profil tidak pernah disebarluaskan dan tidak dapat dilihat oleh atasan atau HRD perusahaan tempat Anda bekerja.
                  </p>
                </div>
              </div>

              <div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-label-sm text-primary-fixed-dim">
                <span>KontrakKu Indonesia</span>
                <span className="flex items-center gap-1 font-semibold text-white">
                  <span className="material-symbols-outlined text-[16px] text-secondary-container">check_circle</span>
                  Langkah Terakhir
                </span>
              </div>
            </div>

            {/* Right Registration Profile Form */}
            <div className="lg:col-span-7 bg-surface-container-lowest p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-surface-container">
                  <div className="inline-flex p-1 rounded-xl bg-surface-container-low border border-surface-container">
                    <Link
                      href="/masuk"
                      className="px-5 py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors font-medium"
                    >
                      Masuk (Login)
                    </Link>
                    <button
                      className="px-5 py-2 rounded-lg font-label-md text-label-md bg-surface-container-lowest text-primary shadow-sm font-bold"
                      type="button"
                    >
                      Daftar Akun
                    </button>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm bg-surface-container-low px-3 py-1.5 rounded-full border border-surface-container">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    <span className="font-semibold text-on-surface">Langkah 2</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h1 className="font-headline-md text-headline-md text-on-surface font-bold tracking-tight mb-1.5">
                    Lengkapi Profil &amp; Domisili Kerja
                  </h1>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Sesuaikan wilayah kerja Anda untuk akurasi perhitungan UMK &amp; regulasi hukum.
                  </p>
                </div>

                {state?.error && (
                  <div className="mb-4 p-3.5 rounded-xl bg-error-container text-on-error-container flex items-center gap-2.5 text-body-sm font-medium animate-in fade-in">
                    <span className="material-symbols-outlined text-[20px] text-error shrink-0">error</span>
                    <span>{state.error}</span>
                  </div>
                )}

                <div className="mb-5 p-3.5 rounded-xl bg-surface-container-low border border-surface-container">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#E98E35] text-white text-[11px] font-bold tracking-wide uppercase">
                        Langkah 2 dari 2
                      </span>
                      <span className="font-label-md text-label-md font-bold text-primary">Identitas &amp; Wilayah Kerja</span>
                    </div>
                    <span className="text-[12px] font-bold text-[#E98E35]">100% Selesai</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-surface-container overflow-hidden flex">
                    <div className="h-full w-full rounded-full bg-[#E98E35] transition-all duration-300"></div>
                  </div>
                </div>

                <form className="space-y-4" action={formAction}>
                  {/* Nama Lengkap */}
                  <div>
                    <label className="block font-label-md text-label-md text-primary mb-1.5 font-bold" htmlFor="fullName">
                      Nama Lengkap
                    </label>
                    <input
                      className="w-full h-11 px-3.5 rounded-xl bg-surface-container-low border border-surface-container text-on-surface placeholder:text-outline font-body-md text-body-md focus:bg-surface-container-lowest focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      id="fullName"
                      name="fullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="contoh: John Terry"
                      required
                      type="text"
                    />
                    {state?.fieldErrors?.fullName && (
                      <p className="text-xs text-error font-medium mt-1">{state.fieldErrors.fullName}</p>
                    )}
                  </div>

                  {/* Domisili Provinsi & Kota */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-label-md text-label-md text-primary mb-1.5 font-bold" htmlFor="province">
                        Provinsi Tempat Bekerja
                      </label>
                      <select
                        id="province"
                        name="province"
                        value={province}
                        onChange={(e) => setProvince(e.target.value)}
                        className="w-full h-11 px-3.5 rounded-xl bg-surface-container-low border border-surface-container text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        required
                      >
                        <option value="DKI Jakarta">DKI Jakarta</option>
                        <option value="Jawa Barat">Jawa Barat</option>
                        <option value="Jawa Tengah">Jawa Tengah</option>
                        <option value="Jawa Timur">Jawa Timur</option>
                        <option value="Banten">Banten</option>
                        <option value="DI Yogyakarta">DI Yogyakarta</option>
                        <option value="Luar Jawa">Luar Pulau Jawa</option>
                      </select>
                      {state?.fieldErrors?.province && (
                        <p className="text-xs text-error font-medium mt-1">{state.fieldErrors.province}</p>
                      )}
                    </div>

                    <div>
                      <label className="block font-label-md text-label-md text-primary mb-1.5 font-bold" htmlFor="city">
                        Kota / Kabupaten
                      </label>
                      <input
                        className="w-full h-11 px-3.5 rounded-xl bg-surface-container-low border border-surface-container text-on-surface placeholder:text-outline font-body-md text-body-md focus:bg-surface-container-lowest focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        id="city"
                        name="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="contoh: Jakarta Selatan"
                        required
                        type="text"
                      />
                      {state?.fieldErrors?.city && (
                        <p className="text-xs text-error font-medium mt-1">{state.fieldErrors.city}</p>
                      )}
                    </div>
                  </div>

                  {/* Bidang Pekerjaan & Status Hubungan Kerja */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-label-md text-label-md text-primary mb-1.5 font-bold" htmlFor="jobTitle">
                        Bidang / Posisi Pekerjaan
                      </label>
                      <input
                        className="w-full h-11 px-3.5 rounded-xl bg-surface-container-low border border-surface-container text-on-surface placeholder:text-outline font-body-md text-body-md focus:bg-surface-container-lowest focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        id="jobTitle"
                        name="jobTitle"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                        placeholder="contoh: Software Engineer / Admin"
                        required
                        type="text"
                      />
                      {state?.fieldErrors?.jobTitle && (
                        <p className="text-xs text-error font-medium mt-1">{state.fieldErrors.jobTitle}</p>
                      )}
                    </div>

                    <div>
                      <label className="block font-label-md text-label-md text-primary mb-1.5 font-bold" htmlFor="employmentStatus">
                        Status Hubungan Kerja
                      </label>
                      <select
                        id="employmentStatus"
                        name="employmentStatus"
                        value={employmentStatus}
                        onChange={(e) => setEmploymentStatus(e.target.value as "pkwt" | "pkwtt" | "freelance")}
                        className="w-full h-11 px-3.5 rounded-xl bg-surface-container-low border border-surface-container text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        required
                      >
                        <option value="pkwt">Karyawan PKWT (Kontrak)</option>
                        <option value="pkwtt">Karyawan PKWTT (Tetap)</option>
                        <option value="freelance">Freelance / Mitra Lepas</option>
                      </select>
                      {state?.fieldErrors?.employmentStatus && (
                        <p className="text-xs text-error font-medium mt-1">{state.fieldErrors.employmentStatus}</p>
                      )}
                    </div>
                  </div>

                  {/* Privacy Toggle Information */}
                  <div className="p-4 rounded-xl bg-surface-container-low border border-surface-container">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-700 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[18px]">shield</span>
                      </div>
                      <div className="text-xs text-on-surface-variant leading-relaxed">
                        Identitas asli Anda otomatis dilindungi dengan alias acak saat berdiskusi di Forum Anonim Pekerja.
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <Link
                      href="/daftar"
                      className="w-full sm:w-auto px-5 py-3 rounded-xl border border-surface-container-high bg-surface-container-low hover:bg-surface-container text-on-surface-variant font-label-md text-label-md font-semibold transition-all flex items-center justify-center gap-2 order-2 sm:order-1"
                    >
                      <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                      <span>Kembali</span>
                    </Link>
                    <button
                      className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-[#E98E35] hover:bg-[#d97f26] active:bg-[#c6711c] text-white font-title-md text-title-md font-bold shadow-[0_4px_14px_rgba(233,142,53,0.35)] hover:shadow-[0_6px_20px_rgba(233,142,53,0.45)] transition-all flex items-center justify-center gap-2 group order-1 sm:order-2 disabled:opacity-60"
                      type="submit"
                      disabled={isPending}
                    >
                      {isPending ? (
                        <>
                          <span className="material-symbols-outlined animate-spin text-[20px]">progress_activity</span>
                          <span>Menyimpan Profil...</span>
                        </>
                      ) : (
                        <>
                          <span>Selesaikan Pendaftaran Akun</span>
                          <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">
                            check_circle
                          </span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>

              <div className="mt-8 pt-4 border-t border-surface-container flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-3 font-label-sm text-label-sm text-on-surface-variant">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-secondary text-[16px]">verified</span>
                    100% Gratis Fitur Dasar
                  </span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-secondary text-[16px]">lock</span>
                    Data Terenkripsi End-to-End
                  </span>
                </div>
                <div className="font-label-md text-label-md text-on-surface-variant">
                  Sudah punya akun?{" "}
                  <Link href="/masuk" className="text-primary hover:underline font-bold">
                    Masuk di sini
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full bg-surface-container-lowest py-space-lg border-t border-surface-container-high">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row items-center justify-between gap-space-sm font-body-sm text-body-sm text-on-surface-variant">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-secondary text-[16px]">security</span>
            <span>Kepatuhan Regulasi: UU PDP No. 27/2022 Terjamin</span>
          </div>
          <div className="flex items-center gap-space-md">
            <Link href="/kebijakan-privasi" className="hover:text-primary transition-colors">
              Kebijakan Privasi
            </Link>
            <span>&bull;</span>
            <Link href="/syarat-ketentuan" className="hover:text-primary transition-colors">
              Syarat &amp; Ketentuan
            </Link>
            <span>&bull;</span>
            <span>&copy; {new Date().getFullYear()} KontrakKu</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
