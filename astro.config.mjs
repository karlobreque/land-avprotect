// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://kaobrequez.github.io',
  base: '/land-avprotect/',
  vite: {
    plugins: [tailwindcss()],
  },
});