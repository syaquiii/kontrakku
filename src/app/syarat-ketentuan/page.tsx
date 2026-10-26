import type { Metadata } from "next";
import SyaratKetentuanView from "@/views/SyaratKetentuanView";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan Penggunaan - KontrakKu",
  description: "Syarat dan ketentuan hukum penggunaan platform KontrakKu, penafian layanan, dan etika forum pekerja.",
};

export default function Page() {
  return <SyaratKetentuanView />;
}
