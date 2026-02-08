import type { Metadata } from 'next';
import { withBasePath } from '@/lib/base-path';

export const metadata: Metadata = {
  title: 'Domaine de Lapistoule - Vins de Cahors',
  description: 'La pierre entouree d eau. Decouvrez le domaine, nos cuvees et les visites a Luzech au coeur du vignoble de Cahors.',
  alternates: { canonical: '/' },
};

export default function Page() {
  return (
    <main>
        {/* HERO */}
        <section id="hero" className="hero">
          <div className="hero-bg">
            <video autoPlay muted loop playsInline poster={withBasePath('/assets/images/home/hero-vineyard-poster.jpg')}>
              <source src={withBasePath('/assets/videos/home/hero-background.mp4')} type="video/mp4" />
            </video>
            <div className="hero-overlay"></div>
            <div className="hero-gradient"></div>
          </div>
          <div className="hero-content">
            <h1 className="hero-title" data-reveal="fade-up">
              Domaine de Lapistoule
              <span className="hero-subtitle">L’Âme du Malbec au Cœur de Luzech</span>
            </h1>
            <p className="hero-text delay-300" data-reveal="fade-up">
              « La Pierre entourée d’Eau ». Vignerons de père en fils depuis 5 générations sur la presqu’île de Luzech. Une
              viticulture durable certifiée HVE.
            </p>
            <div className="flex flex-col md:flex gap-md justify-center delay-500" data-reveal="fade-up">
              <a href={withBasePath('/vins/')} className="btn btn-primary btn-square">Découvrir nos Cuvées</a>
              <a href={withBasePath('/visites/')} className="btn btn-outline-light btn-square">Nous rendre visite</a>
            </div>
          </div>
          <div className="scroll-indicator">
            <i data-lucide="arrow-down" width="32"></i>
          </div>
        </section>
    
        {/* PHILOSOPHIE (New Structure with Images) */}
        <section className="section section-bg-light section-spacing-large">
          <div className="container">
            <div className="text-center max-w-text mb-xl" data-reveal="fade-up">
              <span className="subtitle-small">Notre Philosophie</span>
              <h2 className="section-title mb-md">L'Esprit Lapistoule</h2>
              <p className="text-dark text-lg">
                Plus qu'un vin, nous cultivons un lien charnel avec notre terre. Trois piliers guident notre travail au
                quotidien.
              </p>
            </div>
    
            <div className="grid grid-3 gap-lg">
              {/* Feature 1 */}
              <div className="feature-card" data-reveal="fade-up">
                <div className="card-image-container">
                  <img src={withBasePath('/assets/images/domain/history-roots.webp')}
                    alt="Vignes anciennes du Domaine de Lapistoule, héritage familial depuis 1860" className="card-image" />
                </div>
                <h3 className="value-title" style={{}}>Héritage Séculaire</h3>
                <p className="text-dark opacity-80">
                  Depuis 1860, cinq générations se transmettent les secrets de nos parcelles. Une histoire de famille, de
                  Jean-Marc à Mathieu.
                </p>
              </div>
    
              {/* Feature 2 */}
              <div className="feature-card delay-200" data-reveal="fade-up">
                <div className="card-image-container">
                  <img src={withBasePath('/assets/images/domain/history-modernization.webp')}
                    alt="Vue panoramique du terroir de Luzech, vignoble sur la presqu'île entourée par le Lot"
                    className="card-image" />
                </div>
                <h3 className="value-title" style={{}}>Terroir Singulier</h3>
                <p className="text-dark opacity-80">
                  Niché sur l'isthme de Luzech, notre vignoble profite d'un microclimat unique, entre la fraîcheur du Lot et
                  la chaleur des causses.
                </p>
              </div>
    
              {/* Feature 3 */}
              <div className="feature-card delay-400" data-reveal="fade-up">
                <div className="card-image-container">
                  <img src={withBasePath('/assets/images/domain/history-sustainable.webp')}
                    alt="Vigneron dans les vignes pratiquant une viticulture durable certifiée Haute Valeur Environnementale"
                    className="card-image" />
                </div>
                <h3 className="value-title" style={{}}>Engagement HVE</h3>
                <p className="text-dark opacity-80">
                  Certifiés Haute Valeur Environnementale, nous préservons la biodiversité pour offrir des vins vivants et
                  sincères.
                </p>
              </div>
            </div>
    
            <div className="text-center mt-xl">
              <a href={withBasePath('/domaine/')} className="btn btn-outline-dark">En savoir plus sur le domaine</a>
            </div>
          </div>
        </section>
    
        {/* EXPERIENCE PREVIEW (Redesigned layout) */}
        <section className="section section-bg-green experience-section section-spacing-large">
          <div className="experience-bg-text">
            <img src={withBasePath('/assets/images/home/chai-barrels-background.jpg')} alt="" />
          </div>
          <div className="container relative">
            <div className="grid grid-2 items-center gap-xl">
              <div>
                <h2 className="hero-title mb-md" style={{}}>Vivez l'Expérience <br />Lapistoule
                </h2>
                <div className="divider-gold">
                </div>
                <p className="text-light text-lg">
                  Le vin se comprend mieux là où il naît. Nous vous accueillons toute l'année au chai. Profitez-en pour
                  découvrir le « tour de l’île » de Luzech à pied.
                </p>
                <div className="mt-md">
                  <a href={withBasePath('/visites/')} className="btn btn-primary btn-square">Réserver une visite</a>
                </div>
              </div>
              <div className="quote-box">
                <i data-lucide="quote" width="64"
                  style={{}}></i>
                <blockquote className="relative">
                  <p className="quote-text">
                    "Une superbe découverte au cœur de Luzech. Des vins authentiques et un accueil chaleureux."
                  </p>
                  <footer className="flex items-center gap-md">
                    <div style={{}}></div>
                    <cite className="uppercase tracking-widest text-light"
                      style={{}}>Un visiteur du domaine</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>
    
        {/* ACTUALITÉS (New Section) */}
        <section className="section section-spacing-large">
          <div className="container">
            <div className="text-center max-w-text mb-xl">
              <span className="subtitle-small">La Vie du Domaine</span>
              <h2 className="section-title mb-md">Actualités & Événements</h2>
            </div>
    
            <div className="grid grid-3 gap-lg">
              {/* News 1 */}
              <article className="news-card" data-reveal="fade-up">
                <span className="news-date">24 Septembre 2024</span>
                <h3 className="news-title">Début des Vendanges 2024</h3>
                <p className="news-excerpt">
                  Le millésime s'annonce prometteur. Nos équipes sont à pied d'œuvre pour récolter un Malbec à parfaite maturité.
                </p>
              </article>
    
              {/* News 2 */}
              <article className="news-card delay-200" data-reveal="fade-up">
                <span className="news-date">15 Août 2024</span>
                <h3 className="news-title">Soirée Jazz & Vin</h3>
                <p className="news-excerpt">
                  Retour en images sur notre soirée estivale. Dégustation de notre rosé Fleur de Pêcher sous les étoiles.
                </p>
              </article>
    
              {/* News 3 */}
              <article className="news-card delay-400" data-reveal="fade-up">
                <span className="news-date">10 Juin 2024</span>
                <h3 className="news-title">Médaille d'Or au Concours Général</h3>
                <p className="news-excerpt">
                  Notre Cuvée Tanays 2020 a été récompensée. Une fierté pour toute l'équipe du domaine.
                </p>
              </article>
            </div>
          </div>
        </section>
    
        {/* WINES PREVIEW */}
        <section className="section section-bg-alt section-spacing-large">
          <div className="container">
            <div className="text-center max-w-text mb-xl">
              <span className="subtitle-small">La Cave</span>
              <h2 className="value-title mb-md" style={{}}>L'Expression du Fruit</h2>
              <p className="text-dark text-lg opacity-80">Des rouges structurés de l'AOP Cahors aux
                blancs minéraux.</p>
            </div>
            <div className="wines-grid">
              {/* Card 1 */}
              <div className="wine-card" data-reveal="fade-up">
                <div className="wine-image-wrapper">
                  <img src={withBasePath('/assets/images/home/wine-bottle-cuvee-tanays.webp')}
                    alt="Bouteille Cuvée Tanays - AOP Cahors 100% Malbec, vin de garde du Domaine de Lapistoule"
                    className="wine-image" />
                  <div className="wine-badge">Vin de Garde</div>
                </div>
                <div className="wine-content">
                  <div>
                    <h3 className="wine-title">Cuvée Tanays</h3>
                    <p className="wine-desc">L'héritage. 100% Malbec, vieilles vignes, structuré et profond.</p>
                  </div>
                  <a href={withBasePath('/vins/')} className="btn btn-link">
                    Découvrir <i data-lucide="arrow-right" width="16"></i>
                  </a>
                </div>
              </div>
              {/* Card 2 */}
              <div className="wine-card delay-200" data-reveal="fade-up">
                <div className="wine-image-wrapper">
                  <img src={withBasePath('/assets/images/home/wine-bottle-le-pas-sage.webp')}
                    alt="Bouteille Le Pas Sage - AOP Cahors 100% Malbec élevé 12 mois en barrique" className="wine-image" />
                  <div className="wine-badge">Vin de Plaisir</div>
                </div>
                <div className="wine-content">
                  <div>
                    <h3 className="wine-title">Le Pas Sage</h3>
                    <p className="wine-desc">L'élégance boisée. 100% Malbec, 12 mois barrique, fruit intense.</p>
                  </div>
                  <a href={withBasePath('/vins/')} className="btn btn-link">
                    Découvrir <i data-lucide="arrow-right" width="16"></i>
                  </a>
                </div>
              </div>
              {/* Card 3 */}
              <div className="wine-card delay-300" data-reveal="fade-up">
                <div className="wine-image-wrapper">
                  <img src={withBasePath('/assets/images/home/wine-bottle-fleur-de-pecher.webp')}
                    alt="Bouteille Fleur de Pêcher - Rosé de saignée 100% Malbec, IGP Côtes du Lot" className="wine-image" />
                  <div className="wine-badge">Rosé Fruité</div>
                </div>
                <div className="wine-content">
                  <div>
                    <h3 className="wine-title">Fleur de Pêcher</h3>
                    <p className="wine-desc">Rosé 100% Malbec. Notes florales, fraîcheur et gourmandise.</p>
                  </div>
                  <a href={withBasePath('/vins/')} className="btn btn-link">
                    Découvrir <i data-lucide="arrow-right" width="16"></i>
                  </a>
                </div>
              </div>
              {/* Card 4 */}
              <div className="wine-card delay-400" data-reveal="fade-up">
                <div className="wine-image-wrapper">
                  <img src={withBasePath('/assets/images/home/wine-bottle-grain-de-blanc.webp')}
                    alt="Bouteille Grain de Blanc - Vin blanc sec IGP Côtes du Lot, Chardonnay et Viognier"
                    className="wine-image" />
                  <div className="wine-badge">Blanc Sec</div>
                </div>
                <div className="wine-content">
                  <div>
                    <h3 className="wine-title">Grain de Blanc</h3>
                    <p className="wine-desc">IGP Côtes du Lot. Chardonnay minéral, vif et élégant.</p>
                  </div>
                  <a href={withBasePath('/vins/')} className="btn btn-link">
                    Découvrir <i data-lucide="arrow-right" width="16"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center mt-xl">
              <a href={withBasePath('/vins/')} className="btn btn-primary btn-square">Accéder à toute la cave</a>
            </div>
          </div>
        </section>
    
        {/* LOCALISATION (New Section) */}
        <section className="section section-bg-light location-section section-spacing-large">
          <div className="container">
            <div className="grid grid-2 items-center gap-xl">
              <div>
                <span className="subtitle-small">Nous Trouver</span>
                <h2 className="section-title mb-md">Au Cœur du Quercy</h2>
                <p className="text-dark text-lg mb-lg">
                  Situé sur la presqu'île de Luzech, entouré par le Lot, notre domaine bénéficie d'un terroir exceptionnel.
                  À seulement 20 minutes de Cahors.
                </p>
                <ul className="mb-lg space-y-4">
                  <li className="flex items-start gap-md mb-sm">
                    <i data-lucide="map-pin" className="text-primary mt-1"></i>
                    <div>
                      <strong className="block text-dark">Domaine de Lapistoule</strong>
                      <span className="text-light">Lieu-dit La Pistoule, 46140 Luzech</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-md">
                    <i data-lucide="clock" className="text-primary mt-1"></i>
                    <div>
                      <strong className="block text-dark">Horaires d'ouverture</strong>
                      <span className="text-light">Ouvert tous les jours : 9h00 - 12h00 / 14h00 - 19h00. Merci de nous contacter avant votre venue.</span>
                    </div>
                  </li>
                </ul>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Domaine+de+Lapistoule,+Lieu-dit+La+Pistoule,+46140+Luzech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark"
                >
                  Itinéraire Google Maps
                </a>
              </div>
              <div className="location-map-container shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45686.97416738596!2d1.261273977536965!3d44.47895237910168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ac6506462719f1%3A0x406c69c21e64620!2s46140%20Luzech!5e0!3m2!1sfr!2sfr!4v1709300000000!5m2!1sfr!2sfr"
                  width="600" height="450" style={{}} allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </section>
    
        {/* FOOTER CTA */}
        <section className="section section-bg-light section-spacing-large"
          style={{}}>
          <div className="container text-center max-w-text">
            <h2 className="value-title mb-md" style={{}}>Prêt à déguster nos cuvées ?</h2>
            <p className="text-light text-lg mb-lg">Passez nous voir au domaine à Luzech ou
              contactez-nous.</p>
            <a href={withBasePath('/contact/')} className="btn btn-outline-dark btn-square">Planifier votre visite / Nous contacter</a>
          </div>
        </section>
      </main>
  );
}
