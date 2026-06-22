
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const obs = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));

document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth' });
  });
});

const form = document.querySelector('#waitlist-form');
const statusBox = document.querySelector('#form-status');

function isNetlifyHost() {
  return /netlify\.app$/.test(location.hostname) || location.hostname.includes('netlify');
}

if (form) {
  form.addEventListener('submit', async (e) => {
    if (isNetlifyHost()) return; // let Netlify Forms capture the POST
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    data.createdAt = new Date().toISOString();
    const previous = JSON.parse(localStorage.getItem('obsid-waitlist-local') || '[]');
    previous.push(data);
    localStorage.setItem('obsid-waitlist-local', JSON.stringify(previous));
    const body = encodeURIComponent(
      `Nom: ${data.name || ''}\nEmail: ${data.email || ''}\nProfil: ${data.profile || ''}\nObjectif: ${data.goal || ''}\nFounder Preview: ${data.founderInterest ? 'oui' : 'non'}`
    );
    const mailto = `mailto:contact@obsid-studio.com?subject=Accès privé OBSID-Studio&body=${body}`;
    statusBox.textContent = "Demande enregistrée localement. Sur NAS/GitHub Pages, connecte un email/formulaire; un mail prérempli peut s’ouvrir.";
    statusBox.style.color = "#bdf7ff";
    setTimeout(() => { window.location.href = mailto; }, 350);
  });
}
