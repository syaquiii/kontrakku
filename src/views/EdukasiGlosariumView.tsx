/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function EdukasiGlosariumView() {
  return (
    <div className="bg-background font-body-md text-body-md text-on-surface antialiased">
      <Navbar />
      <main className="w-full pt-16 bg-background min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col w-full">

<section className="bg-surface-container-lowest p-7 lg:p-9 rounded-2xl shadow-sm mb-8 relative overflow-hidden">
<div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-primary/5 pointer-events-none blur-2xl"></div>
<div className="relative z-10 flex flex-col gap-6">

<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-primary font-label-sm text-label-sm uppercase tracking-wider mb-3">
<span className="material-symbols-outlined text-[16px]">menu_book</span>
            Pusat Pengetahuan Hak Tenaga Kerja
          </div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-2">
            Edukasi Ketenagakerjaan &amp; Glosarium Hukum
          </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Pahami klausul hukum formal dalam bahasa yang lugas, transparan, dan terlindungi rujukan undang-undang sah Republik Indonesia.
          </p>
</div>
<div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
<div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-surface-container-low shadow-sm">
<div className="w-10 h-10 rounded-lg bg-primary-container text-on-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[22px]">find_in_page</span>
</div>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-on-surface font-bold">148+ Istilah</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Terindeks &amp; Tervalidasi</span>
</div>
</div>
<div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-surface-container-low shadow-sm">
<div className="w-10 h-10 rounded-lg bg-secondary-container text-on-secondary-container flex items-center justify-center">
<span className="material-symbols-outlined text-[22px]">policy</span>
</div>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-on-surface font-bold">32 Panduan</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Taktis Ketenagakerjaan</span>
</div>
</div>
</div>
</div>

<div className="relative w-full">
<div className="flex flex-col sm:flex-row items-stretch gap-2 p-1.5 rounded-xl bg-surface-container-low shadow-inner">
<div className="relative flex-1 flex items-center pl-4">
<span className="material-symbols-outlined text-outline text-[22px] mr-3">search</span>
<input className="w-full bg-transparent font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none py-2" id="glossary-search" placeholder="Cari istilah hukum (contoh: PKWT, Pesangon, Force Majeure, Outsourcing)..." type="text" />
</div>
<button className="px-6 py-3 rounded-lg bg-secondary-container text-on-secondary-container font-label-lg text-label-lg font-bold hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-sm shrink-0" type="button">
<span className="material-symbols-outlined text-[18px]">travel_explore</span>
<span className="">Telusuri Istilah</span>
</button>
</div>
</div>

<div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-none" id="topic-filters">
<button className="px-4 py-2 rounded-full font-label-md text-label-md transition-all whitespace-nowrap bg-primary-container text-on-primary font-bold shadow-sm" type="button">
          Semua Topik
        </button>
<button className="px-4 py-2 rounded-full font-label-md text-label-md transition-all whitespace-nowrap bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high" type="button">
          PKWT &amp; Kontrak
        </button>
<button className="px-4 py-2 rounded-full font-label-md text-label-md transition-all whitespace-nowrap bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high" type="button">
          Gaji &amp; Upah Minimum
        </button>
<button className="px-4 py-2 rounded-full font-label-md text-label-md transition-all whitespace-nowrap bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high" type="button">
          PHK &amp; Pesangon
        </button>
<button className="px-4 py-2 rounded-full font-label-md text-label-md transition-all whitespace-nowrap bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high" type="button">
          Hak Cuti &amp; Lembur
        </button>
<button className="px-4 py-2 rounded-full font-label-md text-label-md transition-all whitespace-nowrap bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high" type="button">
          Sengketa Bipartit
        </button>
</div>
</div>
</section>

<div className="grid grid-cols-12 gap-8 mb-8 items-start">

<div className="col-span-12 lg:col-span-6 space-y-4 bg-surface-container-lowest p-6 lg:p-7 rounded-2xl shadow-sm">
<div className="flex items-center justify-between pb-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[24px]">spellcheck</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Kamus Hukum Alfabetis</h2>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Update Regulasi 2024</span>
</div>

<div className="py-2 overflow-x-auto scrollbar-none flex items-center gap-1.5 bg-surface-container-low p-2 rounded-xl">
<button className="w-8 h-8 rounded-lg bg-primary-container text-on-primary font-label-sm text-label-sm font-bold flex items-center justify-center shrink-0">A</button>
<button className="w-8 h-8 rounded-lg text-on-surface-variant hover:bg-surface-container font-label-sm text-label-sm font-bold flex items-center justify-center shrink-0">B</button>
<button className="w-8 h-8 rounded-lg text-on-surface-variant hover:bg-surface-container font-label-sm text-label-sm font-bold flex items-center justify-center shrink-0">C</button>
<button className="w-8 h-8 rounded-lg text-on-surface-variant hover:bg-surface-container font-label-sm text-label-sm font-bold flex items-center justify-center shrink-0">D</button>
<button className="w-8 h-8 rounded-lg text-on-surface-variant hover:bg-surface-container font-label-sm text-label-sm font-bold flex items-center justify-center shrink-0">E</button>
<button className="w-8 h-8 rounded-lg text-on-surface-variant hover:bg-surface-container font-label-sm text-label-sm font-bold flex items-center justify-center shrink-0">F</button>
<button className="w-8 h-8 rounded-lg text-on-surface-variant hover:bg-surface-container font-label-sm text-label-sm font-bold flex items-center justify-center shrink-0">G</button>
<button className="w-8 h-8 rounded-lg text-on-surface-variant hover:bg-surface-container font-label-sm text-label-sm font-bold flex items-center justify-center shrink-0">H</button>
<button className="w-8 h-8 rounded-lg text-on-surface-variant hover:bg-surface-container font-label-sm text-label-sm font-bold flex items-center justify-center shrink-0">I</button>
<button className="w-8 h-8 rounded-lg text-on-surface-variant hover:bg-surface-container font-label-sm text-label-sm font-bold flex items-center justify-center shrink-0">K</button>
<button className="w-8 h-8 rounded-lg text-on-surface-variant hover:bg-surface-container font-label-sm text-label-sm font-bold flex items-center justify-center shrink-0">L</button>
<button className="w-8 h-8 rounded-lg text-on-surface-variant hover:bg-surface-container font-label-sm text-label-sm font-bold flex items-center justify-center shrink-0">M</button>
<button className="w-8 h-8 rounded-lg text-on-surface-variant hover:bg-surface-container font-label-sm text-label-sm font-bold flex items-center justify-center shrink-0">O</button>
<button className="w-8 h-8 rounded-lg text-on-surface-variant hover:bg-surface-container font-label-sm text-label-sm font-bold flex items-center justify-center shrink-0">P</button>
<button className="w-8 h-8 rounded-lg text-on-surface-variant hover:bg-surface-container font-label-sm text-label-sm font-bold flex items-center justify-center shrink-0">S</button>
<button className="w-8 h-8 rounded-lg text-on-surface-variant hover:bg-surface-container font-label-sm text-label-sm font-bold flex items-center justify-center shrink-0">U</button>
<button className="w-8 h-8 rounded-lg text-on-surface-variant hover:bg-surface-container font-label-sm text-label-sm font-bold flex items-center justify-center shrink-0">Z</button>
</div>

<article className="p-4 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors shadow-sm flex flex-col gap-2.5">
<div className="flex items-start justify-between gap-3">
<h3 className="font-title-md text-title-md text-on-surface font-bold">Alih Daya (Outsourcing)</h3>
<span className="px-2.5 py-1 rounded-full bg-surface-container text-primary font-label-sm text-label-sm shrink-0 font-semibold">
            PP 35/2021
          </span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          Hubungan kerja antara pekerja dengan perusahaan penyedia jasa pekerja (vendor) untuk melaksanakan sebagian pekerjaan pada perusahaan pemberi pekerjaan. Wajib memenuhi asas pengalihan perlindungan hak kerja (TUPE).
        </p>
<div className="flex items-center gap-2 pt-1">
<span className="material-symbols-outlined text-primary text-[18px]">verified</span>
<span className="font-label-sm text-label-sm text-on-surface font-medium">Berdasarkan Bab IV PP No. 35/2021</span>
</div>
</article>

<article className="p-4 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors shadow-sm flex flex-col gap-2.5">
<div className="flex items-start justify-between gap-3">
<h3 className="font-title-md text-title-md text-on-surface font-bold">Uang Pesangon (UP)</h3>
<span className="px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm shrink-0 font-semibold">
            Komponen Hak PHK
          </span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          Uang yang dibayarkan oleh pengusaha kepada pekerja/buruh sebagai akibat adanya pemutusan hubungan kerja (PHK) yang besarannya dihitung berdasarkan masa kerja riil sesuai ketentuan statutory UU Cipta Kerja.
        </p>
<div className="flex items-center gap-2 pt-1">
<span className="material-symbols-outlined text-secondary text-[18px]">account_balance_wallet</span>
<span className="font-label-sm text-label-sm text-on-surface font-medium">Pasal 40 PP No. 35/2021 jo. UU No. 6/2023</span>
</div>
</article>

<article className="p-4 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors shadow-sm flex flex-col gap-2.5">
<div className="flex items-start justify-between gap-3">
<h3 className="font-title-md text-title-md text-on-surface font-bold">PKWT (Perjanjian Kerja Waktu Tertentu)</h3>
<span className="px-2.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm shrink-0 font-semibold">
            Maks. 5 Tahun (UU Cipta Kerja)
          </span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          Perjanjian kerja antara pekerja dengan pengusaha untuk mengadakan hubungan kerja dalam waktu tertentu atau untuk pekerjaan tertentu. Tidak dapat mensyaratkan masa percobaan kerja (probation).
        </p>
<div className="flex items-center gap-2 pt-1">
<span className="material-symbols-outlined text-primary text-[18px]">event_note</span>
<span className="font-label-sm text-label-sm text-on-surface font-medium">Pasal 56 &amp; 58 UU No. 13/2003 terbarukan</span>
</div>
</article>

<article className="p-4 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors shadow-sm flex flex-col gap-2.5">
<div className="flex items-start justify-between gap-3">
<h3 className="font-title-md text-title-md text-on-surface font-bold">Upah Lembur</h3>
<span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm shrink-0 font-semibold">
            1/173 Upah Bulanan
          </span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          Kompensasi finansial wajib atas kerja melebihi 7 jam sehari (40 jam seminggu untuk 6 hari kerja) atau 8 jam sehari (untuk 5 hari kerja). Jam pertama dihitung 1,5x upah per jam dan jam berikutnya 2x.
        </p>
<div className="flex items-center gap-2 pt-1">
<span className="material-symbols-outlined text-primary text-[18px]">calculate</span>
<span className="font-label-sm text-label-sm text-on-surface font-medium">Pasal 31-34 PP No. 35/2021</span>
</div>
</article>

<article className="p-4 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors shadow-sm flex flex-col gap-2.5">
<div className="flex items-start justify-between gap-3">
<h3 className="font-title-md text-title-md text-on-surface font-bold">Surat Peringatan (SP 1, 2, 3)</h3>
<span className="px-2.5 py-1 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm shrink-0 font-semibold">
            Masa Berlaku 6 Bulan
          </span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          Tindakan pembinaan disiplin karyawan atas pelanggaran perjanjian kerja, peraturan perusahaan, atau PKB. Masing-masing tingkat peringatan sah berlaku selama 6 bulan kecuali diatur lain secara lebih menguntungkan pekerja.
        </p>
<div className="flex items-center gap-2 pt-1">
<span className="material-symbols-outlined text-error text-[18px]">warning</span>
<span className="font-label-sm text-label-sm text-on-surface font-medium">Pasal 161 UU No. 13/2003</span>
</div>
</article>

<div className="mt-4 p-5 rounded-xl bg-gradient-to-r from-primary-container to-primary text-on-primary flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
<div className="flex items-center gap-3.5">
<div className="w-11 h-11 rounded-lg bg-surface-container-lowest/15 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[24px]">document_scanner</span>
</div>
<div>
<h4 className="font-title-md text-title-md font-bold leading-tight">Bingung Menganalisis Klausul Kontrakmu?</h4>
<p className="font-body-sm text-body-sm text-primary-fixed opacity-90">Unggah draft PDF untuk bedah otomatis kecerdasan AI.</p>
</div>
</div>
<a className="px-4 py-2.5 rounded-lg bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold whitespace-nowrap hover:opacity-90 active:scale-95 transition-all shrink-0 text-center" href="#analisis">
          Analisis Sekarang
        </a>
</div>
</div>

<div className="col-span-12 lg:col-span-6 space-y-6">

<article className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
<div className="relative h-56 w-full overflow-hidden">
<img alt="Konsultan hukum ketenagakerjaan meninjau dokumen kontrak" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" data-alt="Modern law office library setting in Jakarta with a female employment legal expert reviewing a formal labor contract document with warm natural ambient lighting, deep navy blue and soft amber office tones, high professional detail and clean legal technology ambiance" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPaExO9CDZKReJfw-AFk20Z6BfwqRO3SQvgxGLao3Gig6qp8Mn8-tFQswS488CF2-BT3jhz6dP2RD5vtwYGLcWee6bxwPUNvg2ZUcGkprEwwifsu1cNw4U7UGbxdTm17kWtHpD5liA__J3DVAI28__YGn_mV-z5fwh_XPsVul9TwMAkcmplw5jqMwt1BpaKCso2tqBTlu8YwbUxwnSJZ_RGiMnvxuufAt9vkyGoubPgMqshRzfPKi2dA" />
<div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent"></div>
<div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
<span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold shadow-sm">
              Panduan Utama • 6 Menit Baca
            </span>
<span className="font-label-sm text-label-sm text-on-primary font-medium flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">visibility</span>
              8.4k Dibaca
            </span>
</div>
</div>
<div className="p-6 flex flex-col gap-3">
<div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px]">calendar_today</span>
<span className="">Diperbarui Oktober 2024</span>
<span className="">•</span>
<span className="text-primary font-semibold">Kategori PHK &amp; Kompensasi</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold hover:text-primary transition-colors cursor-pointer">
            Hak Karyawan Kontrak yang Di-PHK Sebelum Kontrak Habis
          </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Perusahaan yang memutuskan hubungan kerja PKWT sebelum batas waktu berakhir diwajibkan membayar sisa bulan berjalan hingga akhir durasi kontrak, ditambah uang kompensasi prorata sesuai masa bakti yang telah diselesaikan.
          </p>

<div className="p-3.5 rounded-xl bg-surface-container-low border-l-4 border-primary">
<p className="font-body-sm text-body-sm text-on-surface italic font-medium">
              “Pasal 62 UU No. 13/2003: Apabila salah satu pihak mengakhiri hubungan kerja sebelum berakhirnya jangka waktu, pihak yang mengakhiri wajib membayar ganti rugi sebesar upah pekerja sampai batas waktu berakhirnya kontrak.”
            </p>
</div>
<div className="flex items-center justify-between pt-2">
<button className="inline-flex items-center gap-2 font-label-lg text-label-lg text-primary font-bold hover:underline" type="button">
<span className="">Baca Selengkapnya</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
<div className="flex items-center gap-2">
<button aria-label="Simpan Artikel" className="w-9 h-9 rounded-full bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">bookmark_border</span>
</button>
<button aria-label="Bagikan" className="w-9 h-9 rounded-full bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">share</span>
</button>
</div>
</div>
</div>
</article>

<article className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row gap-5 items-center">
<div className="w-full sm:w-36 h-28 rounded-xl overflow-hidden shrink-0">
<img alt="Dua profesional berjabat tangan di meja pertemuan kerja" className="w-full h-full object-cover" data-alt="Close up view of two professionals shaking hands cordially across a sleek conference table with employment contract paper and pen laid out neatly, warm lighting, corporate Jakarta setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCF6VZ39EH_WFSiIhNNbaZHZ7qxsJoB7Psnh4uC-UOr4dpLdtuKGZU6ygYSScrHp8rJEWh0oFRuPWaYw86lf57EsDNzNTB20V1LQdF3fRLM9ykjKh89ECQ2Riij7tdGpLXUq5qZOjxMQIO7wCkw4DpWgRxI47loJoLeMJIbOUqxPXQ0tBiy5NNIbfTlmHF0obXKQ9wgQ3yvruW6YUsqU25RPSzXAiGMXGD1NsvtIuImRPVAX85-PKEVdA" />
</div>
<div className="flex-1 flex flex-col gap-1.5">
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded-md bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold">Taktis</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">4 min read</span>
</div>
<h4 className="font-title-md text-title-md text-on-surface font-bold hover:text-primary transition-colors cursor-pointer leading-snug">
            5 Langkah Negosiasi Kontrak Kerja Tanpa Merusak Hubungan dengan HRD
          </h4>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
            Metode diplomasi klausul non-kompetisi, tunjangan fleksibel, dan klausul revisi upah berkala yang etis dan aman secara yuridis.
          </p>
</div>
</article>

<article className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row gap-5 items-center">
<div className="w-full sm:w-36 h-28 rounded-xl overflow-hidden shrink-0">
<img alt="Dokumen hukum dengan kaca pembesar pada klausul kontrak" className="w-full h-full object-cover" data-alt="Indonesian legal documents with magnifying glass emphasizing critical fine print clauses on a clean minimalist desk, warm amber accents and deep navy blue tones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKlLqg7GGgiS6p0eZ-hsE2o2floHM4SH0jIioPu5joOVt6jqf-gV7xRtIrWd52sNTRm4J9IjHJ5_bNXyhBvVw1bbmUnh70CnGUegkDkCDttKtP7_bUmbGdf-iRI90HWZnzONQ2X9VwiHMWfyFLKEHCvnmHMwxX7xrzpkRx-ql--1jsmHEmfXGXETg5qjWALzGmBDmC65vqwvQx1vYzCEIJei024UpsN5d4MNDyoMs8d_YLMrHffMYzsA" />
</div>
<div className="flex-1 flex flex-col gap-1.5">
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded-md bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold">Penting &amp; Kritis</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">5 min read</span>
</div>
<h4 className="font-title-md text-title-md text-on-surface font-bold hover:text-primary transition-colors cursor-pointer leading-snug">
            Masa Percobaan (Probation): Apakah Sah untuk Karyawan PKWT?
          </h4>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
            Menurut Pasal 58 UU Ketenagakerjaan, klausul masa percobaan dalam PKWT batal demi hukum dan masa kerja tetap terhitung penuh.
          </p>
</div>
</article>

<div className="p-6 rounded-2xl bg-surface-container-low shadow-sm flex flex-col sm:flex-row items-center justify-between gap-5 relative overflow-hidden">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-on-primary shrink-0 shadow-sm">
<span className="material-symbols-outlined text-[26px]">forum</span>
</div>
<div className="flex flex-col">
<h4 className="font-title-md text-title-md text-on-surface font-bold">Punya Pertanyaan Spesifik?</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Diskusikan di forum bersama <strong className="text-on-surface font-semibold">12.000+ anggota</strong> pekerja secara anonim.</p>
</div>
</div>
<Link className="px-5 py-2.5 rounded-lg bg-primary-container text-on-primary font-label-lg text-label-lg font-bold whitespace-nowrap hover:bg-primary transition-all flex items-center gap-2 shrink-0 shadow-sm" href="/forum-anonim">
  <span className="">Buka Forum</span>
  <span className="material-symbols-outlined text-[18px]">open_in_new</span>
</Link>
</div>
</div>
</div>

</div>
</div>
</main>
      <Footer />
    </div>
  );
}
