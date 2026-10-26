import { createBrowserClient } from "@supabase/ssr";

const FALLBACK_SUPABASE_URL = "https://hsjqnulqxypnpaxsqvvv.supabase.co";
const FALLBACK_SUPABASE_KEY = "sb_publishable_KnLPoCMXugwSLgbkLYVFvw_-Hv62laV";

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || FALLBACK_SUPABASE_URL;
  const supabaseKey =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    FALLBACK_SUPABASE_KEY;

  return createBrowserClient(supabaseUrl, supabaseKey);
}
