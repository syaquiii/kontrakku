// Skrip asli dari desain HTML: Hitung Hak Kerja
// Perilaku ini belum dipindah ke React.
function formatIDR(num) {
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0
      }).format(num);
    }

    function updateDuration(val) {
      document.getElementById('label-durasi-display').innerText = val;
      recalculate();
    }

    function recalculate(alertMode = false) {
      const pokok = parseFloat(document.getElementById('input-upah-pokok').value) || 0;
      const tunjangan = parseFloat(document.getElementById('input-tunjangan-tetap').value) || 0;
      const durasi = parseInt(document.getElementById('slider-durasi').value) || 12;
      const totalUpah = pokok + tunjangan;

      // Update badge
      document.getElementById('badge-total-upah').innerText = formatIDR(totalUpah);

      // Kompensasi PKWT Formula: (durasi / 12) * totalUpah
      const ratio = durasi / 12;
      const kompensasi = ratio * totalUpah;

      // Display hasil
      document.getElementById('result-nominal-display').innerText = formatIDR(kompensasi) + ',00';
      document.getElementById('formula-text-breakdown').innerText = 
        `(${durasi} Bulan / 12) × ${formatIDR(totalUpah)} = ${ratio.toFixed(2)} × ${formatIDR(totalUpah)}`;
      document.getElementById('ratio-factor-display').innerText = `${ratio.toFixed(2)} Kali Upah Bulanan Penuh`;

      // Hourly calculations
      const hourlyRate = Math.round(totalUpah / 173);
      document.getElementById('stat-hourly-rate').innerText = `${formatIDR(hourlyRate)} / jam`;
      document.getElementById('rate-jam-1').innerText = formatIDR(Math.round(hourlyRate * 1.5));
      document.getElementById('rate-jam-2').innerText = formatIDR(Math.round(hourlyRate * 2.0));
      document.getElementById('rate-jam-libur').innerText = `${formatIDR(Math.round(hourlyRate * 2.0))} - ${formatIDR(Math.round(hourlyRate * 4.0))}`;

      // Check jenis PKWT
      const radioPasal62 = document.querySelector('input[name="pkwt_type"]:checked');
      const warningBox = document.getElementById('pasal62-warning');
      if (radioPasal62 && radioPasal62.value === 'pasal62') {
        warningBox.classList.remove('hidden');
      } else {
        warningBox.classList.add('hidden');
      }

      if (alertMode) {
        const toast = document.createElement('div');
        toast.className = 'fixed bottom-8 right-8 bg-inverse-surface text-inverse-on-surface px-5 py-3 rounded-xl shadow-xl flex items-center gap-3 z-50 animate-bounce';
        toast.innerHTML = '<span class="material-symbols-outlined text-secondary-container">verified</span><span class="font-label-lg">Simulasi Hak Berhasil Dihitung Sesuai Regulasi!</span>';
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 2600);
      }
    }

    function resetForm() {
      document.getElementById('input-upah-pokok').value = '10000000';
      document.getElementById('input-tunjangan-tetap').value = '2000000';
      document.getElementById('slider-durasi').value = 12;
      document.getElementById('label-durasi-display').innerText = '12';
      const radios = document.getElementsByName('pkwt_type');
      if (radios.length > 0) radios[0].checked = true;
      recalculate();
    }

    function switchCalculator(tabId) {
      const tabs = document.querySelectorAll('.calc-tab');
      tabs.forEach(tab => {
        tab.className = 'calc-tab flex items-center gap-2 bg-surface-container-lowest text-on-surface-variant px-5 py-2.5 rounded-xl font-label-lg text-label-lg shadow-sm hover:bg-surface-container transition-all';
      });
      const activeTab = document.getElementById(`tab-${tabId}`);
      if (activeTab) {
        activeTab.className = 'calc-tab flex items-center gap-2 bg-primary-container text-on-primary px-5 py-2.5 rounded-xl font-label-lg text-label-lg shadow-sm hover:opacity-95 transition-all';
      }
    }

    function downloadClaimDoc() {
      const pokok = parseFloat(document.getElementById('input-upah-pokok').value) || 0;
      const tunjangan = parseFloat(document.getElementById('input-tunjangan-tetap').value) || 0;
      const durasi = document.getElementById('slider-durasi').value;
      const nominal = document.getElementById('result-nominal-display').innerText;

      const content = `SURAT KLAIM HAK KOMPENSASI PKWT (PP NO. 35/2021)
Tanggal: ${new Date().toLocaleDateString('id-ID')}
Upah Acuan Bulanan: Rp ${(pokok + tunjangan).toLocaleString('id-ID')}
Masa Kerja Kontrak: ${durasi} Bulan
Total Hak Wajib Diterima: ${nominal}

Dasar Hukum: Pasal 15 s.d 17 Peraturan Pemerintah Nomor 35 Tahun 2021.`;

      const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Surat_Klaim_Kompensasi_PKWT_${Date.now()}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }

    // Initialize calculation on page load
    window.addEventListener('DOMContentLoaded', () => {
      recalculate();
    });
