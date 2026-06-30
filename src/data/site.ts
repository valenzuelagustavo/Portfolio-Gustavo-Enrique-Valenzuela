/*
  Datos centrales del sitio. Tener esto en un solo lugar evita repetir el
  nombre, el email o los links por todos los componentes. Cuando agreguemos
  i18n (Fase 5), los textos traducibles van a vivir en archivos aparte; esto
  queda para datos que NO cambian según el idioma (links, email, etc.).
*/
export const site = {
  name: 'Gustavo Valenzuela',
  // Frase corta de "quién soy" — la pulimos en la fase de contenido.
  role: 'Estudiante de programación',
  email: 'gustavovalenzuela.dev@gmail.com',
  github: 'https://github.com/valenzuelagustavo',
  linkedin: '', // TODO: completar cuando tengamos el perfil
  // Idioma por defecto del sitio (español).
  defaultLocale: 'es',
} as const;

export type Site = typeof site;
