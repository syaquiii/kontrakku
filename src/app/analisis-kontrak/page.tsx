import type { Metadata } from "next";
import AnalisisKontrakView from "@/views/AnalisisKontrakView";

export const metadata: Metadata = { title: "Analisis Kontrak AI - KontrakKu" };

export default function Page() {
  return <AnalisisKontrakView />;
}
