document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Loader Disparition
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 800);

    // 2. Gestion du Menu Mobile
    const burger = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links a');

    if(burger) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            
            if(nav.classList.contains('nav-active')) {
                burger.innerHTML = '✕';
                burger.style.color = '#38bdf8';
            } else {
                burger.innerHTML = '☰';
                burger.style.color = 'white';
            }
        });
    }

    // Fermer le menu après clic
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-active');
            burger.innerHTML = '☰';
            burger.style.color = 'white';
        });
    });

    // 3. Animation au Scroll (Reveal)
    const observerOptions = { threshold: 0.1 };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // 4. Langues
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