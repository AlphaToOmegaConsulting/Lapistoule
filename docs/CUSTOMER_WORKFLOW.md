# Workflow client (modifications du site en toute sécurité)

Ce site est un site statique Next.js publié sur GitHub Pages.

## Comment demander un changement
Expliquez simplement ce que vous voulez, en langage courant.
Exemples:
- "Changer le premier paragraphe de la page d'accueil en: ..."
- "Remplacer l'image en haut de la page Contact avec ce nouveau fichier."
- "Créer une page 'Presse' et l'ajouter au menu."

Si vous voulez un format prêt à remplir, utilisez `CHANGE_REQUEST_TEMPLATE.md`.

## Système d'approbation en 2 étapes (important)
L'agent ne modifie pas le site immédiatement.

### Étape 1 - Validation du plan
L'agent vous envoie:
- ce qu'il a compris,
- le plan,
- les fichiers qui seront modifiés,
- les informations manquantes.

Pour autoriser le démarrage, répondez exactement:
`APPROVE PLAN`

### Étape 2 - Validation avant publication
Après modification, l'agent:
- résume les changements,
- explique comment prévisualiser localement,
- vous demande de vérifier dans votre navigateur,
- lance les vérifications (`npm run lint`, `npm run build`),
- demande l'autorisation de publier.

Pour publier sur `main`, répondez exactement:
`APPROVE PUBLISH`

## Vérification visuelle
Pour les changements visibles (texte, images, mise en page):
- Vous vérifiez d'abord directement dans votre navigateur.
- L'agent ne prend pas de capture d'écran par défaut.
- Si le premier résultat ne vous convient pas, l'agent utilise Playwright et fournit des captures avant/après.

## Remplacer une image (simple)
1) Déposez le nouveau fichier dans `images_a_integrer` (à la racine du projet).  
2) Indiquez:
- le nom du fichier,
- où il doit apparaître (page + emplacement).

L'agent renomme ensuite le fichier avec le format du site, le place dans le bon dossier, et met à jour la page.

Notes:
- Un seul fichier par demande
- Formats recommandés: `.jpg`, `.png`, `.webp`

## Prévisualiser en local
1) Ouvrir un terminal dans le dossier du site.
2) Lancer:
- `npm install` (première fois)
- `npm run dev`
3) Ouvrir:
- http://localhost:3000
4) Vérifier les pages importantes:
- Accueil, Domaine, Vins, Visites, Contact

## Publication
Quand les changements sont poussés sur `main`, GitHub Actions reconstruit et publie le site.

Si quelque chose ne va pas après publication, précisez:
- la page concernée,
- le résultat attendu,
- idéalement une capture d'écran.
