import { HEADER_TEMPLATE, FOOTER_TEMPLATE } from './layoutTemplates';

function setActiveLink() {
    const pageFromDataset = document.body.dataset.page || '';
    const current =
        pageFromDataset === 'home' || pageFromDataset === ''
            ? 'index.html'
            : `${pageFromDataset}.html`;

    document.querySelectorAll<HTMLElement>('.nav-link').forEach(link => {
        const target = link.getAttribute('data-link');
        link.classList.toggle('active', target === current);
    });
}

export function injectLayout() {
    try {
        const headerEl = document.getElementById('main-header');
        if (headerEl) {
            headerEl.innerHTML = HEADER_TEMPLATE;
            setActiveLink();
        } else {
            console.error('Header element #main-header not found');
        }

        const footerEl = document.getElementById('footer');
        if (footerEl) {
            footerEl.innerHTML = FOOTER_TEMPLATE;
        }
    } catch (e) {
        console.error("Erreur lors de l'injection header/footer:", e);
    }
}
