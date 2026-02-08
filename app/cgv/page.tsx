import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CGV',
  description: 'Conditions générales de vente du Domaine de Lapistoule.',
  alternates: { canonical: '/cgv/' },
};

export default function Page() {
  return (
    <main>
      <section className="section section-bg-light">
        <div className="container max-w-text">
          <h1 className="section-title mb-md">Conditions générales de vente</h1>
          <p>
            Les conditions générales de vente complètes sont communiquées sur demande.
          </p>
          <p>
            Pour toute commande ou question, contactez-nous par téléphone au 05 65 20 12 62 ou par email
            à contact@domainedelapistoule.com.
          </p>
          <p>
            Les prix, disponibilités, délais et modalités de livraison peuvent varier selon la période et la
            destination.
          </p>
        </div>
      </section>
    </main>
  );
}
