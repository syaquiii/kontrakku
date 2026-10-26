"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export interface CalculationRecord {
  id: string;
  userId?: string | null;
  calcType: "pkwt_compensation" | "severance_pay" | "overtime" | "thr";
  baseSalary: number;
  fixedAllowance: number;
  durationMonths: number;
  umkReference?: number | null;
  resultTotal: number;
  breakdownDetail: {
    title: string;
    ratio: string;
    formula: string;
    rule: string;
    note: string;
    overtimeHours?: number;
  };
  createdAt: string;
}

export async function saveCalculationAction(input: {
  calcType: "pkwt_compensation" | "severance_pay" | "overtime" | "thr";
  baseSalary: number;
  fixedAllowance: number;
  durationMonths: number;
  umkReference?: number | null;
  resultTotal: number;
  breakdownDetail: {
    title: string;
    ratio: string;
    formula: string;
    rule: string;
    note: string;
    overtimeHours?: number;
  };
}): Promise<{ success?: boolean; id?: string; error?: string; requireLogin?: boolean }> {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return {
        requireLogin: true,
        error: "Silakan masuk (login) terlebih dahulu agar hasil perhitungan tersimpan ke akun Anda.",
      };
    }

    const { data, error } = await supabase
      .from("calculations")
      .insert({
        user_id: user.id,
        calc_type: input.calcType,
        base_salary: input.baseSalary,
        fixed_allowance: input.fixedAllowance,
        duration_months: input.durationMonths,
        umk_reference: input.umkReference || null,
        result_total: input.resultTotal,
        breakdown_detail: input.breakdownDetail,
      })
      .select("id")
      .single();

    if (error) {
      console.error("Error saving calculation:", error);
      return { error: error.message };
    }

    revalidatePath("/riwayat-profil");
    revalidatePath("/hitung-hak-kerja");

    return { success: true, id: data.id };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Gagal menyimpan perhitungan.";
    return { error: errorMsg };
  }
}

export async function getUserCalculations(): Promise<{
  data: CalculationRecord[];
  error?: string;
}> {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return { data: [] };
    }

    const { data, error } = await supabase
      .from("calculations")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (error) {
      return { data: [], error: error.message };
    }

    const mapped: CalculationRecord[] = (data || []).map((row) => ({
      id: row.id,
      userId: row.user_id,
      calcType: row.calc_type as CalculationRecord["calcType"],
      baseSalary: Number(row.base_salary),
      fixedAllowance: Number(row.fixed_allowance),
      durationMonths: row.duration_months,
      umkReference: row.umk_reference ? Number(row.umk_reference) : null,
      resultTotal: Number(row.result_total),
      breakdownDetail: row.breakdown_detail as unknown as CalculationRecord["breakdownDetail"],
      createdAt: row.created_at,
    }));

    return { data: mapped };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Gagal mengambil data riwayat perhitungan.";
    return { data: [], error: errorMsg };
  }
}

export async function deleteCalculationAction(id: string): Promise<{ success: boolean; error?: string }> {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return { success: false, error: "Tidak terotorisasi." };
    }

    const { error } = await supabase
      .from("calculations")
      .delete()
      .eq("id", id)
      .eq("user_id", user.id);

    if (error) {
      return { success: false, error: error.message };
    }

    revalidatePath("/riwayat-profil");
    return { success: true };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Gagal menghapus riwayat.";
    return { success: false, error: errorMsg };
  }
}
