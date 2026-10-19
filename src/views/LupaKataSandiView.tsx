"use client";

import Link from "next/link";
import { useActionState } from "react";
import { forgotPasswordAction, type ActionState } from "@/actions/auth";

export default function LupaKataSandiView() {
  const [state, formAction, isPending] = useActionState<ActionState | null, FormData>(
    forgotPasswordAction,
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
          <Link
            href="/masuk"
            className="flex items-center gap-1 font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors px-2 py-1"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            <span>Kembali Masuk</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center w-full px-4 sm:px-6 py-12 relative">
        <div className="w-full max-w-md mx-auto bg-surface-container-lowest rounded-3xl shadow-xl border border-outline-variant/20 p-8 sm:p-10">
          <div className="w-12 h-12 rounded-2xl bg-primary-container/10 text-primary flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-[28px]">lock_reset</span>
          </div>

          <h1 className="text-2xl font-bold text-on-surface tracking-tight mb-2">
            Pemulihan Kata Sandi
          </h1>
          <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
            Masukkan alamat email yang terdaftar. Kami akan mengirimkan tautan aman untuk menyetel ulang kata sandi Anda.
          </p>

          {state?.success ? (
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 space-y-3">
              <div className="flex items-center gap-2 font-semibold text-sm">
                <span className="material-symbols-outlined text-[20px] text-emerald-600">mark_email_read</span>
                Tautan Pemulihan Terkirim
              </div>
              <p className="text-xs leading-relaxed text-emerald-700">
                Silakan periksa kotak masuk atau folder spam email Anda untuk instruksi pengaturan ulang kata sandi.
              </p>
              <Link
                href="/masuk"
                className="inline-block pt-2 text-xs font-bold text-emerald-800 underline hover:opacity-80"
              >
                &larr; Kembali ke Halaman Masuk
              </Link>
            </div>
          ) : (
            <form action={formAction} className="space-y-4">
              {state?.error && (
                <div className="p-3.5 rounded-xl bg-error-container text-on-error-container flex items-center gap-2 text-xs font-medium">
                  <span className="material-symbols-outlined text-[18px] text-error">error</span>
                  <span>{state.error}</span>
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-on-surface mb-1.5">
                  Alamat Email
                </label>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-3.5 text-on-surface-variant text-[20px] pointer-events-none">
                    mail
                  </span>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="nama.karyawan@email.com"
                    className="w-full h-11 pl-11 pr-4 rounded-xl border border-outline-variant/40 bg-surface-container-low/40 text-on-surface font-body-md text-sm focus:outline-none focus:border-primary-container focus:bg-white focus:ring-2 focus:ring-primary-container/20 transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="w-full h-12 rounded-xl bg-primary hover:bg-primary-container text-white font-label-lg text-sm font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-[0.99] disabled:opacity-60"
              >
                {isPending ? (
                  <>
                    <span className="material-symbols-outlined animate-spin text-[20px]">progress_activity</span>
                    <span>Mengirim Tautan...</span>
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[20px]">send</span>
                    <span>Kirim Tautan Pemulihan</span>
                  </>
                )}
              </button>

              <div className="text-center pt-2">
                <Link href="/masuk" className="text-xs text-on-surface-variant hover:text-primary font-medium">
                  Ingat kata sandi? <strong className="text-primary underline">Masuk kembali</strong>
                </Link>
              </div>
            </form>
          )}
        </div>
      </main>

      <footer className="w-full bg-surface-container-lowest py-4 border-t border-surface-container-high text-center font-body-sm text-xs text-on-surface-variant">
        &copy; {new Date().getFullYear()} KontrakKu. Hak Cipta Dilindungi.
      </footer>
    </div>
  );
}
