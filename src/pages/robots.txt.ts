import type { APIRoute } from 'astro';

const site = 'https://domainedelapistoule.com';

export const GET: APIRoute = () => {
    const body = `User-agent: *\nAllow: /\n\nSitemap: ${site}/sitemap.xml\nHost: ${site}\n`;

    return new Response(body, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
        },
    });
};
