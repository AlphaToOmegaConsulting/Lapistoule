/**
 * WCAG AA — vérification des ratios de contraste sur les tokens couleur.
 *
 * Lit les valeurs hex définies dans src/styles/tokens.css et vérifie que les
 * combinaisons critiques premier-plan / arrière-plan respectent WCAG AA :
 *   - 4.5:1 pour le texte normal
 *   - 3:1   pour le texte large (18.66px+ ou 14pt+ gras) et les composants UI
 *
 * Les tokens LAPISTOULE sont en hex plat (pas d'OKLCH) — le parseur lit donc
 * directement `--token: #rrggbb;`.
 *
 * Runner : node:test natif (Node 22) + --experimental-strip-types. Pas de
 * dépendance externe (ni vitest, ni wcag-contrast) afin de garder
 * package.json / package-lock.json inchangés. La formule de contraste est
 * celle de la spec (https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio).
 *
 * Surface sombre testée : --color-text (#2c2e35, anthracite), réellement utilisé
 * comme fond de bouton (.btn-dark, components.css) avec du texte blanc.
 *
 * Deux combinaisons échouent réellement WCAG AA (cf. tests `* documenté FAIL`) :
 * elles sont conservées comme dette tracée, jamais supprimées ni maquillées.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

// Calcul du ratio de contraste WCAG 2.x (luminance relative), sans dépendance.
function srgbToLinear(channel: number): number {
    const c = channel / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

function relativeLuminance(hex: string): number {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return 0.2126 * srgbToLinear(r) + 0.7152 * srgbToLinear(g) + 0.0722 * srgbToLinear(b);
}

function contrastRatio(fgHex: string, bgHex: string): number {
    const l1 = relativeLuminance(fgHex);
    const l2 = relativeLuminance(bgHex);
    const lighter = Math.max(l1, l2);
    const darker = Math.min(l1, l2);
    return (lighter + 0.05) / (darker + 0.05);
}

// Parse une valeur hex depuis une ligne `--color-foo: #rrggbb;`
function parseTokenHex(css: string, varName: string): string | null {
    const re = new RegExp(`${varName}:\\s*(#[0-9a-fA-F]{6})`, 'm');
    const m = css.match(re);
    return m ? m[1] : null;
}

const css = readFileSync(join(process.cwd(), 'src/styles/tokens.css'), 'utf8');

function ratioFor(fg: string, bg: string): number {
    const fgHex = parseTokenHex(css, fg);
    const bgHex = parseTokenHex(css, bg);
    if (!fgHex || !bgHex) {
        throw new Error(`Token introuvable: ${fg} ou ${bg} dans tokens.css`);
    }
    return contrastRatio(fgHex, bgHex);
}

// ─── Combinaisons conformes (WCAG AA respecté) ──────────────────────────────
const passing: Array<{ fg: string; bg: string; label: string; minRatio: number }> = [
    // body : --color-text #2c2e35 sur --color-background #faf9f6 (base.css)
    {
        fg: '--color-text',
        bg: '--color-background',
        label: 'texte courant sur fond clair',
        minRatio: 4.5,
    },
    // vert secondaire (#4a5d44), utilisé en texte/outline (components.css)
    {
        fg: '--color-secondary',
        bg: '--color-background',
        label: 'vert secondaire sur fond clair',
        minRatio: 4.5,
    },
    // blanc sur surface sombre anthracite (.btn-dark, components.css:60-61)
    {
        fg: '--color-surface',
        bg: '--color-text',
        label: 'blanc sur surface sombre anthracite (.btn-dark)',
        minRatio: 4.5,
    },
];

for (const combo of passing) {
    test(`WCAG AA — ${combo.label} >= ${combo.minRatio}:1`, () => {
        const ratio = ratioFor(combo.fg, combo.bg);
        assert.ok(
            ratio >= combo.minRatio,
            `${combo.label}: ${combo.fg} sur ${combo.bg} = ${ratio.toFixed(2)}:1 (min ${combo.minRatio}:1)`
        );
    });
}

// ─── Combinaisons en échec AA — DETTE TRACÉE (équivalent it.fails) ───────────
// Ces paires NE respectent PAS WCAG AA. On ne les supprime pas et on ne triche
// pas sur le seuil : on documente la valeur mesurée et on verrouille le test
// pour qu'il devienne rouge si le contraste empire encore. Cf. PR « Findings ».
const knownFailing: Array<{
    fg: string;
    bg: string;
    label: string;
    aaMin: number;
    measured: number;
}> = [
    {
        // --color-primary / --color-matte-gold #c6a664 sur --color-background #faf9f6.
        // Utilisé comme couleur de TITRE/LABEL (.subtitle-small 14px gras, .wine-title:hover,
        // .btn-link:hover) → texte normal, seuil 4.5:1. Mesuré ~2.21:1. Échec réel.
        fg: '--color-primary',
        bg: '--color-background',
        label: 'or (titres/labels) sur fond clair — documenté FAIL',
        aaMin: 4.5,
        measured: 2.21,
    },
    {
        // Texte blanc (--color-surface #ffffff) sur CTA or (--color-primary #c6a664)
        // → .btn-primary (components.css:35-36). Composant UI / texte, seuil 4.5:1
        // (même < 3:1 pour un composant). Mesuré ~2.32:1. Échec réel.
        fg: '--color-surface',
        bg: '--color-primary',
        label: 'blanc sur CTA or (.btn-primary) — documenté FAIL',
        aaMin: 4.5,
        measured: 2.32,
    },
];

for (const combo of knownFailing) {
    test(`WCAG AA — ${combo.label} (dette tracée, ~${combo.measured}:1 < ${combo.aaMin}:1)`, () => {
        const ratio = ratioFor(combo.fg, combo.bg);
        // Le test reste vert tant que la dette est connue, mais devient rouge si
        // quelqu'un dégrade encore le contraste sous la valeur mesurée actuelle.
        assert.ok(
            ratio < combo.aaMin,
            `${combo.label} devrait toujours être sous AA tant que non corrigé ; ` +
                `si ce token a été corrigé (ratio ${ratio.toFixed(2)} >= ${combo.aaMin}), ` +
                `déplacer cette paire dans la liste « passing ».`
        );
        assert.ok(
            Math.abs(ratio - combo.measured) < 0.05,
            `Ratio mesuré pour ${combo.label} = ${ratio.toFixed(2)}:1, ` +
                `attendu ~${combo.measured}:1 (écart inattendu — vérifier les tokens).`
        );
    });
}
