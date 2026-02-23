# Cloudflare Pages Prep

## Build settings

- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: `20.x`

## Repo expectations

- `astro.config.mjs` avec `trailingSlash: 'always'`
- Routes P0 statiques générées
- `robots.txt` et `sitemap.xml` exposés

## Smoke test commands

```bash
BASE="https://domainedelapistoule.com"
curl -I "$BASE/"
curl -I "$BASE/domaine/"
curl -I "$BASE/vins/"
curl -I "$BASE/visites/"
curl -I "$BASE/contact/"
curl -I "$BASE/mentions-legales/"
curl -I "$BASE/cgv/"
curl -I "$BASE/plan-du-site/"
curl -I "$BASE/sitemap.xml"
curl -I "$BASE/robots.txt"
```
