import type { Metadata } from 'next';
import { withBasePath } from '@/lib/base-path';

export const metadata: Metadata = {
  title: 'Le Domaine',
  description: 'Decouvrez l histoire du Domaine de Lapistoule a Luzech, de 1860 a aujourd hui, entre tradition familiale et viticulture durable.',
  alternates: { canonical: '/domaine/' },
};

export default function Page() {
  return (
    <main>
        {/* HERO */}
        <section className="hero hero--short">
          <div className="hero-bg">
            <img src={withBasePath('/assets/images/domain/hero-vineyard.webp')} alt="Vignes anciennes du Domaine de Lapistoule à Luzech avec vue sur les terrasses argilo-calcaires" />
            <div className="hero-overlay"></div>
            <div className="hero-gradient"></div>
          </div>
          <div className="hero-content">
            <h1 className="hero-title" data-reveal="fade-up">
              L'Héritage Lapistoule
              <span className="hero-subtitle">Une Épopée Familiale au Cœur de Cahors</span>
            </h1>
            <p className="hero-text delay-300" data-reveal="fade-up">
              Plus d'un siècle de passion sur les terres de Luzech. Découvrez comment une simple polyculture est devenue, en 150 ans, un vignoble fier de son appellation.
            </p>
          </div>
          <a href="#history-start" className="scroll-indicator" aria-label="Accéder au contenu principal">
            <i data-lucide="arrow-down" width="32" height="32"></i>
          </a>
        </section>
    
        {/* 1860: ORIGINES */}
        <section id="history-start" className="section section-bg-light">
          <div className="container">
            <div className="grid grid-2 items-center gap-xl">
              <div data-reveal="fade-right">
                <img src={withBasePath('/assets/images/domain/history-roots.webp')} alt="Photographie historique des origines du Domaine de Lapistoule en 1860, polyculture traditionnelle" className="img-card-light" />
              </div>
              <div className="history-content delay-300" data-reveal="fade-left">
                <div className="date-separator"></div>
                <span className="history-date">1860 - Début XXe</span>
                <h2 className="section-title">Les Racines Profondes</h2>
                <p className="text-dark mb-md">
                  C’est au milieu du XIXe siècle, sous le Second Empire, que l’histoire familiale prend racine. À cette époque, le paysage de Luzech est bien différent. La vigne n'est qu'une culture parmi d'autres : on y cultive le tabac, les noyers, les pêchers et quelques rangs de vigne pour la consommation personnelle.
                </p>
                <p className="styled-quote">
                  C’est au tournant du XXe siècle que la vocation du domaine s'affirme. La vigne gagne du terrain sur les vergers, et les premières bouteilles "maison" voient le jour.
                </p>
              </div>
            </div>
          </div>
        </section>
    
        {/* 1970: MODERNISATION */}
        <section className="section section-bg-alt">
          <div className="container">
            <div className="grid grid-2 items-center gap-xl">
              <div className="order-2 md:order-1 history-content" data-reveal="fade-right">
                <div className="date-separator"></div>
                <span className="history-date">1970 - 1990</span>
                <h2 className="section-title">L'Impulsion de Jean-Marc</h2>
                <p className="mb-md">
                  Dans les années 70, le vignoble français se transforme, et Lapistoule aussi. Jean-Marc reprend les rênes avec une vision claire : moderniser pour mieux révéler le Malbec.
                </p>
                <ul className="list-check">
                  <li>Restructuration complète des parcelles</li>
                  <li>Construction d'un chai moderne</li>
                  <li>Création du premier espace de dégustation</li>
                </ul>
              </div>
              <div className="order-1 md:order-2 delay-300" data-reveal="fade-left">
                <img src={withBasePath('/assets/images/domain/history-modernization.webp')} alt="Construction du chai moderne dans les années 1970 sous l'impulsion de Jean-Marc" className="img-card-dark" />
              </div>
            </div>
          </div>
        </section>
    
        {/* 2019: DURABLE */}
        <section className="section section-bg-green">
          <div className="container">
            <div className="grid grid-2 items-center gap-xl">
              <div data-reveal="fade-right">
                <img src={withBasePath('/assets/images/domain/history-sustainable.webp')} alt="Mathieu, vigneron de la nouvelle génération, dans les vignes pratiquant une viticulture durable HVE" className="img-card-medium" />
              </div>
              <div className="sustainable-content delay-300" data-reveal="fade-left">
                <div className="date-separator"></div>
                <span className="history-date">2019 - Aujourd'hui</span>
                <h2 className="section-title text-light">Le Tournant Durable</h2>
                <p className="text-light mb-md">
                  En 2019, une nouvelle page s'écrit avec l'arrivée de Mathieu. Héritier du savoir-faire de Jean-Marc, il apporte une sensibilité nouvelle face aux défis climatiques et environnementaux.
                </p>
                <div className="bg-glass p-md rounded">
                  <h3 className="text-light text-lg mb-sm flex items-center gap-sm">
                    <i data-lucide="leaf" width="20" className="text-primary"></i> Certification HVE
                  </h3>
                  <p className="text-light text-sm opacity-80">
                    Le domaine est engagé dans une viticulture respectueuse : enherbement maîtrisé, réduction des intrants et respect des cycles naturels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    
        {/* CTA */}
        <section className="section section-visit section-bg-light text-center">
          <div className="container">
            <div className="visit-content">
              <h2 className="section-title">Venez goûter à notre histoire</h2>
              <p className="text-dark mb-lg">
                Notre histoire se déguste mieux un verre à la main. Passez nous voir au domaine pour découvrir le fruit de ce travail séculaire.
              </p>
              <div className="flex gap-md justify-center">
                <a href={withBasePath('/visites/')} className="btn btn-primary">Réserver une dégustation</a>
                <a href={withBasePath('/vins/')} className="btn btn-outline-dark">Découvrir nos vins</a>
              </div>
            </div>
          </div>
        </section>
    
      </main>
  );
}
