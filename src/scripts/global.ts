import { createIcons, icons } from 'lucide';

async function injectHTML(filePath: string, elementId: string) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.statusText}`);
        }
        const text = await response.text();
        const element = document.getElementById(elementId);
        if (element) {
            element.innerHTML = text;
        } else {
            console.error(`Element with ID #${elementId} not found.`);
        }
    } catch (error) {
        console.error(`Error injecting HTML from ${filePath}:`, error);
    }
}

export async function initGlobal() {
    console.log('InitGlobal: Starting injection...');

    await Promise.all([
        injectHTML('/src/snippets/header.html', 'main-header'),
        injectHTML('/src/snippets/footer.html', 'footer')
    ]);
    
    console.log('InitGlobal: Header and Footer injected.');

    setActiveLink();

    try {
        console.log('InitGlobal: Attempting to create icons...');
        createIcons({
            icons: {
                Menu: icons.Menu,
                X: icons.X,
                ShoppingBag: icons.ShoppingBag,
                Instagram: icons.Instagram,
                Facebook: icons.Facebook,
                MapPin: icons.MapPin,
                Phone: icons.Phone,
                Mail: icons.Mail,
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
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const links = document.querySelectorAll('.nav-link');
        links.forEach(link => {
            const linkPath = link.getAttribute('href');
            if (linkPath === currentPath) {
                link.classList.add('active');
            }
        });
    } catch (e) {
        console.warn('InitGlobal: Error setting active link:', e);
    }
}
