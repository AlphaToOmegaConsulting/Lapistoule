# Domaine de Lapistoule - Site Web

Site vitrine statique (Astro) du Domaine de Lapistoule.
Le déploiement de production est assuré par Cloudflare Pages.

## Stack

- Astro 5
- TypeScript
- CSS (fichiers dans `src/styles/`)
- Playwright (tests end-to-end)

## Prérequis

- Node.js 20+
- npm

## Installation

```bash
npm install
```

## Commandes

```bash
npm run dev        # Démarre le site en local (http://localhost:4321)
npm run lint       # Vérifie le typage Astro
npm run build      # Génère le build de production (dist/)
npm run preview    # Prévisualise le build local
npm run test       # Lance les tests Playwright
npm run test:ui    # Lance les tests Playwright avec interface
npm run test:debug # Lance les tests Playwright en mode debug
```

## Structure principale

- `src/pages/` : pages du site (`/`, `/domaine/`, `/vins/`, `/visites/`, `/contact/`...)
- `src/layouts/` : layout global
- `src/components/` : header, footer
- `src/scripts/legacy-runtime.ts` : interactions front (menu, lightbox, etc.)
- `public/assets/` : images, vidéos, documents PDF, logo
- `src/styles/` : styles globaux et styles par page
- `tests/` : tests e2e Playwright
- `docs/` : guides client et documentation de migration

## Règles importantes pour les URLs

- Utiliser des chemins absolus à partir de la racine (`/assets/...`, `/contact/`, etc.).
- Garder les slashs finaux sur les liens internes (`/contact/`, `/vins/`, etc.).
- Le domaine canonique de prod est `https://domainedelapistoule.com`.

## Validation avant publication

```bash
npm run lint
npm run build
npm run test
```

Puis vérifier dans le navigateur les pages principales:

- `/`
- `/domaine/`
- `/vins/`
- `/visites/`
- `/contact/`

## Publication

La publication est gérée par Cloudflare Pages à partir du dépôt Git.
