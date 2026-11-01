document.addEventListener('DOMContentLoaded', () => {
  const skillBars = document.querySelectorAll('.skill-bar span');

  skillBars.forEach((bar) => {
    const targetWidth = bar.dataset.width || '0%';
    bar.style.width = '0%';

    requestAnimationFrame(() => {
      bar.style.transition = 'width 1s ease-in-out';
      bar.style.width = targetWidth;
    });
  });
});
