// data.js

// Dados em português
const portfolioDataPt = {
    // HERO TERMINAL (animação digitada no hero)
    heroLines: [
        { type: 'cmd', text: 'whoami' },
        { type: 'out', text: 'giovanni.bestana — dev & builder' },
        { type: 'cmd', text: 'cat stack.json' },
        { type: 'key', text: 'frontend', val: '["React", "Html", "JavaScript"]' },
        { type: 'key', text: 'backend', val: '["Node.js", "C#", "SqlServer"]' },
        { type: 'key', text: 'devops', val: '["Docker", "AWS", "Linux"]' },
        { type: 'cmd', text: 'echo $DIFERENCIAL' },
        { type: 'green', text: 'Penso como fundador.' },
        { type: 'green', text: 'Entrego como engenheiro.' },
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
        { category: "Frontend", items: ["React", "Html", "CSS", "JavaScript", "Bootstrap"] },
        { category: "Backend", items: ["Node.js", "C#", "Java", "MySQL", "SqlServer"] },
        { category: "DevOps", items: ["Docker", "AWS", "Linux"] },
        { category: "Negócio", items: ["Arquitetura", "Code Review", "Mentoria", "Estimativas", "Figma", "Metodologias Ágeis"] }
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
            description: "Construindo uma base sólida em computação enquanto evoluo na prática como desenvolvedor e como criador de agentes de IA. Foco em entender o porquê das coisas, não só fazer funcionar — porque isso é o que separa quem codifica de quem constrói de verdade.",
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
        { name: "Email", username: "giovanni.best.fernandes@gmail.com", url: "mailto:giovanni.best.fernandes@gmail.com", icon: "📧" },
        { name: "WhatsApp", username: "+55 (14) 99817-0907", url: "https://wa.me/5514998170907", icon: "💬" },
    ]
};

// Dados em inglês
const portfolioDataEn = {
    heroLines: [
        { type: 'cmd', text: 'whoami' },
        { type: 'out', text: 'giovanni.bestana — dev & builder' },
        { type: 'cmd', text: 'cat stack.json' },
        { type: 'key', text: 'frontend', val: '["React", "Html", "JavaScript"]' },
        { type: 'key', text: 'backend', val: '["Node.js", "C#", "SqlServer"]' },
        { type: 'key', text: 'devops', val: '["Docker", "AWS", "Linux"]' },
        { type: 'cmd', text: 'echo $DIFFERENTIAL' },
        { type: 'green', text: 'Think like a founder.' },
        { type: 'green', text: 'Deliver as an engineer.' },
    ],

    stats: [
        { label: "Projects delivered", value: "50+" },
        { label: "Years in market", value: "5+" },
        { label: "Technologies", value: "15+" },
        { label: "Coffees per line", value: "∞" }
    ],

    skills: [
        { category: "Frontend", items: ["React", "Html", "CSS", "JavaScript", "Bootstrap"] },
        { category: "Backend", items: ["Node.js", "C#", "Java", "MySQL", "SqlServer"] },
        { category: "DevOps", items: ["Docker", "AWS", "Linux"] },
        { category: "Business", items: ["Architecture", "Code Review", "Mentoring", "Estimates", "Figma", "Agile Methodologies"] }
    ],

    experiences: [
        {
            role: "Freelance Developer",
            company: "Self-employed",
            period: "2025 — Present",
            description: "Working directly with clients, developing custom solutions and solving real problems. Improved communication, understanding of needs, and value delivery without intermediaries.",
            techs: ["JavaScript", "React", "Node.js", "MySQL", "C#", "API REST"],
            highlight: false
        },
        {
            role: "Information Systems Student",
            company: "USP",
            period: "2026 — Present",
            description: "Building a solid foundation in computer science while evolving as a developer and AI agent creator. Focused on understanding the 'why' behind things, not just making them work — because that's what separates those who code from those who truly build.",
            techs: ["C", "Figma", "AWS", "AI", "SQL", "Java"],
            highlight: false
        },
        {
            role: "Developer Intern",
            company: "Uppercase",
            period: "2023 — 2025",
            description: "Developed scalable solutions in high-impact projects, such as a marketplace for Magazine Luiza, messaging systems with queues and scheduling, corporate social network, and loyalty platform with product conversion.",
            techs: ["Docker", "C#", "Figma", "SqlServer", "Postman", "Visual Studio", "AI"],
            highlight: true
        },
        {
            role: "Systems Development Student",
            company: "ETEC Comendador João Rays",
            period: "2023 — 2026",
            description: "Practical training focused on development and solving real problems. Worked on multiple simultaneous projects, developing organization, prioritization, and product vision from the ground up.",
            techs: ["C#", "JavaScript", "MySQL", "Node.js", "Visual Studio Code", "Html", "React", "PHP"],
            highlight: false
        }
    ],

    projects: [
        {
            id: "projeto_01",
            title: "Financial Management SaaS",
            description: "B2B product that automates financial management for SMBs. Reduced manual work by 4h/week for clients. Scalable architecture that supported growth from 0 → 500 companies.",
            tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
            cover: "https://placehold.co/600x400/111117/10b981?text=Project+01",
            impact: "500+ companies using",
            gallery: {
                date: "Jan 2025",
                images: [
                    { src: "https://placehold.co/1200x800/111117/10b981?text=Screen+1", alt: "Dashboard" },
                    { src: "https://placehold.co/1200x800/111117/10b981?text=Screen+2", alt: "Reports" },
                    { src: "https://placehold.co/1200x800/111117/10b981?text=Screen+3", alt: "Settings" }
                ]
            }
        },
        {
            id: "projeto_02",
            title: "E-learning Platform",
            description: "Complete online course system with video streaming, student progress tracking, and automatic certificates. Performance optimized for slow connections — because Brazil is Brazil.",
            tags: ["Next.js", "TypeScript", "AWS S3", "Redis"],
            cover: "https://placehold.co/600x400/111117/8b5cf6?text=Project+02",
            impact: "10k active students",
            gallery: {
                date: "Sep 2024",
                images: [
                    { src: "https://placehold.co/1200x800/111117/8b5cf6?text=Screen+1", alt: "Courses" },
                    { src: "https://placehold.co/1200x800/111117/8b5cf6?text=Screen+2", alt: "Player" },
                    { src: "https://placehold.co/1200x800/111117/8b5cf6?text=Screen+3", alt: "Certificate" }
                ]
            }
        },
        {
            id: "projeto_03",
            title: "Banking Integration API",
            description: "Middleware that integrates 8 different banks into a unified API. Currently processes over R$5M/month in transactions. Zero downtime for the last 14 months.",
            tags: ["Python", "FastAPI", "Docker", "PostgreSQL"],
            cover: "https://placehold.co/600x400/111117/f59e0b?text=Project+03",
            impact: "R$5M/month processed",
            gallery: {
                date: "Mar 2024",
                images: [
                    { src: "https://placehold.co/1200x800/111117/f59e0b?text=Screen+1", alt: "Docs" },
                    { src: "https://placehold.co/1200x800/111117/f59e0b?text=Screen+2", alt: "Dashboard" },
                    { src: "https://placehold.co/1200x800/111117/f59e0b?text=Screen+3", alt: "Logs" }
                ]
            }
        },
    ],

    contact: [
        { name: "GitHub", username: "@giovanni-bestana-fernandes", url: "https://github.com/Giovanni-Bestana-Fernandes", icon: "🐙" },
        { name: "LinkedIn", username: "/in/giovanni_bestana", url: "https://www.linkedin.com/in/giovanni-bestana-fernandes-ba8830264/", icon: "🔗" },
        { name: "Email", username: "giovanni.best.fernandes@gmail.com", url: "mailto:giovanni.best.fernandes@gmail.com", icon: "📧" },
        { name: "WhatsApp", username: "+55 (14) 99817-0907", url: "https://wa.me/5514998170907", icon: "💬" },
    ]
};

// Objeto principal que alterna entre idiomas
export let portfolioData = { ...portfolioDataPt };

// Função para trocar o idioma dos dados
export function setPortfolioLanguage(lang) {
    if (lang === 'en') {
        portfolioData = { ...portfolioDataEn };
    } else {
        portfolioData = { ...portfolioDataPt };
    }
    return portfolioData;
}

// AI RESPONSES 
export const aiResponses = {
    default: "Boa pergunta! O Giovanni é desenvolvedor full stack com 4 anos de experiência. O diferencial dele? Não entrega só código — entrega solução. Tem visão de negócio, comunica bem e não some durante o projeto. Quer saber algo específico?",
    skills: "No frontend: React, Javascript, Html e CSS são o dia a dia. Backend em C#, C e SQL. Infra com Docker e AWS. Mas além do stack, o Giovanni consegue escolher a tecnologia certa pra cada problema, não fica preso em hype.",
    availability: "Disponível para projetos! Prefere trabalho remoto ou híbrido. Atende tanto freelance por projeto quanto contratação CLT/PJ. Para projetos urgentes, tem disponibilidade imediata. Manda mensagem no LinkedIn ou por e-mail.",
    experience: "4 anos de mercado, passando por agência digital, startup (fase seed até crescimento) e empresa tech (tech lead). Cada fase ensinou algo diferente: a agência ensinou a entender cliente, a startup ensinou velocidade, a empresa tech ensinou escala.",
    projects: "O portfólio inclui um marketplace de restaurantes com foco na personalização do usuário sobre o site, e-commerce funcional e projetos relacionados a IA. Todos os projetos foram entregues com foco em impacto real, não só funcionalidade técnica.",
    pricing: "Depende do escopo. Projetos pequenos (landing pages, APIs simples) a partir de R$500. Produtos completos, consulte por e-mail com um briefing. Prazos e valores são sempre acordados antes do início, sem surpresas no final.",
};

// AI Responses em inglês
export const aiResponsesEn = {
    default: "Great question! Giovanni is a full stack developer with 4 years of experience. His edge? He doesn't just deliver code — he delivers solutions. He has a business mindset, communicates clearly and doesn't ghost you mid-project. Want to know something specific?",
    skills: "Frontend: React, JavaScript, HTML and CSS are daily tools. Backend in C# and SQL. Infrastructure with Docker and AWS. Beyond the stack, Giovanni knows how to pick the right technology for each problem — not just following hype.",
    availability: "Available for projects! Prefers remote or hybrid work. Open to both freelance and full-time engagements (CLT/PJ). For urgent projects, he has immediate availability. Reach out on LinkedIn or by email.",
    experience: "4 years in the market: digital agency, startup (seed to growth), and tech company (tech lead). Each phase taught something different: agency taught client understanding, startup taught speed, tech company taught scale.",
    projects: "The portfolio includes a restaurant marketplace focused on user personalization, a functional e-commerce, and AI-related projects. All delivered with a focus on real impact, not just technical functionality.",
    pricing: "Depends on the scope. Small projects (landing pages, simple APIs) starting at R$500. For full products, send an email with a brief. Deadlines and rates are always agreed upfront — no surprises at the end.",
};

// Função para pegar as respostas AI no idioma correto
export function getAIResponse(lang, key) {
    const responses = lang === 'en' ? aiResponsesEn : aiResponses;
    return responses[key] || responses.default;
}

export const translations = {
    pt: {
        nav: {
            about:      "sobre",
            manifesto:  "manifesto",
            skills:     "arsenal",
            experience: "jornada",
            projects:   "projetos",
            chat:       "ai_chat",
            contact:    "contato",
        },
        hero: {
            available:   "Disponível para novos projetos",
            title1:      "Não sou",
            title2:      "mais um",
            titleAccent: "dev.",
            subtitle:    "Sou o profissional que transforma ideias em produtos reais. Entrego código que <em>resolve problemas de negócio</em>, não só funcionalidade técnica.",
            cta1:        "Ver meus projetos",
            cta2:        "Vamos conversar →",
            stat1Label:  "projetos entregues",
            stat2Label:  "anos de mercado",
            stat3Label:  "cafés por linha",
            badgeStack:  "Full Stack",
            badgeYears:  "4 anos de código",
        },
        sections: {
            about:      "sobre_mim()",
            manifesto:  "manifesto()",
            skills:     "arsenal[]",
            experience: "jornada.log",
            projects:   "projetos.git",
            chat:       "ai_chat.py",
            contact:    "contato.sh",
        },
        about: {
            headline1:      "Eu não entrego código.",
            headline2:      "Eu entrego",
            headlineAccent: "resultados.",
            body1: "Tenho 4 anos construindo produtos digitais que realmente funcionam. Não sou o tipo de dev que some atrás de uma tela e aparece semanas depois com algo que não resolve nada. Gosto de entender o negócio, questionar requisitos e propor soluções que fazem sentido.",
            body2: "Já passei por startups em fase seed, empresas em crescimento acelerado e projetos solo. Essa variedade me ensinou a ser direto, eficiente e a valorizar o que realmente importa: <strong>software que gera valor.</strong>",
            codeRole:  "Full Stack Dev & Software Engineer",
            codeBase:  "Brasil 🇧🇷",
            codeOpen:  "remoto / híbrido",
            codePower: "pensar como dono",
        },
        manifesto: {
            card1Title: "Penso como fundador",
            card1Body:  "Não apenas executo tickets. Questiono o problema por trás do problema e entrego a solução certa, não só a pedida.",
            card2Title: "Velocidade com qualidade",
            card2Body:  "Entrego rápido sem sacrificar estrutura. Código limpo, escalável e manutenível — porque amanhã alguém vai precisar mexer nisso.",
            card3Title: "Comunicação direta",
            card3Body:  "Sem enrolação. Você sabe exatamente o que está sendo feito, quando fica pronto e o que pode impactar o prazo.",
            card4Title: "Foco em resultado",
            card4Body:  "Toda linha de código serve a um propósito de negócio. Se não serve, não deveria estar lá.",
            quote:      '"A maioria dos devs entrega o que você pediu.<br>Eu entrego o que você <em>precisava</em>."',
        },
        chat: {
            intro:            "Curioso sobre minha experiência? Pergunte para a IA do portfólio. Ela sabe tudo sobre mim.",
            initCmd:          './init_ai.sh --modo="recruiter"',
            welcome:          "👋 Olá! Sou o assistente de IA deste portfólio. Pergunte sobre habilidades, projetos ou disponibilidade do Giovanni.",
            placeholder:      "Digite sua pergunta...",
            suggestionsLabel: "// sugestões rápidas:",
            suggestions: [
                { label: "Habilidades técnicas", question: "Quais são suas principais habilidades?" },
                { label: "Experiência",           question: "Me conta sobre sua experiência." },
                { label: "Disponibilidade",       question: "Está disponível para novas oportunidades?" },
                { label: "Projetos",              question: "Me fale sobre seus projetos." },
                { label: "Valores",               question: "Quais são seus preços?" },
            ],
        },
        contact: {
            headline1: "Tem um projeto em mente?",
            headline2: "Vamos construir juntos.",
            body:      "Seja um produto novo, uma feature crítica ou uma consultoria rápida — estou disponível para conversar.",
            cmd:       './conectar.sh --modo="bora trocar uma ideia"',
        },
        footer: "Feito com ♥ e muito código © 2026 Giovanni Bestana",
        ai: {
            default:      "Boa pergunta! O Giovanni é desenvolvedor full stack com 4 anos de experiência. O diferencial dele? Não entrega só código — entrega solução. Tem visão de negócio, comunica bem e não some durante o projeto. Quer saber algo específico?",
            skills:       "No frontend: React, JavaScript, Html e CSS são o dia a dia. Backend em C#, C e SQL. Infra com Docker e AWS. Mas além do stack, o Giovanni consegue escolher a tecnologia certa pra cada problema — não fica preso em hype.",
            availability: "Disponível para projetos! Prefere trabalho remoto ou híbrido. Atende tanto freelance por projeto quanto contratação CLT/PJ. Para projetos urgentes, tem disponibilidade imediata. Manda mensagem no LinkedIn ou por e-mail.",
            experience:   "4 anos de mercado, passando por estágio na Uppercase, freelancer autônomo e atualmente estudante de Sistemas da Informação na USP. Cada fase ensinou algo diferente: entender cliente, velocidade e escala.",
            projects:     "O portfólio inclui um marketplace de restaurantes com foco na personalização do usuário, e-commerce funcional e projetos relacionados à IA. Todos entregues com foco em impacto real, não só funcionalidade técnica.",
            pricing:      "Depende do escopo. Projetos pequenos (landing pages, APIs simples) a partir de R$500. Produtos completos, consulte por e-mail com um briefing. Prazos e valores são sempre acordados antes do início — sem surpresas no final.",
        },
    },

    en: {
        nav: {
            about:      "about",
            manifesto:  "manifesto",
            skills:     "arsenal",
            experience: "journey",
            projects:   "projects",
            chat:       "ai_chat",
            contact:    "contact",
        },
        hero: {
            available:   "Available for new projects",
            title1:      "I'm not",
            title2:      "just another",
            titleAccent: "dev.",
            subtitle:    "I'm the professional who turns ideas into real products. I deliver code that <em>solves business problems</em>, not just technical features.",
            cta1:        "See my projects",
            cta2:        "Let's talk →",
            stat1Label:  "projects delivered",
            stat2Label:  "years in the market",
            stat3Label:  "coffees per line",
            badgeStack:  "Full Stack",
            badgeYears:  "4 years of code",
        },
        sections: {
            about:      "about_me()",
            manifesto:  "manifesto()",
            skills:     "arsenal[]",
            experience: "journey.log",
            projects:   "projects.git",
            chat:       "ai_chat.py",
            contact:    "contact.sh",
        },
        about: {
            headline1:      "I don't deliver code.",
            headline2:      "I deliver",
            headlineAccent: "results.",
            body1: "I have 4 years building digital products that actually work. I'm not the kind of dev who disappears behind a screen and comes back weeks later with something that solves nothing. I like to understand the business, challenge requirements and propose solutions that make sense.",
            body2: "I've worked with early-stage startups, fast-growing companies and solo projects. That variety taught me to be direct, efficient and to value what truly matters: <strong>software that generates value.</strong>",
            codeRole:  "Full Stack Dev & Software Engineer",
            codeBase:  "Brazil 🇧🇷",
            codeOpen:  "remote / hybrid",
            codePower: "think like an owner",
        },
        manifesto: {
            card1Title: "I think like a founder",
            card1Body:  "I don't just execute tickets. I question the problem behind the problem and deliver the right solution, not just the one asked for.",
            card2Title: "Speed with quality",
            card2Body:  "I deliver fast without sacrificing structure. Clean, scalable and maintainable code — because someone will need to touch it tomorrow.",
            card3Title: "Direct communication",
            card3Body:  "No runaround. You know exactly what's being done, when it'll be ready and what might affect the deadline.",
            card4Title: "Results-driven",
            card4Body:  "Every line of code serves a business purpose. If it doesn't, it shouldn't be there.",
            quote:      '"Most devs deliver what you asked for.<br>I deliver what you <em>needed</em>."',
        },
        chat: {
            intro:            "Curious about my experience? Ask the portfolio AI — it knows everything about me.",
            initCmd:          './init_ai.sh --mode="recruiter"',
            welcome:          "👋 Hi! I'm the AI assistant for this portfolio. Ask me about Giovanni's skills, projects or availability.",
            placeholder:      "Type your question...",
            suggestionsLabel: "// quick suggestions:",
            suggestions: [
                { label: "Technical skills", question: "What are your main technical skills?" },
                { label: "Experience",       question: "Tell me about your experience." },
                { label: "Availability",     question: "Are you available for new opportunities?" },
                { label: "Projects",         question: "Tell me about your projects." },
                { label: "Pricing",          question: "What are your rates?" },
            ],
        },
        contact: {
            headline1: "Have a project in mind?",
            headline2: "Let's build it together.",
            body:      "Whether it's a new product, a critical feature or a quick consultation — I'm available to talk.",
            cmd:       './connect.sh --mode="let\'s talk"',
        },
        footer: "Made with ♥ and lots of code © 2026 Giovanni Bestana",
        ai: {
            default:      "Great question! Giovanni is a full stack developer with 4 years of experience. His edge? He doesn't just deliver code — he delivers solutions. He has a business mindset, communicates clearly and doesn't ghost you mid-project. Want to know something specific?",
            skills:       "On the frontend: React, JavaScript, HTML and CSS are his daily tools. Backend in C# and SQL. Infrastructure with Docker and AWS. Beyond the stack, Giovanni knows how to pick the right technology for each problem — not just following hype.",
            availability: "Available for projects! Prefers remote or hybrid work. Open to both freelance and full-time engagements (CLT/PJ). For urgent projects, he has immediate availability. Reach out on LinkedIn or by email.",
            experience:   "4 years in the market: internship at Uppercase, independent freelancer, and currently studying Information Systems at USP. Each phase taught something different — understanding clients, speed and scale.",
            projects:     "The portfolio includes a restaurant marketplace focused on user personalization, a functional e-commerce and AI-related projects. All delivered with a focus on real impact, not just technical functionality.",
            pricing:      "Depends on the scope. Small projects (landing pages, simple APIs) starting at R$500. For full products, send an email with a brief. Deadlines and rates are always agreed upfront — no surprises at the end.",
        },
    },
};