/* ========================================================
   Dados dos Projetos (compartilhado entre index e projeto)
   ======================================================== */

/* #region Helpers - Imagens Placeholder Cinza */
function imgPlaceholder(label, w = 1280, h = 720, bg = '#9CA3AF', fg = '#FFFFFF') {
    const cleanLabel = String(label).replace(/[&<>"']/g, '');
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid slice">
        <rect width="100%" height="100%" fill="${bg}"/>
        <text x="50%" y="50%" font-family="Segoe UI, system-ui, sans-serif" font-size="${Math.round(h / 14)}" fill="${fg}" text-anchor="middle" dominant-baseline="middle" font-weight="700">${cleanLabel}</text>
    </svg>`;
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}
/* #endregion */

window.projetos = [
    {
        id: 1,
        nome: "Educahost",
        descricao: "Plataforma web que permite crianças e jovens aprenderem através de jogos educativos. Desenvolvida no 1º semestre da faculdade, com foco em gamificação do aprendizado.",
        resumo: "Plataforma de jogos educativos (1º semestre da faculdade).",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        linkGithub: "https://github.com/emanuelmartinslima/Projeto-Educahost",
        linkDemo: "https://projeto-educahost.vercel.app/",
        imagem: "assets/projects/educahostcapa.png",
        screenshots: [
            "assets/projects/educahost1.png",
            "assets/projects/educahost2.png",
            "assets/projects/educahost3.png"
        ],
        participacao: "Trabalhei na parte do backend, implementando a lógica de negócio, integração de dados e suporte às funcionalidades dos jogos.",
        tecnologiasUtilizadas: ["HTML5", "CSS3", "JavaScript Vanilla", "Node.js", "Vercel para deploy"]
    },
    {
        id: 2,
        nome: "Sagrado-Sistema",
        descricao: "Sistema para automação de contratos e gerenciamento de estoque da empresa Sagrado Neon. Projeto integrador do 2º semestre da FATEC Zona Leste.",
        resumo: "Automação de contratos e estoque (2º semestre da faculdade).",
        tecnologias: ["Handlebars", "MySQL", "Node.js", "CSS"],
        linkGithub: "https://github.com/emanuelmartinslima/ProjetoPI2-Sagrado-Sistema",
        linkDemo: "",
        imagem: "assets/projects/sagradosistemacapa.png",
        screenshots: [
            "assets/projects/sagradosistema1.png",
            "assets/projects/sagradosistema2.png",
            "assets/projects/sagradosistema3.png"
        ],
        participacao: "Trabalhei no backend, construindo APIs, rotas, regras de negócio para contratos e toda integração com banco de dados MySQL.",
        tecnologiasUtilizadas: ["Node.js + Express", "Handlebars", "MySQL", "CSS3", "Arquitetura MVC"]
    },
    {
        id: 3,
        nome: "EcoBalance (Web)",
        descricao: "Sistema para cálculo de pegada de carbono pessoal, com feedback comparativo em relação a dados globais e dicas de sustentabilidade personalizadas.",
        resumo: "Calculadora de pegada de carbono pessoal com comparação global.",
        tecnologias: ["Node.js", "React", "MongoDB", "CSS", "HTML"],
        linkGithub: "https://github.com/littlerichard01/EcoBalance",
        linkDemo: "",
        imagem: "assets/projects/ecobalancecapa.png",
        screenshots: [
            "assets/projects/ecobalance1.png",
            "assets/projects/ecobalance2.png",
            "assets/projects/ecobalance3.png"
        ],
        participacao: "Trabalhei no backend, no banco de dados MongoDB, no deploy da aplicação e também criei a logo do projeto.",
        tecnologiasUtilizadas: ["React", "Node.js + Express", "MongoDB + Mongoose", "CSS3", "Deploy em nuvem"]
    },
    {
        id: 4,
        nome: "Questões & Masmorras",
        descricao: "Sistema gamificado que transforma aprendizado em aventura RPG: professores criam masmorras de desafios e alunos exploram em equipes, conquistando vitórias com sabedoria.",
        resumo: "Aprendizado gamificado em formato de aventura RPG (4º semestre).",
        tecnologias: ["Node.js", "React", "MongoDB", "CSS", "HTML"],
        linkGithub: "https://github.com/Lucas-Gatto/Questoes-e-Masmorras",
        linkDemo: "https://questoes-e-masmorras-v2.vercel.app/",
        imagem: "assets/projects/questoesemasmorrascapa.png",
        screenshots: [
            "assets/projects/questoesemasmorras1.png",
            "assets/projects/questoesemasmorras2.png",
            "assets/projects/questoesemasmorras3.png"
        ],
        participacao: "Trabalhei no backend, no banco de dados MongoDB, criei a logo e identidade visual do projeto, além de ter feito o deploy.",
        tecnologiasUtilizadas: ["React", "Node.js + Express", "MongoDB", "CSS3", "Identidade visual", "Vercel deploy"]
    },
    {
        id: 5,
        nome: "EcoBalance (Mobile)",
        descricao: "Versão mobile (Android) do EcoBalance, com o mesmo cálculo de pegada de carbono pessoal. Interface adaptada para celulares, projeto do 5º semestre da faculdade.",
        resumo: "App Android para cálculo de pegada de carbono (5º semestre).",
        tecnologias: ["React Native", "MongoDB", "Node.js"],
        linkGithub: "https://github.com/littlerichard01/EcoBalance-mobile",
        linkDemo: "",
        linkVideo: "https://www.youtube.com/watch?v=vvucoLBNrB8",
        imagem: "assets/projects/ecobalancecapa.png",
        screenshots: [
            "assets/projects/ecobalancemobile1.png",
            "assets/projects/ecobalancemobile2.png",
            "assets/projects/ecobalancemobile3.png"
        ],
        participacao: "Trabalhei no backend, no banco de dados e na geração do APK para distribuição do aplicativo Android.",
        tecnologiasUtilizadas: ["React Native", "Node.js + Express", "MongoDB", "Android SDK", "Geração de APK release"]
    },
    {
        id: 6,
        nome: "AquaMonitor",
        descricao: "Sistema de gestão e monitoramento para lojas de aquarismo: controle de aquários, criaturas, compradores e vendas. Projeto em desenvolvimento do 6º semestre.",
        resumo: "Gestão de aquários e vendas para lojas de aquarismo (6º semestre).",
        tecnologias: ["Kotlin MP", "HTML", "CSS", "Spring Boot", "PostgreSQL"],
        linkGithub: "https://github.com/littlerichard01/AquaMonitor",
        linkDemo: "",
        imagem: imgPlaceholder("AquaMonitor"),
        screenshots: [
            imgPlaceholder("Screenshot 1"),
            imgPlaceholder("Screenshot 2"),
            imgPlaceholder("Screenshot 3")
        ],
        participacao: "Atuo no desenvolvimento do backend com Spring Boot e na modelagem e administração do banco de dados PostgreSQL.",
        tecnologiasUtilizadas: ["Kotlin Multiplataforma", "Spring Boot", "PostgreSQL", "HTML5", "CSS3"]
    },
    {
        id: 7,
        nome: "Oligarquia Pestilenta",
        descricao: "Sistema de RPG de mesa medieval totalmente autoral, em desenvolvimento desde 2022. Contempla mecânicas próprias, classes, equipamentos e cenário detalhado em livro PDF.",
        resumo: "Sistema autoral de RPG de mesa medieval (desde 2022, em desenvolvimento).",
        tecnologias: ["Autoral", "Diagramação", "Escrita Criativa"],
        linkGithub: "",
        linkDemo: "",
        imagem: "assets/projects/oligarcas sem titulo.png",
        screenshots: [],
        pdfs: [
            { label: "v2.0.0 (Pré-release 18) — Versão mais recente", caminho: "assets/documents/oligarquia-pestilenta-rpg-v2.0.0.pre-18.pdf", destaque: true },
            { label: "Livro do Jogador v1.7.1", caminho: "assets/documents/op-livro-do-jogador-v1.7.1.pdf", destaque: false },
            { label: "v0.10.1 — Versão antiga", caminho: "assets/documents/oligarquia-pestilenta-rpg-v0.10.1.pdf", destaque: false }
        ],
        participacao: "Criação completa do sistema: escrita de lore e regras, edição, diagramação do livro em PDF, desenvolvimento das mecânicas e algumas artes.",
        tecnologiasUtilizadas: ["Escrita criativa e lore", "Design de mecânicas RPG", "Diagramação de PDF", "Criação de artes", "Balanceamento de sistema"]
    },
    {
        id: 8,
        nome: "Bylunnar e o Ressurgimento de Tryoria",
        descricao: "Jogo arcade de luta com sistema de upgrades de vilarejo (objetivo: evoluir o vilarejo para tecnologia máxima). Projeto da ETEC, GameMaker, aug/nov de 2023.",
        resumo: "Jogo arcade de luta com upgrades de vilarejo (ETEC 2023).",
        tecnologias: ["GameMaker", "GML", "Pixel Art"],
        linkGithub: "",
        linkDemo: "",
        linkVideo: "https://www.youtube.com/watch?v=Fr0dWP_d2nQ&t=2s",
        imagem: "assets/projects/bylunnarcapa.png",
        screenshots: [
            "assets/projects/bylunnar1.png",
            "assets/projects/bylunnar2.png",
            "assets/projects/bylunnar3.png"
        ],
        videos: [
            { src: "assets/projects/teaser.mp4", type: "video/mp4", label: "Teaser do jogo" }
        ],
        participacao: "Atuei na programação do jogo (GML) e na criação de algumas artes (poucas), com foco maior em código.",
        tecnologiasUtilizadas: ["GameMaker Studio", "GameMaker Language (GML)", "Sistema de combate", "Sistema de upgrades", "Pixel art básica"]
    }
];
