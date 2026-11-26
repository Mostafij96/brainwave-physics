// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// SITE_URL and BASE_PATH are set automatically by the GitHub Pages workflow.
// Locally they fall back to the defaults below.
export default defineConfig({
  site: process.env.SITE_URL || 'https://example.github.io',
  base: process.env.BASE_PATH || '/',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
