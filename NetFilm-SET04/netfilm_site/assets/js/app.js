
document.addEventListener('DOMContentLoaded', () => {
  const search = document.querySelector('.search input');
  const cards = document.querySelectorAll('.card');
  if (search && cards.length) {
    search.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      cards.forEach(c => {
        const title = c.dataset.title || '';
        c.style.display = title.includes(q) ? '' : 'none';
      });
    });
  }
});
