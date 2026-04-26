// ===== Main JS — Menu, scroll, reveal, form =====

document.addEventListener('DOMContentLoaded', () => {
  // --- Header scroll shadow ---
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 10);
    });
  }

  // --- Mobile menu toggle ---
  const menuBtn = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  }

  // --- Language dropdown ---
  const langBtn = document.getElementById('lang-btn');
  const langDropdown = document.getElementById('lang-dropdown');
  if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('open');
    });
    document.addEventListener('click', () => {
      langDropdown.classList.remove('open');
    });
  }

  // --- Active nav link ---
  const path = window.location.pathname.replace(/\.html$/, '').replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav-menu a').forEach(link => {
    const href = link.getAttribute('href').replace(/\.html$/, '').replace(/\/$/, '') || '/';
    if (href === path || (href === '/index' && path === '/') || (href === '/' && path === '')) {
      link.classList.add('active');
    }
  });

  // --- Scroll Reveal (IntersectionObserver) ---
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length) {
    revealElements.forEach((el, i) => {
      el.style.setProperty('--reveal-delay', `${i * 70}ms`);
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });

    revealElements.forEach(el => observer.observe(el));
  }

// --- Contact form ---
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      alert(translations['contact.form.success'] || 'Thank you for your message! We will get back to you soon.');
        });
  }
});

