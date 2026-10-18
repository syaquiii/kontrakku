import type { Metadata } from "next";
import HitungHakKerjaView from "@/views/HitungHakKerjaView";

export const metadata: Metadata = { title: "Hitung Hak Kerja - KontrakKu" };

export default function Page() {
  return <HitungHakKerjaView />;
}
