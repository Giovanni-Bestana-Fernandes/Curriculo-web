// Navbar scroll effect and mobile menu
function initNavbar() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    });

    const mobileBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    mobileBtn.onclick = () => navLinks.classList.toggle('mobile-open');
}

// Intersection Observer for animations
function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card, .timeline-item, .project-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Hero typing effect
function startHeroTyping() {
    const heroContent = document.getElementById('heroContent');
    const html = `
                <h1 class="text-gradient-green" style="font-size: 48px; margin-bottom: 16px;">&lt;João Silva /&gt;</h1>
                <p style="font-size: 20px; color: var(--text-muted); margin-bottom: 20px;">Desenvolvedor Full Stack &amp; Entusiasta de Tecnologia</p>
                <div style="display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 24px;">
                    <span class="skill-tag">React</span>
                    <span class="skill-tag">TypeScript</span>
                    <span class="skill-tag">Node.js</span>
                    <span class="skill-tag">Python</span>
                </div>
                <div style="color: var(--text-muted); font-size: 14px;">
                    <span style="color: var(--primary);">$</span> echo "Disponível para novos desafios" <span class="terminal-cursor"></span>
                </div>
            `;
    heroContent.style.opacity = '1';
    heroContent.innerHTML = html;
}

export { initNavbar, initAnimations, startHeroTyping };