import type { Metadata } from "next";
import BerandaView from "@/views/BerandaView";

export const metadata: Metadata = { title: "Beranda - KontrakKu" };

export default function Page() {
  return <BerandaView />;
}
