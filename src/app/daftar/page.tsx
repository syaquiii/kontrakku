import type { Metadata } from "next";
import DaftarView from "@/views/DaftarView";

export const metadata: Metadata = { title: "Daftar Akun - KontrakKu" };

export default function Page() {
  return <DaftarView />;
}
