/*
  Skills agrupadas. Editá libremente: agregá o sacá según lo que realmente
  manejes. Mejor pocas bien que muchas de relleno.

  Ahora el título de cada grupo es una CLAVE de traducción (titleKey), porque el
  nombre del grupo cambia según el idioma. Los items (Python, Git, etc.) son
  nombres propios y no se traducen.
*/
import type { UiKey } from '../i18n/ui';

export interface SkillGroup {
  titleKey: UiKey;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    titleKey: 'skills.group.languages',
    items: ['Python', 'C'],
  },
  {
    titleKey: 'skills.group.frameworks',
    items: ['Pygame', 'Astro', 'Tailwind CSS'],
  },
  {
    titleKey: 'skills.group.tools',
    items: ['Git', 'Linux', 'Línea de comandos'],
  },
  {
    titleKey: 'skills.group.fundamentals',
    items: ['Programación orientada a objetos', 'Lógica y resolución de problemas'],
  },
];
