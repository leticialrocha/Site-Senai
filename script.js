document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('year').textContent = new Date().getFullYear();

  const themeToggle = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) root.setAttribute('data-theme', savedTheme);

  themeToggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? '' : 'dark';
    if (next) root.setAttribute('data-theme', next);
    else root.removeAttribute('data-theme');
    localStorage.setItem('theme', next);
  });

  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth'});
        nav.classList.remove('open');
      }
    });
  });

  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    status.textContent = 'Enviando...';

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if (!name || !email || !message) {
      status.textContent = 'Por favor preencha todos os campos.';
      return;
    }

    setTimeout(() => {
      status.textContent = 'Mensagem enviada com sucesso! Obrigado.';
      form.reset();
    }, 800);
  });
});
