/*
  Content Collections (Astro 5).
  Definimos una colección "projects" cuyo contenido vive en archivos Markdown
  dentro de src/content/projects/. El "loader" glob() le dice a Astro de dónde
  leer, y el "schema" (con Zod) valida que cada proyecto tenga los campos
  correctos. Si un Markdown se olvida un campo o pone un tipo equivocado, el
  build falla con un error claro: es nuestra red de seguridad.
*/
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      // Título visible de la tarjeta y de la página de detalle.
      title: z.string(),
      // Descripción corta para la tarjeta (1-2 líneas).
      description: z.string(),
      // Tecnologías usadas (se renderizan como "chips").
      tech: z.array(z.string()).default([]),
      // Links opcionales.
      repo: z.string().url().optional(),
      demo: z.string().url().optional(),
      // Imagen de portada opcional (validada y optimizada por Astro).
      cover: image().optional(),
      // Orden manual en el listado: menor número = aparece primero.
      order: z.number().default(0),
      // Fecha opcional del proyecto.
      date: z.coerce.date().optional(),
      // Si está en true, no se publica (útil para borradores).
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
