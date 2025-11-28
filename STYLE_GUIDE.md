# Lapistoule Frontend Guide

### HTML
- Utiliser le HTML5 sémantique et le `data-page` sur la balise `<body>` (`home`, `domaine`, `vins`, `visites`, `contact`).
- Source de vérité pour header/footer : `src/scripts/components/layoutTemplates.ts` (les snippets dans `src/snippets/` sont des références, à synchroniser si modifiés).
- Aucun framework côté client : uniquement du TypeScript vanilla chargé via Vite.

### CSS
- Définir les couleurs, espacements, radius et ombres en utilisant uniquement les tokens de `src/styles/base.css` (`--color-primary`, `--color-secondary`, `--color-background`, `--color-text`, `--space-*`, `--radius-*`, `--shadow-*`).
- Privilégier les classes officielles de `src/styles/layout.css` et `src/styles/components.css` : `.section`, `.section--narrow`, `.section--center`, `.btn`, `.btn-primary`, `.card`, `.card--elevated`, `.card--muted`.
- Les styles globaux vivent dans `base.css`, `layout.css`, `components.css`, `header.css`, `footer.css`. Les spécificités d’une page restent dans `src/styles/pages/*.css` uniquement.
- Ne pas introduire de frameworks CSS ou de préprocesseurs.

### TypeScript
- Un fichier par page dans `src/scripts/pages/` (`home.ts`, `domaine.ts`, `vins.ts`, `visites.ts`, `contact.ts`).
- Le code réutilisable (header, injection, utilitaires) vit dans `src/scripts/components/`.
- `src/scripts/main.ts` lit `data-page` et appelle `initXxxPage()` via un routeur simple.
- Pas de framework JS : rester en TypeScript natif, bundlé par Vite.
