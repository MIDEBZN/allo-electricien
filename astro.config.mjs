// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.allo-electricien.be',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/lp/')
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});