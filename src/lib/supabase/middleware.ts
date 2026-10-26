import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

const FALLBACK_SUPABASE_URL = "https://hsjqnulqxypnpaxsqvvv.supabase.co";
const FALLBACK_SUPABASE_KEY = "sb_publishable_KnLPoCMXugwSLgbkLYVFvw_-Hv62laV";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || FALLBACK_SUPABASE_URL;
  const supabaseKey =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    FALLBACK_SUPABASE_KEY;

  const supabase = createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
        supabaseResponse = NextResponse.next({
          request,
        });
        cookiesToSet.forEach(({ name, value, options }) =>
          supabaseResponse.cookies.set(name, value, options)
        );
      },
    },
  });

  // IMPORTANT: Avoid writing any logic between createServerClient and
  // supabase.auth.getUser(). A simple mistake could make it very hard to debug
  // issues with users being randomly logged out.
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const pathname = request.nextUrl.pathname;

  // Protected routes that require login
  const protectedRoutes = ["/riwayat-profil", "/analisis-kontrak", "/daftar/profil"];
  const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route));

  // Auth routes that should redirect logged in users to /riwayat-profil
  const authRoutes = ["/masuk", "/daftar"];
  const isAuthRoute = authRoutes.some((route) => pathname === route);

  if (!user && isProtectedRoute) {
    const url = request.nextUrl.clone();
    url.pathname = "/masuk";
    url.searchParams.set("redirect", pathname);
    return NextResponse.redirect(url);
  }

  if (user && isAuthRoute) {
    const url = request.nextUrl.clone();
    url.pathname = "/riwayat-profil";
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}
