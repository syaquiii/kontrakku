import Link from "next/link";

export const metadata = { title: "Syarat & Ketentuan - KontrakKu" };

export default function Page() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col justify-center gap-4 p-8">
      <h1 className="text-headline-md text-on-surface">Syarat & Ketentuan</h1>
      <p className="text-body-md text-on-surface-variant">Halaman ini belum dibuat. Tidak ada desain untuk halaman ini di kode.txt.</p>
      <Link href="/" className="text-label-lg text-primary underline">Kembali ke beranda</Link>
    </main>
  );
}
