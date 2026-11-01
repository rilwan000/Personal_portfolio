document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterButtons.length || !projectCards.length) return;

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;

      filterButtons.forEach((btn) => btn.classList.toggle('active', btn === button));

      projectCards.forEach((card) => {
        const category = card.dataset.category;
        const matches = filter === 'all' || category === filter;
        card.classList.toggle('hidden', !matches);
      });
    });
  });
});
