---
title: 'TMNT: The Arcade Game — port a Sega Mega Drive'
description: 'Demake/port en C con SGDK del arcade de Konami de 1989, con selección de personaje para 2 jugadores y scroll de nivel. En desarrollo.'
tech: ['C', 'SGDK', 'Sega Mega Drive']
repo: 'https://github.com/valenzuelagustavo/TMNT-ARCADE-MEGADRIVE-PORT'
kind: 'personal'
status: 'in-progress'
order: 3
draft: false
cover: ../../../assets/projects/tmnt-megadrive/cover.png
gallery:
  - ../../../assets/projects/tmnt-megadrive/cover.png
  - ../../../assets/projects/tmnt-megadrive/select.png
  - ../../../assets/projects/tmnt-megadrive/gameplay.png
---

## Qué es

Un port/demake no oficial de **Teenage Mutant Ninja Turtles: The Arcade Game**
(Konami, 1989) para **Sega Mega Drive/Genesis**, escrito en C con **SGDK**
(Sega Genesis Development Kit). Es un proyecto fan-made sin fines comerciales:
uso el arcade original como referencia de diseño y voy reconstruyendo el juego
desde cero para el hardware de la Mega Drive, que funciona muy distinto (sin
framebuffer, todo a base de tiles y planos de VRAM).

**Es un proyecto en desarrollo activo, no terminado.** Le voy dedicando tiempo
cuando puedo sacarlo del estudio y del trabajo, así que avanza de a partes. Lo
sumo igual al portfolio porque ya tiene decisiones técnicas concretas y es el
proyecto que más me está enseñando de programación en C y de cómo funciona el
hardware por debajo del sistema operativo (acá no hay sistema operativo).

## Qué hace (hasta ahora)

- Secuencia de intros encadenadas como una máquina de estados de escenas
  (Sega → Konami → SGDK → intro del arcade → selección de jugadores →
  selección de personaje → título del nivel 1).
- **Selección de personaje para 2 jugadores** simultáneos, con las 4 tortugas
  (Leo, Mike, Don, Raph) y detección de colisión entre los cursores de ambos
  jugadores para que no puedan elegir encima del otro.
- Estructura de **Player multi-instancia**: cada jugador (P1/P2) tiene su
  propio sprite, input, cámara y física, para poder jugar de a dos con el
  mismo código.
- Sistema de movimiento y combate: caminar en dos "carriles" de profundidad,
  salto con gravedad simple, combo de 3 golpes con ventana de tiempo para
  encadenarlos, y variantes de golpe/aturdido/levantarse.
- El **nivel 1 es jugable y hace scroll**: la cámara avanza solo hacia la
  derecha (como en el arcade original), sobre un fondo mucho más ancho que la
  VRAM disponible.

Lo que falta: los niveles 2 en adelante, los enemigos con su propia IA
(por ahora solo está el sprite de Rocksteady importado), sonido con el chip
YM2612, y pulir el balance del combate. El propio código lo marca: el loop
principal en `main.c` todavía tiene un comentario de
`// ... agregar el resto de casos ...` esperando los estados que faltan.

## Qué aprendí / qué resolví

- **Programar sin sistema operativo ni framebuffer**: en la Mega Drive no hay
  "dibujar un pixel"; todo es tiles cargados en VRAM y organizados en planos de
  fondo (BG_A/BG_B) más sprites de hardware. Pensar el juego así fue el cambio
  de mentalidad más grande viniendo de Python/Pygame.
- **Streaming de fondo con buffer circular**: el nivel 1 mide 1376px de ancho
  pero el plano de fondo solo tiene 512px (64 tiles). En vez de cargar todo el
  nivel en VRAM (no entra), cargo una vez los tiles únicos y voy dibujando
  columnas nuevas a medida que la cámara avanza, reciclando las columnas que
  quedaron fuera de pantalla. Como la cámara del beat 'em up original solo
  avanza a la derecha, el buffer no necesita manejar scroll hacia atrás.
- **Multi-instancia en C sin clases**: usar un `struct Player` con punteros y
  funciones que reciben `Player*` para lograr algo parecido a "dos objetos"
  (P1 y P2) sin programación orientada a objetos nativa del lenguaje.
- **El límite de 64 colores** de la consola obliga a pensar la paleta del
  juego entero como un problema de diseño, no solo de arte: de ahí nació
  **Swapprite**, otra herramienta mía para remapear paletas de sprites.
- Máquinas de estado (`SceneId`, `PlayerState`) como forma de organizar un
  juego que, sin ellas, se vuelve un `if`/`else` imposible de mantener.

## Por qué lo incluyo

Porque es honesto mostrarlo así: en progreso. Es el proyecto que más me
empuja a entender qué pasa "por debajo" del código —memoria, VRAM, timing de
frame— y quiero que se note ese proceso de aprendizaje, no solo un resultado
pulido. Además conecta directamente con **Swapprite**, mostrando cómo un
problema de un proyecto (el límite de colores de la Mega Drive) generó otra
herramienta separada para resolverlo.
