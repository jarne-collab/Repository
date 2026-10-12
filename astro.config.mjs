import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: vervang door de echte domeinnaam zodra die geregistreerd is.
export default defineConfig({
  site: 'https://groundedclimbing.example',
  integrations: [sitemap({ i18n: { defaultLocale: 'nl', locales: { nl: 'nl-BE', en: 'en' } } })],
  i18n: { defaultLocale: 'nl', locales: ['nl', 'en'], routing: { prefixDefaultLocale: false } },
});
