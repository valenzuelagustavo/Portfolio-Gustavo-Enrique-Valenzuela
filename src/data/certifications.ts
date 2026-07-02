/*
  Cursos y certificaciones completados. Lista plana: cada item es un curso.
  Para sumar uno nuevo, agregá un objeto al array — no hace falta tocar nada
  más, el componente los agrupa por `provider` y los ordena solo (por
  proveedor con actividad más reciente primero, y dentro de cada proveedor
  del más nuevo al más viejo).

  - title: nombre oficial del curso, tal cual figura en el certificado (no se
    traduce entre idiomas: es un nombre propio, igual que un tech stack).
  - provider: plataforma o institución que lo emitió.
  - date: fecha de finalización en formato ISO (YYYY-MM-DD). Se usa para
    ordenar y se formatea según el idioma al mostrarla (mes + año).
*/
export interface Certification {
  title: string;
  provider: string;
  date: string;
}

export const certifications: Certification[] = [
  // Santander Open Academy
  { title: 'Python', provider: 'Santander Open Academy', date: '2026-06-24' },

  // Boot.dev — ruta de Python (marzo-abril 2025)
  { title: 'Learn to Code in Python', provider: 'Boot.dev', date: '2025-03-20' },
  { title: 'Learn Linux', provider: 'Boot.dev', date: '2025-03-22' },
  { title: 'Learn Git', provider: 'Boot.dev', date: '2025-03-23' },
  { title: 'Build a Bookbot in Python', provider: 'Boot.dev', date: '2025-03-24' },
  {
    title: 'Learn Object Oriented Programming in Python',
    provider: 'Boot.dev',
    date: '2025-04-04',
  },
  {
    title: 'Build Asteroids using Python and Pygame',
    provider: 'Boot.dev',
    date: '2025-04-19',
  },

  // Platzi — fundamentos (fin de 2022 / principios de 2023)
  { title: 'Curso de Fundamentos de Matemáticas', provider: 'Platzi', date: '2022-12-08' },
  {
    title: 'Curso de Pensamiento Lógico: Algoritmos y Diagramas de Flujo',
    provider: 'Platzi',
    date: '2023-01-20',
  },
  {
    title: 'Curso de Prework: Configuración de Entorno de Desarrollo en Windows',
    provider: 'Platzi',
    date: '2023-01-29',
  },
];
