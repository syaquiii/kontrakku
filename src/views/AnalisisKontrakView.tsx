"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  AnalysisResult,
  SAMPLE_CONTRACT_BAD,
  SAMPLE_CONTRACT_GOOD,
} from "@/lib/contract-analyzer";
import { analyzeContractAction } from "@/actions/analysis";

export default function AnalisisKontrakView() {
  // Input state
  const [inputMode, setInputMode] = useState<"upload" | "paste">("paste");
  const [contractText, setContractText] = useState<string>("");
  const [fileName, setFileName] = useState<string>("Draf_Kontrak_Kerja.txt");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Analysis process state
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [analysisStep, setAnalysisStep] = useState<number>(1);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [savedContractId, setSavedContractId] = useState<string | null>(null);

  // Results interaction state
  const [activeFilter, setActiveFilter] = useState<"all" | "critical" | "warning" | "compliant">("all");
  const [expandedId, setExpandedId] = useState<string>("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Handle file select
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result;
      if (typeof content === "string") {
        setContractText(content);
      }
    };
    reader.readAsText(file);
  };

  // Load sample contract
  const handleLoadSample = (type: "bad" | "good") => {
    if (type === "bad") {
      setContractText(SAMPLE_CONTRACT_BAD);
      setFileName("PKWT_Bermasalah_Innova.txt");
    } else {
      setContractText(SAMPLE_CONTRACT_GOOD);
      setFileName("PKWT_Standar_Aman.txt");
    }
  };

  // Run analysis pipeline
  const handleStartAnalysis = async () => {
    if (!contractText.trim()) return;

    setIsAnalyzing(true);
    setAnalysisStep(1);

    // Step 1: Parsing
    await new Promise((r) => setTimeout(r, 600));
    setAnalysisStep(2);

    // Step 2: Law matching
    await new Promise((r) => setTimeout(r, 700));
    setAnalysisStep(3);

    // Step 3: Run server action
    try {
      const res = await analyzeContractAction(fileName, contractText);
      setAnalysisResult(res.result);
      if (res.contractId) {
        setSavedContractId(res.contractId);
      }
      if (res.result.findings.length > 0) {
        setExpandedId(res.result.findings[0].id);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Copy counter draft
  const handleCopyDraft = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Reset to audit another
  const handleReset = () => {
    setAnalysisResult(null);
    setSavedContractId(null);
    setContractText("");
    setFileName("Draf_Kontrak_Kerja.txt");
  };

  const filteredFindings = analysisResult
    ? analysisResult.findings.filter((f) => {
        if (activeFilter === "all") return true;
        return f.severity === activeFilter;
      })
    : [];

  return (
    <div className="bg-[#f8f9fc] font-body-md text-body-md text-on-surface antialiased min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="w-full pt-20 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Header Title */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px]">policy</span>
              <span>AI Legal Assistant Ketenagakerjaan</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-on-surface tracking-tight">
              Audit Kepatuhan &amp; Deteksi Klausul Kontrak
            </h1>
            <p className="text-sm text-on-surface-variant max-w-2xl">
              Unggah draf atau tempel pasal kontrak kerja Anda. Mesin kami akan mendiagnosis red flags kepatuhan terhadap 
              <strong> UU No. 13/2003</strong>, <strong>UU Cipta Kerja No. 6/2023</strong>, dan <strong>PP No. 35/2021</strong> serta menyusun rekomendasi draf tandingan.
            </p>
          </div>

          {/* STATE 1: CONTRACT INPUT & UPLOAD */}
          {!analysisResult && !isAnalyzing && (
            <div className="space-y-6">
              {/* Card Container */}
              <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-8 border border-surface-container-high/60 shadow-sm space-y-6">
                
                {/* Mode Selector Tabs */}
                <div className="flex items-center gap-3 border-b border-surface-container pb-4">
                  <button
                    type="button"
                    onClick={() => setInputMode("paste")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      inputMode === "paste"
                        ? "bg-primary text-white shadow-xs"
                        : "bg-surface-container text-on-surface-variant hover:text-on-surface"
                    }`}
                  >
                    <span className="material-symbols-outlined text-[18px]">edit_note</span>
                    <span>Tempel Teks / Pasal Kontrak</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setInputMode("upload")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      inputMode === "upload"
                        ? "bg-primary text-white shadow-xs"
                        : "bg-surface-container text-on-surface-variant hover:text-on-surface"
                    }`}
                  >
                    <span className="material-symbols-outlined text-[18px]">upload_file</span>
                    <span>Unggah Berkas (.txt, .pdf, .doc)</span>
                  </button>
                </div>

                {/* Tab: Paste Text */}
                {inputMode === "paste" && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label htmlFor="contract-textarea" className="text-xs font-bold text-on-surface uppercase tracking-wider">
                        Salin &amp; Tempel Draf Perjanjian Kerja:
                      </label>
                      <span className="text-[11px] text-on-surface-variant">
                        {contractText.length} Karakter
                      </span>
                    </div>
                    <textarea
                      id="contract-textarea"
                      rows={12}
                      value={contractText}
                      onChange={(e) => setContractText(e.target.value)}
                      placeholder="Tempel seluruh isi perjanjian kerja atau pasal-pasal yang ingin Anda periksa di sini... (Contoh: Pasal jam kerja, penahanan ijazah, denda resign, masa percobaan)"
                      className="w-full p-4 rounded-2xl border border-surface-container font-mono text-xs text-on-surface bg-surface-container-lowest focus:outline-hidden focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all leading-relaxed placeholder:font-sans placeholder:text-on-surface-variant/60"
                    />
                  </div>
                )}

                {/* Tab: Upload File */}
                {inputMode === "upload" && (
                  <div className="space-y-4">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".txt,.doc,.docx,.pdf"
                      onChange={handleFileChange}
                      className="hidden"
                      id="file-upload-input"
                    />
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="border-2 border-dashed border-surface-container-high hover:border-primary/60 rounded-3xl p-8 sm:p-12 text-center cursor-pointer bg-surface-container-low/40 hover:bg-surface-container-low/70 transition-all space-y-3"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto shadow-xs">
                        <span className="material-symbols-outlined text-[28px]">cloud_upload</span>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-on-surface">
                          Klik untuk memilih berkas kontrak kerja
                        </p>
                        <p className="text-xs text-on-surface-variant mt-1">
                          Mendukung berkas teks .txt, .pdf, atau dokumen kerja (Maksimal 10MB)
                        </p>
                      </div>
                      {fileName && contractText && (
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
                          <span className="material-symbols-outlined text-[16px]">check_circle</span>
                          <span>Berkas siap: {fileName} ({contractText.length} karakter diekstrak)</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Quick 1-Click Demo Templates */}
                <div className="pt-2 border-t border-surface-container space-y-2">
                  <span className="text-xs font-semibold text-on-surface-variant block">
                    Atau coba langsung dengan contoh kasus nyata di lapangan:
                  </span>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => handleLoadSample("bad")}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-error/10 hover:bg-error/20 text-error text-xs font-semibold transition-all"
                    >
                      <span className="material-symbols-outlined text-[15px]">warning</span>
                      <span>Muat Contoh PKWT Bermasalah (Denda &amp; Tahan Ijazah)</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleLoadSample("good")}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-100 hover:bg-emerald-200 text-emerald-800 text-xs font-semibold transition-all"
                    >
                      <span className="material-symbols-outlined text-[15px]">verified</span>
                      <span>Muat Contoh PKWT Standar Kemenaker (Aman)</span>
                    </button>
                  </div>
                </div>

                {/* Audit Action Button */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                    <span className="material-symbols-outlined text-[18px] text-emerald-600">lock</span>
                    <span>Teks dokumen dienkripsi dan diproses aman sesuai standar UU PDP.</span>
                  </div>

                  <button
                    type="button"
                    disabled={!contractText.trim()}
                    onClick={handleStartAnalysis}
                    className="w-full sm:w-auto px-8 py-3 rounded-2xl bg-primary text-white font-bold text-sm hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[20px]">smart_toy</span>
                    <span>Mulai Audit Hukum AI Sekarang</span>
                  </button>
                </div>

              </div>
            </div>
          )}

          {/* STATE 2: LOADING PROGRESS STEPPER */}
          {isAnalyzing && (
            <div className="bg-surface-container-lowest rounded-3xl p-10 border border-surface-container text-center space-y-6 max-w-xl mx-auto shadow-sm">
              <div className="w-16 h-16 rounded-3xl bg-primary/10 text-primary flex items-center justify-center mx-auto animate-pulse">
                <span className="material-symbols-outlined text-[32px] animate-spin">progress_activity</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-on-surface">Menganalisis Dokumen Kontrak...</h3>
                <p className="text-xs text-on-surface-variant">
                  Memeriksa kepatuhan pasal terhadap peraturan ketenagakerjaan Indonesia.
                </p>
              </div>

              {/* Progress Steps */}
              <div className="space-y-3 text-left max-w-sm mx-auto pt-2">
                <div className="flex items-center gap-3 text-xs font-semibold">
                  <span className={`material-symbols-outlined text-[18px] ${analysisStep >= 1 ? "text-emerald-600" : "text-on-surface-variant/40"}`}>
                    {analysisStep > 1 ? "check_circle" : "radio_button_checked"}
                  </span>
                  <span className={analysisStep >= 1 ? "text-on-surface" : "text-on-surface-variant"}>
                    Mengekstraksi klausul dan struktur teks dokumen
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs font-semibold">
                  <span className={`material-symbols-outlined text-[18px] ${analysisStep >= 2 ? "text-emerald-600" : "text-on-surface-variant/40"}`}>
                    {analysisStep > 2 ? "check_circle" : analysisStep === 2 ? "radio_button_checked" : "radio_button_unchecked"}
                  </span>
                  <span className={analysisStep >= 2 ? "text-on-surface" : "text-on-surface-variant"}>
                    Pencocokan silang UU No. 13/2003 &amp; PP No. 35/2021
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs font-semibold">
                  <span className={`material-symbols-outlined text-[18px] ${analysisStep >= 3 ? "text-emerald-600" : "text-on-surface-variant/40"}`}>
                    {analysisStep === 3 ? "radio_button_checked" : "radio_button_unchecked"}
                  </span>
                  <span className={analysisStep >= 3 ? "text-on-surface" : "text-on-surface-variant"}>
                    Mendeteksi red flags &amp; merumuskan draf negosiasi aman
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* STATE 3: AUDIT RESULTS DASHBOARD */}
          {analysisResult && (
            <div className="space-y-8 animate-in fade-in duration-200">
              
              {/* Executive Summary Card */}
              <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-8 border border-surface-container-high/60 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2 max-w-xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-xs font-semibold text-on-surface-variant">
                      <span className="material-symbols-outlined text-[16px]">description</span>
                      {fileName}
                    </span>
                    {savedContractId && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                        <span className="material-symbols-outlined text-[14px]">save</span>
                        Tersimpan di Profil
                      </span>
                    )}
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-on-surface tracking-tight">
                    Hasil Diagnosis Kontrak Kerja
                  </h2>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {analysisResult.summary}
                  </p>
                </div>

                {/* Score & Risk Badge */}
                <div className="flex items-center gap-5 bg-surface-container/40 p-5 rounded-2xl shrink-0 border border-surface-container">
                  <div className="text-center">
                    <div className={`text-4xl font-black ${
                      analysisResult.score >= 85
                        ? "text-emerald-600"
                        : analysisResult.score >= 60
                        ? "text-amber-600"
                        : "text-error"
                    }`}>
                      {analysisResult.score}
                      <span className="text-sm text-on-surface-variant font-normal">/100</span>
                    </div>
                    <span className={`text-[11px] font-bold uppercase tracking-wider block mt-1 ${
                      analysisResult.verdict === "Aman"
                        ? "text-emerald-700"
                        : analysisResult.verdict === "Perlu Negosiasi"
                        ? "text-amber-700"
                        : "text-error"
                    }`}>
                      {analysisResult.verdict}
                    </span>
                  </div>

                  <div className="h-12 w-[1px] bg-surface-container-high" />

                  <div className="text-xs space-y-1">
                    <div className="flex items-center gap-1.5 text-error font-semibold">
                      <span>•</span>
                      <span>{analysisResult.criticalCount} Kritis</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-amber-700 font-semibold">
                      <span>•</span>
                      <span>{analysisResult.warningCount} Perlu Negosiasi</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                      <span>•</span>
                      <span>{analysisResult.compliantCount} Sesuai Aturan</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Filter Pills */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveFilter("all")}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      activeFilter === "all"
                        ? "bg-primary text-white shadow-xs"
                        : "bg-surface-container-lowest border border-surface-container text-on-surface-variant hover:text-on-surface"
                    }`}
                  >
                    Semua Temuan ({analysisResult.findings.length})
                  </button>
                  {analysisResult.criticalCount > 0 && (
                    <button
                      type="button"
                      onClick={() => setActiveFilter("critical")}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        activeFilter === "critical"
                          ? "bg-error text-white shadow-xs"
                          : "bg-surface-container-lowest border border-surface-container text-error hover:bg-error/10"
                      }`}
                    >
                      Kritis ({analysisResult.criticalCount})
                    </button>
                  )}
                  {analysisResult.warningCount > 0 && (
                    <button
                      type="button"
                      onClick={() => setActiveFilter("warning")}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        activeFilter === "warning"
                          ? "bg-amber-600 text-white shadow-xs"
                          : "bg-surface-container-lowest border border-surface-container text-amber-700 hover:bg-amber-100"
                      }`}
                    >
                      Perlu Diperhatikan ({analysisResult.warningCount})
                    </button>
                  )}
                  {analysisResult.compliantCount > 0 && (
                    <button
                      type="button"
                      onClick={() => setActiveFilter("compliant")}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        activeFilter === "compliant"
                          ? "bg-emerald-600 text-white shadow-xs"
                          : "bg-surface-container-lowest border border-surface-container text-emerald-700 hover:bg-emerald-100"
                      }`}
                    >
                      Sesuai Regulasi ({analysisResult.compliantCount})
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-surface-container-lowest border border-surface-container text-xs font-semibold text-on-surface hover:bg-surface-container transition-all"
                  >
                    <span className="material-symbols-outlined text-[16px]">print</span>
                    <span>Cetak / Unduh PDF</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-surface-container text-xs font-semibold text-on-surface hover:bg-surface-container-high transition-all"
                  >
                    <span className="material-symbols-outlined text-[16px]">restart_alt</span>
                    <span>Audit Kontrak Lain</span>
                  </button>
                </div>
              </div>

              {/* Findings Accordion List */}
              <div className="space-y-3.5">
                {filteredFindings.map((finding) => {
                  const isExpanded = expandedId === finding.id;
                  const isCritical = finding.severity === "critical";
                  const isWarning = finding.severity === "warning";

                  return (
                    <div
                      key={finding.id}
                      className={`rounded-2xl border transition-all bg-surface-container-lowest ${
                        isExpanded
                          ? isCritical
                            ? "border-error/50 shadow-sm"
                            : isWarning
                            ? "border-amber-400 shadow-sm"
                            : "border-emerald-400 shadow-sm"
                          : "border-surface-container-high/60 hover:border-surface-container-high"
                      }`}
                    >
                      {/* Header Item */}
                      <button
                        type="button"
                        onClick={() => setExpandedId(isExpanded ? "" : finding.id)}
                        className="w-full p-5 sm:p-6 text-left flex items-start sm:items-center justify-between gap-4"
                      >
                        <div className="flex items-center gap-3.5 min-w-0">
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                              isCritical
                                ? "bg-error/10 text-error"
                                : isWarning
                                ? "bg-amber-100 text-amber-700"
                                : "bg-emerald-100 text-emerald-700"
                            }`}
                          >
                            <span className="material-symbols-outlined text-[20px]">
                              {isCritical ? "priority_high" : isWarning ? "warning" : "check_circle"}
                            </span>
                          </div>

                          <div className="min-w-0 space-y-0.5">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-semibold text-on-surface-variant">
                                {finding.clause}
                              </span>
                              <span
                                className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                                  isCritical
                                    ? "bg-error/15 text-error"
                                    : isWarning
                                    ? "bg-amber-100 text-amber-800"
                                    : "bg-emerald-100 text-emerald-800"
                                }`}
                              >
                                {isCritical ? "Pelanggaran Kritis" : isWarning ? "Perlu Diperhatikan" : "Aman / Sesuai"}
                              </span>
                            </div>
                            <h3 className="text-base font-bold text-on-surface truncate">
                              {finding.title}
                            </h3>
                          </div>
                        </div>

                        <span className="material-symbols-outlined text-[20px] text-on-surface-variant transition-transform shrink-0">
                          {isExpanded ? "expand_less" : "expand_more"}
                        </span>
                      </button>

                      {/* Expanded Details */}
                      {isExpanded && (
                        <div className="px-5 sm:px-6 pb-6 pt-2 space-y-4 border-t border-surface-container/60 text-sm">
                          
                          {/* Original Text */}
                          <div className="space-y-1">
                            <span className="text-xs font-bold uppercase text-on-surface-variant tracking-wider">
                              Teks / Klausul Asli yang Terdeteksi:
                            </span>
                            <div className="p-3.5 rounded-xl bg-surface-container/50 font-serif italic text-on-surface-variant leading-relaxed text-xs">
                              &ldquo;{finding.originalText}&rdquo;
                            </div>
                          </div>

                          {/* Problem & Legal Basis */}
                          <div className="space-y-1.5">
                            <span className="text-xs font-bold uppercase text-on-surface-variant tracking-wider">
                              Catatan Analisis Risiko Hukum:
                            </span>
                            <p className="text-on-surface leading-relaxed text-xs sm:text-sm">
                              {finding.issue}
                            </p>
                            <div className="p-3 rounded-xl bg-primary/5 border border-primary/10 text-xs font-semibold text-primary flex items-start gap-2">
                              <span className="material-symbols-outlined text-[16px] shrink-0 mt-0.5">gavel</span>
                              <span>Dasar Hukum: {finding.legalBasis}</span>
                            </div>
                          </div>

                          {/* Recommendation */}
                          <div className="space-y-1">
                            <span className="text-xs font-bold uppercase text-on-surface-variant tracking-wider">
                              Rekomendasi Negosiasi dengan HRD:
                            </span>
                            <p className="text-on-surface leading-relaxed text-xs sm:text-sm">
                              {finding.recommendation}
                            </p>
                          </div>

                          {/* Usulan Counter Draft */}
                          {finding.counterDraft && (
                            <div className="space-y-2 pt-2 border-t border-surface-container/60">
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-1.5">
                                  <span className="material-symbols-outlined text-[15px]">edit_document</span>
                                  Usulan Draf Klausul Tandingan:
                                </span>
                                <button
                                  type="button"
                                  onClick={() => handleCopyDraft(finding.id, finding.counterDraft)}
                                  className="text-xs font-bold text-primary hover:underline flex items-center gap-1 px-2.5 py-1 rounded-lg hover:bg-primary/5"
                                >
                                  <span className="material-symbols-outlined text-[14px]">
                                    {copiedId === finding.id ? "check" : "content_copy"}
                                  </span>
                                  <span>{copiedId === finding.id ? "Tersalin!" : "Salin Draf"}</span>
                                </button>
                              </div>
                              <div className="p-4 rounded-xl bg-surface-container-lowest border border-surface-container-high text-on-surface leading-relaxed font-mono text-xs shadow-inner">
                                {finding.counterDraft}
                              </div>
                            </div>
                          )}

                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Bottom Actions CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-surface-container-high/60">
                <Link
                  href="/panduan-negosiasi"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-surface-container text-on-surface font-semibold text-xs sm:text-sm hover:bg-surface-container-high transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">handshake</span>
                  <span>Pelajari Skrip Negosiasi dengan HRD</span>
                </Link>

                <Link
                  href="/forum-anonim"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-on-primary font-semibold text-xs sm:text-sm hover:bg-primary/90 transition-colors shadow-sm"
                >
                  <span className="material-symbols-outlined text-[18px]">forum</span>
                  <span>Konsultasikan Kasus Ini di Forum Anonim</span>
                </Link>
              </div>

            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
