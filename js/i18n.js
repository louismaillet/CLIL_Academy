// ===== i18n — Lightweight translation system =====
let translations = {};
let currentLang = localStorage.getItem('lang') || 'en';

async function loadLanguage(lang) {
  try {
    const res = await fetch(`/locales/${lang}.json`);
    translations = await res.json();
    currentLang = lang;
    localStorage.setItem('lang', lang);
    applyTranslations();
    updateLangButton();
  } catch (e) {
    console.error('Failed to load language:', lang, e);
  }
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[key]) {
      el.textContent = translations[key];
    }
  });
}

function updateLangButton() {
  const btn = document.getElementById('lang-btn-text');
  if (btn) btn.textContent = currentLang.toUpperCase();
}

function changeLanguage(lang) {
  loadLanguage(lang);
  const dropdown = document.getElementById('lang-dropdown');
  if (dropdown) dropdown.classList.remove('open');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  loadLanguage(currentLang);
});
