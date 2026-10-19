import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low py-10 border-t border-surface-container-high/60">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary-container text-[20px]">
              verified_user
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Kepatuhan Privasi Data:{" "}
              <strong className="text-on-surface font-semibold">UU PDP No. 27/2022 Terjamin</strong>
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/kebijakan-privasi"
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
            >
              Kebijakan Privasi
            </Link>
            <Link
              href="/syarat-ketentuan"
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
            >
              Syarat &amp; Ketentuan
            </Link>
            <Link
              href="/bantuan"
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
            >
              Pusat Bantuan
            </Link>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              &copy; {new Date().getFullYear()} KontrakKu. Hak Cipta Dilindungi.
            </span>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="pt-4 border-t border-surface-container text-center md:text-left">
          <p className="font-label-sm text-label-sm text-on-surface-variant leading-relaxed opacity-75">
            <strong>Pemberitahuan Hukum:</strong> KontrakKu merupakan platform edukasi dan asistensi mandiri berbasis teknologi. Informasi, simulasi kalkulasi, dan analisis draf kontrak yang dihasilkan ditujukan semata-mata sebagai referensi edukatif dan tidak dapat dianggap sebagai nasihat hukum formal atau pengganti representasi advokat berlisensi.
          </p>
        </div>
      </div>
    </footer>
  );
}
