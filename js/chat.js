import { aiResponses, aiResponsesEn, getAIResponse } from './data.js';
import { t, currentLang } from './lang.js';

// ═══════════════════════════════════════════
//  CHAT STATE
// ═══════════════════════════════════════════
let chatMessages = [];
let isTyping = false;

async function getAIResponseAPI(message) {
    try {
        const res = await fetch("http://localhost:3000/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message })
        });

        if (!res.ok) throw new Error("Erro na API");

        const data = await res.json();
        return data.reply;

    } catch (err) {
        console.error("Erro API:", err);
        return null; // importante pro fallback
    }
}

// ═══════════════════════════════════════════
//  MESSAGES
// ═══════════════════════════════════════════
export function addMessage(role, content) {
    chatMessages.push({ role, content });
    renderMessages();
}

// Limpa o histórico do chat (usado quando troca de idioma)
export function clearChatHistory() {
    chatMessages = [];
    renderMessages();
}

function renderMessages() {
    const container = document.getElementById('messageList');
    if (!container) return;

    container.innerHTML = chatMessages.map(msg => `
        <div class="message ${msg.role}">
            ${msg.role === 'assistant' ? '<div class="avatar ai">AI</div>' : ''}
            <div class="message-bubble">${escapeHtml(msg.content)}</div>
            ${msg.role === 'user' ? '<div class="avatar user">U</div>' : ''}
        </div>
    `).join('');

    const chatEl = document.querySelector('.chat-messages');
    if (chatEl) chatEl.scrollTop = chatEl.scrollHeight;
}

// Helper para escapar HTML e evitar XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ═══════════════════════════════════════════
//  AI RESPONSE LOGIC (usando o idioma atual)
// ═══════════════════════════════════════════
export function getAIResponseLocal(userMessage) {
    const msg = userMessage.toLowerCase();

    // Usa a função getAIResponse do data.js que já lida com o idioma
    if (msg.includes('habilidade') || msg.includes('skill') || msg.includes('tecnologia') || msg.includes('stack') ||
        msg.includes('ability') || msg.includes('tech')) {
        return getAIResponse(currentLang, 'skills');
    }

    if (msg.includes('disponív') || msg.includes('oportunidade') || msg.includes('contratar') || msg.includes('vaga') ||
        msg.includes('available') || msg.includes('opportunity') || msg.includes('hire')) {
        return getAIResponse(currentLang, 'availability');
    }

    if (msg.includes('experiênc') || msg.includes('experienc') || msg.includes('trabalhou') || msg.includes('empresa') ||
        msg.includes('experience') || msg.includes('worked') || msg.includes('company')) {
        return getAIResponse(currentLang, 'experience');
    }

    if (msg.includes('projeto') || msg.includes('portfólio') || msg.includes('fez') || msg.includes('construiu') ||
        msg.includes('project') || msg.includes('portfolio') || msg.includes('built') || msg.includes('made')) {
        return getAIResponse(currentLang, 'projects');
    }

    if (msg.includes('preço') || msg.includes('valor') || msg.includes('custo') || msg.includes('cobr') ||
        msg.includes('price') || msg.includes('cost') || msg.includes('rate') || msg.includes('charge')) {
        return getAIResponse(currentLang, 'pricing');
    }

    if (msg.includes('react') || msg.includes('node') || msg.includes('python') || msg.includes('javascript')) {
        return getAIResponse(currentLang, 'skills');
    }

    return getAIResponse(currentLang, 'default');
}

// ═══════════════════════════════════════════
//  SEND MESSAGE
// ═══════════════════════════════════════════
export function sendMessage() {
    if (isTyping) return;

    const input = document.getElementById('chatInput');
    const text = input?.value.trim();
    if (!text) return;

    addMessage('user', text);
    input.value = '';
    isTyping = true;

    const typingEl = document.getElementById('typingIndicator');
    const suggestEl = document.getElementById('suggestionsContainer');
    if (typingEl) typingEl.style.display = 'block';
    if (suggestEl) suggestEl.innerHTML = '';

    const delay = 700 + Math.random() * 500;
    setTimeout(async () => {

        // tenta IA real
        let response = await getAIResponseAPI(text);

        // fallback inteligente
        if (!response) {
            response = getAIResponseLocal(text);
        }

        addMessage('assistant', response);

        isTyping = false;
        if (typingEl) typingEl.style.display = 'none';

        if (suggestEl && chatMessages.length > 0) {
            showSuggestionsInChat();
        }

    }, delay);
}

// ═══════════════════════════════════════════
//  SUGGESTIONS
// ═══════════════════════════════════════════

// Mostra sugestões dentro do chat (após a mensagem de boas-vindas)
function showSuggestionsInChat() {
    const container = document.getElementById('suggestionsContainer');
    if (!container) return;
    const lang = t();

    // Só mostra sugestões se não houver mensagens ou se for o início
    if (chatMessages.length === 0 || (chatMessages.length === 1 && chatMessages[0].role === 'assistant')) {
        container.innerHTML = `
            <div style="font-family:var(--font-mono);font-size:10px;color:var(--text-muted);margin-bottom:8px;">${lang.chat.suggestionsLabel}</div>
            <div style="display:flex; flex-wrap:wrap; gap:8px;">
                ${lang.chat.suggestions.map(s =>
            `<button class="suggestion-chip" data-question="${escapeHtml(s.question)}">${escapeHtml(s.label)}</button>`
        ).join('')}
            </div>
        `;
        container.querySelectorAll('.suggestion-chip').forEach(btn => {
            btn.addEventListener('click', () => {
                const input = document.getElementById('chatInput');
                if (input) input.value = btn.dataset.question;
                sendMessage();
            });
        });
    } else {
        container.innerHTML = '';
    }
}

export function showSuggestions() {
    showSuggestionsInChat();
}

export function reloadSuggestions() {
    // Limpa histórico mas mantém a mensagem de boas-vindas
    chatMessages = [];
    const list = document.getElementById('messageList');
    if (list) list.innerHTML = '';

    // Adiciona mensagem de boas-vindas no idioma atual
    const lang = t();
    addMessage('assistant', lang.chat.welcome);

    // Mostra sugestões
    showSuggestionsInChat();
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
                <span class="terminal-title">${escapeHtml(project.title)} — preview</span>
                <button id="closeModal" style="margin-left:auto; background:none; border:none; color:var(--text-muted); cursor:pointer; font-size:16px;">✕</button>
            </div>
            <img src="${project.cover || project.image}" alt="${escapeHtml(project.title)}" style="width:100%; height:auto;">
            <div style="padding:24px;">
                <h3 style="font-family:var(--font-display); font-size:18px; font-weight:700; margin-bottom:10px;">${escapeHtml(project.title)}</h3>
                <p style="font-family:var(--font-mono); font-size:12px; color:var(--text-soft); line-height:1.8; margin-bottom:16px;">${escapeHtml(project.description)}</p>
                <div style="display:flex; flex-wrap:wrap; gap:8px;">
                    ${project.tags.map(tag => `<span class="skill-tag">${escapeHtml(tag)}</span>`).join('')}
                </div>
            </div>
        </div>
    `;

    modal.style.display = 'flex';
    document.getElementById('closeModal').onclick = () => modal.style.display = 'none';
    modal.onclick = () => modal.style.display = 'none';
}