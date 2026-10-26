/**
 * Antigravity Contract Analyzer Engine
 * Specialized Indonesian Labor Law Diagnostic & Counter-Draft Generator
 * Based on:
 * - UU No. 13 Tahun 2003 tentang Ketenagakerjaan
 * - UU No. 6 Tahun 2023 (UU Cipta Kerja)
 * - PP No. 35 Tahun 2021 (PKWT, Alih Daya, Waktu Kerja & PHK)
 * - PP No. 36 Tahun 2021 (Pengupahan)
 * - Kitab Undang-Undang Hukum Perdata (KUHPerdata) Pasal 1320, 1338
 */

export interface AnalysisFinding {
  id: string;
  clause: string;
  title: string;
  severity: "critical" | "warning" | "compliant";
  originalText: string;
  issue: string;
  legalBasis: string;
  recommendation: string;
  counterDraft: string;
}

export interface AnalysisResult {
  score: number;
  verdict: "Aman" | "Perlu Negosiasi" | "Berisiko Tinggi";
  summary: string;
  totalFindings: number;
  criticalCount: number;
  warningCount: number;
  compliantCount: number;
  findings: AnalysisFinding[];
}

export const SAMPLE_CONTRACT_BAD = `PERJANJIAN KERJA WAKTU TERTENTU (PKWT)
Nomor: 014/HRD-PKWT/X/2026

Antara PT Innova Karya Bersama ("Perusahaan") dengan Sdr. Syauqi ("Pekerja").

Pasal 1: Jangka Waktu & Masa Percobaan
1. Kontrak kerja ini berlaku selama 12 (dua belas) bulan terhitung sejak 1 November 2026.
2. Pekerja diwajibkan menjalani Masa Percobaan (Probation) selama 3 (tiga) bulan pertama, di mana Perusahaan berhak mengakhiri hubungan kerja sewaktu-waktu tanpa kompensasi apapun.

Pasal 2: Waktu Kerja & Lembur
1. Waktu kerja adalah 45 jam per minggu.
2. Seluruh kelebihan jam kerja dianggap sebagai loyalitas kerja dan lembur sukarela tanpa kompensasi upah lembur tambahan (sistem all-in salary).

Pasal 3: Jaminan Ijazah Asli
1. Untuk menjamin kelangsungan kontrak, Pekerja wajib menyerahkan Ijazah Asli Pendidikan Terakhir kepada Perusahaan selama masa kontrak berlaku.
2. Ijazah asli hanya akan dikembalikan setelah masa kontrak berakhir tanpa perselisihan.

Pasal 4: Pengunduran Diri & Denda Pinalti
1. Pekerja dilarang mengajukan pengunduran diri sebelum masa kontrak 12 bulan berakhir.
2. Apabila Pekerja mengundurkan diri sepihak, Pekerja wajib membayar ganti rugi denda seketika sebesar 6x (enam kali) gaji pokok bruto ditambah biaya rekrutmen Rp 15.000.000.

Pasal 5: Kompensasi Akhir Kontrak
1. Mengingat status kontrak adalah PKWT, Pekerja menyatakan melepaskan hak atas uang kompensasi pengakhiran masa kerja dalam bentuk apapun.

Pasal 6: Larangan Bersaing (Non-Compete)
1. Setelah berhenti bekerja, Pekerja dilarang bekerja di perusahaan sejenis atau industri serupa di seluruh wilayah Indonesia selama 2 (dua) tahun.`;

export const SAMPLE_CONTRACT_GOOD = `PERJANJIAN KERJA WAKTU TERTENTU (PKWT)
Nomor: 088/HRD-LEGAL/X/2026

Antara PT Karya Bangsa Sejahtera ("Perusahaan") dengan Karyawan.

Pasal 1: Masa Perjanjian
1. Hubungan kerja ini diikat dalam Perjanjian Kerja Waktu Tertentu (PKWT) selama 12 (dua belas) bulan.
2. Sesuai regulasi ketenagakerjaan, tidak disyaratkan masa percobaan (probation) dalam kontrak ini.

Pasal 2: Jam Kerja & Upah Lembur
1. Jam kerja ditetapkan 40 jam per minggu (8 jam sehari untuk 5 hari kerja).
2. Setiap kerja lembur atas perintah tertulis Perusahaan akan dibayarkan upah lemburnya sesuai formula resmi PP No. 35/2021.

Pasal 3: Verifikasi Dokumen
1. Perusahaan memverifikasi keabsahan Ijazah Asli pada saat registrasi awal dan hanya menyimpan salinan fotokopi yang telah dilegalisir. Tidak ada penahanan dokumen asli.

Pasal 4: Pengakhiran Hubungan Kerja & Kompensasi
1. Pada saat berakhirnya jangka waktu PKWT, Perusahaan wajib membayarkan Uang Kompensasi PKWT sebesar 1 (satu) bulan upah penuh sesuai ketentuan Pasal 15 PP No. 35/2021.
2. Apabila salah satu pihak mengakhiri hubungan kerja sebelum waktunya, pihak yang mengakhiri wajib membayar ganti rugi sebesar sisa upah hingga masa kontrak berakhir sesuai Pasal 62 UU Ketenagakerjaan.

Pasal 5: Kerahasiaan Informasi
1. Pekerja wajib menjaga rahasia dagang dan data kepemilikan Perusahaan selama dan setelah masa kerja tanpa membatasi hak konstitusional pekerja untuk mencari nafkah di masa depan.`;

/**
 * Analyzes contract text against Indonesian statutory labor requirements
 */
export function analyzeContractText(rawText: string): AnalysisResult {
  const textLower = rawText.toLowerCase();
  const findings: AnalysisFinding[] = [];

  // 1. Detection: Penahanan Dokumen / Ijazah Asli
  if (
    textLower.includes("tahan") ||
    textLower.includes("menahan") ||
    textLower.includes("penahanan") ||
    textLower.includes("jaminan ijazah") ||
    textLower.includes("ijazah asli") ||
    textLower.includes("dokumen asli") ||
    textLower.includes("titip ijazah")
  ) {
    findings.push({
      id: "finding-ijazah",
      clause: "Klausul Jaminan Dokumen",
      title: "Penahanan Ijazah / Dokumen Asli Sebagai Jaminan",
      severity: "critical",
      originalText: extractMatchingSentence(
        rawText,
        ["ijazah", "asli", "tahan", "menahan", "jaminan"]
      ) || "Pekerja wajib menyerahkan Ijazah Asli sebagai jaminan selama masa kontrak berlangsung.",
      issue:
        "Penahanan ijazah asli atau dokumen kependudukan pokok bertentangan dengan Surat Edaran Kemenaker dan asas kepatutan hukum. Dokumen rentan rusak, tercecer, dan kerap disalahgunakan untuk menyandera kebebasan pekerja.",
      legalBasis:
        "Surat Edaran Menakertrans RI & Penegasan Disnaker: Dokumen asli merupakan hak milik pribadi dan tidak dapat disandera tanpa persetujuan berimbang serta asuransi kerugian.",
      recommendation:
        "Tolak penyerahan fisik asli secara tegas. Tawarkan verifikasi fisik dokumen asli saat orientasi (show & verify) dan serahkan salinan fotokopi legalisir basah untuk arsip HRD.",
      counterDraft:
        "PIHAK PERTAMA berhak memverifikasi keabsahan Ijazah Asli pada saat orientasi kerja, dan selanjutnya menyimpan salinan fotokopi yang telah dilegalisir sebagai arsip kepegawaian. Tidak ada penahanan dokumen asli oleh Perusahaan.",
    });
  }

  // 2. Detection: Masa Percobaan (Probation) pada PKWT
  if (
    (textLower.includes("pkwt") || textLower.includes("waktu tertentu") || textLower.includes("kontrak")) &&
    (textLower.includes("percobaan") || textLower.includes("probation"))
  ) {
    findings.push({
      id: "finding-probation-pkwt",
      clause: "Klausul Masa Percobaan PKWT",
      title: "Pemberlakuan Masa Percobaan (Probation) pada Kontrak PKWT",
      severity: "critical",
      originalText: extractMatchingSentence(
        rawText,
        ["percobaan", "probation", "bulan"]
      ) || "Pekerja diwajibkan menjalani Masa Percobaan (Probation) selama 3 (tiga) bulan.",
      issue:
        "Hukum ketenagakerjaan Indonesia secara tegas melarang masa percobaan dalam kontrak PKWT. Jika klausul ini dicantumkan, klausul tersebut BATAL DEMI HUKUM dan masa percobaan tetap dihitung sebagai masa kerja resmi.",
      legalBasis:
        "Pasal 58 ayat (1) & (2) UU No. 13/2003 jo. UU No. 6/2023 (UU Cipta Kerja): 'Perjanjian kerja untuk waktu tertentu tidak dapat mensyaratkan adanya masa percobaan kerja. Dalam hal disyaratkan, masa percobaan kerja yang disyaratkan tersebut batal demi hukum.'",
      recommendation:
        "Minta klausul masa percobaan dihapus dari draf PKWT, atau minta status kontrak diubah menjadi PKWTT (Karyawan Tetap) jika perusahaan memang mewajibkan masa percobaan formal.",
      counterDraft:
        "Mengingat hubungan kerja ini diikat dalam Perjanjian Kerja Waktu Tertentu (PKWT), maka PARA PIHAK sepakat tidak memberlakukan masa percobaan (probation) sebagaimana diatur dalam Pasal 58 UU Ketenagakerjaan.",
    });
  }

  // 3. Detection: Denda / Pinalti Resign Dini Tidak Proporsional
  if (
    textLower.includes("denda") ||
    textLower.includes("pinalti") ||
    textLower.includes("penalti") ||
    textLower.includes("ganti rugi") ||
    textLower.includes("dilarang mengundurkan")
  ) {
    const hasHeavyPenalty =
      textLower.includes("gaji") ||
      textLower.includes("rekrutmen") ||
      textLower.includes("juta") ||
      textLower.includes("seketika");

    findings.push({
      id: "finding-penalty",
      clause: "Klausul Pengunduran Diri & Denda",
      title: "Pinalti Pengunduran Diri Tanpa Perhitungan Biaya Riil",
      severity: hasHeavyPenalty ? "critical" : "warning",
      originalText: extractMatchingSentence(
        rawText,
        ["denda", "pinalti", "ganti rugi", "mengundurkan"]
      ) || "Apabila Pekerja mengundurkan diri sepihak, wajib membayar denda pinalti 6x gaji pokok.",
      issue:
        "Denda nominal tetap (seperti 6x gaji atau puluhan juta) tanpa rincian biaya pelatihan sertifikasi resmi atau kerugian riil terbukti melanggar asas proporsionalitas Pasal 1338 KUHPerdata.",
      legalBasis:
        "Pasal 62 UU No. 13/2003 (Ganti rugi sebesar upah hingga batas waktu berakhir) & Putusan Mahkamah Agung mengenai Asas Kepatutan klausul denda ketenagakerjaan.",
      recommendation:
        "Tegaskan bahwa ganti rugi hanya boleh dibebankan atas biaya pelatihan (training bond) bersertifikasi yang tercantum bukti invoice resminya, dan dihitung proporsional terhadap sisa waktu ikatan kerja.",
      counterDraft:
        "Apabila PIHAK KEDUA mengundurkan diri sebelum masa perjanjian berakhir, kewajiban ganti rugi hanya dikenakan atas biaya pelatihan bersertifikasi yang telah dibiayai resmi oleh PIHAK PERTAMA, dihitung secara proporsional terhadap sisa masa kerja yang belum dijalani.",
    });
  }

  // 4. Detection: Jam Kerja Berlebih / Lembur Tanpa Upah (All-in Salary)
  if (
    textLower.includes("all in") ||
    textLower.includes("all-in") ||
    textLower.includes("lembur sukarela") ||
    textLower.includes("tanpa upah lembur") ||
    textLower.includes("loyalitas") ||
    textLower.includes("45 jam") ||
    textLower.includes("48 jam")
  ) {
    findings.push({
      id: "finding-overtime",
      clause: "Klausul Jam Kerja & Upah Lembur",
      title: "Pemberlakuan Jam Kerja Ilegal atau Lembur Tanpa Upah (All-In)",
      severity: "critical",
      originalText: extractMatchingSentence(
        rawText,
        ["lembur", "all-in", "all in", "jam kerja", "loyalitas"]
      ) || "Seluruh kelebihan jam kerja dianggap sebagai lembur sukarela tanpa kompensasi tambahan.",
      issue:
        "Konsep 'all-in salary' di mana kelebihan jam kerja tidak dibayar lembur adalah pelanggaran hukum berat bagi level staf/non-manajerial. Jam kerja di Indonesia dibatasi maksimal 40 jam per minggu.",
      legalBasis:
        "Pasal 77 ayat (2) & Pasal 78 UU No. 13/2003 jo. PP No. 35/2021: Batas waktu kerja maksimal 40 jam seminggu, dan pengusaha wajib membayar upah kerja lembur sesuai ketentuan.",
      recommendation:
        "Minta penghapusan frasa lembur sukarela/all-in. Pastikan terdapat klausul perintah kerja lembur (SPL) resmi dengan pembayaran upah lembur mengacu PP 35/2021.",
      counterDraft:
        "Waktu kerja ditetapkan 40 jam per minggu (8 jam/hari untuk 5 hari kerja). Setiap kelebihan jam kerja wajib didasarkan atas Surat Perintah Lembur tertulis dan diperhitungkan upah lemburnya sesuai ketentuan PP No. 35 Tahun 2021.",
    });
  }

  // 5. Detection: Pelepasan Hak Kompensasi PKWT
  if (
    (textLower.includes("pkwt") || textLower.includes("waktu tertentu")) &&
    (textLower.includes("melepaskan hak") ||
      textLower.includes("tanpa kompensasi") ||
      textLower.includes("tidak ada kompensasi") ||
      textLower.includes("melepas kompensasi"))
  ) {
    findings.push({
      id: "finding-compensation",
      clause: "Klausul Kompensasi Akhir Masa PKWT",
      title: "Pelepasan Sepihak Uang Kompensasi PKWT",
      severity: "critical",
      originalText: extractMatchingSentence(
        rawText,
        ["kompensasi", "melepaskan", "hak", "pengakhiran"]
      ) || "Pekerja melepaskan hak atas uang kompensasi pengakhiran PKWT dalam bentuk apapun.",
      issue:
        "Pemberian Uang Kompensasi PKWT adalah kewajiban hukum absolut pengusaha sejak berlakunya UU Cipta Kerja. Klausul perjanjian yang meniadakan hak ini batal demi hukum.",
      legalBasis:
        "Pasal 61A UU No. 11/2020 jo. UU No. 6/2023 & Pasal 15 s/d 17 PP No. 35/2021: Pengusaha wajib memberikan uang kompensasi kepada pekerja PKWT dengan masa kerja minimal 1 bulan terus-menerus.",
      recommendation:
        "Jangan tanda tangani klausul pelepasan hak kompensasi. Minta klausul hak kompensasi dicantumkan secara eksplisit sesuai formula PP 35/2021.",
      counterDraft:
        "Pada saat berakhirnya jangka waktu PKWT, PIHAK PERTAMA wajib membayarkan Uang Kompensasi PKWT kepada PIHAK KEDUA dengan perhitungan formula masa kerja sesuai ketentuan Pasal 15 dan Pasal 16 PP No. 35 Tahun 2021.",
    });
  }

  // 6. Detection: Klausul Non-Compete Berlebihan
  if (
    textLower.includes("non-compete") ||
    textLower.includes("larangan bersaing") ||
    textLower.includes("perusahaan sejenis") ||
    textLower.includes("kompetitor") ||
    textLower.includes("industri serupa")
  ) {
    findings.push({
      id: "finding-non-compete",
      clause: "Klausul Larangan Bersaing (Non-Compete)",
      title: "Pembatasan Bekerja di Industri Serupa Pasca Kontrak",
      severity: "warning",
      originalText: extractMatchingSentence(
        rawText,
        ["non-compete", "sejenis", "bersaing", "serupa", "kompetitor"]
      ) || "Pekerja dilarang bekerja di perusahaan sejenis selama 2 tahun setelah masa kontrak berakhir.",
      issue:
        "Klausul non-compete tanpa kompensasi finansial bulanan selama masa larangan melanggar hak konstitusional pekerja untuk mencari nafkah. Pengadilan ketenagakerjaan di Indonesia umumnya menolak gugatan non-compete umum.",
      legalBasis:
        "Pasal 27 ayat (2) & Pasal 28D ayat (2) UUD 1945 menjamin hak setiap warganegara atas pekerjaan dan penghidupan yang layak.",
      recommendation:
        "Usulkan klausul diubah menjadi perlindungan kerahasiaan data (Non-Disclosure Agreement / NDA), bukan melarang Anda mencari nafkah di bidang profesi Anda.",
      counterDraft:
        "PIHAK KEDUA wajib menjaga kerahasiaan data bisnis dan rahasia dagang PIHAK PERTAMA yang diperoleh selama masa kerja, tanpa membatasi hak konstitusional PIHAK KEDUA untuk memperoleh pekerjaan di masa depan.",
    });
  }

  // 7. Check for Compliant Elements if none critical or if standard elements detected
  if (
    textLower.includes("40 jam") ||
    textLower.includes("sesuai pp 35/2021") ||
    textLower.includes("fotokopi legalisir") ||
    textLower.includes("bpjs ketenagakerjaan") ||
    textLower.includes("bpjs kesehatan")
  ) {
    findings.push({
      id: "finding-compliant-bpjs",
      clause: "Klausul Jaminan Sosial & Kepatuhan",
      title: "Pendaftaran Program Jaminan Sosial BPJS",
      severity: "compliant",
      originalText: extractMatchingSentence(
        rawText,
        ["bpjs", "jaminan sosial", "kesehatan", "ketenagakerjaan"]
      ) || "Perusahaan mengikutsertakan Pekerja dalam program BPJS Ketenagakerjaan dan Kesehatan.",
      issue: "Klausul ini telah mematuhi kewajiban statutori pendaftaran jaminan sosial tenaga kerja.",
      legalBasis: "UU No. 24 Tahun 2011 tentang Badan Penyelenggara Jaminan Sosial (BPJS)",
      recommendation: "Pertahankan klausul ini dan pastikan iuran dipotong secara transparan pada slip gaji.",
      counterDraft: "",
    });
  }

  // Fallback: If clean text with no obvious red flags detected
  if (findings.length === 0) {
    findings.push({
      id: "finding-default-clean",
      clause: "Audit Umum Ketentuan Kerja",
      title: "Struktur Kontrak Terlihat Standar",
      severity: "compliant",
      originalText: rawText.slice(0, 180) + "...",
      issue: "Tidak ditemukan klausul jebakan utama seperti penahanan ijazah, denda berlebihan, atau larangan bersaing yang mencolok.",
      legalBasis: "UU Ketenagakerjaan No. 13 Tahun 2003 & PP No. 35 Tahun 2021",
      recommendation: "Tetap pastikan tanggal efektif, rincian upah pokok vs tunjangan, serta job description tertulis jelas sebelum bertandatangan.",
      counterDraft: "",
    });
  }

  // Calculate Score
  let score = 100;
  let criticalCount = 0;
  let warningCount = 0;
  let compliantCount = 0;

  for (const f of findings) {
    if (f.severity === "critical") {
      score -= 16;
      criticalCount++;
    } else if (f.severity === "warning") {
      score -= 8;
      warningCount++;
    } else {
      compliantCount++;
    }
  }

  score = Math.max(25, Math.min(100, score));

  let verdict: "Aman" | "Perlu Negosiasi" | "Berisiko Tinggi" = "Aman";
  let summary = "";

  if (score < 60 || criticalCount >= 2) {
    verdict = "Berisiko Tinggi";
    summary = `Ditemukan ${criticalCount} klausul berisiko kritis yang melanggar hukum perburuhan dan dapat merugikan Anda secara hukum. Sangat disarankan menolak menandatangani sebelum klausul disesuaikan.`;
  } else if (score < 85 || warningCount >= 1 || criticalCount === 1) {
    verdict = "Perlu Negosiasi";
    summary = `Kontrak mengandung ${findings.filter((f) => f.severity !== "compliant").length} poin yang perlu dinegosiasikan ulang dengan HRD menggunakan draf usulan pengganti yang disiapkan.`;
  } else {
    verdict = "Aman";
    summary = "Kontrak kerja relatif berimbang dan memenuhi ketentuan dasar hukum ketenagakerjaan Indonesia.";
  }

  return {
    score,
    verdict,
    summary,
    totalFindings: findings.length,
    criticalCount,
    warningCount,
    compliantCount,
    findings,
  };
}

/**
 * Utility helper to extract sentence containing matching keywords
 */
function extractMatchingSentence(text: string, keywords: string[]): string | null {
  const sentences = text.split(/(?<=[.?!;\n])\s+/);
  for (const sentence of sentences) {
    const sLower = sentence.toLowerCase();
    const matches = keywords.filter((kw) => sLower.includes(kw));
    if (matches.length >= 2 || (matches.length === 1 && sentence.length > 30)) {
      const clean = sentence.trim().replace(/^[-*\d.\s]+/, "");
      if (clean.length > 20 && clean.length < 350) {
        return clean;
      }
    }
  }
  return null;
}
