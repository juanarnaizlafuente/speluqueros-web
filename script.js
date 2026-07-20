const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', open);
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('is-open')));
