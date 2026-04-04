import { portfolioData, setPortfolioLanguage } from './data.js';
import {
    renderStats,
    renderSkills,
    renderExperience,
    renderProjects,
    renderContact,
} from './render.js';

import {
    sendMessage,
    showSuggestions,
} from './chat.js';

import {
    initNavbar,
    initAnimations,
    startHeroTyping,
} from './animations.js';

import { initLangSwitcher, applyTranslations, currentLang } from './lang.js';

import { initGallery } from './gallery.js';

// Função para re-renderizar todas as seções baseadas nos dados atuais
function reRenderSections() {
    renderStats(portfolioData);
    renderSkills(portfolioData);
    renderExperience(portfolioData);
    renderProjects(portfolioData);
    renderContact(portfolioData);
}

// ═══════════════════════════════════════════
//  BOOTSTRAP
// ═══════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {

    // ── Renderiza seções via dados ──────────
    reRenderSections();

    // ── UI & efeitos ───────────────────────
    startHeroTyping();
    showSuggestions();
    initNavbar();
    initAnimations();
    initGallery();

    // lang - aplica traduções e configura switcher com callback
    applyTranslations();
    initLangSwitcher((lang) => {
        // Troca os dados do portfólio
        setPortfolioLanguage(lang);
        // Re-renderiza todas as seções com os novos dados
        reRenderSections();
        // Re-inicia a animação do terminal com as novas linhas
        startHeroTyping();
    });

    // ── Chat events ────────────────────────
    document.getElementById('sendBtn')?.addEventListener('click', sendMessage);

    document.getElementById('chatInput')?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
});