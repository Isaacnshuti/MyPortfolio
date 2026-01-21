/* script.js - v4 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. LOADER
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 1000);

    // 2. MENU MOBILE
    const burger = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links a');

    if(burger) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            
            // Animation icône
            if(nav.classList.contains('nav-active')) {
                burger.innerHTML = '✕'; // Croix
                burger.style.color = '#38bdf8';
            } else {
                burger.innerHTML = '☰'; // Burger
                burger.style.color = 'white';
            }
        });
    }

    // Fermer le menu au clic sur un lien
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-active');
            burger.innerHTML = '☰';
            burger.style.color = 'white';
        });
    });

    // 3. LANGUES
    const savedLang = localStorage.getItem('language') || 'fr';
    applyLanguage(savedLang);
});

function toggleLanguage() {
    const isFrench = document.body.classList.contains('lang-fr');
    const newLang = isFrench ? 'en' : 'fr';
    applyLanguage(newLang);
}

function applyLanguage(lang) {
    const btn = document.getElementById('lang-btn');
    document.body.classList.remove('lang-fr', 'lang-en');
    document.body.classList.add(`lang-${lang}`);
    if (btn) btn.innerText = lang === 'fr' ? 'EN 🇬🇧' : 'FR 🇫🇷';
    localStorage.setItem('language', lang);
}