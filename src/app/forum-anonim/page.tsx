import type { Metadata } from "next";
import ForumAnonimView from "@/views/ForumAnonimView";

export const metadata: Metadata = { title: "Forum Komunitas Pekerja Anonim - KontrakKu" };

export default function Page() {
  return <ForumAnonimView />;
}
