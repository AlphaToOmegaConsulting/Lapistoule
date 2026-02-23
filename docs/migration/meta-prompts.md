# Meta Prompts d'exécution (meta-prompt-creator)

## Prompt lot Extract
"Extract routes, SEO, assets, tokens and interactions from Next.js source-of-truth files only. Output verifiable tables; do not invent data."

## Prompt lot Build
"Rebuild P0 routes in Astro 5 static with strict content and navigation parity, preserving trailing slashes and replacing withBasePath with root absolute paths."

## Prompt lot Runtime
"Port LegacyRuntime behavior to Astro client script with equivalent interactions: mobile menu, reveal, lightbox, back-to-top, active nav, contact form simulation."

## Prompt lot QA
"Run parity checks on all P0 pages and classify findings as BLOCKING, CONTENT, VISUAL. Accept only if BLOCKING=0 and CONTENT=0."

## Prompt lot Deploy
"Prepare Cloudflare Pages static deployment settings, validate build output dist, robots/sitemap, and production smoke-check URLs."
