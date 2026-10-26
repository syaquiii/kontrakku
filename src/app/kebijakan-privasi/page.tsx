import type { Metadata } from "next";
import KebijakanPrivasiView from "@/views/KebijakanPrivasiView";

export const metadata: Metadata = {
  title: "Kebijakan Privasi - KontrakKu",
  description: "Kebijakan perlindungan data pribadi pengguna platform KontrakKu sesuai amanat UU PDP No. 27/2022.",
};

export default function Page() {
  return <KebijakanPrivasiView />;
}
