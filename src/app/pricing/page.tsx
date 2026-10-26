import type { Metadata } from "next";
import PricingView from "@/views/PricingView";

export const metadata: Metadata = {
  title: "Paket Layanan & Solidaritas Advokasi - KontrakKu",
  description: "Pilihan paket advokasi mandiri, akses template negosiasi lengkap, simpan simulasi tak terbatas, dan donasi solidaritas buruh independen.",
};

export default function Page() {
  return <PricingView />;
}
