import { withBasePath } from '@/lib/base-path';

export default function Header() {
  const html = `
    <div class="container flex items-center justify-between">
      <a href="${withBasePath('/')}" id="header-logo" class="header-logo">DOMAINE DE LAPISTOULE</a>
      <nav class="hidden md:flex items-center gap-lg">
        <a href="${withBasePath('/')}" class="nav-link" data-link="/">Accueil</a>
        <a href="${withBasePath('/domaine/')}" class="nav-link" data-link="/domaine/">Le Domaine</a>
        <a href="${withBasePath('/vins/')}" class="nav-link" data-link="/vins/">Nos Vins</a>
        <a href="${withBasePath('/visites/')}" class="nav-link" data-link="/visites/">Visites</a>
        <a href="${withBasePath('/contact/')}" class="nav-link" data-link="/contact/">Contact</a>
        <button id="header-cta" class="btn btn-outline-light header-cta" type="button">
          <i data-lucide="shopping-bag" width="16"></i>
          <span>Commander</span>
        </button>
      </nav>
      <button id="mobile-menu-btn" class="mobile-menu-btn md:hidden" aria-label="Ouvrir le menu de navigation" type="button">
        <i data-lucide="menu" id="menu-icon" width="28" class="menu-icon"></i>
      </button>
    </div>

    <div id="mobile-menu" class="mobile-menu-overlay" role="dialog" aria-modal="true" aria-label="Menu de navigation mobile">
      <div class="mobile-menu-content">
        <nav class="flex flex-col items-center gap-md">
          <a href="${withBasePath('/')}" class="mobile-nav-link">Accueil</a>
          <a href="${withBasePath('/domaine/')}" class="mobile-nav-link">Le Domaine</a>
          <a href="${withBasePath('/vins/')}" class="mobile-nav-link">Nos Vins</a>
          <a href="${withBasePath('/visites/')}" class="mobile-nav-link">Visites</a>
          <a href="${withBasePath('/contact/')}" class="mobile-nav-link">Contact</a>
        </nav>

        <button class="btn btn-primary mobile-menu-cta" type="button">
          <i data-lucide="shopping-bag" width="20"></i>
          <span>Commander</span>
        </button>

        <div class="mobile-menu-footer flex flex-col items-center gap-sm">
          <a href="tel:0565201262" class="text-sm font-medium tracking-wide">05 65 20 12 62</a>
          <p class="text-sm text-center opacity-70">Lieu-dit La Pistoule<br>46140 Luzech</p>
          <div class="flex gap-md mt-sm">
            <a href="https://www.instagram.com/domainedelapistoule/" target="_blank" rel="noreferrer"><i data-lucide="instagram" width="20"></i></a>
            <a href="https://www.facebook.com/domainedelapistoule/" target="_blank" rel="noreferrer"><i data-lucide="facebook" width="20"></i></a>
          </div>
        </div>
      </div>
    </div>
  `;

  return <header id="main-header" className="main-header" dangerouslySetInnerHTML={{ __html: html }} />;
}
