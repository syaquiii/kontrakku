import type { Metadata } from "next";
import BantuanView from "@/views/BantuanView";

export const metadata: Metadata = {
  title: "Pusat Bantuan & FAQ - KontrakKu",
  description: "Pertanyaan umum dan panduan penggunaan platform KontrakKu, validasi dasar hukum PP 35/2021, dan perlindungan privasi data pekerja.",
};

export default function Page() {
  return <BantuanView />;
}
