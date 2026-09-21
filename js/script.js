/* ========================================================
   Portfólio - Script Principal
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

/* #region Dados dos Projetos */
const projetos = [
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
        descricao: "Sistema de RPG de mesa medieval totalmente autoral, em desenvolvimento desde 2022. Contempla mecânicas próprias, classes, raças, equipamentos e cenário detalhado em livro PDF.",
        resumo: "Sistema autoral de RPG de mesa medieval (desde 2022, em desenvolvimento).",
        tecnologias: ["Autoral", "Diagramação", "Escrita Criativa"],
        linkGithub: "",
        linkDemo: "",
        imagem: "assets/projects/oligarcas sem titulo.png",
        screenshots: [],
        pdfs: [
            { label: "v2.0.0 (Pré-release 17) — Versão mais recente", caminho: "assets/documents/oligarquia-pestilenta-rpg-v2.0.0.pre-17.pdf", destaque: true },
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
        participacao: "Atuei na programação do jogo (GML) e na criação de algumas artes (poucas), com foco maior em código.",
        tecnologiasUtilizadas: ["GameMaker Studio", "GameMaker Language (GML)", "Sistema de combate", "Sistema de upgrades", "Pixel art básica"]
    }
];
/* #endregion */

/* #region Renderização dos Cards */
function renderProjetos() {
    const grid = document.getElementById('projetosGrid');
    if (!grid) return;

    grid.innerHTML = projetos.map(projeto => `
        <article class="projeto-card" data-projeto-id="${projeto.id}" tabindex="0" role="button" aria-label="Abrir detalhes do projeto ${projeto.nome}">
            <div class="projeto-imagem">
                <img src="${projeto.imagem}" alt="${projeto.nome}" loading="lazy">
                <div class="projeto-overlay">
                    <span><i class="fas fa-search-plus"></i> Clique para ver detalhes</span>
                </div>
            </div>
            <div class="projeto-info">
                <h3>${projeto.nome}</h3>
                <p>${projeto.resumo}</p>
                <div class="projeto-tech">
                    ${projeto.tecnologias.slice(0, 4).map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    ${projeto.tecnologias.length > 4 ? `<span class="tech-tag">+${projeto.tecnologias.length - 4}</span>` : ''}
                </div>
            </div>
        </article>
    `).join('');

    grid.querySelectorAll('.projeto-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = parseInt(card.dataset.projetoId);
            abrirModalProjeto(id);
        });
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const id = parseInt(card.dataset.projetoId);
                abrirModalProjeto(id);
            }
        });
    });
}
/* #endregion */

/* #region Modal de Projetos */
const modal = document.getElementById('projetoModal');
const modalBody = document.getElementById('modalBody');

function abrirModalProjeto(id) {
    const projeto = projetos.find(p => p.id === id);
    if (!projeto || !modalBody) return;

    const linksHtml = [];
    if (projeto.linkGithub) {
        linksHtml.push(`<a href="${projeto.linkGithub}" target="_blank" rel="noopener noreferrer" class="modal-link-btn primary"><i class="fab fa-github"></i> Ver Código no GitHub</a>`);
    }
    if (projeto.linkDemo) {
        linksHtml.push(`<a href="${projeto.linkDemo}" target="_blank" rel="noopener noreferrer" class="modal-link-btn secondary"><i class="fas fa-external-link-alt"></i> Acessar Demonstração</a>`);
    }
    if (projeto.linkVideo) {
        linksHtml.push(`<a href="${projeto.linkVideo}" target="_blank" rel="noopener noreferrer" class="modal-link-btn video"><i class="fab fa-youtube"></i> Assistir Vídeo</a>`);
    }
    const temQualquerLink = projeto.linkGithub || projeto.linkDemo || projeto.linkVideo || projeto.downloadPdf || (projeto.pdfs && Array.isArray(projeto.pdfs) && projeto.pdfs.length > 0);
    if (!temQualquerLink) {
        linksHtml.push(`<span style="font-size: 0.9rem; color: var(--cor-text-light); font-style: italic;">Projeto sem links publicados.</span>`);
    }

    let sectionScreenshots = '';
    if (projeto.screenshots && projeto.screenshots.length > 0) {
        sectionScreenshots = `
            <div class="modal-section">
                <h3><i class="fas fa-images"></i> Screenshots do Projeto</h3>
                <div class="modal-screenshots">
                    ${projeto.screenshots.map(src => `<img src="${src}" alt="Screenshot do projeto" loading="lazy">`).join('')}
                </div>
            </div>`;
    } else if (projeto.pdfs && Array.isArray(projeto.pdfs) && projeto.pdfs.length > 0) {
        sectionScreenshots = `
            <div class="modal-section">
                <h3><i class="fas fa-file-pdf"></i> Arquivos do Projeto</h3>
                <p>Baixe o livro completo do sistema de RPG em PDF — escolha uma das versões disponíveis:</p>
                ${projeto.pdfs.map(pdf => `
                    <div style="margin-top: 1rem;">
                        <a href="${pdf.caminho}" download class="modal-link-btn primary" style="background: ${pdf.destaque ? 'var(--cor-secondary)' : 'var(--cor-tertiary)'};"><i class="fas fa-download"></i> Baixar ${pdf.label}</a>
                    </div>
                `).join('')}
            </div>`;
    } else if (projeto.downloadPdf) {
        sectionScreenshots = `
            <div class="modal-section">
                <h3><i class="fas fa-file-pdf"></i> Arquivo do Projeto</h3>
                <p>Baixe o livro completo do sistema de RPG em PDF abaixo.</p>
                <div style="margin-top: 1rem;">
                    <a href="${projeto.downloadPdf}" download class="modal-link-btn primary" style="background: var(--cor-secondary);"><i class="fas fa-download"></i> Baixar PDF</a>
                </div>
            </div>`;
    }

    modalBody.innerHTML = `
        <div class="modal-body-header">
            <img src="${projeto.imagem}" alt="${projeto.nome}">
        </div>
        <div class="modal-body-info">
            <h2>${projeto.nome}</h2>
            <div class="modal-tech-tags">
                ${projeto.tecnologias.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>

            <div class="modal-section">
                <h3><i class="fas fa-align-left"></i> Descrição</h3>
                <p>${projeto.descricao}</p>
            </div>

            <div class="modal-section">
                <h3><i class="fas fa-user-tie"></i> Minha Participação</h3>
                <p>${projeto.participacao}</p>
            </div>

            <div class="modal-section">
                <h3><i class="fas fa-tools"></i> Tecnologias Utilizadas</h3>
                <ul>
                    ${projeto.tecnologiasUtilizadas.map(t => `<li>${t}</li>`).join('')}
                </ul>
            </div>

            ${sectionScreenshots}

            <div class="modal-links">
                ${linksHtml.join('')}
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function fecharModal() {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

document.querySelectorAll('[data-close-modal]').forEach(el => {
    el.addEventListener('click', fecharModal);
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        fecharModal();
    }
    if (e.key === 'Escape' && galeriaModal && galeriaModal.classList.contains('active')) {
        fecharGaleriaModal();
    }
    if (e.key === 'Escape' && screenshotLightbox && screenshotLightbox.classList.contains('active')) {
        fecharScreenshotLightbox();
    }
});
/* #endregion */

/* #region Modal Lightbox da Galeria */
const galeriaModal = document.getElementById('galeriaModal');
const galeriaModalImg = document.getElementById('galeriaModalImg');
const galeriaItems = document.querySelectorAll('.galeria-item');

function abrirGaleriaModal(imgSrc, alt) {
    if (!galeriaModalImg || !galeriaModal) return;
    galeriaModalImg.src = imgSrc;
    galeriaModalImg.alt = alt || 'Imagem da galeria';
    galeriaModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function fecharGaleriaModal() {
    if (!galeriaModal) return;
    galeriaModal.classList.remove('active');
    document.body.style.overflow = '';
}

galeriaItems.forEach((item, idx) => {
    const img = item.querySelector('img, svg');
    if (!img) return;

    let src = img.tagName === 'IMG' ? img.src : img.outerHTML;
    let alt = img.tagName === 'IMG' ? img.alt : `Arte ${idx + 1}`;

    item.style.cursor = 'pointer';
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');
    item.setAttribute('aria-label', `Abrir imagem ${alt} em tamanho maior`);

    const abrir = () => {
        if (img.tagName === 'IMG') {
            abrirGaleriaModal(img.src, img.alt);
        } else {
            const dataUri = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(img.outerHTML);
            abrirGaleriaModal(dataUri, alt);
        }
    };

    item.addEventListener('click', abrir);
    item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            abrir();
        }
    });
});

if (galeriaModal) {
    galeriaModal.querySelectorAll('[data-close-modal]').forEach(el => {
        el.addEventListener('click', fecharGaleriaModal);
    });
}
/* #endregion */

/* #region Lightbox de Screenshots */
const screenshotLightbox = document.getElementById('screenshotLightbox');
const screenshotLightboxImg = document.getElementById('screenshotLightboxImg');

function abrirScreenshotLightbox(src, alt) {
    if (!screenshotLightboxImg || !screenshotLightbox) return;
    screenshotLightboxImg.src = src;
    screenshotLightboxImg.alt = alt || 'Screenshot do projeto';
    screenshotLightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function fecharScreenshotLightbox() {
    if (!screenshotLightbox) return;
    screenshotLightbox.classList.remove('active');
    document.body.style.overflow = '';
}

document.addEventListener('click', (e) => {
    const img = e.target.closest('.modal-screenshots img');
    if (img) {
        abrirScreenshotLightbox(img.currentSrc || img.src, img.alt);
    }
});

if (screenshotLightbox) {
    screenshotLightbox.querySelectorAll('[data-screenshot-close]').forEach(el => {
        el.addEventListener('click', fecharScreenshotLightbox);
    });
}
/* #endregion */

/* #region Toggle Certificados */
function toggleCertificado(btn) {
    if (!btn) return;
    const targetId = btn.dataset.target;
    const target = targetId ? document.getElementById(targetId) : null;
    const spanLabel = btn.querySelector('span');
    if (!target || !spanLabel) return;

    const expanded = btn.getAttribute('aria-expanded') === 'true';
    const willOpen = !expanded;

    btn.setAttribute('aria-expanded', String(willOpen));
    target.setAttribute('data-collapsed', String(!willOpen));
    spanLabel.textContent = willOpen ? 'Ocultar certificado' : 'Mostrar certificado';
}

document.addEventListener('click', (e) => {
    const btn = e.target.closest('.cert-toggle');
    if (btn) toggleCertificado(btn);
});

document.addEventListener('keydown', (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.classList && e.target.classList.contains('cert-toggle')) {
        e.preventDefault();
        toggleCertificado(e.target);
    }
});
/* #endregion */

/* #region Inicialização */
document.addEventListener('DOMContentLoaded', () => {
    renderProjetos();
});
/* #endregion */
