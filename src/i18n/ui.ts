/*
  Diccionario de traducciones de la INTERFAZ (no del contenido de proyectos).
  Cada clave es un texto del sitio; cada idioma tiene su versión. Los componentes
  piden los textos con la función t() en lugar de tenerlos "incrustados".

  Para agregar/editar un texto: lo cambiás acá, en los dos idiomas, y listo.
*/

export const defaultLang = 'es';

export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const ui = {
  es: {
    'nav.aria': 'Navegación principal',
    'nav.about': 'Sobre mí',
    'nav.skills': 'Skills',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',

    'header.openMenu': 'Abrir menú',
    'header.closeMenu': 'Cerrar menú',
    'header.switchLang': 'Cambiar idioma',

    'hero.tag': '// hola, soy',
    'hero.lead':
      'Estudiante de programación enfocado en Python, explorando además el desarrollo retro en C. Me gusta entender cómo funcionan las cosas por dentro y construir herramientas y proyectos para aprender en serio.',
    'hero.cta.projects': 'Ver proyectos',
    'hero.cta.cv': 'Descargar CV',

    'about.tag': '// sobre mí',
    'about.title': 'Quién soy',
    'about.p1':
      'Tengo 41 años y estoy haciendo un cambio de rumbo hacia la programación, algo que siempre me atrajo. Hoy curso la <strong>Tecnicatura Universitaria en Programación</strong> en la UTN (Argentina), donde trabajo sobre todo con Python.',
    'about.p2':
      'Por mi cuenta estoy explorando <strong>C</strong> a partir de un proyecto que me entusiasma: portar un juego de arcade a la Sega Mega Drive. Me gusta entender cómo funcionan las cosas por dentro y aprender construyendo.',
    'about.p3':
      'Esa curiosidad ya la llevé al trabajo: armé <strong>Dosto</strong>, una herramienta en Python que automatiza tareas que antes hacíamos a mano. Me motiva usar el código para resolver problemas reales.',
    'about.focus.title': 'En foco',
    'about.focus.text':
      'Afianzar fundamentos sólidos (lógica, estructuras de datos, POO) y sumar proyectos reales.',
    'about.seeking.title': 'Busco',
    'about.seeking.text':
      'Una primera oportunidad como desarrollador junior para aportar ganas, constancia y seguir creciendo.',

    'skills.tag': '// skills',
    'skills.title': 'Tecnologías',
    'skills.intro':
      'Lo que manejo y estoy usando hoy. Prefiero mostrar pocas cosas bien antes que inflar la lista.',
    'skills.group.languages': 'Lenguajes',
    'skills.group.frameworks': 'Frameworks y librerías',
    'skills.group.tools': 'Herramientas',
    'skills.group.fundamentals': 'Fundamentos',
    'skills.item.cli': 'Línea de comandos',
    'skills.item.oop': 'Programación orientada a objetos',
    'skills.item.problemSolving': 'Lógica y resolución de problemas',

    'projects.tag': '// proyectos',
    'projects.title': 'Proyectos',
    'projects.intro':
      'Algunas cosas que construí mientras aprendo. Cada una tiene su página con más detalle de qué hice y qué aprendí.',
    'project.detail': 'Ver detalle →',
    'project.kind.guiado': 'Proyecto guiado',
    'project.kind.personal': 'Proyecto personal',
    'project.back': '← Volver a proyectos',
    'project.repo': 'Ver repositorio',
    'project.demo': 'Ver demo',

    'contact.tag': '// contacto',
    'contact.title': 'Hablemos',
    'contact.intro':
      '¿Tenés una oportunidad o querés charlar sobre un proyecto? Escribime por cualquiera de estos medios.',

    'footer.madeWith': 'Hecho con',
  },
  en: {
    'nav.aria': 'Main navigation',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    'header.openMenu': 'Open menu',
    'header.closeMenu': 'Close menu',
    'header.switchLang': 'Switch language',

    'hero.tag': "// hi, I'm",
    'hero.lead':
      'Programming student focused on Python, also exploring retro development in C. I like understanding how things work under the hood and building tools and projects to really learn.',
    'hero.cta.projects': 'View projects',
    'hero.cta.cv': 'Download CV',

    'about.tag': '// about me',
    'about.title': 'Who I am',
    'about.p1':
      "I'm 41 and making a career change into programming, something that always drew me in. I'm currently studying the <strong>University Technical Degree in Programming</strong> at UTN (Argentina), where I work mostly with Python.",
    'about.p2':
      "On my own I'm exploring <strong>C</strong> through a project I'm excited about: porting an arcade game to the Sega Mega Drive. I like understanding how things work under the hood and learning by building.",
    'about.p3':
      "I've already brought that curiosity to work: I built <strong>Dosto</strong>, a Python tool that automates tasks we used to do by hand. I'm driven by using code to solve real problems.",
    'about.focus.title': 'Focus',
    'about.focus.text':
      'Strengthening solid fundamentals (logic, data structures, OOP) and adding real projects.',
    'about.seeking.title': 'Looking for',
    'about.seeking.text':
      'A first opportunity as a junior developer to bring motivation, consistency, and keep growing.',

    'skills.tag': '// skills',
    'skills.title': 'Technologies',
    'skills.intro':
      "What I use and work with today. I'd rather show a few things well than pad the list.",
    'skills.group.languages': 'Languages',
    'skills.group.frameworks': 'Frameworks & libraries',
    'skills.group.tools': 'Tools',
    'skills.group.fundamentals': 'Fundamentals',
    'skills.item.cli': 'Command line',
    'skills.item.oop': 'Object-oriented programming',
    'skills.item.problemSolving': 'Logic & problem solving',

    'projects.tag': '// projects',
    'projects.title': 'Projects',
    'projects.intro':
      'Some things I built while learning. Each one has its own page with more detail on what I did and learned.',
    'project.detail': 'View details →',
    'project.kind.guiado': 'Guided project',
    'project.kind.personal': 'Personal project',
    'project.back': '← Back to projects',
    'project.repo': 'View repository',
    'project.demo': 'View demo',

    'contact.tag': '// contact',
    'contact.title': "Let's talk",
    'contact.intro':
      'Have an opportunity or want to chat about a project? Reach me through any of these.',

    'footer.madeWith': 'Built with',
  },
} as const;

// Tipo con todas las claves válidas (sale del español, que es la referencia).
export type UiKey = keyof (typeof ui)['es'];

/*
  Devuelve una función t() para el idioma pedido. Si por error falta una
  traducción en un idioma, cae al español para no dejar el texto vacío.
*/
export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/*
  Ítems de la navegación. Guardamos el ancla (id) y la clave de traducción del
  label. El href con el prefijo de idioma se arma en el Header.
*/
export const navItems: { id: string; key: UiKey }[] = [
  { id: 'sobre-mi', key: 'nav.about' },
  { id: 'skills', key: 'nav.skills' },
  { id: 'proyectos', key: 'nav.projects' },
  { id: 'contacto', key: 'nav.contact' },
];
