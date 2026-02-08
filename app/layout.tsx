import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import LegacyRuntime from '@/components/LegacyRuntime';
import { getSiteUrl, withBasePath } from '@/lib/base-path';
import './globals.css';

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Domaine de Lapistoule - Vins de Cahors',
    template: '%s | Domaine de Lapistoule',
  },
  description:
    'Vignerons de père en fils à Luzech. Découvrez nos vins de Cahors, visites et dégustations au Domaine de Lapistoule.',
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Domaine de Lapistoule - Vins de Cahors',
    description:
      'Vignerons de père en fils à Luzech. Découvrez nos vins de Cahors, visites et dégustations au Domaine de Lapistoule.',
    images: [{ url: `${siteUrl}/assets/images/home/hero-vineyard-poster.jpg` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Domaine de Lapistoule - Vins de Cahors',
    description:
      'Vignerons de père en fils à Luzech. Découvrez nos vins de Cahors, visites et dégustations au Domaine de Lapistoule.',
    images: [`${siteUrl}/assets/images/home/hero-vineyard-poster.jpg`],
  },
  icons: {
    icon: withBasePath('/assets/brand/favicon.png'),
    apple: withBasePath('/assets/brand/favicon.png'),
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LegacyRuntime />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
