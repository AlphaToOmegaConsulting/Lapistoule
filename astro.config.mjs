import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const site = process.env.PUBLIC_SITE_URL || 'https://domainedelapistoule.com';

export default defineConfig({
  site,
  trailingSlash: 'always',
  integrations: [tailwind({ applyBaseStyles: false })],
});
