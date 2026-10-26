"use client";

import Link from "next/link";
import { useState, useActionState, useMemo } from "react";
import { signUpAction, type ActionState } from "@/actions/auth";

export default function DaftarView() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("pkwt");

  const [state, formAction, isPending] = useActionState<ActionState | null, FormData>(
    signUpAction,
    null
  );

  // Password strength calculation
  const strength = useMemo(() => {
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    return score;
  }, [password]);

  const strengthLabel = useMemo(() => {
    if (!password) return "Masukkan Sandi";
    if (strength <= 1) return "Sangat Lemah";
    if (strength === 2) return "Sedang";
    if (strength === 3) return "Kuat";
    return "Sangat Kuat";
  }, [password, strength]);

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
                  Kawal Hak Kerja Anda Secara Adil.
                </h2>
                <p className="font-body-lg text-body-lg text-primary-fixed-dim/90 mb-8 leading-relaxed">
                  Dapatkan transparansi hukum ketenagakerjaan secara mandiri. Kami membantu membaca klausul rumit dan menghitung hak kompensasi sesuai regulasi resmi.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <span className="material-symbols-outlined text-[14px]">check</span>
                    </div>
                    <div>
                      <h4 className="font-label-lg text-label-lg font-bold text-white">Deteksi Pasal Berbahaya</h4>
                      <p className="font-body-sm text-body-sm text-primary-fixed-dim/80">Identifikasi denda tidak wajar, penahanan ijazah, dan waktu lembur tanpa upah.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <span className="material-symbols-outlined text-[14px]">check</span>
                    </div>
                    <div>
                      <h4 className="font-label-lg text-label-lg font-bold text-white">Kalkulasi Hak Statutori</h4>
                      <p className="font-body-sm text-body-sm text-primary-fixed-dim/80">Simulasi kompensasi PKWT dan pesangon berbasis PP 35/2021.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-label-sm text-primary-fixed-dim">
                <span>Kerahasiaan data terjamin</span>
                <span className="flex items-center gap-1 font-semibold text-white">
                  <span className="material-symbols-outlined text-[16px] text-secondary-container">lock</span>
                  UU PDP Compliant
                </span>
              </div>
            </div>

            {/* Right Registration Form */}
            <div className="lg:col-span-7 bg-surface-container-lowest p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
              {state?.requiresEmailConfirmation ? (
                <div className="py-8 space-y-6 text-center animate-in fade-in zoom-in-95 duration-200 my-auto">
                  <div className="w-20 h-20 rounded-3xl bg-primary/10 text-primary flex items-center justify-center mx-auto shadow-sm">
                    <span className="material-symbols-outlined text-[44px]">mark_email_unread</span>
                  </div>
                  <div className="space-y-2">
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                      Pendaftaran Berhasil
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-on-surface tracking-tight">
                      Periksa Kotak Masuk Email Anda
                    </h2>
                    <p className="text-sm text-on-surface-variant max-w-md mx-auto leading-relaxed">
                      Kami telah mengirimkan tautan konfirmasi ke <strong className="text-on-surface font-semibold">{state.email}</strong>. Silakan klik tautan pada email tersebut untuk mengaktifkan akun dan melanjutkan ke <strong className="text-primary font-bold">Langkah 2 (Pengisian Domisili &amp; Wilayah Kerja)</strong>.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-surface-container/50 border border-surface-container text-xs text-on-surface-variant max-w-md mx-auto space-y-1 text-left">
                    <div className="flex items-center gap-2 font-bold text-on-surface">
                      <span className="material-symbols-outlined text-[18px] text-primary">info</span>
                      <span>Belum menerima email?</span>
                    </div>
                    <p className="pl-6 leading-relaxed">
                      Periksa folder <strong>Spam / Junk</strong> atau <strong>Promotions</strong> di email Anda. Tautan aktivasi berlaku selama 24 jam.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <Link
                      href="/masuk"
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-all shadow-sm"
                    >
                      Buka Halaman Masuk
                    </Link>
                  </div>
                </div>
              ) : (
                <>
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
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="font-semibold text-on-surface">Layanan Aktif</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h1 className="font-headline-md text-headline-md text-on-surface font-bold tracking-tight mb-1.5">
                        Buat Akun KontrakKu
                      </h1>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        Mulai lindungi hak dan audit kontrak kerja Anda secara aman.
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
                            Langkah 1 dari 2
                          </span>
                          <span className="font-label-md text-label-md font-bold text-primary">Kredensial Akun</span>
                        </div>
                        <span className="text-[12px] font-bold text-[#E98E35]">50% Selesai</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-surface-container overflow-hidden flex">
                        <div className="h-full w-1/2 rounded-full bg-[#E98E35] transition-all duration-300"></div>
                        <div className="h-full w-1/2 rounded-full bg-transparent"></div>
                      </div>
                    </div>

                    <form className="space-y-4" action={formAction}>
                      {/* Status Pekerjaan Selector */}
                      <div>
                        <label className="block font-label-lg text-label-lg text-primary mb-2 font-bold">
                          Status Hubungan Kerja
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                          {[
                            { id: "pkwt", title: "Karyawan PKWT", sub: "Kontrak Waktu Tertentu" },
                            { id: "pkwtt", title: "Karyawan PKWTT", sub: "Karyawan Tetap" },
                            { id: "freelance", title: "Freelance", sub: "Mitra / Lepas" },
                            { id: "freshgrad", title: "Fresh Graduate", sub: "Pencari Kerja / Magang" },
                          ].map((item) => (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => setSelectedRole(item.id)}
                              className={`text-left p-3 rounded-xl font-label-md text-label-md font-semibold transition-all border ${selectedRole === item.id
                                  ? "bg-primary-container text-on-primary shadow-sm border-transparent"
                                  : "bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container border-surface-container"
                                }`}
                            >
                              <div className="font-bold text-sm">{item.title}</div>
                              <div className="text-[11px] font-normal opacity-75 mt-0.5">{item.sub}</div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Nama Lengkap */}
                      <div>
                        <label className="block font-label-md text-label-md text-primary mb-1.5 font-bold" htmlFor="fullName">
                          Nama Lengkap
                        </label>
                        <input
                          className="w-full h-11 px-3.5 rounded-xl bg-surface-container-low border border-surface-container text-on-surface placeholder:text-outline font-body-md text-body-md focus:bg-surface-container-lowest focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                          id="fullName"
                          name="fullName"
                          placeholder="contoh: Budi Pratama"
                          type="text"
                          required
                        />
                        {state?.fieldErrors?.fullName && (
                          <p className="text-xs text-error font-medium mt-1">{state.fieldErrors.fullName}</p>
                        )}
                      </div>

                      {/* Alamat Email */}
                      <div>
                        <label className="block font-label-md text-label-md text-primary mb-1.5 font-bold" htmlFor="email">
                          Alamat Email Aktif
                        </label>
                        <input
                          className="w-full h-11 px-3.5 rounded-xl bg-surface-container-low border border-surface-container text-on-surface placeholder:text-outline font-body-md text-body-md focus:bg-surface-container-lowest focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                          id="email"
                          name="email"
                          placeholder="nama@email.com"
                          type="email"
                          required
                        />
                        {state?.fieldErrors?.email && (
                          <p className="text-xs text-error font-medium mt-1">{state.fieldErrors.email}</p>
                        )}
                      </div>

                      {/* Kata Sandi */}
                      <div>
                        <label className="block font-label-md text-label-md text-primary mb-1.5 font-bold" htmlFor="password">
                          Kata Sandi
                        </label>
                        <div className="relative">
                          <input
                            className="w-full h-11 px-3.5 pr-10 rounded-xl bg-surface-container-low border border-surface-container text-on-surface placeholder:text-outline font-body-md text-body-md focus:bg-surface-container-lowest focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                            id="password"
                            name="password"
                            placeholder="Min. 8 karakter, huruf besar &amp; angka"
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                          <button
                            className="absolute right-3 top-2.5 text-outline hover:text-on-surface transition-colors"
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            aria-label="Tampilkan sandi"
                          >
                            <span className="material-symbols-outlined text-[20px]">
                              {showPassword ? "visibility_off" : "visibility"}
                            </span>
                          </button>
                        </div>
                        {state?.fieldErrors?.password && (
                          <p className="text-xs text-error font-medium mt-1">{state.fieldErrors.password}</p>
                        )}
                      </div>

                      {/* Password Strength Meter */}
                      <div className="p-3.5 rounded-xl bg-surface-container-low border border-surface-container">
                        <div className="flex items-center justify-between mb-2 font-label-sm text-label-sm">
                          <span className="text-on-surface-variant font-medium">Tingkat Keamanan Sandi:</span>
                          <span className="font-bold text-primary">{strengthLabel}</span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-surface-container overflow-hidden flex gap-1.5">
                          <div className={`h-full w-1/4 rounded-full transition-all duration-300 ${strength >= 1 ? "bg-[#E98E35]" : "bg-outline-variant"}`}></div>
                          <div className={`h-full w-1/4 rounded-full transition-all duration-300 ${strength >= 2 ? "bg-[#E98E35]" : "bg-outline-variant"}`}></div>
                          <div className={`h-full w-1/4 rounded-full transition-all duration-300 ${strength >= 3 ? "bg-emerald-500" : "bg-outline-variant"}`}></div>
                          <div className={`h-full w-1/4 rounded-full transition-all duration-300 ${strength >= 4 ? "bg-emerald-500" : "bg-outline-variant"}`}></div>
                        </div>
                        <div className="flex flex-wrap gap-x-5 gap-y-1 mt-2.5 text-[11px] text-on-surface-variant">
                          <span className={`flex items-center gap-1.5 ${password.length >= 8 ? "text-emerald-600 font-semibold" : ""}`}>
                            <span className="material-symbols-outlined text-[14px]">
                              {password.length >= 8 ? "check_circle" : "circle"}
                            </span>
                            Min. 8 Karakter
                          </span>
                          <span className={`flex items-center gap-1.5 ${/[A-Z]/.test(password) ? "text-emerald-600 font-semibold" : ""}`}>
                            <span className="material-symbols-outlined text-[14px]">
                              {/[A-Z]/.test(password) ? "check_circle" : "circle"}
                            </span>
                            Huruf Besar
                          </span>
                          <span className={`flex items-center gap-1.5 ${/[0-9]/.test(password) ? "text-emerald-600 font-semibold" : ""}`}>
                            <span className="material-symbols-outlined text-[14px]">
                              {/[0-9]/.test(password) ? "check_circle" : "circle"}
                            </span>
                            Angka
                          </span>
                        </div>
                      </div>

                      {/* Agree Terms Checkbox */}
                      <div className="pt-1">
                        <label className="flex items-start gap-2.5 cursor-pointer">
                          <input
                            type="checkbox"
                            name="agreeTerms"
                            id="agreeTerms"
                            defaultChecked
                            className="mt-1 h-4 w-4 rounded border-outline-variant text-primary-container accent-primary-container focus:ring-0"
                          />
                          <span className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                            Saya menyetujui{" "}
                            <Link href="/syarat-ketentuan" className="text-primary font-semibold hover:underline">
                              Syarat &amp; Ketentuan
                            </Link>{" "}
                            serta{" "}
                            <Link href="/kebijakan-privasi" className="text-primary font-semibold hover:underline">
                              Kebijakan Privasi
                            </Link>{" "}
                            terkait perlindungan data pribadi (UU PDP).
                          </span>
                        </label>
                        {state?.fieldErrors?.agreeTerms && (
                          <p className="text-xs text-error font-medium mt-1">{state.fieldErrors.agreeTerms}</p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <div className="pt-2">
                        <button
                          className="w-full py-3.5 px-6 rounded-xl bg-[#E98E35] hover:bg-[#d97f26] active:bg-[#c6711c] text-white font-title-md text-title-md font-bold shadow-[0_4px_14px_rgba(233,142,53,0.35)] hover:shadow-[0_6px_20px_rgba(233,142,53,0.45)] transition-all flex items-center justify-center gap-2 group disabled:opacity-60"
                          type="submit"
                          disabled={isPending}
                        >
                          {isPending ? (
                            <>
                              <span className="material-symbols-outlined animate-spin text-[20px]">progress_activity</span>
                              <span>Mendaftarkan Akun...</span>
                            </>
                          ) : (
                            <>
                              <span>Lanjutkan ke Langkah 2</span>
                              <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1.5">
                                arrow_forward
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
                        Fitur Dasar Bebas Akses
                      </span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-secondary text-[16px]">lock</span>
                        Privasi Data Terjamin
                      </span>
                    </div>
                    <div className="font-label-md text-label-md text-on-surface-variant">
                      Sudah punya akun?{" "}
                      <Link href="/masuk" className="text-primary hover:underline font-bold">
                        Masuk di sini
                      </Link>
                    </div>
                  </div>
                </>
              )}
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
