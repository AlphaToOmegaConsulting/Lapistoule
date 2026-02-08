import type { Metadata } from 'next';
import { withBasePath } from '@/lib/base-path';

export const metadata: Metadata = {
  title: 'Plan du site',
  description: 'Plan du site du Domaine de Lapistoule.',
  alternates: { canonical: '/plan-du-site/' },
};

export default function Page() {
  return (
    <main>
      <section className="section section-bg-light">
        <div className="container max-w-text">
          <h1 className="section-title mb-md">Plan du site</h1>
          <ul className="footer-links">
            <li><a href={withBasePath('/')}>Accueil</a></li>
            <li><a href={withBasePath('/domaine/')}>Le Domaine</a></li>
            <li><a href={withBasePath('/vins/')}>Nos Vins</a></li>
            <li><a href={withBasePath('/visites/')}>Visites</a></li>
            <li><a href={withBasePath('/contact/')}>Contact</a></li>
            <li><a href={withBasePath('/mentions-legales/')}>Mentions légales</a></li>
            <li><a href={withBasePath('/cgv/')}>CGV</a></li>
          </ul>
        </div>
      </section>
    </main>
  );
}
