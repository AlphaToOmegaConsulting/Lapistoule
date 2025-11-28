import '../styles/style.css';
import { initHeader } from './components/header';
import { initGlobal } from './components/global';

type PageInitializer = () => Promise<void>;

const pageInitializers: Record<string, PageInitializer> = {
    home: async () => (await import('./pages/home')).initHomePage(),
    domaine: async () => (await import('./pages/domaine')).initDomainePage(),
    vins: async () => (await import('./pages/vins')).initVinsPage(),
    visites: async () => (await import('./pages/visites')).initVisitesPage(),
    contact: async () => (await import('./pages/contact')).initContactPage(),
};

document.addEventListener('DOMContentLoaded', async () => {
    initGlobal();
    initHeader();

    const page = document.body.dataset.page || '';
    const initPage = pageInitializers[page];

    if (initPage) {
        try {
            await initPage();
        } catch (error) {
            console.error('Error loading page script:', error);
        }
    } else {
        console.warn(`No specific logic found for page: ${page}`);
    }
});
