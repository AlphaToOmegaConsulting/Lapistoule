import type { Metadata } from 'next';
import { withBasePath } from '@/lib/base-path';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactez le Domaine de Lapistoule pour organiser une visite, une degustation ou obtenir des informations.',
  alternates: { canonical: '/contact/' },
};

export default function Page() {
  return (
    <main>
            {/* HERO */}
            <section className="hero">
                <div className="hero-bg">
                    <img src={withBasePath('/assets/images/domain/history-roots.webp')} alt="Vignes ancestrales du Domaine de Lapistoule, n'hésitez pas à nous contacter" />
                    <div className="hero-overlay"></div>
                    <div className="hero-gradient"></div>
                </div>
                <div className="hero-content">
                    <h1 className="hero-title" data-reveal="fade-up">Contactez-nous</h1>
                    <p className="hero-text delay-300" data-reveal="fade-up">
                        Une question ? Une visite ? Nous sommes à votre écoute.
                    </p>
                </div>
                <div className="scroll-indicator">
                    <i data-lucide="arrow-down" width="32" height="32"></i>
                </div>
            </section>
    
            {/* CONTACT FORM */}
            <section className="section section-bg-alt">
                <div className="container max-w-3xl">
                    <div className="contact-form-card" data-reveal="fade-up">
                        <form className="space-y-6">
                            <div className="grid grid-2 gap-md">
                                <div className="form-group">
                                    <label htmlFor="firstname" className="form-label">Prénom</label>
                                    <input type="text" id="firstname" className="form-input" placeholder="Votre prénom" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastname" className="form-label">Nom</label>
                                    <input type="text" id="lastname" className="form-input" placeholder="Votre nom" />
                                </div>
                            </div>
    
                            <div className="form-group">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" id="email" className="form-input" placeholder="votre@email.com" />
                            </div>
    
                            <div className="form-group">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea id="message" rows={6} className="form-textarea"
                                    placeholder="Comment pouvons-nous vous aider ?"></textarea>
                            </div>
    
                            <div className="text-center mt-md">
                                <button type="submit" className="btn btn-primary btn-square">Envoyer le message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
    
            {/* FOOTER CTA */}
            <section className="section section-bg-light" style={{}}>
                <div className="container text-center max-w-text">
                    <h2 className="value-title mb-md" style={{}}>Prêt à déguster nos cuvées ?
                    </h2>
                    <p className="text-light text-lg mb-lg">Passez nous voir au domaine à
                        Luzech ou contactez-nous.</p>
                    <a href={withBasePath('/contact/')} className="btn btn-outline-dark btn-square">Planifier votre visite / Nous
                        contacter</a>
                </div>
            </section>
        </main>
  );
}
