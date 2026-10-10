/* ========================================================
   Portfólio - Script Principal
   ======================================================== */

/* #region Renderização dos Cards */
function renderProjetos() {
    const grid = document.getElementById('projetosGrid');
    if (!grid || !window.projetos) return;

    grid.innerHTML = window.projetos.map(projeto => `
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
            window.location.href = `projeto.html?id=${id}`;
        });
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const id = parseInt(card.dataset.projetoId);
                window.location.href = `projeto.html?id=${id}`;
            }
        });
    });
}
/* #endregion */

/* #region Modal Lightbox da Galeria */
const galeriaModal = document.getElementById('galeriaModal');
const galeriaModalImg = document.getElementById('galeriaModalImg');

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

document.querySelectorAll('.galeria-item').forEach((item, idx) => {
    if (item.classList.contains('galeria-video')) return;

    const img = item.querySelector('img, svg');
    if (!img) return;

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
    if (e.key === 'Escape' && galeriaModal && galeriaModal.classList.contains('active')) {
        fecharGaleriaModal();
    }
});
/* #endregion */

/* #region Inicialização */
document.addEventListener('DOMContentLoaded', () => {
    renderProjetos();
});
/* #endregion */
