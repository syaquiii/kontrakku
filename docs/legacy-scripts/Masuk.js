// Skrip asli dari desain HTML: Masuk
// Perilaku ini belum dipindah ke React.
(function initLoginPage() {
    const toggleBtn = document.getElementById('toggle-password');
    const pwdInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eye-icon');

    if (toggleBtn && pwdInput && eyeIcon) {
      toggleBtn.addEventListener('click', function() {
        const isPassword = pwdInput.getAttribute('type') === 'password';
        pwdInput.setAttribute('type', isPassword ? 'text' : 'password');
        eyeIcon.textContent = isPassword ? 'visibility_off' : 'visibility';
      });
    }

    const privateModeCheckbox = document.getElementById('private-mode');
    if (privateModeCheckbox) {
      privateModeCheckbox.addEventListener('change', function(e) {
        if (e.target.checked) {
          sessionStorage.setItem('kontrakku_stealth_mode', 'true');
        } else {
          sessionStorage.removeItem('kontrakku_stealth_mode');
        }
      });
    }
  })();
