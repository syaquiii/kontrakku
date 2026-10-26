import type { Metadata } from "next";
import PanduanNegosiasiView from "@/views/PanduanNegosiasiView";

export const metadata: Metadata = {
  title: "Panduan Negosiasi & Template Bipartit Ketenagakerjaan - KontrakKu",
  description: "Taktik perundingan bipartit dan template draft pesan ke HRD terkait penolakan penahanan ijazah, pencairan kompensasi PKWT, pinalti resign, dan upah lembur.",
};

export default function Page() {
  return <PanduanNegosiasiView />;
}
