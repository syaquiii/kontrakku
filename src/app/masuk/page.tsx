import type { Metadata } from "next";
import MasukView from "@/views/MasukView";

export const metadata: Metadata = { title: "Masuk - KontrakKu" };

export default function Page() {
  return <MasukView />;
}
