# Content map (Lapistoule)

Ce document indique où modifier le contenu selon le type de demande.

## Pages principales
- Accueil: `app/page.tsx`
- Domaine: `app/domaine/page.tsx`
- Vins: `app/vins/page.tsx`
- Visites: `app/visites/page.tsx`
- Contact: `app/contact/page.tsx`

## Navigation et pied de page
- En-tête (menu desktop + mobile): `components/Header.tsx`
- Pied de page (liens, horaires, mentions): `components/Footer.tsx`
- Comportement global front (menu mobile, lightbox, interactions): `components/LegacyRuntime.tsx`

## Référencement (SEO) et URLs techniques
- SEO global et balises metadata par défaut: `app/layout.tsx`
- SEO par page: `app/<page>/page.tsx` via `export const metadata`
- Sitemap: `app/sitemap.ts`
- Robots: `app/robots.ts`

## Images et documents
- Assets publics: `public/assets/`
- Images: `public/assets/images/`
- Documents (PDF): `public/assets/documents/`
- Règle des chemins en JSX: utiliser `withBasePath('/assets/...')` depuis `lib/base-path.ts`

## Styles
- Point d'entrée styles: `app/globals.css`
- Base-path helper: `lib/base-path.ts`
- Styles additionnels par zone/page: `src/styles/`

## Ce qu'il ne faut pas modifier
- Build outputs: `.next/`, `out/`, `dist/`
