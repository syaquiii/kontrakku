"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  getForumThreads,
  createForumThread,
  getForumComments,
  createForumComment,
  upvoteForumThread,
  type ForumThreadItem,
  type ForumCommentItem,
} from "@/actions/forum";

const SAMPLE_STARTER_THREADS: ForumThreadItem[] = [
  {
    id: "sample-1",
    authorAlias: "#PekerjaJakarta21",
    avatarSeed: "12",
    category: "Pinalti Resign",
    createdAt: new Date().toISOString(),
    timeAgo: "2 jam lalu",
    title: "Diancam denda pinalti Rp60 Juta karena resign sebelum 2 tahun, padahal lembur tidak pernah dibayar.",
    content:
      "Saya menandatangani PKWT 24 bulan di perusahaan swasta. Pada bulan ke-9 saya mengajukan resign karena beban kerja 14 jam/hari tanpa SPL resmi maupun uang lembur. HRD langsung menagih denda klausul Rp60.000.000. Apakah klausul ini sah di mata hukum?",
    upvotes: 48,
    commentsCount: 14,
    verifiedAnswer: {
      author: "Kurator Regulasi Ketenagakerjaan",
      text: "Berdasarkan asas timbal balik hukum perjanjian dan PP No. 35/2021, perusahaan tidak berhak menuntut penalti jika kewajiban normatifnya sendiri (upah lembur wajib) dilanggar secara sepihak. Simpan bukti jam kerja Anda dan ajukan perundingan bipartit tertulis.",
      legalRef: "Pasal 1338 KUHPerdata & PP 35/2021",
    },
  },
  {
    id: "sample-2",
    authorAlias: "#StafBandung08",
    avatarSeed: "45",
    category: "Penahanan Ijazah",
    createdAt: new Date().toISOString(),
    timeAgo: "5 jam lalu",
    title: "HRD menolak mengembalikan ijazah asli setelah kontrak 1 tahun selesai.",
    content:
      "Kontrak PKWT saya sudah selesai dan saya tidak memperpanjang. Namun HRD beralasan ada serah terima berkas yang belum tuntas sehingga ijazah asli masih ditahan. Langkah hukum tercepat apa yang bisa saya ambil?",
    upvotes: 32,
    commentsCount: 9,
  },
  {
    id: "sample-3",
    authorAlias: "#EngineerSurabaya99",
    avatarSeed: "78",
    category: "Kompensasi PKWT",
    createdAt: new Date().toISOString(),
    timeAgo: "1 hari lalu",
    title: "Apakah uang kompensasi PKWT tetap wajib jika kita yang menolak perpanjangan kontrak?",
    content:
      "Masa kontrak 12 bulan saya habis bulan depan. Perusahaan menawarkan perpanjangan tapi saya putuskan mencari tempat lain. Apakah hak kompensasi 1 bulan gaji tetap cair?",
    upvotes: 65,
    commentsCount: 21,
    verifiedAnswer: {
      author: "Kurator Regulasi Ketenagakerjaan",
      text: "Ya, tetap wajib cair! Berdasarkan Pasal 15 PP 35/2021, uang kompensasi wajib diberikan pada saat jangka waktu PKWT berakhir, terlepas dari apakah kontrak diperpanjang atau tidak.",
      legalRef: "Pasal 15 ayat (1) PP No. 35/2021",
    },
  },
];

const CATEGORIES = ["Semua", "Pinalti Resign", "Penahanan Ijazah", "Kompensasi PKWT", "Upah & Lembur"];

export default function ForumAnonimView() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [showCompose, setShowCompose] = useState(false);
  const [alias, setAlias] = useState("#PekerjaSurabaya99");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [threads, setThreads] = useState<ForumThreadItem[]>(SAMPLE_STARTER_THREADS);
  const [isLoading, setIsLoading] = useState(false);
  const [actionError, setActionError] = useState<string | null>(null);
  const [actionSuccess, setActionSuccess] = useState<string | null>(null);

  // Active expanded comments thread
  const [expandedThreadId, setExpandedThreadId] = useState<string | null>(null);
  const [commentsMap, setCommentsMap] = useState<Record<string, ForumCommentItem[]>>({});
  const [loadingComments, setLoadingComments] = useState<Record<string, boolean>>({});
  const [newCommentText, setNewCommentText] = useState("");
  const [isSubmittingComment, setIsSubmittingComment] = useState(false);

  // Generate random alias
  const handleRerollAlias = () => {
    const cities = ["Jakarta", "Surabaya", "Bandung", "Medan", "Semarang", "Yogya", "Bali", "Makassar", "Tangerang", "Bekasi"];
    const randomCity = cities[Math.floor(Math.random() * cities.length)];
    const randomNum = Math.floor(10 + Math.random() * 89);
    setAlias(`#Pekerja${randomCity}${randomNum}`);
  };

  // Fetch threads from Supabase
  const loadThreads = useCallback(async () => {
    setIsLoading(true);
    const result = await getForumThreads(activeCategory);
    if (result.data && result.data.length > 0) {
      setThreads(result.data);
    } else {
      // If DB has no threads yet, filter starter sample threads
      if (activeCategory === "Semua") {
        setThreads(SAMPLE_STARTER_THREADS);
      } else {
        setThreads(SAMPLE_STARTER_THREADS.filter((t) => t.category === activeCategory));
      }
    }
    setIsLoading(false);
  }, [activeCategory]);

  useEffect(() => {
    loadThreads();
  }, [loadThreads]);

  // Handle post thread
  const handleCreateThread = async (e: React.FormEvent) => {
    e.preventDefault();
    setActionError(null);
    setActionSuccess(null);

    if (!title.trim() || !content.trim()) {
      setActionError("Judul dan kronologi tidak boleh kosong.");
      return;
    }

    const categoryToUse = activeCategory === "Semua" ? "Kompensasi PKWT" : activeCategory;

    const res = await createForumThread({
      title: title.trim(),
      content: content.trim(),
      category: categoryToUse,
      anonymousAlias: alias,
    });

    if (res.error) {
      setActionError(res.error);
      return;
    }

    setActionSuccess("Pertanyaan anonimmu berhasil dipublikasikan ke forum!");
    setTitle("");
    setContent("");
    setShowCompose(false);
    loadThreads();

    setTimeout(() => {
      setActionSuccess(null);
    }, 4000);
  };

  // Handle upvote
  const handleUpvote = async (threadId: string) => {
    // Optimistic UI update
    setThreads((prev) =>
      prev.map((t) => (t.id === threadId ? { ...t, upvotes: t.upvotes + 1 } : t))
    );

    if (!threadId.startsWith("sample-")) {
      await upvoteForumThread(threadId);
    }
  };

  // Toggle comments
  const handleToggleComments = async (threadId: string) => {
    if (expandedThreadId === threadId) {
      setExpandedThreadId(null);
      return;
    }

    setExpandedThreadId(threadId);
    if (!commentsMap[threadId]) {
      setLoadingComments((prev) => ({ ...prev, [threadId]: true }));
      const res = await getForumComments(threadId);
      setCommentsMap((prev) => ({ ...prev, [threadId]: res.data || [] }));
      setLoadingComments((prev) => ({ ...prev, [threadId]: false }));
    }
  };

  // Submit comment
  const handleSubmitComment = async (threadId: string) => {
    if (!newCommentText.trim()) return;
    setIsSubmittingComment(true);
    setActionError(null);

    const res = await createForumComment({
      threadId,
      content: newCommentText.trim(),
      anonymousAlias: alias,
    });

    if (res.error) {
      setActionError(res.error);
      setIsSubmittingComment(false);
      return;
    }

    if (res.comment) {
      setCommentsMap((prev) => ({
        ...prev,
        [threadId]: [...(prev[threadId] || []), res.comment!],
      }));
      setThreads((prev) =>
        prev.map((t) => (t.id === threadId ? { ...t, commentsCount: t.commentsCount + 1 } : t))
      );
      setNewCommentText("");
    }

    setIsSubmittingComment(false);
  };

  return (
    <div className="bg-[#f8f9fc] font-body-md text-body-md text-on-surface antialiased min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="w-full pt-20 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Notification Alerts */}
          {actionSuccess && (
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center justify-between animate-in fade-in">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[20px] text-emerald-600">check_circle</span>
                <span className="text-sm font-semibold">{actionSuccess}</span>
              </div>
              <button
                type="button"
                onClick={() => setActionSuccess(null)}
                className="text-emerald-700 hover:text-emerald-900"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>
          )}

          {actionError && (
            <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-800 flex items-center justify-between animate-in fade-in">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[20px] text-red-600">error</span>
                <span className="text-sm font-semibold">{actionError}</span>
              </div>
              <div className="flex items-center gap-2">
                {actionError.includes("masuk") && (
                  <Link
                    href="/masuk"
                    className="px-3 py-1 rounded-xl bg-red-600 text-white text-xs font-bold hover:bg-red-700 transition-colors"
                  >
                    Masuk Sekarang
                  </Link>
                )}
                <button
                  type="button"
                  onClick={() => setActionError(null)}
                  className="text-red-700 hover:text-red-900"
                >
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              </div>
            </div>
          )}

          {/* Header Bar with Alias & Compose Button */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-surface-container-high/60 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold text-on-surface">Forum Komunitas Pekerja</h1>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                  Live Supabase
                </span>
              </div>
              <p className="text-sm text-on-surface-variant mt-0.5">
                Ruang aman bersuara dan konsultasi kendala kontrak kerja tanpa membuka identitas asli.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surface-container text-xs font-semibold text-primary">
                <span className="material-symbols-outlined text-[16px]">visibility_off</span>
                <span>{alias}</span>
                <button
                  type="button"
                  onClick={handleRerollAlias}
                  title="Ganti alias acak"
                  className="hover:text-primary-container text-on-surface-variant transition-colors"
                >
                  <span className="material-symbols-outlined text-[14px]">autorenew</span>
                </button>
              </div>

              <button
                type="button"
                onClick={() => setShowCompose(!showCompose)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-on-primary font-semibold text-sm hover:bg-primary/90 transition-all shadow-sm"
              >
                <span className="material-symbols-outlined text-[18px]">
                  {showCompose ? "close" : "edit"}
                </span>
                <span>{showCompose ? "Batal" : "Buat Pertanyaan"}</span>
              </button>
            </div>
          </div>

          {/* Collapsible Compose Box */}
          {showCompose && (
            <form
              onSubmit={handleCreateThread}
              className="bg-surface-container-lowest rounded-2xl p-6 border border-primary/30 shadow-sm space-y-4 transition-all"
            >
              <div className="flex items-center justify-between border-b border-surface-container/80 pb-2">
                <span className="text-sm font-bold text-on-surface">Tulis Pertanyaan Baru</span>
                <span className="text-xs text-secondary font-medium">🛡️ Terproteksi sebagai {alias}</span>
              </div>

              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Judul ringkas kendala kontrakmu..."
                className="w-full h-11 px-4 rounded-xl border border-surface-container-high bg-surface-container-lowest text-sm text-on-surface focus:outline-none focus:border-primary transition-colors"
                required
              />

              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Ceritakan kronologi klausul atau masalah kerja yang dialami. Nama perusahaan disarankan disamarkan menjadi 'PT X'..."
                rows={4}
                className="w-full p-4 rounded-xl border border-surface-container-high bg-surface-container-lowest text-sm text-on-surface focus:outline-none focus:border-primary transition-colors resize-y"
                required
              />

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-on-surface-variant">
                  Komentar rekan kerja akan otomatis dimoderasi secara adil
                </span>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-primary text-on-primary font-semibold text-sm hover:bg-primary/90 transition-all shadow-sm"
                >
                  Publikasikan Utas
                </button>
              </div>
            </form>
          )}

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-on-primary shadow-sm"
                    : "bg-surface-container-lowest text-on-surface-variant border border-surface-container-high/60 hover:text-on-surface"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Threads List */}
          {isLoading ? (
            <div className="p-12 text-center text-on-surface-variant bg-surface-container-lowest rounded-2xl border border-surface-container">
              <span className="material-symbols-outlined text-[32px] animate-spin text-primary">progress_activity</span>
              <p className="text-sm font-semibold mt-2">Memuat diskusi komunitas...</p>
            </div>
          ) : (
            <div className="space-y-4">
              {threads.map((thread) => {
                const isExpanded = expandedThreadId === thread.id;
                const comments = commentsMap[thread.id] || [];
                const isCommentsLoading = loadingComments[thread.id];

                return (
                  <article
                    key={thread.id}
                    className="bg-surface-container-lowest rounded-2xl p-6 border border-surface-container-high/60 shadow-sm hover:border-surface-container-high transition-all space-y-4"
                  >
                    {/* Meta */}
                    <div className="flex items-center justify-between gap-2 text-xs text-on-surface-variant">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-primary">{thread.authorAlias}</span>
                        <span>•</span>
                        <span>{thread.timeAgo}</span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-surface-container text-xs font-semibold text-on-surface-variant">
                        {thread.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="space-y-1.5">
                      <h2 className="text-base sm:text-lg font-bold text-on-surface leading-snug">
                        {thread.title}
                      </h2>
                      <p className="text-sm text-on-surface-variant leading-relaxed">
                        {thread.content}
                      </p>
                    </div>

                    {/* Verified Answer (if any) */}
                    {thread.verifiedAnswer && (
                      <div className="p-4 rounded-xl bg-primary/5 border border-primary/15 space-y-1.5 text-xs sm:text-sm">
                        <div className="flex items-center gap-1.5 text-primary font-bold">
                          <span className="material-symbols-outlined text-[16px]">verified</span>
                          <span>{thread.verifiedAnswer.author}</span>
                        </div>
                        <p className="text-on-surface leading-relaxed">{thread.verifiedAnswer.text}</p>
                        <span className="text-[11px] font-semibold text-on-surface-variant block pt-1">
                          📚 Dasar Hukum: {thread.verifiedAnswer.legalRef}
                        </span>
                      </div>
                    )}

                    {/* Interactions Footer */}
                    <div className="flex items-center justify-between pt-2 border-t border-surface-container/60 text-xs font-semibold text-on-surface-variant">
                      <div className="flex items-center gap-4">
                        <button
                          type="button"
                          onClick={() => handleUpvote(thread.id)}
                          className="flex items-center gap-1.5 hover:text-primary transition-colors py-1 px-2 rounded-lg hover:bg-surface-container"
                        >
                          <span className="material-symbols-outlined text-[16px]">thumb_up</span>
                          <span>{thread.upvotes} Terbantu</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => handleToggleComments(thread.id)}
                          className={`flex items-center gap-1.5 py-1 px-2 rounded-lg transition-colors ${
                            isExpanded ? "text-primary bg-primary/10 font-bold" : "hover:text-primary hover:bg-surface-container"
                          }`}
                        >
                          <span className="material-symbols-outlined text-[16px]">chat_bubble</span>
                          <span>{thread.commentsCount} Tanggapan</span>
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleToggleComments(thread.id)}
                        className="text-primary hover:underline flex items-center gap-1 py-1"
                      >
                        <span>{isExpanded ? "Tutup" : "Beri Jawaban"}</span>
                        <span className="material-symbols-outlined text-[14px]">
                          {isExpanded ? "expand_less" : "reply"}
                        </span>
                      </button>
                    </div>

                    {/* Collapsible Comments Section */}
                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-surface-container space-y-3 animate-in fade-in duration-200">
                        <h3 className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                          Tanggapan Komunitas ({comments.length})
                        </h3>

                        {isCommentsLoading ? (
                          <div className="text-center py-4 text-xs text-on-surface-variant">
                            <span className="material-symbols-outlined animate-spin text-[18px]">progress_activity</span>
                            <span className="block mt-1">Memuat tanggapan...</span>
                          </div>
                        ) : comments.length === 0 ? (
                          <div className="p-4 rounded-xl bg-surface-container/30 text-center text-xs text-on-surface-variant">
                            Belum ada tanggapan untuk pertanyaan ini. Jadilah yang pertama memberikan pandangan!
                          </div>
                        ) : (
                          <div className="space-y-2.5 max-h-80 overflow-y-auto pr-1">
                            {comments.map((comment) => (
                              <div
                                key={comment.id}
                                className="p-3.5 rounded-xl bg-surface-container/40 border border-surface-container text-xs space-y-1"
                              >
                                <div className="flex items-center justify-between text-on-surface-variant">
                                  <span className="font-bold text-primary">{comment.authorAlias}</span>
                                  <span className="text-[11px]">{comment.timeAgo}</span>
                                </div>
                                <p className="text-on-surface leading-relaxed">{comment.content}</p>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Add Comment Input */}
                        <div className="flex items-center gap-2 pt-2">
                          <input
                            type="text"
                            value={newCommentText}
                            onChange={(e) => setNewCommentText(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" && !e.shiftKey) {
                                e.preventDefault();
                                handleSubmitComment(thread.id);
                              }
                            }}
                            placeholder={`Tulis tanggapan sebagai ${alias}...`}
                            className="flex-1 h-10 px-3.5 rounded-xl border border-surface-container-high bg-white text-xs text-on-surface focus:outline-none focus:border-primary transition-all"
                          />
                          <button
                            type="button"
                            disabled={isSubmittingComment || !newCommentText.trim()}
                            onClick={() => handleSubmitComment(thread.id)}
                            className="px-4 h-10 rounded-xl bg-primary text-on-primary font-bold text-xs hover:bg-primary/90 disabled:opacity-50 transition-all flex items-center gap-1 shrink-0"
                          >
                            <span>Kirim</span>
                            <span className="material-symbols-outlined text-[16px]">send</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
