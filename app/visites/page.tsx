import type { Metadata } from 'next';
import { withBasePath } from '@/lib/base-path';

export const metadata: Metadata = {
  title: 'Visites & Rencontres',
  description: 'Rencontrez-nous au domaine a Luzech pour une degustation et decouvrez nos vins dans un cadre convivial.',
  alternates: { canonical: '/visites/' },
};

export default function Page() {
  return (
    <main>
            {/* HERO */}
            <section className="hero">
                <div className="hero-bg">
                    <img src={withBasePath('/assets/images/visits/visits-hero.png')} alt="Vue panoramique vignoble Cahors" />
                    <div className="hero-overlay"></div>
                    <div className="hero-gradient"></div>
                </div>
                <div className="hero-content">
                    <h1 className="hero-title" data-reveal="fade-up">
                        Visites & Rencontres
                        <span className="hero-subtitle">Rencontrons-nous au cour des vignes de Luzech.</span>
                    </h1>
                    <p className="hero-text delay-300" data-reveal="fade-up">
                        Poussez les portes du chai.
                    </p>
                </div>
                <div className="scroll-indicator">
                    <i data-lucide="arrow-down" width="32" height="32"></i>
                </div>
            </section>
    
            {/* L'EXPÉRIENCE (Side-by-side) */}
            <section className="section section-bg-light experience-section">
                <div className="container">
                    <div className="grid grid-2 items-center gap-xl">
                        <div className="image-wrapper" data-reveal="fade-right">
                            <img src={withBasePath('/assets/images/visits/visits-tasting.png')} alt="Dégustation au domaine" className="img-fluid rounded shadow-lg" />
                        </div>
                        <div className="text-wrapper delay-200" data-reveal="fade-left">
                            <h2 className="section-title text-dark">Dégustation & Découverte</h2>
                            <div className="separator-gold"></div>
                            <p className="text-dark experience-text">
                                Que vous soyez amateur ou connaisseur, nous prenons le temps de vous raconter notre terroir. 
                                Nous vous accueillons toute l'année pour vous faire partager notre passion, dans la simplicité et la convivialité.
                            </p>
                            <p className="text-dark experience-text mt-md">
                                Pour organiser votre venue ou une visite de groupe, contactez-nous directement.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
    
            {/* NOUS TROUVER & CONTACTER */}
            <section className="section section-bg-dark contact-block-section">
                <div className="container text-center">
                    <div className="contact-card" data-reveal="fade-up">
                        <h2 className="section-title text-gold mb-lg">Nous Contacter</h2>
                        
                        <div className="contact-info">
                            <a href="tel:+33565201262" className="contact-link phone-link">
                                <span className="icon">📞</span>
                                05 65 20 12 62
                            </a>
                            
                            <a href="mailto:contact@domainedelapistoule.com" className="contact-link email-link">
                                contact@domainedelapistoule.com
                            </a>
    
                            <div className="address-block mt-md">
                                <p className="address-text">Domaine de Lapistoule<br />Lieu-dit La Pistoule,<br />46140 Luzech, France</p>
                                <a href="https://maps.google.com/?q=Lieu-dit+La+Pistoule+46140+Luzech+France" target="_blank" rel="noopener noreferrer" className="map-link">Voir l'itinéraire</a>
                            </div>
    
                            <p className="opening-hours mt-md">
                                Ouvert tous les jours : 9h00 - 12h00 / 14h00 - 19h00. Merci de nous contacter avant votre venue pour vous assurer le meilleur accueil.
                            </p>
                        </div>
                        
                        <div className="mobile-action mt-lg display-mobile-only">
                            <a href="tel:+33565201262" className="btn btn-gold btn-large">Appeler le Domaine</a>
                        </div>
                    </div>
                </div>
            </section>
    
        </main>
  );
}
