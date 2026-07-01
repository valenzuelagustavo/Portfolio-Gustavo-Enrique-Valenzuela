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
  linkedin: 'https://www.linkedin.com/in/gevalenzuela/',
  // Ruta del CV: hay una versión por idioma (es/en), cada una como PDF
  // independiente en public/cv/.
  cvPath: (lang: 'es' | 'en') => `/cv/cv-gustavo-valenzuela-${lang}.pdf`,
  // Idioma por defecto del sitio (español).
  defaultLocale: 'es',
} as const;

/*
  Navegación principal. Cada item apunta a un ancla (#) de la página única.
  Los "label" son provisorios en español; en la Fase 5 (i18n) los moveremos a
  los archivos de traducción.
*/
export const nav = [
  { href: '/#sobre-mi', label: 'Sobre mí' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#proyectos', label: 'Proyectos' },
  { href: '/#contacto', label: 'Contacto' },
] as const;

export type Site = typeof site;
