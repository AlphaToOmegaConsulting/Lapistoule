# Content map (Lapistoule)

Ce document indique où modifier le contenu selon le type de demande.

## Pages principales
- Accueil: `src/pages/index.astro`
- Domaine: `src/pages/domaine/index.astro`
- Vins: `src/pages/vins/index.astro`
- Visites: `src/pages/visites/index.astro`
- Contact: `src/pages/contact/index.astro`
- Mentions légales: `src/pages/mentions-legales/index.astro`
- CGV: `src/pages/cgv/index.astro`
- Plan du site: `src/pages/plan-du-site/index.astro`

## Navigation et pied de page
- En-tête (menu desktop + mobile): `src/components/Header.astro`
- Pied de page (liens, horaires, mentions): `src/components/Footer.astro`
- Comportement global front (menu mobile, lightbox, interactions): `src/scripts/legacy-runtime.ts`
- Layout global (SEO partagé + structure): `src/layouts/BaseLayout.astro`

## Référencement (SEO) et URLs techniques
- SEO global par défaut: `src/layouts/BaseLayout.astro`
- SEO par page: props `title`, `description`, `canonical` passées au layout
- Sitemap: `src/pages/sitemap.xml.ts`
- Robots: `src/pages/robots.txt.ts`

## Images et documents
- Assets publics: `public/assets/`
- Images: `public/assets/images/`
- Documents (PDF): `public/assets/documents/`
- Règle des chemins: utiliser des chemins root (`/assets/...`)

## Styles
- Point d'entrée styles global: `src/styles/style.css`
- Styles additionnels par zone/page: `src/styles/`

## Ce qu'il ne faut pas modifier
- Build outputs: `dist/`, `.astro/`
- Artifacts tests: `playwright-report/`, `test-results/`, `screenshots/`
