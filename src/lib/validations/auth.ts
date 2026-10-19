import { z } from "zod";

export const signUpSchema = z.object({
  fullName: z.string().min(2, "Nama lengkap minimal 2 karakter"),
  email: z.string().email("Format email tidak valid"),
  password: z
    .string()
    .min(8, "Kata sandi minimal 8 karakter")
    .regex(/[A-Z]/, "Harus mengandung minimal 1 huruf besar")
    .regex(/[0-9]/, "Harus mengandung minimal 1 angka"),
  agreeTerms: z.boolean().refine((val) => val === true, {
    message: "Anda wajib menyetujui Syarat & Ketentuan serta Kebijakan Privasi",
  }),
});

export const signInSchema = z.object({
  email: z.string().email("Format email tidak valid"),
  password: z.string().min(1, "Kata sandi tidak boleh kosong"),
});

export const profileSchema = z.object({
  fullName: z.string().min(2, "Nama lengkap minimal 2 karakter"),
  province: z.string().min(1, "Pilih provinsi domisili kerja"),
  city: z.string().min(1, "Kota/kabupaten wajib diisi"),
  jobTitle: z.string().min(1, "Bidang pekerjaan wajib diisi"),
  employmentStatus: z.enum(["pkwt", "pkwtt", "freelance"], {
    message: "Pilih status hubungan kerja yang valid",
  }),
});

export const forgotPasswordSchema = z.object({
  email: z.string().email("Format email tidak valid"),
});

export type SignUpInput = z.infer<typeof signUpSchema>;
export type SignInInput = z.infer<typeof signInSchema>;
export type ProfileInput = z.infer<typeof profileSchema>;
export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>;
