"use client";

import Link from "next/link";
import { useState, useActionState } from "react";
import { signInAction, type ActionState } from "@/actions/auth";

export default function MasukView() {
  const [showPassword, setShowPassword] = useState(false);
  const [state, formAction, isPending] = useActionState<ActionState | null, FormData>(
    signInAction,
    null
  );

  return (
    <div className="bg-[#f8f9fc] font-body-md text-body-md text-on-surface antialiased min-h-screen flex flex-col justify-between selection:bg-primary-fixed selection:text-on-primary-fixed">
      <header className="w-full bg-surface-container-lowest/90 backdrop-blur-xl border-b border-surface-container-high z-50 sticky top-0">
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
            <div className="hidden md:flex items-center gap-space-xs px-3 py-1.5 bg-surface-container rounded-full text-on-surface-variant font-label-md text-label-md">
              <span className="material-symbols-outlined text-secondary text-[16px]">verified_user</span>
              <span>256-bit SSL Enkripsi</span>
            </div>
            <Link
              href="/bantuan"
              className="flex items-center gap-1 font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors px-2 py-1"
            >
              <span className="material-symbols-outlined text-[18px]">help_outline</span>
              <span className="hidden sm:inline">Bantuan</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center w-full px-4 sm:px-6 lg:px-8 py-8 lg:py-12 relative">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#001382_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="relative w-full max-w-5xl mx-auto z-10">
          <div className="bg-surface-container-lowest rounded-3xl shadow-2xl border border-outline-variant/20 overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[660px]">
            {/* Left Brand Panel */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#001382] via-[#152280] to-[#213099] p-8 lg:p-12 text-on-primary relative flex flex-col justify-between overflow-hidden">
              <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-on-primary-container/20 blur-3xl pointer-events-none"></div>
              <div className="absolute -left-12 -bottom-12 w-72 h-72 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none"></div>
              <div className="relative z-10 flex flex-col gap-6">
                <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
                  <span className="material-symbols-outlined text-[16px] text-secondary-fixed">verified</span>
                  <span className="font-label-sm text-[12px] uppercase tracking-wider text-secondary-fixed font-semibold">
                    Platform Advokasi Ketenagakerjaan
                  </span>
                </div>

                <div className="space-y-3">
                  <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                    Lindungi Hak Ketenagakerjaanmu Bersama KontrakKu.
                  </h1>
                  <p className="font-body-md text-sm text-primary-fixed-dim/90 leading-relaxed">
                    Analisis klausul pasal berisiko, simulasi kompensasi PKWT/PHK, dan perlindungan hukum terstruktur sesuai UU Cipta Kerja &amp; PP 35/2021.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-secondary-fixed">
                      <span className="material-symbols-outlined text-[22px]">document_scanner</span>
                    </div>
                    <div className="min-w-0">
                      <div className="font-label-lg text-sm font-bold text-white">Audit Klausul Mandiri</div>
                      <div className="font-body-sm text-xs text-primary-fixed-dim">Deteksi pasal ambigu, denda berlebihan, &amp; jam lembur</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-secondary-fixed">
                      <span className="material-symbols-outlined text-[22px]">lock_person</span>
                    </div>
                    <div className="min-w-0">
                      <div className="font-label-lg text-sm font-bold text-white">Privasi Terjamin UU PDP</div>
                      <div className="font-body-sm text-xs text-primary-fixed-dim">Enkripsi ketat, data dokumen tidak dipublikasikan</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-secondary-fixed">
                      <span className="material-symbols-outlined text-[22px]">calculate</span>
                    </div>
                    <div className="min-w-0">
                      <div className="font-label-lg text-sm font-bold text-white">Kalkulator Hak Sah</div>
                      <div className="font-body-sm text-xs text-primary-fixed-dim">Simulasi pesangon dan kompensasi berbasis PP 35/2021</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-6 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                <p className="font-body-sm text-xs italic text-surface-bright leading-relaxed">
                  &ldquo;KontrakKu memberikan gambaran jelas mengenai hak kompensasi PKWT dan draf argumentasi negosiasi sebelum menandatangani perpanjangan kontrak.&rdquo;
                </p>
                <div className="mt-3 flex items-center justify-between pt-2 border-t border-white/10">
                  <span className="font-label-md text-xs font-semibold text-white">Advokasi Pekerja Indonesia</span>
                  <span className="font-label-sm text-[11px] text-primary-fixed-dim">Edukasi Mandiri</span>
                </div>
              </div>
            </div>

            {/* Right Form Panel */}
            <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-between bg-white">
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="inline-flex p-1 bg-surface-container-low rounded-xl border border-surface-container">
                    <button
                      className="py-1.5 px-4 rounded-lg font-label-md text-sm transition-all font-bold bg-white text-primary shadow-sm text-center"
                      type="button"
                    >
                      Masuk (Login)
                    </button>
                    <Link
                      href="/daftar"
                      className="py-1.5 px-4 rounded-lg font-label-md text-sm transition-all text-on-surface-variant hover:text-primary text-center font-medium"
                    >
                      Daftar Akun
                    </Link>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-on-surface-variant font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Layanan Aktif
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h2 className="text-2xl sm:text-[28px] font-bold text-on-surface tracking-tight">Selamat Datang Kembali</h2>
                  <p className="text-sm text-on-surface-variant">
                    Masuk untuk mengakses riwayat audit kontrak dan hasil simulasi hak kerja Anda.
                  </p>
                </div>

                {state?.error && (
                  <div className="p-3.5 rounded-xl bg-error-container text-on-error-container flex items-center gap-2.5 text-body-sm font-medium animate-in fade-in">
                    <span className="material-symbols-outlined text-[20px] text-error shrink-0">error</span>
                    <span>{state.error}</span>
                  </div>
                )}

                <form className="space-y-4" action={formAction}>
                  <div className="space-y-1.5">
                    <label className="block font-label-lg text-sm font-semibold text-on-surface" htmlFor="email">
                      Alamat Email
                    </label>
                    <div className="relative flex items-center">
                      <span className="material-symbols-outlined absolute left-3.5 text-on-surface-variant text-[20px] pointer-events-none">
                        mail
                      </span>
                      <input
                        className="w-full h-11 pl-11 pr-4 rounded-xl border border-outline-variant/40 bg-surface-container-low/40 text-on-surface placeholder:text-on-surface-variant/50 font-body-md text-sm focus:outline-none focus:border-primary-container focus:bg-white focus:ring-2 focus:ring-primary-container/20 transition-all"
                        id="email"
                        name="email"
                        placeholder="nama.karyawan@email.com"
                        required
                        type="email"
                      />
                    </div>
                    {state?.fieldErrors?.email && (
                      <p className="text-xs text-error font-medium">{state.fieldErrors.email}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label className="block font-label-lg text-sm font-semibold text-on-surface" htmlFor="password">
                        Kata Sandi
                      </label>
                      <Link href="/lupa-kata-sandi" className="text-xs text-primary-container font-semibold hover:underline">
                        Lupa Kata Sandi?
                      </Link>
                    </div>
                    <div className="relative flex items-center">
                      <span className="material-symbols-outlined absolute left-3.5 text-on-surface-variant text-[20px] pointer-events-none">
                        key
                      </span>
                      <input
                        className="w-full h-11 pl-11 pr-11 rounded-xl border border-outline-variant/40 bg-surface-container-low/40 text-on-surface placeholder:text-on-surface-variant/50 font-body-md text-sm focus:outline-none focus:border-primary-container focus:bg-white focus:ring-2 focus:ring-primary-container/20 transition-all"
                        id="password"
                        name="password"
                        placeholder="Masukkan kata sandi terdaftar"
                        required
                        type={showPassword ? "text" : "password"}
                      />
                      <button
                        aria-label="Tampilkan sandi"
                        className="absolute right-3 text-on-surface-variant hover:text-on-surface transition-colors focus:outline-none p-1"
                        onClick={() => setShowPassword(!showPassword)}
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          {showPassword ? "visibility_off" : "visibility"}
                        </span>
                      </button>
                    </div>
                    {state?.fieldErrors?.password && (
                      <p className="text-xs text-error font-medium">{state.fieldErrors.password}</p>
                    )}
                  </div>

                  <button
                    className="w-full h-12 rounded-xl bg-primary hover:bg-primary-container text-white font-label-lg text-sm font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-[0.99] mt-2 disabled:opacity-60"
                    type="submit"
                    disabled={isPending}
                  >
                    {isPending ? (
                      <>
                        <span className="material-symbols-outlined animate-spin text-[20px]">progress_activity</span>
                        <span>Memproses...</span>
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined text-[20px]">lock_open</span>
                        <span>Masuk ke KontrakKu</span>
                      </>
                    )}
                  </button>
                </form>

                <div className="text-center pt-1">
                  <p className="font-body-sm text-xs text-on-surface-variant">
                    Belum punya akun?{" "}
                    <Link href="/daftar" className="font-bold text-primary-container hover:underline ml-1">
                      Daftar Sekarang Gratis &rarr;
                    </Link>
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-surface-container-high/70 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-on-surface-variant font-label-sm text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-primary-container">shield</span>
                  <span className="font-medium">256-Bit SSL</span>
                </div>
                <span className="text-outline-variant">&bull;</span>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-primary-container">encrypted</span>
                  <span className="font-medium">Privasi UU PDP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full bg-surface-container-lowest py-space-md border-t border-surface-container-high">
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
