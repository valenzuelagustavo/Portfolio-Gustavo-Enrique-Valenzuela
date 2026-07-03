/*
  Skills agrupadas. Editá libremente: agregá o sacá según lo que realmente
  manejes. Mejor pocas bien que muchas de relleno.

  El título de cada grupo es una CLAVE de traducción (titleKey), porque el
  nombre del grupo cambia según el idioma.

  Los items pueden ser de dos tipos:
  - { name, color }, para nombres propios que no se traducen (Python, Git...).
    El `color` es el hex que representa a esa tecnología (logo/marca real) y
    se usa para pintar la chip en el sitio. Si agregás una tecnología nueva y
    no le ponés color, se muestra con el estilo neutro de siempre.
  - un objeto { key }, para descripciones que sí cambian según el idioma
    (ej: "Línea de comandos" / "Command line"). La clave sale de ui.ts. Estos
    nunca llevan color: son conceptos, no tienen una marca que representar.

  Fuentes de los colores (todos verificados, salvo Pygame — ver nota abajo):
    - Python:       #3776AB — azul oficial del logo (simple-icons).
    - C:            #A8B9CC — gris azulado oficial (simple-icons).
    - Astro:        #BC52EE — violeta oficial de marca (simple-icons).
    - Tailwind CSS: #06B6D4 — cian oficial de marca.
    - Git:          #F05032 — naranja/rojo oficial (git-scm.com).
    - Linux:        #FCC624 — amarillo del logo de Tux (simple-icons).
    - Pygame:       #FFD43B — Pygame no tiene color de marca propio (no
      figura en simple-icons ni en ninguna guía oficial), así que tomé
      prestado el amarillo del propio logo de Python (su segunda serpiente),
      ya que Pygame es una librería de Python. Es una elección razonable,
      no un dato oficial — si preferís otro color, se cambia acá nomás.
*/
import type { UiKey } from '../i18n/ui';

type SkillItem = { name: string; color?: string } | { key: UiKey };

export interface SkillGroup {
  titleKey: UiKey;
  items: SkillItem[];
}

export const skillGroups: SkillGroup[] = [
  {
    titleKey: 'skills.group.languages',
    items: [
      { name: 'Python', color: '#3776AB' },
      { name: 'C', color: '#A8B9CC' },
    ],
  },
  {
    titleKey: 'skills.group.frameworks',
    items: [
      { name: 'Pygame', color: '#FFD43B' },
      { name: 'Astro', color: '#BC52EE' },
      { name: 'Tailwind CSS', color: '#06B6D4' },
    ],
  },
  {
    titleKey: 'skills.group.tools',
    items: [
      { name: 'Git', color: '#F05032' },
      { name: 'Linux', color: '#FCC624' },
      { key: 'skills.item.cli' },
    ],
  },
  {
    titleKey: 'skills.group.fundamentals',
    items: [{ key: 'skills.item.oop' }, { key: 'skills.item.problemSolving' }],
  },
];
