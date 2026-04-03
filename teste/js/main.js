import { portfolioData } from './data.js';

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

import { initGallery } from './gallery.js';

// ═══════════════════════════════════════════
//  BOOTSTRAP
// ═══════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {

    // ── Renderiza seções via dados ──────────
    renderStats(portfolioData);
    renderSkills(portfolioData);
    renderExperience(portfolioData);
    renderProjects(portfolioData);
    renderContact(portfolioData);

    // ── UI & efeitos ───────────────────────
    startHeroTyping();
    showSuggestions();
    initNavbar();
    initAnimations();
    initGallery();

    // ── Chat events ────────────────────────
    document.getElementById('sendBtn')?.addEventListener('click', sendMessage);

    document.getElementById('chatInput')?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
});