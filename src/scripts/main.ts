import '../styles/style.css';
import { initHeader } from './header';
import { initGlobal } from './global';

document.addEventListener('DOMContentLoaded', async () => {
    console.log('Main.ts: DOMContentLoaded fired. Starting app...');
    // 1. Initialize shared components
    initGlobal();
    initHeader();

    // 2. Router based on data-page attribute
    const page = document.body.dataset.page;

    try {
        switch (page) {
            case 'home':
                const { initPage: initHome } = await import('./page-index');
                initHome();
                break;
            case 'domaine':
                const { initPage: initDomaine } = await import('./page-domaine');
                initDomaine();
                break;
            case 'vins':
                const { initPage: initVins } = await import('./page-vins');
                initVins();
                break;
            case 'oenotourisme':
                const { initPage: initOeno } = await import('./page-oenotourisme');
                initOeno();
                break;
            case 'visites':
                const { initPage: initVisites } = await import('./page-visites');
                initVisites();
                break;
            case 'contact':
                const { initPage: initContact } = await import('./page-contact');
                initContact();
                break;
            default:
                console.warn(`No specific logic found for page: ${page}`);
        }
    } catch (error) {
        console.error('Error loading page script:', error);
    }
});
