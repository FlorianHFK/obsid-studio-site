// OBSID-Studio Main JavaScript
const views = [...document.querySelectorAll('.view')];
const dots = document.getElementById('dots');
const count = document.getElementById('count');
const navButtons = [...document.querySelectorAll('.tabs button')];

let current = 0;
let lock = 0;

// Initialize dots
views.forEach((_, i) => {
  const d = document.createElement('span');
  d.className = 'dot' + (i === 0 ? ' active' : '');
  d.onclick = () => go(i);
  dots.appendChild(d);
});

// Navigation function
function go(i) {
  current = (i + views.length) % views.length;
  
  // Update views
  views.forEach((v, n) => v.classList.toggle('active', n === current));
  
  // Update dots
  document.querySelectorAll('.dot').forEach((d, n) => {
    d.classList.toggle('active', n === current);
  });
  
  // Update nav buttons
  navButtons.forEach((b, n) => {
    b.classList.toggle('active', n === current);
  });
  
  // Update counter
  count.textContent = String(current + 1).padStart(2, '0') + '/05';
  
  // Scroll to top on mobile
  if (window.innerWidth < 980) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// Navigation listeners
document.querySelectorAll('[data-go]').forEach(b => {
  b.addEventListener('click', e => {
    e.preventDefault();
    go(+b.dataset.go);
  });
});

// Previous/Next buttons
document.getElementById('prev').onclick = () => go(current - 1);
document.getElementById('next').onclick = () => go(current + 1);

// Wheel navigation (desktop only)
addEventListener('wheel', e => {
  if (innerWidth < 980) return;
  const n = Date.now();
  if (n - lock < 750) return;
  if (Math.abs(e.deltaY) > 35) {
    lock = n;
    go(current + (e.deltaY > 0 ? 1 : -1));
  }
}, { passive: true });

// Keyboard navigation
addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') go(current + 1);
  if (e.key === 'ArrowLeft') go(current - 1);
});

// Contact form (legacy)
const contactForm = document.getElementById('contact');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const n = document.getElementById('name').value;
    const m = document.getElementById('email').value;
    const t = document.getElementById('msg').value;
    location.href = 'mailto:hachefk23@gmail.com?subject=' + encodeURIComponent('OBSID-Studio preview') +
      '&body=' + encodeURIComponent('Nom: ' + n + '\nEmail: ' + m + '\n\nProjet:\n' + t);
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      go(Array.from(views).findIndex(v => v.querySelector(id)));
    }
  });
});

// Initialize
updateBetaTimer();
