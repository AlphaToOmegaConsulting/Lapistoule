# Domaine de Lapistoule - Site Web

Site vitrine statique (Next.js App Router) du Domaine de Lapistoule.
Le site est exporté en statique et publié sur GitHub Pages.

## Stack

- Next.js 16 (App Router)
- TypeScript
- CSS (fichiers dans `src/styles/`)
- Playwright (tests end-to-end)

## Prérequis

- Node.js 18+
- npm

## Installation

```bash
npm install
```

## Commandes

```bash
npm run dev        # Démarre le site en local (http://localhost:3000)
npm run lint       # Vérifie la qualité du code
npm run build      # Génère le build de production (export statique)
npm run test       # Lance les tests Playwright
npm run test:ui    # Lance les tests Playwright avec interface
npm run test:debug # Lance les tests Playwright en mode debug
```

## Structure principale

- `app/` : pages et metadata (`/`, `/domaine/`, `/vins/`, `/visites/`, `/contact/`...)
- `components/` : header, footer et comportements front
- `public/assets/` : images, vidéos, documents PDF, logo
- `lib/base-path.ts` : helper `withBasePath('/assets/...')`
- `src/styles/` : styles globaux et styles par page
- `tests/` : tests e2e Playwright
- `docs/` : guides client (`CONTENT_MAP`, workflow)

## Règles importantes pour les URLs

- Le site utilise un `basePath` pour GitHub Pages.
- En JSX, utiliser `withBasePath('/assets/...')` pour les fichiers statiques.
- Garder les slashs finaux sur les liens internes (`/contact/`, `/vins/`, etc.).

## Validation avant publication

```bash
npm run lint
npm run build
```

Puis vérifier dans le navigateur les pages principales :

- `/`
- `/domaine/`
- `/vins/`
- `/visites/`
- `/contact/`

## Publication

Le déploiement est déclenché par un push sur la branche `main` (GitHub Actions + GitHub Pages).
