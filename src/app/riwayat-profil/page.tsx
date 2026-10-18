import type { Metadata } from "next";
import RiwayatProfilView from "@/views/RiwayatProfilView";

export const metadata: Metadata = { title: "Profil & Riwayat Kontrak - KontrakKu" };

export default function Page() {
  return <RiwayatProfilView />;
}
