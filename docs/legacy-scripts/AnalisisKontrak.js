// Skrip asli dari desain HTML: Analisis Kontrak AI
// Perilaku ini belum dipindah ke React.
function showToast(msg) {
    const toast = document.getElementById('toastNotification');
    const label = document.getElementById('toastMsg');
    if (toast && label) {
      label.textContent = msg;
      toast.classList.remove('translate-y-20', 'opacity-0');
      toast.classList.add('translate-y-0', 'opacity-100');
      setTimeout(() => {
        toast.classList.remove('translate-y-0', 'opacity-100');
        toast.classList.add('translate-y-20', 'opacity-0');
      }, 3200);
    }
  }

  function copyDraft(elemId) {
    const el = document.getElementById(elemId);
    if (el) {
      navigator.clipboard.writeText(el.value).then(() => {
        showToast('Draf surat negosiasi HR berhasil disalin ke clipboard!');
      }).catch(() => {
        showToast('Gagal menyalin draf. Silakan pilih teks manual.');
      });
    }
  }

  function focusFinding(findingId) {
    const target = document.getElementById(findingId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      target.classList.add('ring-2', 'ring-primary-container');
      setTimeout(() => {
        target.classList.remove('ring-2', 'ring-primary-container');
      }, 1500);
    }
  }

  function filterAudit(type) {
    const buttons = ['all', 'risk', 'negotiation', 'statute'];
    buttons.forEach(b => {
      const btn = document.getElementById('filter-' + b);
      if (btn) {
        if (b === type) {
          btn.className = 'px-3.5 py-1.5 rounded-full bg-primary-container text-on-primary font-label-md text-label-md font-semibold transition-all shrink-0';
        } else {
          btn.className = 'px-3.5 py-1.5 rounded-full bg-surface-container text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-high transition-all shrink-0';
        }
      }
    });

    const crit = document.getElementById('finding-critical');
    const amb = document.getElementById('finding-ambiguous');
    const comp = document.getElementById('finding-compliant');

    if (type === 'risk') {
      if (crit) crit.style.display = 'block';
      if (amb) amb.style.display = 'block';
      if (comp) comp.style.display = 'none';
    } else if (type === 'negotiation') {
      if (crit) crit.style.display = 'block';
      if (amb) amb.style.display = 'block';
      if (comp) comp.style.display = 'none';
    } else if (type === 'statute') {
      if (crit) crit.style.display = 'block';
      if (amb) amb.style.display = 'block';
      if (comp) comp.style.display = 'block';
    } else {
      if (crit) crit.style.display = 'block';
      if (amb) amb.style.display = 'block';
      if (comp) comp.style.display = 'block';
    }
  }

  function openAdvocateModal() {
    const modal = document.getElementById('advocateModal');
    if (modal) modal.classList.remove('hidden');
  }

  function closeAdvocateModal() {
    const modal = document.getElementById('advocateModal');
    if (modal) modal.classList.add('hidden');
  }

  function confirmAdvocateSchedule() {
    closeAdvocateModal();
    showToast('Permohonan review telah dikirim ke Advokat Pro-Bono mitra.');
  }

  const btnDownload = document.getElementById('btnDownloadAudit');
  if (btnDownload) {
    btnDownload.addEventListener('click', () => {
      showToast('Menyiapkan berkas Ringkasan Audit PDF Resmi...');
    });
  }
