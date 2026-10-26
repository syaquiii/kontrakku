"use server";

import { createClient } from "@/lib/supabase/server";
import { analyzeContractText, AnalysisResult } from "@/lib/contract-analyzer";

export interface SaveContractResult {
  success: boolean;
  contractId?: string;
  error?: string;
}

/**
 * Server action to run analysis on contract text and persist results if authenticated
 */
export async function analyzeContractAction(
  fileName: string,
  content: string
): Promise<{ result: AnalysisResult; contractId?: string; error?: string }> {
  try {
    const analysis = analyzeContractText(content);

    // Check if user is authenticated to persist to Supabase
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    let contractId: string | undefined = undefined;

    if (user) {
      // 1. Insert contract record
      const { data: contract, error: contractError } = await supabase
        .from("contracts")
        .insert({
          user_id: user.id,
          file_name: fileName || "Draf_Kontrak_Kerja.txt",
          storage_path: "inline-text",
          file_size_bytes: Buffer.byteLength(content, "utf8"),
          status: "completed",
          overall_risk_score: analysis.score,
          summary: analysis.summary,
        })
        .select("id")
        .single();

      if (contractError) {
        console.error("Error saving contract audit:", contractError.message);
      } else if (contract) {
        contractId = contract.id;

        // 2. Insert findings records
        if (analysis.findings.length > 0) {
          const findingsPayload = analysis.findings.map((f) => ({
            contract_id: contract.id,
            clause_number: f.clause,
            clause_title: f.title,
            original_text: f.originalText,
            severity: (f.severity === "warning" ? "ambiguous" : f.severity) as "critical" | "ambiguous" | "compliant",
            issue_explanation: f.issue,
            legal_basis: f.legalBasis,
            recommendation: f.recommendation,
            suggested_counter_draft: f.counterDraft || null,
          }));

          const { error: findingsError } = await supabase
            .from("contract_findings")
            .insert(findingsPayload);

          if (findingsError) {
            console.error("Error saving contract findings:", findingsError.message);
          }
        }
      }
    }

    return { result: analysis, contractId };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Terjadi kesalahan saat memproses analisis kontrak.";
    return {
      result: analyzeContractText(content),
      error: errorMsg,
    };
  }
}

/**
 * Retrieve user's saved contract audits
 */
export async function getUserContractsAction() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { data: [], error: "Unauthenticated" };
  }

  const { data, error } = await supabase
    .from("contracts")
    .select(`
      id,
      file_name,
      file_size_bytes,
      overall_risk_score,
      summary,
      created_at,
      contract_findings (
        id,
        clause_number,
        clause_title,
        severity,
        issue_explanation,
        legal_basis,
        recommendation,
        suggested_counter_draft
      )
    `)
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  if (error) {
    return { data: [], error: error.message };
  }

  return { data, error: null };
}

/**
 * Delete a saved contract audit
 */
export async function deleteContractAction(contractId: string) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { success: false, error: "Unauthenticated" };
  }

  // Contract findings have cascade or will be deleted with contract
  await supabase.from("contract_findings").delete().eq("contract_id", contractId);
  const { error } = await supabase.from("contracts").delete().eq("id", contractId).eq("user_id", user.id);

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true };
}
