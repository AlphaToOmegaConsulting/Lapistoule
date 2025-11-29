import '../styles/style.css';
import { initHeader } from './components/header';
import { initGlobal } from './global';
import { initHomePage } from './pages/home';
import { initDomainePage } from './pages/domaine';
import { initVinsPage } from './pages/vins';
import { initOenotourismePage } from './pages/oenotourisme';
import { initVisitesPage } from './pages/visites';
import { initContactPage } from './pages/contact';

const pageInitializers: { [key: string]: () => void } = {
    'home': initHomePage,
    'domaine': initDomainePage,
    'vins': initVinsPage,
    'oenotourisme': initOenotourismePage,
    'visites': initVisitesPage,
    'contact': initContactPage,
};

document.addEventListener('DOMContentLoaded', async () => {
    console.log('Main.ts: DOMContentLoaded fired. Starting app...');
    
    // 1. Initialize shared components
    await initGlobal();
    initHeader();

    // 2. Router based on data-page attribute
    const page = document.body.dataset.page;

    if (page && pageInitializers[page]) {
        pageInitializers[page]();
    } else {
        console.warn(`No specific logic found for page: ${page}`);
    }
});
