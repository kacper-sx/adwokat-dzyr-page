// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import icon from "astro-icon";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://adwokatdzyr.pl',
  integrations: [icon({
      include: {
        lucide: [
          "arrow-up-right",
          "chevron-right",
          "phone",
          "menu",
          "scroll",
          "mail",
          "hand-heart",
          "users",
          "handshake",
          "scale",
          "map-pin",
          "calendar-clock",
          "hand-coins",
          "calendar",
          "building-2",
          "server",
          'fingerprint',
          "file-chart-column-increasing",
          "chart-no-axes-combined"
        ],
      },
    }), sitemap()]
});
