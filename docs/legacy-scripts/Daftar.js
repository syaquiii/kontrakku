// Skrip asli dari desain HTML: Daftar Akun
// Perilaku ini belum dipindah ke React.
// Role selector active-state toggle
  const roleButtons = document.querySelectorAll('#role-selector .role-btn');
  roleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      roleButtons.forEach(b => {
        b.className = 'role-btn text-left p-3 rounded-xl bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-md text-label-md font-semibold transition-all border border-surface-container';
      });
      btn.className = 'role-btn text-left p-3 rounded-xl bg-primary-container text-on-primary font-label-md text-label-md font-semibold transition-all shadow-sm border border-transparent';
    });
  });

  // Password Visibility Toggle
  const passInput = document.getElementById('passInput');
  const togglePass = document.getElementById('togglePass');
  const eyeIcon = document.getElementById('eyeIcon');
  if (togglePass && passInput) {
    togglePass.addEventListener('click', () => {
      const isPassword = passInput.getAttribute('type') === 'password';
      passInput.setAttribute('type', isPassword ? 'text' : 'password');
      eyeIcon.textContent = isPassword ? 'visibility_off' : 'visibility';
    });
  }

  // Password Strength Interactive Check
  if (passInput) {
    const bar1 = document.getElementById('bar1');
    const bar2 = document.getElementById('bar2');
    const bar3 = document.getElementById('bar3');
    const bar4 = document.getElementById('bar4');
    const strengthText = document.getElementById('strengthText');
    const reqLen = document.getElementById('req-len');
    const reqCap = document.getElementById('req-cap');
    const reqNum = document.getElementById('req-num');

    passInput.addEventListener('input', (e) => {
      const val = e.target.value;
      const hasLen = val.length >= 8;
      const hasCap = /[A-Z]/.test(val);
      const hasNum = /[0-9]/.test(val);
      const hasSpec = /[^A-Za-z0-9]/.test(val);

      // Update check icons
      const setCheck = (el, passed) => {
        const icon = el.querySelector('.material-symbols-outlined');
        if (passed) {
          icon.textContent = 'check_circle';
          icon.className = 'material-symbols-outlined text-[14px] text-emerald-600';
          el.className = 'flex items-center gap-1.5 font-semibold text-primary';
        } else {
          icon.textContent = 'circle';
          icon.className = 'material-symbols-outlined text-[14px] text-outline';
          el.className = 'flex items-center gap-1.5 text-on-surface-variant';
        }
      };

      setCheck(reqLen, hasLen);
      setCheck(reqCap, hasCap);
      setCheck(reqNum, hasNum);

      let score = 0;
      if (val.length > 0) score++;
      if (hasLen) score++;
      if (hasCap && hasNum) score++;
      if (hasSpec && hasLen) score++;

      // Reset bars
      [bar1, bar2, bar3, bar4].forEach(b => {
        b.className = 'h-full w-1/4 rounded-full bg-outline-variant transition-all duration-300';
      });

      if (val.length === 0) {
        strengthText.textContent = 'Masukkan Sandi';
        strengthText.className = 'font-bold text-outline';
      } else if (score === 1) {
        bar1.className = 'h-full w-1/4 rounded-full bg-error transition-all duration-300';
        strengthText.textContent = 'Sangat Lemah';
        strengthText.className = 'font-bold text-error';
      } else if (score === 2) {
        bar1.className = 'h-full w-1/4 rounded-full bg-secondary-container transition-all duration-300';
        bar2.className = 'h-full w-1/4 rounded-full bg-secondary-container transition-all duration-300';
        strengthText.textContent = 'Cukup';
        strengthText.className = 'font-bold text-secondary-container';
      } else if (score === 3) {
        bar1.className = 'h-full w-1/4 rounded-full bg-amber-500 transition-all duration-300';
        bar2.className = 'h-full w-1/4 rounded-full bg-amber-500 transition-all duration-300';
        bar3.className = 'h-full w-1/4 rounded-full bg-amber-500 transition-all duration-300';
        strengthText.textContent = 'Kuat';
        strengthText.className = 'font-bold text-amber-600';
      } else if (score >= 4) {
        bar1.className = 'h-full w-1/4 rounded-full bg-emerald-600 transition-all duration-300';
        bar2.className = 'h-full w-1/4 rounded-full bg-emerald-600 transition-all duration-300';
        bar3.className = 'h-full w-1/4 rounded-full bg-emerald-600 transition-all duration-300';
        bar4.className = 'h-full w-1/4 rounded-full bg-emerald-600 transition-all duration-300';
        strengthText.textContent = 'Sangat Aman';
        strengthText.className = 'font-bold text-emerald-600';
      }
    });
  }
