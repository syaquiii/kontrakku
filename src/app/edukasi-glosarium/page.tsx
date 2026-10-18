import type { Metadata } from "next";
import EdukasiGlosariumView from "@/views/EdukasiGlosariumView";

export const metadata: Metadata = { title: "Edukasi & Glosarium - KontrakKu" };

export default function Page() {
  return <EdukasiGlosariumView />;
}
