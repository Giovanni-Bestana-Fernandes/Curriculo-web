import { aiResponses } from './data.js';

// Chat functionality

let chatMessages = [];
let isTyping = false;

export function addMessage(role, content) {
    chatMessages.push({ role, content });
    renderMessages();
}

export function renderMessages() {
    const container = document.getElementById('messageList');
    container.innerHTML = chatMessages.map(msg => `
        <div class="message ${msg.role}">
            ${msg.role === 'assistant' ? '<div class="avatar ai">🤖</div>' : ''}
            <div class="message-bubble">${msg.content}</div>
            ${msg.role === 'user' ? '<div class="avatar user">👤</div>' : ''}
        </div>
    `).join('');

    document.querySelector('.chat-messages').scrollTop =
        document.querySelector('.chat-messages').scrollHeight;
}

export function getAIResponse(userMessage) {
    const msg = userMessage.toLowerCase();

    if (msg.includes('habilidade') || msg.includes('skill') || msg.includes('tecnologia'))
        return aiResponses.skills;

    if (msg.includes('disponível') || msg.includes('oportunidade') || msg.includes('contratar'))
        return aiResponses.availability;

    if (msg.includes('experiência') || msg.includes('experiencia') || msg.includes('trabalhou'))
        return aiResponses.experience;

    return aiResponses.default;
}

export function showProjectModal(project) {
    const modal = document.getElementById('projectModal');

    modal.innerHTML = `
        <div class="modal-content" onclick="event.stopPropagation()">
            <div class="terminal-header">
                <div class="terminal-dot red"></div>
                <div class="terminal-dot yellow"></div>
                <div class="terminal-dot green"></div>
                <span style="font-family: monospace; font-size: 11px; color: var(--text-muted);">
                    ${project.title} — preview
                </span>
                <button id="closeModal">✕</button>
            </div>

            <img src="${project.image}" alt="${project.title}">

            <div style="padding: 24px;">
                <h3 style="font-family: monospace;">${project.title}</h3>
                <p style="color: var(--text-muted);">${project.description}</p>

                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                    ${project.tags.map(tag => `<span class="skill-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `;

    modal.style.display = 'flex';

    document.getElementById('closeModal').onclick = () => modal.style.display = 'none';
    modal.onclick = () => modal.style.display = 'none';
}

export function sendMessage() {
    if (isTyping) return;

    const input = document.getElementById('chatInput');
    const text = input.value.trim();
    if (!text) return;

    addMessage('user', text);
    input.value = '';

    isTyping = true;
    document.getElementById('typingIndicator').style.display = 'block';
    document.getElementById('suggestionsContainer').innerHTML = '';

    setTimeout(() => {
        const response = getAIResponse(text);
        addMessage('assistant', response);

        isTyping = false;
        document.getElementById('typingIndicator').style.display = 'none';
    }, 1000);
}

export function showSuggestions() {
    const suggestions = [
        "Quais são suas principais habilidades?",
        "Está disponível para novas oportunidades?",
        "Qual sua experiência com React?",
        "Me fale sobre seus projetos recentes"
    ];

    const container = document.getElementById('suggestionsContainer');

    container.innerHTML = suggestions.map(s => `
        <button class="suggestion-btn">
            <span>&gt;</span> ${s}
        </button>
    `).join('');

    document.querySelectorAll('.suggestion-btn').forEach((btn, i) => {
        btn.onclick = () => {
            document.getElementById('chatInput').value = suggestions[i];
            sendMessage();
        };
    });
}