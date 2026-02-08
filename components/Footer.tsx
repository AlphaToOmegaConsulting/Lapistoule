import { withBasePath } from '@/lib/base-path';

export default function Footer() {
  const html = `
    <div class="container">
      <div class="grid grid-4">
        <div>
          <img src="${withBasePath('/assets/brand/logo-dark.webp')}" alt="Domaine de Lapistoule" class="footer-logo-img" style="margin-bottom: 1rem; height: 3rem;" />
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
            <li><a href="${withBasePath('/')}">Accueil</a></li>
            <li><a href="${withBasePath('/domaine/')}">Le Domaine</a></li>
            <li><a href="${withBasePath('/vins/')}">Nos Vins</a></li>
            <li><a href="${withBasePath('/visites/')}">Visites & Degustation</a></li>
          </ul>
        </div>
        <div>
          <h4 class="footer-heading">Contact</h4>
          <ul class="footer-links">
            <li class="flex gap-sm"><i data-lucide="map-pin" width="18" style="color: var(--color-primary);"></i><span>Lieu-dit La Pistoule,<br />46140 Luzech, France</span></li>
            <li class="flex gap-sm"><i data-lucide="phone" width="18" style="color: var(--color-primary);"></i><span>05 65 20 12 62</span></li>
            <li class="flex gap-sm"><i data-lucide="mail" width="18" style="color: var(--color-primary);"></i><span>contact@domainedelapistoule.com</span></li>
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

    <button id="back-to-top" class="back-to-top" aria-label="Retour en haut" type="button">
      <i data-lucide="arrow-up" width="24"></i>
    </button>

    <div id="lightbox" class="lightbox">
      <div class="lightbox-content">
        <button id="lightbox-close" class="lightbox-close" type="button">
          <i data-lucide="x" width="32"></i>
        </button>
        <img id="lightbox-img" class="lightbox-img" src="" alt="Agrandissement" />
      </div>
    </div>
  `;

  return <footer id="footer" className="main-footer" dangerouslySetInnerHTML={{ __html: html }} />;
}
