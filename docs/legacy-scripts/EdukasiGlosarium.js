// Skrip asli dari desain HTML: Edukasi & Glosarium
// Perilaku ini belum dipindah ke React.
(function () {
      const searchInput = document.getElementById('glossary-search');
      const topicFilters = document.getElementById('topic-filters');
      const articles = document.querySelectorAll('.col-span-12.lg\\:col-span-6 article');

      if (searchInput) {
        searchInput.addEventListener('input', function (e) {
          const query = e.target.value.toLowerCase().trim();
          articles.forEach(article => {
            const text = article.textContent.toLowerCase();
            if (query === '' || text.includes(query)) {
              article.style.display = '';
            } else {
              article.style.display = 'none';
            }
          });
        });
      }

      if (topicFilters) {
        const buttons = topicFilters.querySelectorAll('button');
        buttons.forEach(btn => {
          btn.addEventListener('click', function () {
            buttons.forEach(b => {
              b.classList.remove('bg-primary-container', 'text-on-primary', 'font-bold', 'shadow-sm');
              b.classList.add('bg-surface-container', 'text-on-surface-variant');
            });
            this.classList.remove('bg-surface-container', 'text-on-surface-variant');
            this.classList.add('bg-primary-container', 'text-on-primary', 'font-bold', 'shadow-sm');
          });
        });
      }
    })();
