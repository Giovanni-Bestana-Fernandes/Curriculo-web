import { portfolioData } from './data.js';

import {
    renderStats,
    renderSkills,
    renderExperience,
    renderProjects,
    renderContact
} from './render.js';

import {
    sendMessage,
    showSuggestions
} from './chat.js';

import {
    initNavbar,
    initAnimations,
    startHeroTyping
} from './animations.js';

import { initGallery } from './gallery.js';

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {

    // Renders (passando o data)
    renderStats(portfolioData);
    renderSkills(portfolioData);
    renderExperience(portfolioData);
    renderProjects(portfolioData);
    renderContact(portfolioData);

    // UI / Effects
    startHeroTyping();
    showSuggestions();
    initNavbar();
    initAnimations();
    initGallery();

    // Chat events
    document.getElementById('sendBtn').onclick = sendMessage;

    document.getElementById('chatInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
});