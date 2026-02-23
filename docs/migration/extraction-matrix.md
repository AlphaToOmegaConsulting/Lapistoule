# Extraction Matrix (extract-from-nextjs)

> Archive de migration: les fichiers Next.js mentionnés ci-dessous ont été supprimés du dépôt après bascule complète vers Astro + Cloudflare Pages.

## Routes P0

| Slug | Source | Astro target | H1 |
|---|---|---|---|
| `/` | `app/page.tsx` | `src/pages/index.astro` | Domaine de Lapistoule |
| `/domaine/` | `app/domaine/page.tsx` | `src/pages/domaine/index.astro` | L'Héritage Lapistoule |
| `/vins/` | `app/vins/page.tsx` | `src/pages/vins/index.astro` | Nos Vins |
| `/visites/` | `app/visites/page.tsx` | `src/pages/visites/index.astro` | Visites & Rencontres |
| `/contact/` | `app/contact/page.tsx` | `src/pages/contact/index.astro` | Contactez-nous |
| `/mentions-legales/` | `app/mentions-legales/page.tsx` | `src/pages/mentions-legales/index.astro` | Mentions légales |
| `/cgv/` | `app/cgv/page.tsx` | `src/pages/cgv/index.astro` | Conditions générales de vente |
| `/plan-du-site/` | `app/plan-du-site/page.tsx` | `src/pages/plan-du-site/index.astro` | Plan du site |

## Structure globale

- Header source: `components/Header.tsx` -> Astro: `src/components/Header.astro`
- Footer source: `components/Footer.tsx` -> Astro: `src/components/Footer.astro`
- Runtime source: `components/LegacyRuntime.tsx` -> Astro: `src/scripts/legacy-runtime.ts`
- BasePath source: `lib/base-path.ts` -> supprimé du flux Astro, chemins root `/assets/...`.

## SEO

- Layout + OG/Twitter/favicons: `src/layouts/BaseLayout.astro`
- Canonical par page: défini dans chaque route Astro.
- Robots: `src/pages/robots.txt.ts`
- Sitemap: `src/pages/sitemap.xml.ts`

## Interactions critiques préservées

- Menu mobile + ESC + overlay
- Nav active
- Lucide icons init
- Reveal on scroll
- Back to top
- Lightbox vins
- Soumission contact simulée
