import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales du site du Domaine de Lapistoule.',
  alternates: { canonical: '/mentions-legales/' },
};

export default function Page() {
  return (
    <main>
      <section className="section section-bg-light">
        <div className="container max-w-text">
          <h1 className="section-title mb-md">Mentions légales</h1>
          <p>
            <strong>Éditeur du site :</strong> Domaine de Lapistoule, Lieu-dit La Pistoule, 46140 Luzech,
            France.
          </p>
          <p>
            <strong>Téléphone :</strong> 05 65 20 12 62
          </p>
          <p>
            <strong>Email :</strong> contact@domainedelapistoule.com
          </p>
          <p>
            <strong>Directeur de la publication :</strong> Domaine de Lapistoule.
          </p>
          <p>
            <strong>Hébergement :</strong> GitHub Pages.
          </p>
          <p>
            <strong>Propriété intellectuelle :</strong> les contenus de ce site (textes, images, logos)
            sont protégés. Toute reproduction est interdite sans autorisation écrite préalable.
          </p>
        </div>
      </section>
    </main>
  );
}
