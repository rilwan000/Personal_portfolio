document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');

  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const successEl = document.createElement('p');
    successEl.className = 'form-success';
    successEl.textContent = 'Thank you! Your message has been prepared successfully.';

    const existingMessage = form.querySelector('.form-success');
    if (existingMessage) existingMessage.remove();

    form.appendChild(successEl);
    form.reset();
  });
});
