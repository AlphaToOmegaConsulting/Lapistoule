import logoSombre from '../../../assets/logo_sombre.webp';

export const HEADER_TEMPLATE = `
    <div class="container flex items-center justify-between">
      <a href="index.html" id="header-logo" class="header-logo">
        DOMAINE DE LAPISTOULE
      </a>
      <nav class="hidden md:flex items-center gap-lg">
        <a href="index.html" class="nav-link" data-link="index.html">Accueil</a>
        <a href="domaine.html" class="nav-link" data-link="domaine.html">Le Domaine</a>
        <a href="vins.html" class="nav-link" data-link="vins.html">Nos Vins</a>
        <a href="visites.html" class="nav-link" data-link="visites.html">Visites</a>
        <a href="contact.html" class="nav-link" data-link="contact.html">Contact</a>
        <button id="header-cta" class="btn btn-outline-light header-cta">
          <i data-lucide="shopping-bag" width="16"></i>
          <span>Commander</span>
        </button>
      </nav>
      <button id="mobile-menu-btn" class="mobile-menu-btn md:hidden">
        <i data-lucide="menu" id="menu-icon" width="28" class="menu-icon text-stone-white"></i>
      </button>
    </div>

    <div id="mobile-menu" class="mobile-menu-overlay">
      <button id="mobile-menu-close" class="mobile-menu-close">
        <i data-lucide="x" width="32" class="text-anthracite"></i>
      </button>
      <a href="index.html" class="mobile-nav-link">Accueil</a>
      <a href="domaine.html" class="mobile-nav-link">Le Domaine</a>
      <a href="vins.html" class="mobile-nav-link">Nos Vins</a>
      <a href="visites.html" class="mobile-nav-link">Visites</a>
      <a href="contact.html" class="mobile-nav-link">Contact</a>
      <button class="btn btn-outline-dark btn-square">Commander</button>
    </div>
`;

export const FOOTER_TEMPLATE = `
    <div class="container">
      <div class="grid grid-4">
        <div>
          <img src="${logoSombre}" alt="Domaine de Lapistoule" class="footer-logo-img" style="margin-bottom: 1rem; height: 3rem;" />
          <p class="text-light" style="font-size: 0.875rem; opacity: 0.6; margin-bottom: 1.5rem;">
            Vignerons indepedants a Luzech.<br />AOC Cahors & Cotes du Lot.
          </p>
          <div class="flex gap-md">
            <a href="https://www.instagram.com/domainedelapistoule/" target="_blank" rel="noopener" aria-label="Instagram" class="hover:text-gold transition-colors">
              <i data-lucide="instagram" width="20"></i>
            </a>
            <a href="https://www.facebook.com/domainedelapistoule/" target="_blank" rel="noopener" aria-label="Facebook" class="hover:text-gold transition-colors">
              <i data-lucide="facebook" width="20"></i>
            </a>
          </div>
        </div>
        <div>
          <h4 class="footer-heading">Navigation</h4>
          <ul class="footer-links">
            <li><a href="index.html">Accueil</a></li>
            <li><a href="domaine.html">Le Domaine</a></li>
            <li><a href="vins.html">Nos Vins</a></li>
            <li><a href="visites.html">Visites & Degustation</a></li>
          </ul>
        </div>
        <div>
          <h4 class="footer-heading">Contact</h4>
          <ul class="footer-links">
            <li class="flex gap-sm"><i data-lucide="map-pin" width="18"
                style="color: var(--color-primary);"></i><span>Lieu-dit La Pistoule,<br />46140 Luzech, France</span>
            </li>
            <li class="flex gap-sm"><i data-lucide="phone" width="18"
                style="color: var(--color-primary);"></i><span>05 65 20 12 62</span></li>
            <li class="flex gap-sm"><i data-lucide="mail" width="18"
                style="color: var(--color-primary);"></i><span>contact@domainedelapistoule.com</span></li>
          </ul>
        </div>
        <div>
          <h4 class="footer-heading">Horaires</h4>
          <p class="text-light" style="font-size: 0.875rem; opacity: 0.7; line-height: 1.6;">
            <strong style="color: var(--color-stone-white);">Ouvert tous les jours</strong><br />
            Il est preferable de nous contacter avant votre venue pour vous assurer le meilleur accueil.
          </p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 Domaine de Lapistoule. Tous droits reserves.</p>
        <div class="flex gap-lg">
          <a href="#">Mentions Legales</a>
          <a href="#">Plan du site</a>
          <a href="#">CGV</a>
        </div>
      </div>
    </div>
    
    <!-- Global Components (Back to Top & Lightbox) -->
    <button id="back-to-top" class="back-to-top" aria-label="Retour en haut">
        <i data-lucide="arrow-up" width="24"></i>
    </button>

    <div id="lightbox" class="lightbox">
        <div class="lightbox-content">
            <button id="lightbox-close" class="lightbox-close">
                <i data-lucide="x" width="32"></i>
            </button>
            <img id="lightbox-img" class="lightbox-img" src="" alt="Agrandissement" />
        </div>
    </div>
`;
