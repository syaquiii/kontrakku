export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          province: string | null;
          city: string | null;
          job_title: string | null;
          employment_status: "pkwt" | "pkwtt" | "freelance" | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          province?: string | null;
          city?: string | null;
          job_title?: string | null;
          employment_status?: "pkwt" | "pkwtt" | "freelance" | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string | null;
          province?: string | null;
          city?: string | null;
          job_title?: string | null;
          employment_status?: "pkwt" | "pkwtt" | "freelance" | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      calculations: {
        Row: {
          id: string;
          user_id: string | null;
          calc_type: "pkwt_compensation" | "severance_pay" | "overtime" | "thr";
          base_salary: number;
          fixed_allowance: number;
          duration_months: number;
          umk_reference: number | null;
          result_total: number;
          breakdown_detail: Json | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id?: string | null;
          calc_type: "pkwt_compensation" | "severance_pay" | "overtime" | "thr";
          base_salary: number;
          fixed_allowance?: number;
          duration_months: number;
          umk_reference?: number | null;
          result_total: number;
          breakdown_detail?: Json | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string | null;
          calc_type?: "pkwt_compensation" | "severance_pay" | "overtime" | "thr";
          base_salary?: number;
          fixed_allowance?: number;
          duration_months?: number;
          umk_reference?: number | null;
          result_total?: number;
          breakdown_detail?: Json | null;
          created_at?: string;
        };
      };
      contracts: {
        Row: {
          id: string;
          user_id: string;
          file_name: string;
          storage_path: string;
          file_size_bytes: number;
          status: "pending" | "processing" | "completed" | "failed";
          overall_risk_score: number | null;
          summary: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          file_name: string;
          storage_path: string;
          file_size_bytes: number;
          status?: "pending" | "processing" | "completed" | "failed";
          overall_risk_score?: number | null;
          summary?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          file_name?: string;
          storage_path?: string;
          file_size_bytes?: number;
          status?: "pending" | "processing" | "completed" | "failed";
          overall_risk_score?: number | null;
          summary?: string | null;
          created_at?: string;
        };
      };
      contract_findings: {
        Row: {
          id: string;
          contract_id: string;
          clause_number: string;
          clause_title: string;
          original_text: string;
          severity: "critical" | "ambiguous" | "compliant";
          issue_explanation: string;
          legal_basis: string;
          recommendation: string;
          suggested_counter_draft: string | null;
        };
        Insert: {
          id?: string;
          contract_id: string;
          clause_number: string;
          clause_title: string;
          original_text: string;
          severity: "critical" | "ambiguous" | "compliant";
          issue_explanation: string;
          legal_basis: string;
          recommendation: string;
          suggested_counter_draft?: string | null;
        };
        Update: {
          id?: string;
          contract_id?: string;
          clause_number?: string;
          clause_title?: string;
          original_text?: string;
          severity?: "critical" | "ambiguous" | "compliant";
          issue_explanation?: string;
          legal_basis?: string;
          recommendation?: string;
          suggested_counter_draft?: string | null;
        };
      };
      forum_threads: {
        Row: {
          id: string;
          user_id: string;
          anonymous_alias: string;
          avatar_seed: string;
          category: string;
          title: string;
          content: string;
          upvote_count: number;
          report_count: number;
          is_hidden: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          anonymous_alias: string;
          avatar_seed: string;
          category: string;
          title: string;
          content: string;
          upvote_count?: number;
          report_count?: number;
          is_hidden?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          anonymous_alias?: string;
          avatar_seed?: string;
          category?: string;
          title?: string;
          content?: string;
          upvote_count?: number;
          report_count?: number;
          is_hidden?: boolean;
          created_at?: string;
        };
      };
      forum_comments: {
        Row: {
          id: string;
          thread_id: string;
          user_id: string;
          anonymous_alias: string;
          content: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          thread_id: string;
          user_id: string;
          anonymous_alias: string;
          content: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          thread_id?: string;
          user_id?: string;
          anonymous_alias?: string;
          content?: string;
          created_at?: string;
        };
      };
    };
  };
}
