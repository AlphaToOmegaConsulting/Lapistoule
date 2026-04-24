import type { APIRoute } from 'astro';

const site = 'https://domainedelapistoule.com';
const routes = [
    '/',
    '/domaine/',
    '/vins/',
    '/visites/',
    '/contact/',
    '/mentions-legales/',
    '/cgv/',
    '/plan-du-site/',
];

export const GET: APIRoute = () => {
    const now = new Date().toISOString();
    const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes
        .map(route => `<url><loc>${site}${route}</loc><lastmod>${now}</lastmod></url>`)
        .join('')}\n</urlset>`;

    return new Response(body, {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
        },
    });
};
