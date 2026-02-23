import { createIcons, icons } from 'lucide';

function normalizePathname(pathname: string): string {
  let value = pathname;
  if (!value.startsWith('/')) value = `/${value}`;
  if (value !== '/' && value.endsWith('/')) value = value.slice(0, -1);
  return value;
}

function getPageKey(pathname: string): string {
  if (pathname === '/') return 'home';
  if (pathname === '/domaine') return 'domaine';
  if (pathname === '/vins') return 'vins';
  if (pathname === '/visites') return 'visites';
  if (pathname === '/contact') return 'contact';
  return 'home';
}

const normalizedPath = normalizePathname(window.location.pathname || '/');
document.body.dataset.page = getPageKey(normalizedPath);

const setActiveLink = () => {
  const current = normalizedPath === '/' ? '/' : `${normalizedPath}/`;
  document.querySelectorAll<HTMLElement>('.nav-link').forEach((link) => {
    const target = link.getAttribute('data-link');
    link.classList.toggle('active', target === current);
  });
};

const initializeIcons = () => {
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
      ArrowUp: icons.ArrowUp,
      Quote: icons.Quote,
      ChevronsDown: icons.ChevronsDown,
      Leaf: icons.Leaf,
      FileDown: icons.FileDown,
      Clock: icons.Clock,
    },
  });
};

setActiveLink();
initializeIcons();

const header = document.getElementById('main-header');
const onScrollHeader = () => {
  if (!header) return;
  if (window.scrollY > 50) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
};
window.addEventListener('scroll', onScrollHeader);
onScrollHeader();

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');

const toggleMenu = () => {
  if (!mobileMenu || !mobileMenuBtn || !header || !menuIcon) return;
  const isOpen = mobileMenu.classList.contains('open');
  if (isOpen) {
    mobileMenu.classList.remove('open');
    header.classList.remove('mobile-menu-open');
    document.body.style.overflow = '';
    menuIcon.setAttribute('data-lucide', 'menu');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
  } else {
    mobileMenu.classList.add('open');
    header.classList.add('mobile-menu-open');
    document.body.style.overflow = 'hidden';
    menuIcon.setAttribute('data-lucide', 'x');
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
  }
  initializeIcons();
};

mobileMenuBtn?.setAttribute('aria-expanded', 'false');
mobileMenuBtn?.addEventListener('click', () => toggleMenu());
mobileMenu?.addEventListener('click', (event) => {
  if (event.target === mobileMenu && mobileMenu?.classList.contains('open')) toggleMenu();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && mobileMenu?.classList.contains('open')) toggleMenu();
});

const mobileClickables = mobileMenu?.querySelectorAll('a, .mobile-menu-cta') ?? [];
mobileClickables.forEach((element) => {
  element.addEventListener('click', () => {
    if (mobileMenu?.classList.contains('open')) toggleMenu();
  });
});

const onPageTransitionClick = (event: Event) => {
  const link = event.currentTarget as HTMLAnchorElement;
  if (
    link.hostname === window.location.hostname &&
    !link.hash &&
    link.target !== '_blank' &&
    !link.hasAttribute('download')
  ) {
    event.preventDefault();
    const href = link.href;
    document.body.classList.add('fade-out');
    setTimeout(() => {
      window.location.href = href;
    }, 350);
  }
};

const transitionLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('a'));
transitionLinks.forEach((link) => link.addEventListener('click', onPageTransitionClick));

const backToTopBtn = document.getElementById('back-to-top');
const onScrollBackToTop = () => {
  if (!backToTopBtn) return;
  if (window.scrollY > 300) backToTopBtn.classList.add('visible');
  else backToTopBtn.classList.remove('visible');
};
window.addEventListener('scroll', onScrollBackToTop);
backToTopBtn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
onScrollBackToTop();

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img') as HTMLImageElement | null;
const lightboxClose = document.getElementById('lightbox-close');

const openLightbox = (event: Event) => {
  if (!lightbox || !lightboxImg) return;
  const source = event.currentTarget as HTMLImageElement;
  lightboxImg.src = source.src;
  lightbox.classList.add('open');
};

const closeLightbox = () => {
  if (!lightbox || !lightboxImg) return;
  lightbox.classList.remove('open');
  setTimeout(() => {
    lightboxImg.src = '';
  }, 300);
};

const lightboxTargets = Array.from(
  document.querySelectorAll<HTMLImageElement>('.wine-card .wine-image-wrapper img, .product-image img'),
);
lightboxTargets.forEach((image) => {
  image.style.cursor = 'zoom-in';
  image.addEventListener('click', openLightbox);
});

lightboxClose?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && lightbox?.classList.contains('open')) closeLightbox();
});

const revealTargets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: '0px' },
);
revealTargets.forEach((element) => revealObserver.observe(element));

if (document.body.dataset.page === 'vins') {
  const vinsTargets = document.querySelectorAll('.product-block, .interlude-philosophie, .hero-content');
  const vinsObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );
  vinsTargets.forEach((target) => {
    target.classList.add('fade-element');
    vinsObserver.observe(target);
  });
}

if (document.body.dataset.page === 'visites') {
  const indicator = document.querySelector('.scroll-indicator');
  indicator?.addEventListener('click', () => {
    const nextSection = document.querySelector('section:nth-of-type(2)');
    if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
  });
}

if (document.body.dataset.page === 'contact') {
  const form = document.querySelector('form');
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Merci pour votre message ! (Simulation)');
  });
}

const lazyImages = document.querySelectorAll<HTMLImageElement>('img[data-src]');
if ('IntersectionObserver' in window) {
  const lazyObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const image = entry.target as HTMLImageElement;
        if (image.dataset.src) image.src = image.dataset.src;
        if (image.dataset.srcset) image.srcset = image.dataset.srcset;
        image.classList.remove('lazy-loading');
        image.classList.add('lazy-loaded');
        observer.unobserve(image);
      });
    },
    { rootMargin: '100px', threshold: 0.01 },
  );
  lazyImages.forEach((image) => {
    image.classList.add('lazy-loading');
    lazyObserver.observe(image);
  });
}
