import { portfolioData } from './data.js';

// ═══════════════════════════════════════════
//  NAVBAR
// ═══════════════════════════════════════════
export function initNavbar() {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    const mobileBtn = document.getElementById('mobileMenuBtn');
    const navLinks  = document.getElementById('navLinks');

    mobileBtn?.addEventListener('click', () => {
        navLinks?.classList.toggle('mobile-open');
    });

    // Fecha menu ao clicar em link
    navLinks?.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => navLinks.classList.remove('mobile-open'));
    });
}

// ═══════════════════════════════════════════
//  SCROLL ANIMATIONS (IntersectionObserver)
// ═══════════════════════════════════════════
export function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity  = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.08 });

    document.querySelectorAll('.card, .timeline-item, .manifesto-card').forEach((el, i) => {
        el.style.opacity    = '0';
        el.style.transform  = 'translateY(24px)';
        el.style.transition = `opacity 0.55s ease ${i * 0.05}s, transform 0.55s ease ${i * 0.05}s`;
        observer.observe(el);
    });
}

// ═══════════════════════════════════════════
//  HERO TERMINAL — efeito digitado
// ═══════════════════════════════════════════
let currentTypingTimeout = null;
let isTypingInProgress = false;

export async function startHeroTyping() {
    const el = document.getElementById('heroTerminalContent');
    if (!el) return;

    // Cancela qualquer animação em andamento
    if (currentTypingTimeout) {
        clearTimeout(currentTypingTimeout);
        currentTypingTimeout = null;
    }
    
    // Limpa o conteúdo atual
    el.innerHTML = '';
    isTypingInProgress = true;

    const sleep = ms => new Promise(r => setTimeout(r, ms));

    for (const line of portfolioData.heroLines) {
        const div = document.createElement('div');
        div.style.cssText = 'font-size:11px; line-height:2; white-space:nowrap; overflow:hidden;';

        if (line.type === 'cmd') {
            div.innerHTML = `<span style="color:var(--primary)">$</span> <span style="color:var(--text)">${line.text}</span>`;
        } else if (line.type === 'out') {
            div.innerHTML = `<span style="color:var(--text-muted)">${line.text}</span>`;
        } else if (line.type === 'key') {
            div.innerHTML = `<span style="color:#06b6d4">  "${line.text}"</span><span style="color:var(--text-muted)">: </span><span style="color:var(--primary)">${line.val}</span>`;
        } else if (line.type === 'green') {
            div.innerHTML = `<span style="color:var(--primary); font-weight:600">${line.text}</span>`;
        }

        el.appendChild(div);
        await sleep(100);
    }

    // Remove cursor antigo se existir
    const oldCursor = el.querySelector('.terminal-cursor');
    if (oldCursor) oldCursor.remove();
    
    // Cursor piscando no final
    const cursor = document.createElement('span');
    cursor.className = 'terminal-cursor';
    cursor.textContent = '█';
    cursor.style.cssText = 'display:inline-block; margin-left:4px; animation: blink 1s step-end infinite;';
    el.appendChild(cursor);
    
    isTypingInProgress = false;
}

// Função para resetar o terminal (útil quando troca de idioma)
export function resetHeroTerminal() {
    if (isTypingInProgress) return;
    startHeroTyping();
}

// Adiciona o CSS do cursor se não existir
if (!document.querySelector('#terminal-cursor-style')) {
    const style = document.createElement('style');
    style.id = 'terminal-cursor-style';
    style.textContent = `
        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
        }
        .terminal-cursor {
            animation: blink 1s step-end infinite;
        }
    `;
    document.head.appendChild(style);
}