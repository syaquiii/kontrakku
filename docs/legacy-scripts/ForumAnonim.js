// Skrip asli dari desain HTML: Forum Komunitas Pekerja Anonim
// Perilaku ini belum dipindah ke React.
(function initForumInteractions() {
    // Identity randomization simulation
    const identities = [
      { name: '#PekerjaSurabaya99', role: 'Karyawan Swasta • IT & Startup' },
      { name: '#AnonBandung44', role: 'Staff Operasional • F&B Chain' },
      { name: '#PegawaiMedan12', role: 'Supervisor • Manufaktur & Tekstil' },
      { name: '#PekerjaTangerang88', role: 'Account Executive • Agensi Digital' },
      { name: '#MitraSemarang30', role: 'Tenaga Ahli • Logistik & Pergudangan' }
    ];
    let currentIndex = 0;

    const rerollBtn = document.getElementById('reroll-btn');
    const rerollIcon = document.getElementById('reroll-icon');
    const identityDisplay = document.getElementById('masked-identity');
    const publishBtn = document.getElementById('publish-btn');
    const threadContent = document.getElementById('thread-content');

    if (rerollBtn && identityDisplay) {
      rerollBtn.addEventListener('click', () => {
        if (rerollIcon) {
          rerollIcon.classList.add('rotate-180');
          setTimeout(() => rerollIcon.classList.remove('rotate-180'), 300);
        }
        currentIndex = (currentIndex + 1) % identities.length;
        const current = identities[currentIndex];
        identityDisplay.innerHTML = `${current.name} <span class="font-body-sm text-body-sm text-on-surface-variant font-normal">(${current.role})</span>`;
      });
    }

    if (publishBtn && threadContent) {
      publishBtn.addEventListener('click', () => {
        const text = threadContent.value.trim();
        if (!text) {
          threadContent.focus();
          threadContent.placeholder = 'Mohon ketikkan keluhan atau pertanyaan Anda terlebih dahulu...';
          return;
        }

        const originalText = publishBtn.innerHTML;
        publishBtn.disabled = true;
        publishBtn.innerHTML = `
          <span class="material-symbols-outlined text-[18px] animate-spin">autorenew</span>
          <span>Menyensor &amp; Menerbitkan...</span>
        `;

        setTimeout(() => {
          publishBtn.innerHTML = `
            <span class="material-symbols-outlined text-[18px]">done</span>
            <span>Utas Terbit Anonim!</span>
          `;
          threadContent.value = '';

          setTimeout(() => {
            publishBtn.innerHTML = originalText;
            publishBtn.disabled = false;
          }, 2000);
        }, 1000);
      });
    }
  })();
