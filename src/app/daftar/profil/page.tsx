import type { Metadata } from "next";
import DaftarProfilView from "@/views/DaftarProfilView";

export const metadata: Metadata = { title: "Daftar Akun - Profil & Privasi - KontrakKu" };

export default function Page() {
  return <DaftarProfilView />;
}
