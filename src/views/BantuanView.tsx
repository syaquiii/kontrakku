"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const FAQ_LIST: FAQItem[] = [
  {
    id: "faq-1",
    category: "Keamanan & Privasi",
    question: "Apakah identitas dan data perusahaan saya aman di KontrakKu?",
    answer:
      "Sangat aman. Kami mematuhi amanat UU Perlindungan Data Pribadi (UU PDP No. 27/2022). Di Forum Diskusi, seluruh postingan dilindungi oleh alias anonim acak dan enkripsi data. Kami tidak pernah membagikan data identitas asli atau nama perusahaan Anda ke pihak ketiga.",
  },
  {
    id: "faq-2",
    category: "Kalkulator Hak",
    question: "Apakah rumus perhitungan hak di KontrakKu sesuai dengan hukum yang berlaku?",
    answer:
      "Ya. Seluruh formula perhitungan di platform KontrakKu diverifikasi langsung mengacu pada peraturan perundang-undangan ketenagakerjaan Republik Indonesia terbaru, khususnya Peraturan Pemerintah (PP) No. 35 Tahun 2021 dan UU Cipta Kerja (UU No. 6/2023).",
  },
  {
    id: "faq-3",
    category: "Kalkulator Hak",
    question: "Apakah pekerja yang menolak perpanjangan PKWT tetap berhak atas uang kompensasi?",
    answer:
      "Ya, tetap wajib dibayarkan! Berdasarkan Pasal 15 ayat (1) PP No. 35/2021, uang kompensasi wajib dibayarkan saat jangka waktu PKWT berakhir, tanpa membedakan apakah kontrak tersebut diperpanjang atau diakhiri.",
  },
  {
    id: "faq-4",
    category: "Forum Anonim",
    question: "Apakah pihak HRD perusahaan saya bisa melacak identitas saya di Forum Anonim?",
    answer:
      "Tidak bisa. Di Forum Anonim, nama asli dan email Anda sepenuhnya tersembunyi. Sistem secara otomatis memberikan alias anonim publik (seperti #PekerjaJakarta21) yang melindungi privasi dan karier Anda dari intimidasi atau sanksi sepihak.",
  },
  {
    id: "faq-5",
    category: "Advokasi & Bipartit",
    question: "Apakah lembar cetak hasil hitung KontrakKu bisa dijadikan bukti perundingan?",
    answer:
      "Bisa. Lembar ringkasan perhitungan yang Anda cetak atau unduh sebagai PDF menyertakan rincian dasar hukum statutory (pasal dan nomor regulasi). Dokumen ini sah dan kredibel digunakan sebagai bahan perundingan bipartit dengan manajemen atau rujukan awal saat konsultasi ke Dinas Tenaga Kerja (Disnaker).",
  },
  {
    id: "faq-6",
    category: "Akun & Keanggotaan",
    question: "Apakah menggunakan platform KontrakKu dipungut biaya?",
    answer:
      "Fitur-fitur dasar advokasi seperti Kalkulator Hak Kerja, Forum Diskusi Anonim, dan Edukasi Glosarium Hukum dapat diakses secara gratis oleh seluruh pekerja Indonesia.",
  },
];

export default function BantuanView() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [expandedId, setExpandedId] = useState<string | null>("faq-1");

  const categories = ["Semua", "Keamanan & Privasi", "Kalkulator Hak", "Forum Anonim", "Advokasi & Bipartit", "Akun & Keanggotaan"];

  const filteredFaqs = FAQ_LIST.filter((faq) => {
    if (activeCategory !== "Semua" && faq.category !== activeCategory) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      return faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q);
    }
    return true;
  });

  return (
    <div className="bg-[#f8f9fc] font-body-md text-body-md text-on-surface antialiased min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="w-full pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Header Card */}
          <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-10 border border-surface-container-high/60 shadow-sm text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px]">support_agent</span>
              <span>Pusat Bantuan &amp; Panduan Pengguna</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-on-surface tracking-tight">
              Ada yang Bisa Kami Bantu?
            </h1>
            <p className="text-sm text-on-surface-variant max-w-xl mx-auto leading-relaxed">
              Temukan jawaban cepat seputar penggunaan platform KontrakKu, validitas hukum perhitungan hak, keamanan data pribadi, dan panduan advokasi ketenagakerjaan.
            </p>

            {/* Search Input */}
            <div className="max-w-xl mx-auto pt-2">
              <div className="flex items-center gap-3 p-2 rounded-2xl bg-surface-container/60 border border-surface-container-high focus-within:border-primary focus-within:bg-white transition-all">
                <span className="material-symbols-outlined text-on-surface-variant text-[22px] pl-3">search</span>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Cari pertanyaan (contoh: kompensasi, keamanan, anonim, ijazah)..."
                  className="w-full bg-transparent text-sm text-on-surface placeholder:text-outline focus:outline-none py-1.5"
                />
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-xs"
                    : "bg-surface-container-lowest text-on-surface-variant border border-surface-container hover:bg-surface-container"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ Accordions */}
          <div className="space-y-3">
            {filteredFaqs.length === 0 ? (
              <div className="p-8 text-center bg-surface-container-lowest rounded-2xl border border-surface-container text-xs text-on-surface-variant">
                Tidak ada pertanyaan yang sesuai dengan kata kunci Anda.
              </div>
            ) : (
              filteredFaqs.map((faq) => {
                const isExpanded = expandedId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="bg-surface-container-lowest rounded-2xl border border-surface-container-high/60 overflow-hidden shadow-xs transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setExpandedId(isExpanded ? null : faq.id)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-surface-container/30 transition-colors"
                    >
                      <div className="space-y-1">
                        <span className="px-2 py-0.5 rounded-full bg-surface-container text-primary text-[10px] font-bold uppercase tracking-wide">
                          {faq.category}
                        </span>
                        <h2 className="text-sm sm:text-base font-bold text-on-surface">
                          {faq.question}
                        </h2>
                      </div>
                      <span className="material-symbols-outlined text-[20px] text-on-surface-variant transition-transform shrink-0">
                        {isExpanded ? "expand_less" : "expand_more"}
                      </span>
                    </button>

                    {isExpanded && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-on-surface-variant leading-relaxed border-t border-surface-container/60 bg-surface-container/10">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Need Further Assistance Box */}
          <div className="p-6 rounded-3xl bg-surface-container-lowest border border-surface-container-high/60 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h2 className="text-base font-bold text-on-surface">Masih Membutuhkan Bantuan Khusus?</h2>
              <p className="text-xs text-on-surface-variant">
                Tim kurator ketenagakerjaan KontrakKu siap membantu pertanyaan Anda seputar perlindungan hak pekerja.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/forum-anonim"
                className="px-4 py-2.5 rounded-xl bg-surface-container text-xs font-bold text-on-surface hover:bg-surface-container-high transition-colors"
              >
                Tanya di Forum
              </Link>
              <a
                href="mailto:bantuan@kontrakku.id"
                className="px-4 py-2.5 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-colors shadow-xs"
              >
                Hubungi Kami
              </a>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
