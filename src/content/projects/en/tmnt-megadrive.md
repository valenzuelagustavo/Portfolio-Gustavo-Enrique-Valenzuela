---
title: 'TMNT: The Arcade Game — Sega Mega Drive port'
description: 'C/SGDK demake-port of the 1989 Konami arcade game, with 2-player character select and level scrolling. Work in progress.'
tech: ['C', 'SGDK', 'Sega Mega Drive']
repo: 'https://github.com/valenzuelagustavo/TMNT-ARCADE-MEGADRIVE-PORT'
kind: 'personal'
status: 'in-progress'
order: 3
draft: false
---

## What it is

An unofficial port/demake of **Teenage Mutant Ninja Turtles: The Arcade Game**
(Konami, 1989) for the **Sega Mega Drive/Genesis**, written in C with **SGDK**
(Sega Genesis Development Kit). It's a non-commercial fan project: I use the
original arcade game as a design reference and I'm rebuilding it from scratch
for Mega Drive hardware, which works very differently (no framebuffer,
everything is tile- and VRAM-plane-based).

**This is an actively developed, unfinished project.** I work on it whenever I
can carve out time between school and my job, so it moves forward in chunks.
I'm still adding it to the portfolio because it already has real, concrete
technical decisions behind it, and it's the project teaching me the most about
C programming and about how hardware works underneath the operating system —
except here there is no operating system.

## What it does (so far)

- A chained intro sequence built as a scene state machine (Sega → Konami →
  SGDK → arcade intro → player select → character select → level 1 title).
- **2-player simultaneous character select**, with all 4 turtles (Leo, Mike,
  Don, Raph) and collision detection between both players' cursors so they
  can't land on the same character.
- A **multi-instance Player structure**: each player (P1/P2) has its own
  sprite, input, camera, and physics, so two people can play using the same
  underlying code.
- Movement and combat: walking along two depth "lanes," a simple gravity-based
  jump, a 3-hit combo with a timing window to chain attacks, and
  hit/stagger/get-up variants.
- **Level 1 is playable and scrolls**: the camera only moves right (like in
  the original arcade cabinet), over a background much wider than the
  available VRAM.

What's still missing: levels 2 onward, enemies with their own AI (right now
only the Rocksteady sprite has been imported), YM2612 chip sound, and combat
balance polish. The code itself flags this: the main loop in `main.c` still
has a `// ... add the rest of the cases ...` comment waiting for the missing
states.

## What I learned / solved

- **Programming without an OS or a framebuffer**: on the Mega Drive there's no
  "draw a pixel"; everything is tiles loaded into VRAM and arranged on
  background planes (BG_A/BG_B) plus hardware sprites. Thinking about the
  game this way was the biggest mental shift coming from Python/Pygame.
- **Circular-buffer background streaming**: level 1 is 1376px wide, but the
  background plane only holds 512px (64 tiles). Instead of loading the whole
  level into VRAM (it doesn't fit), I load the unique tiles once and draw new
  columns as the camera advances, recycling the columns that scrolled off
  screen. Since the original beat-em-up camera only ever moves right, the
  buffer never has to handle scrolling backwards.
- **Multi-instance logic in C without classes**: using a `Player` struct with
  pointers and functions that take a `Player*` to get something similar to
  "two objects" (P1 and P2) without the language's native object orientation.
- **The console's 64-color limit** forces you to treat the whole game's
  palette as a design problem, not just an art one — that's where
  **Swapprite**, another tool of mine for remapping sprite palettes, came
  from.
- State machines (`SceneId`, `PlayerState`) as a way to organize a game that,
  without them, turns into an unmaintainable pile of `if`/`else`.

## Why I include it

Because it's honest to show it this way: in progress. It's the project that
pushes me hardest to understand what happens "under the hood" — memory, VRAM,
frame timing — and I want that learning process to show, not just a polished
result. It also connects directly to **Swapprite**, showing how a problem
from one project (the Mega Drive's color limit) spun off a separate tool to
solve it.
