"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { signOutAction } from "@/actions/auth";
import { createClient } from "@/lib/supabase/client";

interface NavbarProps {
  user?: {
    name?: string | null;
    email?: string | null;
    role?: string | null;
  } | null;
}

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/analisis-kontrak", label: "Analisis Kontrak" },
  { href: "/hitung-hak-kerja", label: "Kalkulator Hak" },
  { href: "/panduan-negosiasi", label: "Panduan Negosiasi" },
  { href: "/forum-anonim", label: "Forum Diskusi" },
  { href: "/edukasi-glosarium", label: "Edukasi & Glosarium" },
];

export default function Navbar({ user }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<NavbarProps["user"]>(user || null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (user !== undefined) {
      setCurrentUser(user);
      return;
    }

    const supabase = createClient();

    // Check initial session
    supabase.auth.getUser().then(async ({ data: { user: authUser } }) => {
      if (authUser) {
        const { data: profile } = await supabase
          .from("profiles")
          .select("full_name, job_title")
          .eq("id", authUser.id)
          .single();

        setCurrentUser({
          name:
            profile?.full_name ||
            authUser.user_metadata?.full_name ||
            authUser.email?.split("@")[0] ||
            "Pekerja",
          email: authUser.email,
          role: profile?.job_title || "Karyawan",
        });
      } else {
        setCurrentUser(null);
      }
    });

    // Listen to real-time auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session?.user) {
        const { data: profile } = await supabase
          .from("profiles")
          .select("full_name, job_title")
          .eq("id", session.user.id)
          .single();

        setCurrentUser({
          name:
            profile?.full_name ||
            session.user.user_metadata?.full_name ||
            session.user.email?.split("@")[0] ||
            "Pekerja",
          email: session.user.email,
          role: profile?.job_title || "Karyawan",
        });
      } else {
        setCurrentUser(null);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [user]);

  // Close dropdown when clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setUserDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/85 backdrop-blur-xl border-b border-surface-container-high/80 transition-all">
      <div className="h-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2 xl:gap-4">
        {/* Left: Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
          <div className="w-9 h-9 rounded-xl bg-primary-container flex items-center justify-center text-on-primary shadow-sm group-hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-[20px]">gavel</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-headline-sm text-[19px] font-bold text-primary tracking-tight">
              KontrakKu
            </span>
            <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">
              LegalTech
            </span>
          </div>
        </Link>

        {/* Center: Clean Pill Navigation Links */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 p-1 rounded-full bg-surface-container-low/70 border border-surface-container shrink-0">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`px-2.5 xl:px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? "bg-primary-container text-white shadow-xs"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: User Profile or Auth CTA */}
        <div className="flex items-center gap-2.5 shrink-0">
          {currentUser ? (
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="flex items-center gap-2.5 p-1.5 pr-3 rounded-full hover:bg-surface-container transition-all border border-transparent hover:border-surface-container-high"
                aria-label="Menu Akun Pengguna"
              >
                <div className="w-8 h-8 rounded-full bg-primary-container text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : "U"}
                </div>
                <div className="hidden sm:flex flex-col text-left">
                  <span className="text-xs font-bold text-on-surface leading-tight">
                    {currentUser.name}
                  </span>
                  <span className="text-[11px] text-on-surface-variant leading-tight">
                    {currentUser.role || "Akun Terverifikasi"}
                  </span>
                </div>
                <span className="material-symbols-outlined text-[18px] text-on-surface-variant transition-transform duration-200" style={{ transform: userDropdownOpen ? "rotate(180deg)" : "none" }}>
                  expand_more
                </span>
              </button>

              {/* User Dropdown Menu */}
              {userDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-white shadow-xl border border-surface-container-high py-2 animate-in fade-in zoom-in-95 duration-150 z-50">
                  <div className="px-4 py-2 border-b border-surface-container">
                    <p className="text-xs font-semibold text-on-surface">{currentUser.name}</p>
                    <p className="text-[11px] text-on-surface-variant truncate">{currentUser.email || "Akun Pekerja"}</p>
                  </div>

                  <Link
                    href="/riwayat-profil"
                    onClick={() => setUserDropdownOpen(false)}
                    className="flex items-center gap-2.5 px-4 py-2.5 text-xs font-medium text-on-surface hover:bg-surface-container transition-colors"
                  >
                    <span className="material-symbols-outlined text-[18px] text-primary">folder_open</span>
                    Riwayat &amp; Profil Kontrak
                  </Link>

                  <Link
                    href="/pricing"
                    onClick={() => setUserDropdownOpen(false)}
                    className="flex items-center gap-2.5 px-4 py-2.5 text-xs font-medium text-amber-700 bg-amber-500/5 hover:bg-amber-500/10 transition-colors"
                  >
                    <span className="material-symbols-outlined text-[18px] text-amber-600">workspace_premium</span>
                    <span>Paket &amp; Donasi</span>
                    <span className="ml-auto text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-200/60 text-amber-800">Pro</span>
                  </Link>

                  <Link
                    href="/bantuan"
                    onClick={() => setUserDropdownOpen(false)}
                    className="flex items-center gap-2.5 px-4 py-2.5 text-xs font-medium text-on-surface hover:bg-surface-container transition-colors"
                  >
                    <span className="material-symbols-outlined text-[18px] text-on-surface-variant">help_outline</span>
                    Pusat Bantuan &amp; Regulasi
                  </Link>

                  <div className="my-1 border-t border-surface-container"></div>

                  <form action={signOutAction} className="px-2">
                    <button
                      type="submit"
                      className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-error hover:bg-error-container/40 transition-colors text-left"
                    >
                      <span className="material-symbols-outlined text-[18px]">logout</span>
                      Keluar Akun
                    </button>
                  </form>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                href="/masuk"
                className="px-3.5 py-1.5 rounded-full text-xs font-bold text-on-surface hover:bg-surface-container transition-all"
              >
                Masuk
              </Link>
              <Link
                href="/daftar"
                className="px-4 py-2 rounded-full bg-primary-container text-white text-xs font-bold hover:bg-primary transition-all shadow-xs"
              >
                Daftar Gratis
              </Link>
            </div>
          )}

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-9 h-9 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors"
            aria-label="Menu Navigasi Mobile"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-surface-container-high px-5 py-4 flex flex-col gap-1.5 shadow-lg animate-in slide-in-from-top-2 duration-150">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-primary-container text-white font-bold"
                    : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/pricing"
            onClick={() => setMobileMenuOpen(false)}
            className={`px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center justify-between ${
              pathname === "/pricing"
                ? "bg-amber-600 text-white font-bold"
                : "text-amber-800 bg-amber-50 hover:bg-amber-100"
            }`}
          >
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-amber-600">stars</span>
              Paket &amp; Donasi (Pro)
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-amber-200/80 text-amber-900 font-bold">Rp 29k</span>
          </Link>
          {currentUser ? (
            <>
              <Link
                href="/riwayat-profil"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center justify-between ${
                  pathname === "/riwayat-profil"
                    ? "bg-primary-container text-white font-bold"
                    : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
                }`}
              >
                <span>Riwayat &amp; Profil ({currentUser.name})</span>
                <span className="material-symbols-outlined text-[18px]">chevron_right</span>
              </Link>
              <form action={signOutAction} className="pt-1">
                <button
                  type="submit"
                  className="w-full flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-sm font-semibold text-error hover:bg-error-container/40 transition-colors text-left"
                >
                  <span className="material-symbols-outlined text-[18px]">logout</span>
                  Keluar Akun
                </button>
              </form>
            </>
          ) : (
            <div className="pt-2 border-t border-surface-container flex flex-col gap-2">
              <Link
                href="/masuk"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 text-center rounded-xl text-sm font-bold text-on-surface hover:bg-surface-container border border-surface-container transition-all"
              >
                Masuk ke Akun
              </Link>
              <Link
                href="/daftar"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 text-center rounded-xl bg-primary-container text-white text-sm font-bold hover:bg-primary transition-all shadow-xs"
              >
                Daftar Gratis
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
