import { createIcons, icons } from 'lucide';

export function initHeader() {
    try {
        const header = document.getElementById('main-header');
        const menuIcon = document.getElementById('menu-icon');

        if (header) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
        }

        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = mobileMenu?.querySelectorAll('a');

        if (mobileMenuBtn && mobileMenu && menuIcon && header) {
            const toggleMenu = () => {
                const isOpen = mobileMenu.classList.contains('open');
                if (isOpen) {
                    mobileMenu.classList.remove('open');
                    header.classList.remove('mobile-menu-open');
                    menuIcon.setAttribute('data-lucide', 'menu');
                } else {
                    mobileMenu.classList.add('open');
                    header.classList.add('mobile-menu-open');
                    menuIcon.setAttribute('data-lucide', 'x');
                }
                createIcons({ icons: { Menu: icons.Menu, X: icons.X } });
            };

            mobileMenuBtn.addEventListener('click', toggleMenu);

            mobileLinks?.forEach(link => {
                link.addEventListener('click', () => {
                    if (mobileMenu.classList.contains('open')) {
                        toggleMenu();
                    }
                });
            });
        }

        createIcons({ icons: { Menu: icons.Menu, X: icons.X } });

    } catch (error) {
        console.error('Error in initHeader:', error);
    }
}
