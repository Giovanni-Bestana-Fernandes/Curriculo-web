export const portfolioData = {

    // HERO TERMINAL (animação digitada no hero)
    heroLines: [
        { type: 'cmd', text: 'whoami' },
        { type: 'out', text: 'giovanni.bestana — dev & builder' },
        { type: 'cmd', text: 'cat stack.json' },
        { type: 'key', text: 'frontend', val: '["React", "Next.js", "TypeScript"]' },
        { type: 'key', text: 'backend', val: '["Node.js", "Python", "PostgreSQL"]' },
        { type: 'key', text: 'devops', val: '["Docker", "AWS", "CI/CD"]' },
        { type: 'cmd', text: 'echo $DIFERENCIAL' },
        { type: 'green', text: 'Penso como fundador. Entrego como engenheiro.' },
    ],

    // STATS (seção about)
    stats: [
        { label: "Projetos entregues", value: "50+" },
        { label: "Anos de mercado", value: "5+" },
        { label: "Tecnologias", value: "15+" },
        { label: "Cafés por linha", value: "∞" }
    ],

    // SKILLS
    skills: [
        { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"] },
        { category: "Backend", items: ["Node.js", "Python", "Java", "Go", "PostgreSQL"] },
        { category: "DevOps", items: ["Docker", "AWS", "CI/CD", "Kubernetes", "Linux"] },
        { category: "Negócio", items: ["Arquitetura", "Code Review", "Mentoria", "Estimativas", "Figma"] }
    ],

    // EXPERIÊNCIAS
    experiences: [
        {
            role: "Desenvolvedor Freelancer",
            company: "Autônomo",
            period: "2025 — Presente",
            description: "Atuando diretamente com clientes, desenvolvendo soluções sob demanda e resolvendo problemas reais. Aprimorei comunicação, entendimento de necessidades e entrega de valor sem intermediários.",
            techs: ["JavaScript", "React", "Node.js", "MySQL", "C#", "API REST"],
            highlight: false
        },
        {
            role: "Estudante de Sistemas da Informação",
            company: "USP",
            period: "2026 — Presente",
            description: "Lidero a arquitetura e entrega de produtos que atendem mais de 200k usuários. Implementei práticas de revisão de código que reduziram bugs em produção em 60%. Mentoro devs juniors — porque time forte entrega mais.",
            techs: ["C", "Figma", "AWS", "IA", "SQL", "Java"],
            highlight: false
        },
        {
            role: "Estagiário Desenvolvedor",
            company: "Uppercase",
            period: "2023 — 2025",
            description: "Desenvolvi soluções escaláveis em projetos de alto impacto, como marketplace para o Magazine Luiza, sistemas de mensageria com filas e agendamento, rede social corporativa e plataforma de fidelidade com conversão em produtos.",
            techs: ["Docker", "C#", "Figma", "SqlServer", "Postman", "Visual Studio", "IA"],
            highlight: true
        },
        {
            role: "Estudante da ETEC em Desenvolvimento de Sistemas",
            company: "ETEC Comendador João Rays",
            period: "2023 — 2026",
            description: "Formação prática focada em desenvolvimento e resolução de problemas reais. Atuei em múltiplos projetos simultâneos, desenvolvendo organização, priorização e visão de produto desde a base.",
            techs: ["C#", "JavaScript", "MySQL", "Node.js", "Visual Studio Code", "Html", "React", "PHP"],
            highlight: false
        }
    ],

    // PROJETOS
    projects: [
        {
            id: "projeto_01",
            title: "SaaS de Gestão Financeira",
            description: "Produto B2B que automatiza a gestão financeira de PMEs. Reduziu em 4h/semana o trabalho manual dos clientes. Arquitetura escalável que suportou crescimento de 0 → 500 empresas.",
            tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
            cover: "https://placehold.co/600x400/111117/10b981?text=Projeto+01",
            impact: "500+ empresas usando",
            gallery: {
                date: "Jan 2025",
                images: [
                    { src: "https://placehold.co/1200x800/111117/10b981?text=Tela+1", alt: "Dashboard" },
                    { src: "https://placehold.co/1200x800/111117/10b981?text=Tela+2", alt: "Relatórios" },
                    { src: "https://placehold.co/1200x800/111117/10b981?text=Tela+3", alt: "Configurações" }
                ]
            }
        },
        {
            id: "projeto_02",
            title: "Plataforma de E-learning",
            description: "Sistema completo de cursos online com streaming de vídeo, progresso do aluno e certificados automáticos. Performance otimizada para conexões lentas — porque Brasil é Brasil.",
            tags: ["Next.js", "TypeScript", "AWS S3", "Redis"],
            cover: "https://placehold.co/600x400/111117/8b5cf6?text=Projeto+02",
            impact: "10k alunos ativos",
            gallery: {
                date: "Set 2024",
                images: [
                    { src: "https://placehold.co/1200x800/111117/8b5cf6?text=Tela+1", alt: "Cursos" },
                    { src: "https://placehold.co/1200x800/111117/8b5cf6?text=Tela+2", alt: "Player" },
                    { src: "https://placehold.co/1200x800/111117/8b5cf6?text=Tela+3", alt: "Certificado" }
                ]
            }
        },
        {
            id: "projeto_03",
            title: "API de Integração Bancária",
            description: "Middleware que integra 8 bancos diferentes em uma API unificada. Hoje processa mais de R$5M/mês em transações. Zero downtime nos últimos 14 meses.",
            tags: ["Python", "FastAPI", "Docker", "PostgreSQL"],
            cover: "https://placehold.co/600x400/111117/f59e0b?text=Projeto+03",
            impact: "R$5M/mês processados",
            gallery: {
                date: "Mar 2024",
                images: [
                    { src: "https://placehold.co/1200x800/111117/f59e0b?text=Tela+1", alt: "Docs" },
                    { src: "https://placehold.co/1200x800/111117/f59e0b?text=Tela+2", alt: "Dashboard" },
                    { src: "https://placehold.co/1200x800/111117/f59e0b?text=Tela+3", alt: "Logs" }
                ]
            }
        },
    ],

    // CONTATO
    contact: [
        { name: "GitHub", username: "@giovanni-bestana-fernandes", url: "https://github.com/Giovanni-Bestana-Fernandes", icon: "🐙" },
        { name: "LinkedIn", username: "/in/giovanni_bestana", url: "https://www.linkedin.com/in/giovanni-bestana-fernandes-ba8830264/", icon: "🔗" },
        { name: "Email", username: "giovanni.best.fernandes@gmail.com", url: "mailto:joao@dev.com", icon: "📧" },
        { name: "WhatsApp", username: "+55 (14) 99817-0907", url: "https://wa.me/5514998170907", icon: "💬" },
    ]
};

// AI RESPONSES 
export const aiResponses = {
    default: "Boa pergunta! O Giovanni é desenvolvedor full stack com 4 anos de experiência. O diferencial dele? Não entrega só código — entrega solução. Tem visão de negócio, comunica bem e não some durante o projeto. Quer saber algo específico?",
    skills: "No frontend: React, TypeScript, Html e CSS são o dia a dia. Backend em C#, C e SQL. Infra com Docker e AWS. Mas além do stack, o Giovanni consegue escolher a tecnologia certa pra cada problema — não fica preso em hype.",
    availability: "Disponível para projetos! Prefere trabalho remoto ou híbrido. Atende tanto freelance por projeto quanto contratação CLT/PJ. Para projetos urgentes, tem disponibilidade imediata. Manda mensagem no LinkedIn ou por e-mail.",
    experience: "4 anos de mercado, passando por agência digital, startup (fase seed até crescimento) e empresa tech (tech lead). Cada fase ensinou algo diferente: a agência ensinou a entender cliente, a startup ensinou velocidade, a empresa tech ensinou escala.",
    projects: "O portfólio inclui um marketplace de restaurantes com foco na personalização do usuário sobre o site, e-commerce funcional e projetos relacionados a IA. Todos os projetos foram entregues com foco em impacto real, não só funcionalidade técnica.",
    pricing: "Depende do escopo. Projetos pequenos (landing pages, APIs simples) a partir de R$500. Produtos completos, consulte por e-mail com um briefing. Prazos e valores são sempre acordados antes do início — sem surpresas no final.",
};