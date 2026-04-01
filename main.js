// ── SCROLL REVEAL ──
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));

// ── FAQ TOGGLE ──
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });
});

// ── NAV SCROLL SHADOW ──
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.style.boxShadow = '0 4px 20px rgba(76,175,80,0.15)';
  } else {
    nav.style.boxShadow = '0 2px 16px rgba(76,175,80,0.08)';
  }
});

// ── WAITLIST FORM ──
const waitlistBtn = document.querySelector('.waitlist-btn');
const waitlistInput = document.querySelector('.waitlist-input');

if (waitlistBtn && waitlistInput) {
  waitlistBtn.addEventListener('click', () => {
    const email = waitlistInput.value.trim();
    if (!email || !email.includes('@')) {
      waitlistInput.style.borderColor = 'rgba(212,80,80,0.5)';
      waitlistInput.placeholder = 'Enter a valid email';
      return;
    }
    waitlistInput.style.borderColor = 'rgba(76,175,80,0.5)';
    waitlistBtn.textContent = '✅ You\'re on the list!';
    waitlistBtn.style.background = '#388E3C';
    waitlistBtn.disabled = true;
    waitlistInput.disabled = true;
    waitlistInput.value = '';
    waitlistInput.placeholder = 'See you at launch 🌱';
  });
}

// ── FARMER INTERACTION ──
const farmerImg = document.getElementById('farmer-img');
const speechBubble = document.getElementById('speech-bubble');

if (farmerImg && speechBubble) {
  farmerImg.addEventListener('click', () => {
    // Add bounce animation to the image
    farmerImg.classList.add('bounce');
    setTimeout(() => farmerImg.classList.remove('bounce'), 600);

    // Show speech bubble
    speechBubble.style.opacity = '1';
    setTimeout(() => speechBubble.style.opacity = '0', 3000);
  });
}
