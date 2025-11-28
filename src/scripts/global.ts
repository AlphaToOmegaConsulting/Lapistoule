import { createIcons, icons } from 'lucide';
import { HEADER_TEMPLATE, FOOTER_TEMPLATE } from '../components/layout-templates';

export function initGlobal() {
    console.log('InitGlobal: Starting injection...');
    
    try {
        // 1. Inject Layout (Header & Footer)
        const headerEl = document.getElementById('main-header');
        if (headerEl) {
            headerEl.innerHTML = HEADER_TEMPLATE;
            console.log('InitGlobal: Header injected successfully.');
            setActiveLink();
        } else {
            console.error('InitGlobal: Header element #main-header not found!');
        }

        const footerEl = document.getElementById('footer');
        if (footerEl) {
            footerEl.innerHTML = FOOTER_TEMPLATE;
            console.log('InitGlobal: Footer injected successfully.');
        }
    } catch (e) {
        console.error('InitGlobal: Error during HTML injection:', e);
    }

    // 2. Initialize Lucide icons globally (after injection!)
    try {
        console.log('InitGlobal: Attempting to create icons...');
        createIcons({
            icons: {
                // Header/Footer icons
                Menu: icons.Menu,
                X: icons.X,
                ShoppingBag: icons.ShoppingBag,
                Instagram: icons.Instagram,
                Facebook: icons.Facebook,
                MapPin: icons.MapPin,
                Phone: icons.Phone,
                Mail: icons.Mail,
                // Content page icons
                ArrowDown: icons.ArrowDown,
                ArrowRight: icons.ArrowRight,
                Quote: icons.Quote,
                ChevronsDown: icons.ChevronsDown,
                Leaf: icons.Leaf,
                FileDown: icons.FileDown
            }
        });
        console.log('InitGlobal: Icons created successfully.');
    } catch (error) {
        console.error('InitGlobal: Error initializing icons (Lucide):', error);
    }

    console.log('Global logic initialized completely.');
}

function setActiveLink() {
    try {
        const currentPath = window.location.pathname;
        const page = currentPath.split('/').pop() || 'index.html';

        const links = document.querySelectorAll('.nav-link');
        links.forEach(link => {
            if (link.getAttribute('data-link') === page) {
                // link.classList.add('active'); 
            }
        });
    } catch (e) {
        console.warn('InitGlobal: Error setting active link:', e);
    }
}
