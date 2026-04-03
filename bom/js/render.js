import { showProjectModal } from './chat.js';
import { openProjectGallery } from './gallery.js';

// Render functions

export function renderStats(portfolioData) {
    const container = document.getElementById('statsContainer');
    container.innerHTML = portfolioData.stats.map(stat => `
        <div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid rgba(31, 31, 42, 0.5);">
            <span style="font-size: 13px; color: var(--text-muted);">${stat.label}</span>
            <span style="font-family: monospace; color: var(--primary); font-weight: bold;">${stat.value}</span>
        </div>
    `).join('');
}

export function renderSkills(portfolioData) {
    const container = document.getElementById('skillsContainer');
    container.innerHTML = portfolioData.skills.map(skillGroup => `
        <div class="card">
            <h3 style="font-family: monospace; color: var(--secondary); font-size: 13px; margin-bottom: 20px;">
                // ${skillGroup.category}
            </h3>
            <div style="display: flex; flex-direction: column; gap: 12px;">
                ${skillGroup.items.map(item => `
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="color: var(--primary);">▹</span>
                        <span>${item}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

export function renderExperience(portfolioData) {
    const container = document.getElementById('timelineContainer');
    container.innerHTML = portfolioData.experiences.map(exp => `
        <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="card" style="margin-bottom: 16px;">
                <div style="display: flex; justify-content: space-between; flex-wrap: wrap; margin-bottom: 8px;">
                    <h3 style="font-family: monospace;">${exp.role}</h3>
                    <span style="font-family: monospace; font-size: 11px; color: var(--text-muted);">${exp.period}</span>
                </div>
                <p style="color: var(--secondary); font-size: 13px; margin-bottom: 12px;">@ ${exp.company}</p>
                <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 16px;">${exp.description}</p>
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                    ${exp.techs.map(tech => `<span class="skill-tag">${tech}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

export function renderProjects(portfolioData) {
    const container = document.getElementById('projectsContainer');

    container.innerHTML = portfolioData.projects.map(project => `
        <div class="card project-card" data-project-id="${project.id}" style="cursor: pointer;">

            <div style="
                height: 160px;
                background: #1a1a2e;
                border-radius: 8px;
                margin-bottom: 16px;
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;
            ">
                <img src="${project.cover}" alt="${project.title}"
                    style="width: 100%; height: 100%; object-fit: cover; opacity: 0.8;">
            </div>

            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
                <span style="color: var(--primary);">📁</span>
                <span style="font-family: monospace; font-weight: bold;">
                    ${project.title}
                </span>
            </div>

            <p style="font-size: 12px; color: var(--text-muted); margin-bottom: 16px;">
                ${project.description}
            </p>

            <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                ${project.tags.map(tag => `
                    <span style="
                        font-size: 10px;
                        padding: 2px 8px;
                        background: rgba(16, 185, 129, 0.1);
                        border-radius: 4px;
                        color: var(--primary);
                    ">
                        ${tag}
                    </span>
                `).join('')}
            </div>

        </div>
    `).join('');

    // Evento de clique → abre galeria
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.dataset.projectId;
            openProjectGallery(projectId);
        });
    });
}

export function renderContact(portfolioData) {
    const container = document.getElementById('contactLinks');
    container.innerHTML = portfolioData.contact.map(contact => `
        <a href="${contact.url}" target="_blank"
           style="display: flex; align-items: center; justify-content: space-between; padding: 16px; background: rgba(30, 30, 40, 0.5); border: 1px solid var(--border); border-radius: 8px; margin-bottom: 12px; text-decoration: none;">
            
            <div style="display: flex; align-items: center; gap: 12px;">
                <span style="font-size: 20px;">${contact.icon}</span>
                <span style="font-family: monospace; color: var(--text);">${contact.name}</span>
            </div>

            <div style="display: flex; align-items: center; gap: 8px;">
                <span style="font-size: 12px; color: var(--text-muted);">${contact.username}</span>
                <span style="color: var(--primary);">↗</span>
            </div>
        </a>
    `).join('');
}


// // Chat functionality
// let chatMessages = [];
// let isTyping = false;

// function addMessage(role, content) {
//     chatMessages.push({ role, content });
//     renderMessages();
// }



// function renderMessages() {
//     const container = document.getElementById('messageList');
//     container.innerHTML = chatMessages.map(msg => `
//                 <div class="message ${msg.role}">
//                     ${msg.role === 'assistant' ? '<div class="avatar ai">🤖</div>' : ''}
//                     <div class="message-bubble">${msg.content}</div>
//                     ${msg.role === 'user' ? '<div class="avatar user">👤</div>' : ''}
//                 </div>
//             `).join('');
//     document.querySelector('.chat-messages').scrollTop = document.querySelector('.chat-messages').scrollHeight;
// }



//         function getAIResponse(userMessage) {
//             const msg = userMessage.toLowerCase();
//             if (msg.includes('habilidade') || msg.includes('skill') || msg.includes('tecnologia')) return aiResponses.skills;
//             if (msg.includes('disponível') || msg.includes('oportunidade') || msg.includes('contratar')) return aiResponses.availability;
//             if (msg.includes('experiência') || msg.includes('experiencia') || msg.includes('trabalhou')) return aiResponses.experience;
//             return aiResponses.default;
//         }

        

//         function showProjectModal(project) {
//             const modal = document.getElementById('projectModal');
//             modal.innerHTML = `
//                 <div class="modal-content" onclick="event.stopPropagation()">
//                     <div class="terminal-header">
//                         <div class="terminal-dot red"></div>
//                         <div class="terminal-dot yellow"></div>
//                         <div class="terminal-dot green"></div>
//                         <span style="font-family: monospace; font-size: 11px; color: var(--text-muted);">${project.title} — preview</span>
//                         <button id="closeModal" style="margin-left: auto; background: none; border: none; color: var(--text-muted); cursor: pointer;">✕</button>
//                     </div>
//                     <img src="${project.image}" alt="${project.title}" style="width: 100%; height: auto;">
//                     <div style="padding: 24px;">
//                         <h3 style="font-family: monospace; margin-bottom: 12px;">${project.title}</h3>
//                         <p style="color: var(--text-muted); margin-bottom: 16px;">${project.description}</p>
//                         <div style="display: flex; flex-wrap: wrap; gap: 8px;">
//                             ${project.tags.map(tag => `<span class="skill-tag">${tag}</span>`).join('')}
//                         </div>
//                     </div>
//                 </div>
//             `;
//             modal.style.display = 'flex';
//             document.getElementById('closeModal').onclick = () => modal.style.display = 'none';
//             modal.onclick = () => modal.style.display = 'none';
//         }


//         async function sendMessage() {
//             if (isTyping) return;
//             const input = document.getElementById('chatInput');
//             const text = input.value.trim();
//             if (!text) return;

//             addMessage('user', text);
//             input.value = '';
//             isTyping = true;
//             document.getElementById('typingIndicator').style.display = 'block';
//             document.getElementById('suggestionsContainer').innerHTML = '';

//             // Simulate AI delay
//             setTimeout(() => {
//                 const response = getAIResponse(text);
//                 addMessage('assistant', response);
//                 isTyping = false;
//                 document.getElementById('typingIndicator').style.display = 'none';
//             }, 1000);
//         }

//         function showSuggestions() {
//             const suggestions = [
//                 "Quais são suas principais habilidades?",
//                 "Está disponível para novas oportunidades?",
//                 "Qual sua experiência com React?",
//                 "Me fale sobre seus projetos recentes"
//             ];
//             const container = document.getElementById('suggestionsContainer');
//             container.innerHTML = suggestions.map(s => `
//                 <button class="suggestion-btn" style="display: block; width: 100%; text-align: left; background: rgba(30, 30, 40, 0.5); border: 1px solid var(--border); border-radius: 6px; padding: 8px 12px; margin-bottom: 8px; color: var(--text-muted); font-family: monospace; font-size: 12px; cursor: pointer; transition: all 0.2s;">
//                     <span style="color: var(--primary);">&gt;</span> ${s}
//                 </button>
//             `).join('');
//             document.querySelectorAll('.suggestion-btn').forEach((btn, i) => {
//                 btn.onclick = () => {
//                     document.getElementById('chatInput').value = suggestions[i];
//                     sendMessage();
//                 };
//             });
//         }
