import type { APIRoute } from 'astro';

/**
 * robots.txt AI-aware.
 *
 * Crawlers généralistes : autorisés sur tout le site.
 * Crawlers IA (entraînement LLM) : bloqués uniquement si ALLOW_AI_CRAWLERS="false".
 * Par défaut les bots IA restent autorisés — le blocage est un opt-in via variable
 * d'environnement, sans changement de comportement tant qu'il n'est pas activé.
 *
 * On conserve la résolution d'URL et la forme historiques du site :
 *   - sitemap émis par src/pages/sitemap.xml.ts → /sitemap.xml (pas de sitemap-index)
 *   - ligne Host: conservée
 */
const AI_CRAWLERS = [
    'GPTBot',
    'ClaudeBot',
    'PerplexityBot',
    'CCBot',
    'Bytespider',
    'Amazonbot',
    'Google-Extended',
    'Applebot-Extended',
];

const site = import.meta.env.SITE ?? 'https://domainedelapistoule.com';

export const GET: APIRoute = () => {
    const allowAi = (import.meta.env.ALLOW_AI_CRAWLERS ?? 'true') !== 'false';

    const lines: string[] = [
        'User-agent: *',
        'Allow: /',
        '',
        `Sitemap: ${site}/sitemap.xml`,
        `Host: ${site}`,
        '',
    ];

    if (!allowAi) {
        for (const bot of AI_CRAWLERS) {
            lines.push(`User-agent: ${bot}`);
            lines.push('Disallow: /');
            lines.push('');
        }
    }

    return new Response(lines.join('\n'), {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
        },
    });
};
