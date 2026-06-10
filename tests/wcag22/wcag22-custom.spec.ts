import { test, expect } from '@playwright/test';

/**
 * WCAG 2.2 AA — vérifications manuelles que axe-core ne couvre pas seul.
 *
 * Exécution : npm run test:wcag22 (build prod + preview, cf. playwright.config.ts).
 * Le site LAPISTOULE est en sortie statique (pas d'adaptateur) : `npm run preview`
 * sert le vrai `dist/`, les critères ci-dessous s'évaluent donc sur les vraies pages.
 *
 * Critères couverts :
 *   2.4.11 — Focus Not Obscured (AA) : un élément focalisé n'est pas entièrement
 *             masqué par un contenu collant créé par l'auteur (header fixe/sticky).
 *   2.5.8  — Target Size (Minimum) (AA) : chaque cible interactive fait au moins
 *             24×24 px CSS.
 *             Exceptions de la spec gérées ici :
 *               - "inline" : un lien dont la taille est contrainte par la line-height
 *                 du texte environnant (display:inline dans une phrase) est exempté →
 *                 filtré automatiquement.
 *               - "espacement" : une cible plus petite entourée de ≥ 24 px d'espace
 *                 non interactif est tolérée → le test mesure la taille rendue directe
 *                 et signale les cas à vérifier manuellement.
 */

const PAGES = [
    { route: '/', label: 'home' },
    { route: '/domaine/', label: 'domaine' },
    { route: '/vins/', label: 'vins' },
];

// ─── 2.4.11 Focus Not Obscured ───────────────────────────────────────────────

test.describe('WCAG 2.4.11 — Focus non masqué par un header collant', () => {
    for (const { route, label } of PAGES) {
        test(`${label} — éléments focalisés visibles sous le header fixe`, async ({ page }) => {
            await page.goto(route, { waitUntil: 'load' });

            // Si le site n'a pas de header fixe/sticky, 2.4.11 ne s'applique pas.
            const hasFixedHeader = await page.evaluate(() => {
                const header = document.querySelector('header, [role="banner"]');
                if (!header) return false;
                const pos = getComputedStyle(header).position;
                return pos === 'fixed' || pos === 'sticky';
            });
            if (!hasFixedHeader) {
                test.skip();
                return;
            }

            // Résout la hauteur de header exposée en CSS (--header-height si défini).
            const headerHeightRaw = await page.evaluate(() =>
                getComputedStyle(document.documentElement)
                    .getPropertyValue('--header-height')
                    .trim()
            );

            // À défaut de variable, on mesure la hauteur réelle du header rendu.
            const headerHeightPx = await page.evaluate((raw: string) => {
                if (raw) {
                    const el = document.createElement('div');
                    el.style.position = 'absolute';
                    el.style.visibility = 'hidden';
                    el.style.height = raw;
                    document.body.appendChild(el);
                    const px = el.getBoundingClientRect().height;
                    document.body.removeChild(el);
                    return px;
                }
                const header = document.querySelector('header, [role="banner"]');
                return header ? header.getBoundingClientRect().height : 0;
            }, headerHeightRaw);

            const focusableCount = await page.evaluate(() => {
                const sel = [
                    'a[href]',
                    'button:not([disabled])',
                    'input:not([disabled])',
                    'select:not([disabled])',
                    'textarea:not([disabled])',
                    "[tabindex]:not([tabindex='-1'])",
                ].join(', ');
                return document.querySelectorAll(sel).length;
            });

            const violations: string[] = [];

            for (let i = 0; i < focusableCount; i++) {
                await page.keyboard.press('Tab');

                const isSkipLink = await page.evaluate(
                    () => document.activeElement?.classList.contains('skip-link') ?? false
                );
                if (isSkipLink) await page.waitForTimeout(220);

                const obscured = await page.evaluate((headerPx: number) => {
                    const el = document.activeElement as HTMLElement | null;
                    if (!el || el === document.body) return null;

                    const style = getComputedStyle(el);
                    const rect = el.getBoundingClientRect();

                    if (style.position === 'fixed' || style.position === 'sticky') return null;
                    if (rect.width === 0 && rect.height === 0) return null;

                    let ancestor: Element | null = el;
                    while (ancestor) {
                        const role = ancestor.getAttribute('role');
                        const tagName = ancestor.tagName.toLowerCase();
                        if (tagName === 'header' || role === 'banner' || role === 'navigation') {
                            return null;
                        }
                        ancestor = ancestor.parentElement;
                    }

                    // 2.4.11 ne concerne QUE les éléments réellement recouverts par le
                    // header collant : leur bas tombe dans la bande [0, headerPx] que le
                    // header occupe. Un élément dont le bas est ≤ 0 (hors-écran vers le
                    // haut : carrousel/contenu animé translaté, slide non visible) n'est
                    // PAS masqué par le header — c'est du défilement normal, pas une
                    // violation d'auteur. On l'exclut pour éviter les faux positifs.
                    const entirelyBehindHeader =
                        rect.bottom > 0 && rect.bottom <= headerPx && rect.top < headerPx;
                    if (!entirelyBehindHeader) return null;

                    return {
                        tag: el.tagName,
                        text: (el.textContent ?? '').trim().slice(0, 60),
                        top: Math.round(rect.top),
                        bottom: Math.round(rect.bottom),
                        headerPx: Math.round(headerPx),
                    };
                }, headerHeightPx);

                if (obscured) {
                    violations.push(
                        `Element <${obscured.tag}> "${obscured.text}" entièrement masqué — ` +
                            `top: ${obscured.top}px, bottom: ${obscured.bottom}px, header: ${obscured.headerPx}px`
                    );
                }
            }

            if (violations.length > 0) {
                console.warn(`\nViolations WCAG 2.4.11 sur ${label}:\n${violations.join('\n')}`);
            }

            // Sanity-check : la page doit exposer des cibles focalisables (sinon on a
            // testé une page vide / un listing de répertoire, pas le vrai site).
            expect(
                focusableCount,
                `Aucun élément focalisable détecté sur "${label}" — la page réelle n'a probablement pas été servie.`
            ).toBeGreaterThan(0);

            expect(
                violations,
                `${violations.length} élément(s) masqué(s) derrière le header fixe sur "${label}"`
            ).toHaveLength(0);
        });
    }
});

// ─── 2.5.8 Target Size (Minimum) ─────────────────────────────────────────────

test.describe('WCAG 2.5.8 — Taille des cibles interactives ≥ 24×24 px', () => {
    for (const { route, label } of PAGES) {
        test(`${label} — cibles interactives à la taille minimale`, async ({ page }) => {
            await page.goto(route, { waitUntil: 'load' });

            const analysed = await page.evaluate(() => {
                const MIN = 24; // taille minimale WCAG 2.2 en px CSS
                const SPACING = 24; // rayon d'espacement de l'exception "spacing"

                const all = Array.from(
                    document.querySelectorAll<HTMLElement>('button, a[href]')
                ).filter(el => {
                    if (el.closest('[aria-hidden="true"]')) return false;
                    const style = getComputedStyle(el);
                    if (
                        style.display === 'none' ||
                        style.visibility === 'hidden' ||
                        parseFloat(style.opacity) === 0
                    )
                        return false;
                    const rect = el.getBoundingClientRect();
                    return rect.width > 0 || rect.height > 0;
                });

                const rectsAll = all.map(el => el.getBoundingClientRect());

                // Deux rectangles 24×24 centrés sur deux cibles se chevauchent-ils ?
                // (cf. WCAG 2.5.8 — exception "spacing" : une cible <24px reste conforme
                // si un cercle de 24px de diamètre centré dessus n'en croise aucune autre.)
                function spacingOffenders(idx: number): boolean {
                    const r = rectsAll[idx];
                    const cx = r.left + r.width / 2;
                    const cy = r.top + r.height / 2;
                    for (let j = 0; j < rectsAll.length; j++) {
                        if (j === idx) continue;
                        const o = rectsAll[j];
                        const ocx = o.left + o.width / 2;
                        const ocy = o.top + o.height / 2;
                        const dist = Math.hypot(cx - ocx, cy - ocy);
                        if (dist < SPACING) return true; // une autre cible est trop proche
                    }
                    return false;
                }

                const small: Array<{
                    tag: string;
                    text: string;
                    width: number;
                    height: number;
                    display: string;
                    inlineException: boolean;
                    spacingException: boolean;
                }> = [];

                all.forEach((el, idx) => {
                    const rect = rectsAll[idx];
                    const belowMinimum = rect.width < MIN || rect.height < MIN;
                    if (!belowMinimum) return;

                    const style = getComputedStyle(el);
                    // Exception "inline" : lien display:inline contraint par la line-height
                    // d'une phrase. On élargit à inline-block sans padding additionnel ?
                    // Non — la spec ne couvre que le flux de texte inline strict.
                    const inlineException = el.tagName === 'A' && style.display === 'inline';
                    // Exception "spacing" : aucune autre cible dans un rayon de 24px.
                    const spacingException = !spacingOffenders(idx);

                    small.push({
                        tag: el.tagName,
                        text: (el.textContent ?? el.getAttribute('aria-label') ?? '')
                            .trim()
                            .slice(0, 80),
                        width: Math.round(rect.width),
                        height: Math.round(rect.height),
                        display: style.display,
                        inlineException,
                        spacingException,
                    });
                });

                return small;
            });

            // Cibles exemptées (inline OU espacement suffisant) → signalées mais tolérées.
            const exempt = analysed.filter(t => t.inlineException || t.spacingException);
            // Vraies violations : sous 24px ET sans exception applicable.
            const violations = analysed.filter(t => !t.inlineException && !t.spacingException);

            if (exempt.length > 0) {
                const summary = exempt
                    .map(t => {
                        const reason = t.inlineException
                            ? 'exception inline'
                            : 'exception espacement (≥24px libre autour)';
                        return `  <${t.tag}> "${t.text}" — ${t.width}×${t.height}px (${reason})`;
                    })
                    .join('\n');
                console.warn(
                    `\nCibles WCAG 2.5.8 sous 24×24 px mais EXEMPTÉES sur ${label}:\n${summary}`
                );
            }

            if (violations.length > 0) {
                const summary = violations
                    .map(
                        t =>
                            `  <${t.tag}> "${t.text}" — ${t.width}×${t.height}px (display:${t.display})`
                    )
                    .join('\n');
                console.warn(`\nViolations WCAG 2.5.8 (sans exception) sur ${label}:\n${summary}`);
            }

            expect(
                violations,
                `${violations.length} cible(s) interactive(s) sous 24×24 px SANS exception applicable sur "${label}".`
            ).toHaveLength(0);
        });
    }
});
