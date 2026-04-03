export const portfolioData = {
    stats: [
        { label: "Projetos concluídos", value: "50+" },
        { label: "Contribuições open source", value: "200+" },
        { label: "Tecnologias dominadas", value: "15+" },
        { label: "Cafés consumidos", value: "∞" }
    ],
    skills: [
        { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"] },
        { category: "Backend", items: ["Node.js", "Python", "Java", "Go", "PostgreSQL"] },
        { category: "DevOps", items: ["Docker", "AWS", "CI/CD", "Kubernetes", "Linux"] },
        { category: "Ferramentas", items: ["Git", "VS Code", "Figma", "Jira", "Postman"] }
    ],
    experiences: [
        { role: "Desenvolvedor Full Stack Senior", company: "Empresa Tech", period: "2022 — Presente", description: "Liderança técnica de projetos web, arquitetura de microsserviços e mentoria de devs juniors.", techs: ["React", "Node.js", "AWS", "PostgreSQL"] },
        { role: "Desenvolvedor Frontend", company: "Startup XYZ", period: "2020 — 2022", description: "Desenvolvimento de interfaces responsivas e performáticas, integração com APIs REST e GraphQL.", techs: ["Vue.js", "TypeScript", "GraphQL", "Tailwind"] },
        { role: "Desenvolvedor Junior", company: "Agência Digital", period: "2018 — 2020", description: "Criação de websites e landing pages, manutenção de sistemas legados e automação de processos.", techs: ["JavaScript", "PHP", "MySQL", "WordPress"] }
    ],
    projects: [
        {
            id: "projeto_01",
            title: "projeto_01",
            description: "Aplicação fullstack para gestão de tarefas...",
            tags: ["React", "TypeScript", "Node.js"],
            cover: "https://placehold.co/600x400/1a1a2e/10b981?text=Project+1",

            gallery: {
                date: "Mar 2025",
                images: [
                    { src: "https://placehold.co/1200x800/1a1a2e/10b981?text=1", alt: "Tela 1" },
                    { src: "https://placehold.co/1200x800/1a1a2e/10b981?text=2", alt: "Tela 2" },
                    { src: "https://placehold.co/1200x800/1a1a2e/10b981?text=3", alt: "Tela 3" }
                ]
            }
        },
        {
            id: "projeto_02",
            title: "projeto_02",
            description: "Aplicação fullstack para gestão de tarefas...",
            tags: ["React", "TypeScript", "Node.js"],
            cover: "https://placehold.co/600x400/1a1a2e/10b981?text=Project+1",

            gallery: {
                date: "Mar 2025",
                images: [
                    { src: "https://placehold.co/1200x800/1a1a2e/10b981?text=1", alt: "Tela 1" },
                    { src: "https://placehold.co/1200x800/1a1a2e/10b981?text=2", alt: "Tela 2" },
                    { src: "https://placehold.co/1200x800/1a1a2e/10b981?text=3", alt: "Tela 3" }
                ]
            }
        },
        {
            id: "projeto_03",
            title: "projeto_03",
            description: "Aplicação fullstack para gestão de tarefas...",
            tags: ["React", "TypeScript", "Node.js"],
            cover: "https://placehold.co/600x400/1a1a2e/10b981?text=Project+1",

            gallery: {
                date: "Mar 2025",
                images: [
                    { src: "https://placehold.co/1200x800/1a1a2e/10b981?text=1", alt: "Tela 1" },
                    { src: "https://placehold.co/1200x800/1a1a2e/10b981?text=2", alt: "Tela 2" },
                    { src: "https://placehold.co/1200x800/1a1a2e/10b981?text=3", alt: "Tela 3" }
                ]
            }
        },
    ],
    contact: [
        { name: "GitHub", username: "@joaosilva", url: "https://github.com", icon: "🐙" },
        { name: "LinkedIn", username: "/in/joaosilva", url: "https://linkedin.com", icon: "🔗" },
        { name: "Email", username: "joao@dev.com", url: "mailto:joao@dev.com", icon: "📧" }
    ]
};

// AI Responses
export const aiResponses = {
    default: "Ótima pergunta! Como desenvolvedor full stack, estou sempre aberto a novos desafios e oportunidades. Minhas principais competências incluem React, Node.js e arquitetura de microsserviços. Ficaria feliz em conversar mais sobre como posso agregar valor ao seu time!",
    skills: "Minhas principais habilidades incluem desenvolvimento frontend com React/TypeScript, backend com Node.js/Python, e DevOps com Docker e AWS. Tenho experiência em arquitetura de microsserviços e bancos de dados relacionais e NoSQL.",
    availability: "Estou disponível para novas oportunidades! Tenho interesse especial em projetos desafiadores onde possa aplicar minha experiência full stack. Atualmente estou aberto a posições remotas ou híbridas.",
    experience: "Tenho mais de 5 anos de experiência em desenvolvimento de software, atuando desde startups até grandes empresas. Já liderei equipes técnicas e entreguei projetos de ponta a ponta."
};