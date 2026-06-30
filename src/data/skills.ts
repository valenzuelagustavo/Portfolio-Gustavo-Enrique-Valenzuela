/*
  Skills agrupadas. Editá libremente esta lista: agregá o sacá según lo que
  realmente manejes. La idea es ser honesto (mejor pocas bien que muchas de
  relleno) y mostrar lo que estás usando de verdad.

  Base actual: lo que me contaste (Python en la facu, C en el proyecto de la
  Mega Drive) + tus certificados de Boot.dev (Git, Linux, POO, Pygame) + el
  stack con el que estamos armando este mismo sitio (Astro, Tailwind).
*/
export interface SkillGroup {
  title: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Lenguajes',
    items: ['Python', 'C'],
  },
  {
    title: 'Frameworks y librerías',
    items: ['Pygame', 'Astro', 'Tailwind CSS'],
  },
  {
    title: 'Herramientas',
    items: ['Git', 'Linux', 'Línea de comandos'],
  },
  {
    title: 'Fundamentos',
    items: ['Programación orientada a objetos', 'Lógica y resolución de problemas'],
  },
];
