import type { Metadata } from 'next';
import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import LegacyRuntime from '@/components/LegacyRuntime';
import { getSiteUrl, withBasePath } from '@/lib/base-path';
import './globals.css';

const siteUrl = getSiteUrl();
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-montserrat',
  display: 'swap',
});

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
      <body className={`${cormorant.variable} ${montserrat.variable}`}>
        <LegacyRuntime />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
