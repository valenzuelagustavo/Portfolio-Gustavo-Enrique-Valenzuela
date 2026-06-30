# Portfolio — Gustavo Valenzuela

Sitio personal para mostrar proyectos. Construido con **Astro + Tailwind CSS v4**
y TypeScript en modo estricto.

## Requisitos

- Node.js 18.20+ / 20.3+ / 22+ (este proyecto fija la 22 en `.nvmrc`)
- npm

## Cómo correrlo

```bash
npm install      # instala las dependencias (la primera vez)
npm run dev      # servidor de desarrollo en http://localhost:4321
```

Otros comandos:

```bash
npm run build    # corre astro check + genera el sitio en dist/
npm run preview  # previsualiza el build de producción
npm run check    # chequeo de tipos y de los componentes Astro
```

## Estructura del proyecto

```
portfolio/
├── astro.config.mjs        # config de Astro (site + plugin de Tailwind)
├── tsconfig.json           # TypeScript estricto (preset de Astro)
├── public/                 # archivos estáticos servidos tal cual
│   ├── favicon.svg
│   └── cv/                 # acá irá el CV en PDF
└── src/
    ├── components/         # piezas reutilizables (.astro)
    │   └── Container.astro
    ├── content/            # contenido en Markdown
    │   └── projects/       # un .md por proyecto
    ├── content.config.ts   # schema (Zod) de las content collections
    ├── data/
    │   └── site.ts         # datos centrales (nombre, email, links)
    ├── layouts/
    │   └── BaseLayout.astro # <head> + <body> que comparten las páginas
    ├── pages/              # cada archivo = una ruta del sitio
    │   └── index.astro
    └── styles/
        └── global.css      # Tailwind v4 + tokens de diseño (@theme)
```

## Roadmap (trabajamos por fases)

1. ✅ **Esqueleto + estructura de carpetas** (estás acá)
2. ⬜ Sistema de diseño: paleta, tipografías, escalas
3. ⬜ Maquetado de secciones (Hero, Sobre mí, Skills, Proyectos, Contacto)
4. ⬜ Redacción del contenido real de cada proyecto
5. ⬜ Bilingüe español/inglés (i18n nativo de Astro, rutas `/es/` y `/en/`)
6. ⬜ Deploy en Vercel conectado a GitHub

## Notas

- Tailwind v4 **no usa `tailwind.config.js`**: la config vive en CSS
  (`src/styles/global.css`) dentro del bloque `@theme`.
- Los colores y tipografías actuales son provisorios; se afinan en la Fase 2.
