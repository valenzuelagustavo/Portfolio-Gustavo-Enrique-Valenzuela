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
      // Imagen de portada opcional (validada y optimizada por Astro). Se usa
      // como miniatura en la tarjeta de la grilla de proyectos.
      cover: image().optional(),
      // Galería opcional para la página de detalle: capturas reales del
      // proyecto funcionando. Si un proyecto no tiene, simplemente no se
      // muestra ninguna galería (no rompe nada).
      gallery: z.array(image()).default([]),
      // Orden manual en el listado: menor número = aparece primero.
      order: z.number().default(0),
      // Tipo de proyecto: 'personal' (100% tuyo) o 'guiado' (nació de un curso).
      // Se muestra como una etiqueta en la tarjeta y en el detalle (transparencia).
      kind: z.enum(['personal', 'guiado']).default('personal'),
      // Estado del proyecto: 'finished' (terminado) o 'in-progress' (todavía en
      // desarrollo). Por defecto 'finished' para no tener que tocar los proyectos
      // que ya están completos. Es otra pata de la misma transparencia que 'kind':
      // un proyecto inconcluso se muestra igual, pero etiquetado como tal.
      status: z.enum(['finished', 'in-progress']).default('finished'),
      // Año opcional (se muestra como dato suelto).
      year: z.number().optional(),
      // Si está en true, no se publica (útil para borradores).
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
