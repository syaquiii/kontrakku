"use server";

import { createClient } from "@/lib/supabase/server";
import { signInSchema, signUpSchema, profileSchema, forgotPasswordSchema } from "@/lib/validations/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

export type ActionState = {
  success?: boolean;
  error?: string;
  fieldErrors?: Record<string, string>;
  requiresEmailConfirmation?: boolean;
  email?: string;
};

export async function signInAction(prevState: ActionState | null, formData: FormData): Promise<ActionState> {
  const rawData = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const validated = signInSchema.safeParse(rawData);
  if (!validated.success) {
    const fieldErrors: Record<string, string> = {};
    validated.error.issues.forEach((err) => {
      const field = err.path[0];
      if (field) {
        fieldErrors[field.toString()] = err.message;
      }
    });
    return { error: "Silakan periksa kembali input Anda.", fieldErrors };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({
    email: validated.data.email,
    password: validated.data.password,
  });

  if (error) {
    return { error: error.message === "Invalid login credentials" ? "Email atau kata sandi salah." : error.message };
  }

  redirect("/riwayat-profil");
}

export async function signUpAction(prevState: ActionState | null, formData: FormData): Promise<ActionState> {
  const rawData = {
    fullName: formData.get("fullName") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    agreeTerms: formData.get("agreeTerms") === "on" || formData.get("agreeTerms") === "true",
  };

  const validated = signUpSchema.safeParse(rawData);
  if (!validated.success) {
    const fieldErrors: Record<string, string> = {};
    validated.error.issues.forEach((err) => {
      const field = err.path[0];
      if (field) {
        fieldErrors[field.toString()] = err.message;
      }
    });
    return { error: "Mohon lengkapi seluruh formulir pendaftaran.", fieldErrors };
  }

  const supabase = await createClient();
  const headersList = await headers();
  const host = headersList.get("host") || "";
  const proto = headersList.get("x-forwarded-proto") || (host.includes("localhost") ? "http" : "https");
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || (host ? `${proto}://${host}` : "http://localhost:3000");

  const { data, error } = await supabase.auth.signUp({
    email: validated.data.email,
    password: validated.data.password,
    options: {
      data: {
        full_name: validated.data.fullName,
      },
      emailRedirectTo: `${siteUrl}/auth/callback?next=/daftar/profil`,
    },
  });

  if (error) {
    return { error: error.message };
  }

  // If email verification is required by Supabase, session is not yet active
  if (!data.session) {
    return {
      success: true,
      requiresEmailConfirmation: true,
      email: validated.data.email,
    };
  }

  redirect("/daftar/profil");
}

export async function updateProfileAction(prevState: ActionState | null, formData: FormData): Promise<ActionState> {
  const rawData = {
    fullName: formData.get("fullName") as string,
    province: formData.get("province") as string,
    city: formData.get("city") as string,
    jobTitle: formData.get("jobTitle") as string,
    employmentStatus: formData.get("employmentStatus") as "pkwt" | "pkwtt" | "freelance",
  };

  const validated = profileSchema.safeParse(rawData);
  if (!validated.success) {
    const fieldErrors: Record<string, string> = {};
    validated.error.issues.forEach((err) => {
      const field = err.path[0];
      if (field) {
        fieldErrors[field.toString()] = err.message;
      }
    });
    return { error: "Data profil belum lengkap.", fieldErrors };
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: "Sesi telah kedaluwarsa. Silakan masuk kembali." };
  }

  const { error } = await supabase
    .from("profiles")
    .upsert({
      id: user.id,
      email: user.email || "",
      full_name: validated.data.fullName,
      province: validated.data.province,
      city: validated.data.city,
      job_title: validated.data.jobTitle,
      employment_status: validated.data.employmentStatus,
      updated_at: new Date().toISOString(),
    });

  if (error) {
    return { error: error.message };
  }

  redirect("/riwayat-profil");
}

export async function forgotPasswordAction(prevState: ActionState | null, formData: FormData): Promise<ActionState> {
  const rawData = {
    email: formData.get("email") as string,
  };

  const validated = forgotPasswordSchema.safeParse(rawData);
  if (!validated.success) {
    return { error: "Format email tidak valid." };
  }

  const supabase = await createClient();
  const headersList = await headers();
  const host = headersList.get("host") || "";
  const proto = headersList.get("x-forwarded-proto") || (host.includes("localhost") ? "http" : "https");
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || (host ? `${proto}://${host}` : "http://localhost:3000");

  const { error } = await supabase.auth.resetPasswordForEmail(validated.data.email, {
    redirectTo: `${siteUrl}/lupa-kata-sandi/konfirmasi`,
  });

  if (error) {
    return { error: error.message };
  }

  return { success: true };
}

export async function signOutAction() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/masuk");
}

export async function getCurrentUser() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  return {
    id: user.id,
    email: user.email || "",
    name:
      profile?.full_name ||
      user.user_metadata?.full_name ||
      user.email?.split("@")[0] ||
      "Pekerja",
    role: profile?.job_title || "Karyawan",
    plan: ((user.user_metadata?.plan as string) || "free") as "free" | "pro",
    profile: profile || null,
  };
}

