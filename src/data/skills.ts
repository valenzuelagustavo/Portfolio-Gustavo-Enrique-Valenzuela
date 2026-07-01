/*
  Skills agrupadas. Editá libremente: agregá o sacá según lo que realmente
  manejes. Mejor pocas bien que muchas de relleno.

  El título de cada grupo es una CLAVE de traducción (titleKey), porque el
  nombre del grupo cambia según el idioma.

  Los items pueden ser de dos tipos:
  - un string plano, para nombres propios que no se traducen (Python, Git...).
  - un objeto { key }, para descripciones que sí cambian según el idioma
    (ej: "Línea de comandos" / "Command line"). La clave sale de ui.ts.
*/
import type { UiKey } from '../i18n/ui';

type SkillItem = string | { key: UiKey };

export interface SkillGroup {
  titleKey: UiKey;
  items: SkillItem[];
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
    items: ['Git', 'Linux', { key: 'skills.item.cli' }],
  },
  {
    titleKey: 'skills.group.fundamentals',
    items: [{ key: 'skills.item.oop' }, { key: 'skills.item.problemSolving' }],
  },
];
