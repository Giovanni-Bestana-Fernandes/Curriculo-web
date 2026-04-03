import { openProjectGallery } from './gallery.js';

// ═══════════════════════════════════════════
//  RENDER FUNCTIONS
// ═══════════════════════════════════════════

export function renderStats(portfolioData) {
    const container = document.getElementById('statsContainer');
    if (!container) return;

    container.innerHTML = portfolioData.stats.map(stat => `
        <div style="display:flex; justify-content:space-between; align-items:center; padding:12px 0; border-bottom:1px solid var(--border);">
            <span style="font-family:var(--font-mono); font-size:12px; color:var(--text-muted);">${stat.label}</span>
            <span style="font-family:var(--font-mono); font-size:18px; font-weight:700; color:var(--primary);">${stat.value}</span>
        </div>
    `).join('');
}

export function renderSkills(portfolioData) {
    const container = document.getElementById('skillsContainer');
    if (!container) return;

    container.innerHTML = portfolioData.skills.map(({ category, items }) => `
        <div class="card">
            <h3 style="font-family:var(--font-mono); color:var(--primary); font-size:11px; margin-bottom:16px; letter-spacing:1px; text-transform:uppercase;">${category}</h3>
            <div style="display:flex; flex-wrap:wrap; gap:8px;">
                ${items.map(i => `<span class="skill-tag">${i}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

export function renderExperience(portfolioData) {
    const container = document.getElementById('timelineContainer');
    if (!container) return;

    container.innerHTML = portfolioData.experiences.map(({ role, company, period, description, techs, highlight }) => `
        <div class="timeline-item">
            <div class="timeline-dot" ${highlight ? 'style="box-shadow:0 0 12px rgba(16,185,129,0.6);"' : ''}></div>
            <div class="card" style="${highlight ? 'border-color:rgba(16,185,129,0.3);' : ''}">
                <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:8px; margin-bottom:10px;">
                    <div>
                        <h3 style="font-family:var(--font-display); font-size:16px; font-weight:700; color:var(--text);">${role}</h3>
                        <span style="font-family:var(--font-mono); font-size:12px; color:var(--primary);">@ ${company}</span>
                    </div>
                    <span style="font-family:var(--font-mono); font-size:11px; color:var(--text-muted); background:rgba(255,255,255,0.04); border:1px solid var(--border); padding:4px 10px; border-radius:6px; white-space:nowrap;">${period}</span>
                </div>
                <p style="font-family:var(--font-mono); font-size:12px; color:var(--text-soft); line-height:1.85; margin-bottom:14px;">${description}</p>
                <div style="display:flex; flex-wrap:wrap; gap:8px;">
                    ${techs.map(t => `<span class="skill-tag">${t}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

export function renderProjects(portfolioData) {
    const container = document.getElementById('projectsContainer');
    if (!container) return;

    container.innerHTML = portfolioData.projects.map(project => `
        <div class="card project-card" data-project-id="${project.id}" style="padding:0; overflow:hidden; cursor:pointer;">
            <div style="position:relative;">
                <img src="${project.cover}" alt="${project.title}" style="width:100%; height:200px; object-fit:cover; display:block;">
                <div style="position:absolute; inset:0; background:linear-gradient(to top, rgba(9,9,14,0.8) 0%, transparent 60%);"></div>
                ${project.impact ? `
                <div style="position:absolute; top:12px; right:12px; font-family:var(--font-mono); font-size:10px; background:rgba(16,185,129,0.15); border:1px solid rgba(16,185,129,0.3); color:var(--primary); padding:5px 10px; border-radius:6px; backdrop-filter:blur(4px);">
                    ↑ ${project.impact}
                </div>` : ''}
            </div>
            <div style="padding:20px;">
                <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
                    <span style="font-family:var(--font-mono); font-size:10px; color:var(--text-muted);">//</span>
                    <h3 style="font-family:var(--font-display); font-size:17px; font-weight:700; color:var(--text);">${project.title}</h3>
                </div>
                <p style="font-family:var(--font-mono); font-size:12px; color:var(--text-soft); line-height:1.85; margin-bottom:16px;">${project.description}</p>
                <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
                    <div style="display:flex; flex-wrap:wrap; gap:6px;">
                        ${project.tags.map(t => `<span class="skill-tag">${t}</span>`).join('')}
                    </div>
                    <button class="open-gallery-btn" data-id="${project.id}"
                        style="font-family:var(--font-mono); font-size:11px; background:transparent; border:1px solid var(--border-hover); color:var(--text-muted); padding:6px 12px; border-radius:6px; cursor:pointer; transition:all 0.2s; white-space:nowrap;">
                        ver fotos →
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    // Hover nos botões de galeria
    document.querySelectorAll('.open-gallery-btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.color = 'var(--primary)';
            btn.style.borderColor = 'rgba(16,185,129,0.4)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.color = 'var(--text-muted)';
            btn.style.borderColor = 'var(--border-hover)';
        });
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            openProjectGallery(btn.dataset.id);
        });
    });

    // Clique no card inteiro também abre a galeria
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            openProjectGallery(card.dataset.projectId);
        });
    });
}

export function renderContact(portfolioData) {
    const container = document.getElementById('contactLinks');
    if (!container) return;

    container.innerHTML = portfolioData.contact.map(({ name, username, url, icon }) => `
        <a href="${url}" target="_blank" rel="noopener noreferrer" class="contact-link">
            <div class="contact-link-icon">${icon}</div>
            <div>
                <div class="contact-link-name">${name}</div>
                <div class="contact-link-username">${username}</div>
            </div>
            <span class="contact-link-arrow">→</span>
        </a>
    `).join('');
}