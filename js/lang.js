import { translations } from './data.js';
import { reloadSuggestions } from './chat.js';

export let currentLang = 'pt';

export function t() {
    return translations[currentLang];
}

// ── Aplica todas as traduções na página ──
export function applyTranslations() {
    const lang = translations[currentLang];

    // NAV links (mantém o número 01. etc.)
    const navLinks = document.querySelectorAll('.nav-links a[data-nav]');
    navLinks.forEach(a => {
        const key = a.dataset.nav;
        const span = a.querySelector('span');
        const num = span ? span.outerHTML : '';
        a.innerHTML = num + lang.nav[key];
    });

    // HERO
    setHTML('heroAvailable', lang.hero.available);
    setText('heroTitle1', lang.hero.title1);
    setText('heroTitle2', lang.hero.title2);
    setText('heroTitleAccent', lang.hero.titleAccent);
    setHTML('heroSubtitle', lang.hero.subtitle);
    setText('heroCta1', lang.hero.cta1);
    setText('heroCta2', lang.hero.cta2);
    setText('heroStat1Label', lang.hero.stat1Label);
    setText('heroStat2Label', lang.hero.stat2Label);
    setText('heroStat3Label', lang.hero.stat3Label);
    setText('heroBadgeStack', lang.hero.badgeStack);
    setText('heroBadgeYears', lang.hero.badgeYears);

    // SECTION TITLES
    setText('sectionAbout', lang.sections.about);
    setText('sectionManifesto', lang.sections.manifesto);
    setText('sectionSkills', lang.sections.skills);
    setText('sectionExperience', lang.sections.experience);
    setText('sectionProjects', lang.sections.projects);
    setText('sectionChat', lang.sections.chat);
    setText('sectionContact', lang.sections.contact);

    // ABOUT
    setText('aboutHeadline1', lang.about.headline1);
    setText('aboutHeadline2', lang.about.headline2);
    setText('aboutHeadlineAccent', lang.about.headlineAccent);
    setHTML('aboutBody1', lang.about.body1);
    setHTML('aboutBody2', lang.about.body2);
    setText('codeRole', lang.about.codeRole);
    setText('codeBase', lang.about.codeBase);
    setText('codeOpen', lang.about.codeOpen);
    setText('codePower', lang.about.codePower);

    // MANIFESTO
    setText('manifesto1Title', lang.manifesto.card1Title);
    setText('manifesto1Body', lang.manifesto.card1Body);
    setText('manifesto2Title', lang.manifesto.card2Title);
    setText('manifesto2Body', lang.manifesto.card2Body);
    setText('manifesto3Title', lang.manifesto.card3Title);
    setText('manifesto3Body', lang.manifesto.card3Body);
    setText('manifesto4Title', lang.manifesto.card4Title);
    setText('manifesto4Body', lang.manifesto.card4Body);
    setHTML('manifestoQuote', lang.manifesto.quote);

    // CHAT
    setText('chatIntro', lang.chat.intro);
    setText('chatInitCmd', lang.chat.initCmd);
    setText('chatWelcome', lang.chat.welcome);
    setAttr('chatInput', 'placeholder', lang.chat.placeholder);

    // CONTACT
    setText('contactHeadline1', lang.contact.headline1);
    setText('contactHeadline2', lang.contact.headline2);
    setText('contactBody', lang.contact.body);
    setText('contactCmd', lang.contact.cmd);

    // FOOTER
    const footerEl = document.getElementById('footerText');
    if (footerEl) {
        const raw = lang.footer;
        footerEl.innerHTML =
            `<span class="text-green">{">"}</span> ` +
            raw
                .replace('♥', '<span class="footer-heart">♥</span>')
                .replace('código', '<span class="text-green">código</span>')
                .replace('code', '<span class="text-green">code</span>');
    }

    // html lang attr
    document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : 'en';

    reloadSuggestions();
}

// ── Inicializa o switcher de bandeiras ────
export function initLangSwitcher(onSwitch) {
    const btnPt = document.getElementById('langPt');
    const btnEn = document.getElementById('langEn');
    if (!btnPt || !btnEn) return;

    updateLangUI();

    btnPt.addEventListener('click', () => {
        if (currentLang === 'pt') return;
        currentLang = 'pt';
        updateLangUI();
        applyTranslations();
        if (onSwitch) onSwitch('pt');
    });

    btnEn.addEventListener('click', () => {
        console.log('clicou EN'); // 👈 adiciona isso
        if (currentLang === 'en') return;
        currentLang = 'en';
        updateLangUI();
        applyTranslations();
        if (onSwitch) onSwitch('en');
    });
}

function updateLangUI() {
    const btnPt = document.getElementById('langPt');
    const btnEn = document.getElementById('langEn');
    if (!btnPt || !btnEn) return;
    btnPt.classList.toggle('lang-active', currentLang === 'pt');
    btnEn.classList.toggle('lang-active', currentLang === 'en');
}

// ── Helpers ───────────────────────────────
function setText(id, value) {
    const el = document.getElementById(id);
    if (el && value !== undefined) el.textContent = value;
}
function setHTML(id, value) {
    const el = document.getElementById(id);
    if (el && value !== undefined) el.innerHTML = value;
}
function setAttr(id, attr, value) {
    const el = document.getElementById(id);
    if (el && value !== undefined) el.setAttribute(attr, value);
}