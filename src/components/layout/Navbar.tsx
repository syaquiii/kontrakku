"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface NavbarProps {
  user?: {
    name?: string | null;
    role?: string | null;
  } | null;
}

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/analisis-kontrak", label: "Analisis Kontrak" },
  { href: "/hitung-hak-kerja", label: "Hitung Hak Kerja" },
  { href: "/forum-anonim", label: "Forum Anonim" },
  { href: "/edukasi-glosarium", label: "Edukasi & Glosarium" },
  { href: "/riwayat-profil", label: "Riwayat & Profil" },
];

export default function Navbar({ user }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center shadow-sm">
            <span className="material-symbols-outlined text-on-primary text-[24px]">gavel</span>
          </div>
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-primary tracking-tight font-bold">KontrakKu</span>
            <span className="font-label-sm text-label-sm tracking-wider uppercase text-on-surface-variant font-bold">Labor Law &amp; Audit</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1.5 p-1 rounded-full bg-surface-container-low">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`px-3.5 py-1.5 rounded-full transition-all text-label-lg font-label-lg ${
                  isActive
                    ? "bg-primary-container text-on-primary font-title-md shadow-xs"
                    : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Section: User Profile or Sign In */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="relative hidden md:block w-44 lg:w-48">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">
              search
            </span>
            <input
              className="w-full pl-9 pr-3 py-1.5 rounded-full bg-surface-container-low font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary-container"
              placeholder="Cari klausul / UU..."
              type="text"
            />
          </div>

          {user ? (
            <Link
              href="/riwayat-profil"
              className="flex items-center gap-2 pl-2 hover:opacity-85 transition-opacity"
            >
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
              </div>
              <div className="hidden sm:flex flex-col text-left">
                <span className="font-label-md text-label-md text-on-surface font-semibold leading-tight">
                  {user.name || "Pengguna"}
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant leading-tight">
                  {user.role || "Karyawan"}
                </span>
              </div>
            </Link>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                href="/masuk"
                className="px-4 py-2 rounded-xl text-label-md font-label-md text-primary hover:bg-surface-container transition-all"
              >
                Masuk
              </Link>
              <Link
                href="/daftar"
                className="px-4 py-2 rounded-xl bg-primary-container text-on-primary text-label-md font-label-md hover:bg-primary transition-all shadow-xs"
              >
                Daftar
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
            aria-label="Toggle Mobile Menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-surface-container-lowest border-t border-surface-container-high px-6 py-4 flex flex-col gap-2 shadow-lg animate-in fade-in duration-200">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-body-md font-medium transition-all ${
                  isActive
                    ? "bg-primary-container text-on-primary font-semibold"
                    : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
