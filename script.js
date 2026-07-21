const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', open);
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('is-open')));

document.querySelectorAll('.locations article').forEach((center) => {
  const phone = center.querySelector('.phone-link');
  const map = center.querySelector('.map-link');
  if (!phone || !map) return;
  const rating = document.createElement('a');
  rating.className = 'rating-link';
  rating.href = map.href;
  rating.target = '_blank';
  rating.rel = 'noopener';
  rating.innerHTML = '<span class="rating-stars">★★★★<i>★</i></span><span>4,7 · Ver reseñas en Google</span>';
  phone.insertAdjacentElement('afterend', rating);
});

const email = document.querySelector('.contact-details > a[href^="mailto:"]');
if (email) {
  const socials = document.createElement('div');
  socials.className = 'social-links';
  socials.setAttribute('aria-label', 'Redes sociales');
  socials.innerHTML = '<a href="https://www.instagram.com/sebastianpeluqueros?utm_source=ig_web_button_share_sheet&amp;igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener" aria-label="Instagram"><img src="https://cdn.simpleicons.org/instagram/E4405F" alt="Instagram"></a><a href="https://www.facebook.com/sebastianpeluqueros/" target="_blank" rel="noopener" aria-label="Facebook"><img src="https://cdn.simpleicons.org/facebook/1877F2" alt="Facebook"></a>';
  email.insertAdjacentElement('afterend', socials);
}
