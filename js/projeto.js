/* ========================================================
   Página de Detalhes do Projeto
   ======================================================== */

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

if (screenshotLightbox) {
    screenshotLightbox.querySelectorAll('[data-screenshot-close]').forEach(el => {
        el.addEventListener('click', fecharScreenshotLightbox);
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && screenshotLightbox && screenshotLightbox.classList.contains('active')) {
        fecharScreenshotLightbox();
    }
});

document.addEventListener('click', (e) => {
    const img = e.target.closest('.projeto-screenshots img');
    if (img) {
        abrirScreenshotLightbox(img.currentSrc || img.src, img.alt);
    }
});
/* #endregion */

/* #region Renderização do Projeto */
function renderProjeto() {
    const container = document.getElementById('projetoConteudo');
    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));

    const projeto = (window.projetos || []).find(p => p.id === id);

    if (!projeto) {
        container.innerHTML = `
            <div class="projeto-nao-encontrado">
                <h2><i class="fas fa-exclamation-triangle"></i> Projeto não encontrado</h2>
                <p>O projeto solicitado não existe. Volte para a lista de projetos e tente novamente.</p>
                <a href="index.html#projetos" class="modal-link-btn primary" style="margin-top: 1rem;">
                    <i class="fas fa-arrow-left"></i> Voltar para projetos
                </a>
            </div>`;
        return;
    }

    document.title = `${projeto.nome} | Ricardo Palma Garcia de Campos`;

    const linksHtml = [];
    if (projeto.linkGithub) {
        linksHtml.push(`<a href="${projeto.linkGithub}" target="_blank" rel="noopener noreferrer" class="modal-link-btn primary"><i class="fab fa-github"></i> Ver Código no GitHub</a>`);
    }
    if (projeto.linkDemo) {
        linksHtml.push(`<a href="${projeto.linkDemo}" target="_blank" rel="noopener noreferrer" class="modal-link-btn secondary"><i class="fas fa-external-link-alt"></i> Acessar Demonstração</a>`);
    }
    if (projeto.linkVideo) {
        linksHtml.push(`<a href="${projeto.linkVideo}" target="_blank" rel="noopener noreferrer" class="modal-link-btn video"><i class="fab fa-youtube"></i> Assistir vídeo</a>`);
    }
    const temQualquerLink = projeto.linkGithub || projeto.linkDemo || projeto.linkVideo || projeto.downloadPdf || (projeto.pdfs && Array.isArray(projeto.pdfs) && projeto.pdfs.length > 0);
    if (!temQualquerLink) {
        linksHtml.push(`<span style="font-size: 0.9rem; color: var(--cor-text-light); font-style: italic;">Projeto sem links publicados.</span>`);
    }

    const sections = [];

    if (projeto.videos && Array.isArray(projeto.videos) && projeto.videos.length > 0) {
        sections.push(`
            <div class="projeto-section">
                <h3><i class="fas fa-film"></i> Teaser do Projeto</h3>
                <div class="projeto-videos">
                    ${projeto.videos.map(v => `
                        <video controls preload="metadata">
                            <source src="${v.src}" type="${v.type || 'video/mp4'}">
                            Seu navegador não suporta vídeos HTML5.
                        </video>
                    `).join('')}
                </div>
            </div>`);
    }

    if (projeto.screenshots && projeto.screenshots.length > 0) {
        sections.push(`
            <div class="projeto-section">
                <h3><i class="fas fa-images"></i> Screenshots do Projeto</h3>
                <div class="projeto-screenshots">
                    ${projeto.screenshots.map(src => `<img src="${src}" alt="Screenshot do projeto" loading="lazy">`).join('')}
                </div>
            </div>`);
    } else if (projeto.pdfs && Array.isArray(projeto.pdfs) && projeto.pdfs.length > 0) {
        sections.push(`
            <div class="projeto-section">
                <h3><i class="fas fa-file-pdf"></i> Arquivos do Projeto</h3>
                <p>Baixe o livro completo do sistema de RPG em PDF, escolha uma das versões disponíveis:</p>
                ${projeto.pdfs.map(pdf => `
                    <div style="margin-top: 1rem;">
                        <a href="${pdf.caminho}" download class="modal-link-btn primary" style="background: ${pdf.destaque ? 'var(--cor-secondary)' : 'var(--cor-tertiary)'};">
                            <i class="fas fa-download"></i> Baixar ${pdf.label}
                        </a>
                    </div>
                `).join('')}
            </div>`);
    } else if (projeto.downloadPdf) {
        sections.push(`
            <div class="projeto-section">
                <h3><i class="fas fa-file-pdf"></i> Arquivo do Projeto</h3>
                <p>Baixe o livro completo do sistema de RPG em PDF abaixo.</p>
                <div style="margin-top: 1rem;">
                    <a href="${projeto.downloadPdf}" download class="modal-link-btn primary" style="background: var(--cor-secondary);">
                        <i class="fas fa-download"></i> Baixar PDF
                    </a>
                </div>
            </div>`);
    }

    container.innerHTML = `
        <div class="projeto-detalhe-header">
            <img src="${projeto.imagem}" alt="${projeto.nome}">
        </div>
        <div class="projeto-detalhe-info">
            <h2>${projeto.nome}</h2>
            <div class="modal-tech-tags">
                ${projeto.tecnologias.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>

            <div class="projeto-section">
                <h3><i class="fas fa-align-left"></i> Descrição</h3>
                <p>${projeto.descricao}</p>
            </div>

            <div class="projeto-section">
                <h3><i class="fas fa-user-tie"></i> Minha Participação</h3>
                <p>${projeto.participacao}</p>
            </div>

            <div class="projeto-section">
                <h3><i class="fas fa-tools"></i> Tecnologias Utilizadas</h3>
                <ul>
                    ${projeto.tecnologiasUtilizadas.map(t => `<li>${t}</li>`).join('')}
                </ul>
            </div>

            ${sections.join('')}

            <div class="modal-links">
                ${linksHtml.join('')}
            </div>
        </div>
    `;
}
/* #endregion */

/* #region Inicialização */
document.addEventListener('DOMContentLoaded', renderProjeto);
/* #endregion */
