// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Documentación: https://astro.build/config
export default defineConfig({
  // TODO: reemplazar por la URL final del deploy en Vercel.
  site: 'https://gustavovalenzuela.vercel.app',

  // Internacionalización (i18n) nativa de Astro.
  // - locales: idiomas disponibles.
  // - defaultLocale: el idioma por defecto (español).
  // - prefixDefaultLocale: true -> TODAS las rutas llevan prefijo (/es/ y /en/).
  //   La home "/" la redirigimos a "/es/" desde src/pages/index.astro.
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: true,
    },
  },

  // Tailwind v4 se integra como plugin de Vite (no necesita tailwind.config.js).
  vite: {
    // El cast /** @type {any} */ evita un falso error de tipos: @tailwindcss/vite
    // y Astro traen versiones internas de Vite distintas y TypeScript las ve como
    // incompatibles, aunque en ejecución funciona perfecto.
    plugins: [/** @type {any} */ (tailwindcss())],
  },
});
