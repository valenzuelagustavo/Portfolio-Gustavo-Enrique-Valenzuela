// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Documentación: https://astro.build/config
export default defineConfig({
  // TODO: reemplazar por la URL final del deploy en Vercel.
  // Se usa para generar URLs absolutas en el sitemap y en las etiquetas Open Graph.
  site: 'https://gustavovalenzuela.vercel.app',

  // Tailwind v4 se integra como plugin de Vite (no necesita tailwind.config.js).
  vite: {
    plugins: [tailwindcss()],
  },
});
