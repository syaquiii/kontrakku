"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function upgradeToProAction(paymentMethod: string): Promise<{
  success: boolean;
  error?: string;
}> {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return {
        success: false,
        error: "Silakan masuk (login) terlebih dahulu untuk mengaktifkan paket Advokasi Penuh.",
      };
    }

    // Update user auth metadata
    const { error: authErr } = await supabase.auth.updateUser({
      data: {
        plan: "pro",
        plan_name: "Paket Advokasi Penuh",
        plan_upgraded_at: new Date().toISOString(),
        payment_method: paymentMethod || "QRIS",
      },
    });

    if (authErr) {
      return { success: false, error: authErr.message };
    }

    revalidatePath("/riwayat-profil");
    revalidatePath("/pricing");

    return { success: true };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Gagal memproses aktivasi paket.";
    return { success: false, error: errorMsg };
  }
}

export async function processDonationAction(input: {
  amount: number;
  donorName?: string;
  paymentMethod: string;
}): Promise<{ success: boolean; message: string }> {
  const name = input.donorName?.trim() || "Rekan Pekerja";
  return {
    success: true,
    message: `Terima kasih banyak ${name}! Dukungan donasi solidaritas sebesar Rp ${input.amount.toLocaleString(
      "id-ID"
    )} via ${input.paymentMethod} sangat berharga bagi kelangsungan platform advokasi buruh independen KontrakKu.`,
  };
}
