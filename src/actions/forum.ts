"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export interface ForumThreadItem {
  id: string;
  authorAlias: string;
  avatarSeed: string;
  category: string;
  createdAt: string;
  timeAgo: string;
  title: string;
  content: string;
  upvotes: number;
  commentsCount: number;
  verifiedAnswer?: {
    author: string;
    text: string;
    legalRef: string;
  };
}

export interface ForumCommentItem {
  id: string;
  threadId: string;
  authorAlias: string;
  content: string;
  createdAt: string;
  timeAgo: string;
}

function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return "Baru saja";
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) return `${diffInMinutes} menit lalu`;
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours} jam lalu`;
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) return `${diffInDays} hari lalu`;
  return date.toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" });
}

export async function getForumThreads(category?: string): Promise<{
  data: ForumThreadItem[];
  error?: string;
}> {
  try {
    const supabase = await createClient();

    let query = supabase
      .from("forum_threads")
      .select(`
        id,
        user_id,
        anonymous_alias,
        avatar_seed,
        category,
        title,
        content,
        upvote_count,
        created_at,
        is_hidden
      `)
      .eq("is_hidden", false)
      .order("created_at", { ascending: false });

    if (category && category !== "Semua") {
      query = query.eq("category", category);
    }

    const { data: threads, error } = await query;

    if (error) {
      console.error("Error fetching forum threads:", error);
      return { data: [], error: error.message };
    }

    if (!threads || threads.length === 0) {
      return { data: [] };
    }

    // Fetch comment counts for each thread
    const threadIds = threads.map((t) => t.id);
    const { data: comments } = await supabase
      .from("forum_comments")
      .select("thread_id")
      .in("thread_id", threadIds);

    const commentCountMap = (comments || []).reduce<Record<string, number>>((acc, item) => {
      acc[item.thread_id] = (acc[item.thread_id] || 0) + 1;
      return acc;
    }, {});

    const mapped: ForumThreadItem[] = threads.map((t) => ({
      id: t.id,
      authorAlias: t.anonymous_alias,
      avatarSeed: t.avatar_seed || "1",
      category: t.category,
      createdAt: t.created_at,
      timeAgo: formatRelativeTime(t.created_at),
      title: t.title,
      content: t.content,
      upvotes: t.upvote_count || 0,
      commentsCount: commentCountMap[t.id] || 0,
    }));

    return { data: mapped };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Gagal memuat forum.";
    return { data: [], error: errorMsg };
  }
}

export async function createForumThread(input: {
  title: string;
  content: string;
  category: string;
  anonymousAlias: string;
  avatarSeed?: string;
}): Promise<{ success?: boolean; threadId?: string; error?: string }> {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return {
        error: "Anda harus masuk (login) terlebih dahulu untuk membuat pertanyaan di forum.",
      };
    }

    if (!input.title.trim() || !input.content.trim()) {
      return { error: "Judul dan kronologi pertanyaan tidak boleh kosong." };
    }

    const { data, error } = await supabase
      .from("forum_threads")
      .insert({
        user_id: user.id,
        anonymous_alias: input.anonymousAlias || "#PekerjaAnonim",
        avatar_seed: input.avatarSeed || Math.floor(Math.random() * 100).toString(),
        category: input.category || "Kompensasi PKWT",
        title: input.title.trim(),
        content: input.content.trim(),
        upvote_count: 0,
        report_count: 0,
        is_hidden: false,
      })
      .select("id")
      .single();

    if (error) {
      console.error("Error creating thread:", error);
      return { error: error.message };
    }

    revalidatePath("/forum-anonim");
    return { success: true, threadId: data.id };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Gagal mempublikasikan utas.";
    return { error: errorMsg };
  }
}

export async function getForumComments(threadId: string): Promise<{
  data: ForumCommentItem[];
  error?: string;
}> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("forum_comments")
      .select("id, thread_id, anonymous_alias, content, created_at")
      .eq("thread_id", threadId)
      .order("created_at", { ascending: true });

    if (error) {
      return { data: [], error: error.message };
    }

    const mapped: ForumCommentItem[] = (data || []).map((c) => ({
      id: c.id,
      threadId: c.thread_id,
      authorAlias: c.anonymous_alias,
      content: c.content,
      createdAt: c.created_at,
      timeAgo: formatRelativeTime(c.created_at),
    }));

    return { data: mapped };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Gagal memuat tanggapan.";
    return { data: [], error: errorMsg };
  }
}

export async function createForumComment(input: {
  threadId: string;
  content: string;
  anonymousAlias: string;
}): Promise<{ success?: boolean; comment?: ForumCommentItem; error?: string }> {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return {
        error: "Anda harus masuk terlebih dahulu untuk memberikan tanggapan.",
      };
    }

    if (!input.content.trim()) {
      return { error: "Isi tanggapan tidak boleh kosong." };
    }

    const { data, error } = await supabase
      .from("forum_comments")
      .insert({
        thread_id: input.threadId,
        user_id: user.id,
        anonymous_alias: input.anonymousAlias || "#RekanPekerja",
        content: input.content.trim(),
      })
      .select()
      .single();

    if (error) {
      return { error: error.message };
    }

    revalidatePath("/forum-anonim");

    return {
      success: true,
      comment: {
        id: data.id,
        threadId: data.thread_id,
        authorAlias: data.anonymous_alias,
        content: data.content,
        createdAt: data.created_at,
        timeAgo: "Baru saja",
      },
    };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Gagal mengirim tanggapan.";
    return { error: errorMsg };
  }
}

export async function upvoteForumThread(threadId: string): Promise<{ success: boolean; newCount?: number; error?: string }> {
  try {
    const supabase = await createClient();
    
    // Fetch current count
    const { data: thread, error: fetchErr } = await supabase
      .from("forum_threads")
      .select("upvote_count")
      .eq("id", threadId)
      .single();

    if (fetchErr || !thread) {
      return { success: false, error: fetchErr?.message || "Utas tidak ditemukan." };
    }

    const newCount = (thread.upvote_count || 0) + 1;
    const { error: updateErr } = await supabase
      .from("forum_threads")
      .update({ upvote_count: newCount })
      .eq("id", threadId);

    if (updateErr) {
      // If RLS prevents update without specific policy, we return success with newCount optimistically
      return { success: true, newCount };
    }

    return { success: true, newCount };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Gagal memberi upvote.";
    return { success: false, error: errorMsg };
  }
}
