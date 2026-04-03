import { aiResponses } from './data.js';

// ═══════════════════════════════════════════
//  CHAT STATE
// ═══════════════════════════════════════════
let chatMessages = [];
let isTyping     = false;

// ═══════════════════════════════════════════
//  MESSAGES
// ═══════════════════════════════════════════
export function addMessage(role, content) {
    chatMessages.push({ role, content });
    renderMessages();
}

function renderMessages() {
    const container = document.getElementById('messageList');
    if (!container) return;

    container.innerHTML = chatMessages.map(msg => `
        <div class="message ${msg.role}">
            ${msg.role === 'assistant' ? '<div class="avatar ai">AI</div>' : ''}
            <div class="message-bubble">${msg.content}</div>
            ${msg.role === 'user' ? '<div class="avatar user">U</div>' : ''}
        </div>
    `).join('');

    const chatEl = document.querySelector('.chat-messages');
    if (chatEl) chatEl.scrollTop = chatEl.scrollHeight;
}

// ═══════════════════════════════════════════
//  AI RESPONSE LOGIC
// ═══════════════════════════════════════════
export function getAIResponse(userMessage) {
    const msg = userMessage.toLowerCase();

    if (msg.includes('habilidade') || msg.includes('skill') || msg.includes('tecnologia') || msg.includes('stack'))
        return aiResponses.skills;

    if (msg.includes('disponív') || msg.includes('oportunidade') || msg.includes('contratar') || msg.includes('vaga'))
        return aiResponses.availability;

    if (msg.includes('experiênc') || msg.includes('experienc') || msg.includes('trabalhou') || msg.includes('empresa'))
        return aiResponses.experience;

    if (msg.includes('projeto') || msg.includes('portfólio') || msg.includes('fez') || msg.includes('construiu'))
        return aiResponses.projects;

    if (msg.includes('preço') || msg.includes('valor') || msg.includes('custo') || msg.includes('cobr'))
        return aiResponses.pricing;

    if (msg.includes('react') || msg.includes('node') || msg.includes('python'))
        return aiResponses.skills;

    return aiResponses.default;
}

// ═══════════════════════════════════════════
//  SEND MESSAGE
// ═══════════════════════════════════════════
export function sendMessage() {
    if (isTyping) return;

    const input = document.getElementById('chatInput');
    const text  = input?.value.trim();
    if (!text) return;

    addMessage('user', text);
    input.value = '';
    isTyping = true;

    const typingEl = document.getElementById('typingIndicator');
    const suggestEl = document.getElementById('suggestionsContainer');
    if (typingEl)  typingEl.style.display  = 'block';
    if (suggestEl) suggestEl.innerHTML = '';

    const delay = 700 + Math.random() * 500;
    setTimeout(() => {
        const response = getAIResponse(text);
        addMessage('assistant', response);
        isTyping = false;
        if (typingEl) typingEl.style.display = 'none';
    }, delay);
}

// ═══════════════════════════════════════════
//  SUGGESTIONS
// ═══════════════════════════════════════════
export function showSuggestions() {
    const container = document.getElementById('suggestionsContainer');
    if (!container) return;

    const suggestions = [
        { label: "Habilidades técnicas", question: "Quais são suas principais habilidades?" },
        { label: "Experiência",          question: "Me conta sobre sua experiência." },
        { label: "Disponibilidade",      question: "Está disponível para novas oportunidades?" },
        { label: "Projetos",             question: "Me fale sobre seus projetos." },
        { label: "Valores",              question: "Quais são seus preços?" },
    ];

    container.innerHTML = `
        <div style="font-family:var(--font-mono); font-size:10px; color:var(--text-muted); margin-bottom:8px;">// sugestões rápidas:</div>
        ${suggestions.map(s => `
            <button class="suggestion-chip" data-question="${s.question}">${s.label}</button>
        `).join('')}
    `;

    container.querySelectorAll('.suggestion-chip').forEach(btn => {
        btn.addEventListener('click', () => {
            const input = document.getElementById('chatInput');
            if (input) input.value = btn.dataset.question;
            sendMessage();
        });
    });
}

// ═══════════════════════════════════════════
//  MODAL DE PROJETO (legado, mantido por compatibilidade)
// ═══════════════════════════════════════════
export function showProjectModal(project) {
    const modal = document.getElementById('projectModal');
    if (!modal) return;

    modal.innerHTML = `
        <div class="modal-content" onclick="event.stopPropagation()">
            <div class="terminal-header">
                <div class="terminal-dot red"></div>
                <div class="terminal-dot yellow"></div>
                <div class="terminal-dot green"></div>
                <span class="terminal-title">${project.title} — preview</span>
                <button id="closeModal" style="margin-left:auto; background:none; border:none; color:var(--text-muted); cursor:pointer; font-size:16px;">✕</button>
            </div>
            <img src="${project.cover || project.image}" alt="${project.title}" style="width:100%; height:auto;">
            <div style="padding:24px;">
                <h3 style="font-family:var(--font-display); font-size:18px; font-weight:700; margin-bottom:10px;">${project.title}</h3>
                <p style="font-family:var(--font-mono); font-size:12px; color:var(--text-soft); line-height:1.8; margin-bottom:16px;">${project.description}</p>
                <div style="display:flex; flex-wrap:wrap; gap:8px;">
                    ${project.tags.map(tag => `<span class="skill-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `;

    modal.style.display = 'flex';
    document.getElementById('closeModal').onclick = () => modal.style.display = 'none';
    modal.onclick = () => modal.style.display = 'none';
}