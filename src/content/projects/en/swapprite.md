---
title: 'Swapprite'
description: 'Python tool (CLI and GUI) that replaces the palette of an indexed sprite by picking the perceptually closest color in the CIELAB space.'
tech: ['Python', 'Pillow', 'Tkinter', 'CIELAB']
repo: 'https://github.com/valenzuelagustavo/Swapprite'
kind: 'personal'
order: 2
draft: false
cover: ../../../assets/projects/swapprite/cover.png
gallery:
  - ../../../assets/projects/swapprite/cover.png
  - ../../../assets/projects/swapprite/gui-exito.png
---

## What it is

A tool for indie developers and pixel artists that swaps the color palette of an
indexed sprite. Instead of comparing colors with a simple RGB subtraction, it
converts them to the **CIELAB** space and picks the color the human eye perceives
as closest. It runs from the terminal (for batch processing) or through a
graphical interface.

## What it does

- Reads palettes in **.gpl** format (GIMP / Aseprite).
- Keeps index 0 as transparent, key for retro hardware.
- Preserves the PNG in indexed mode (mode P), ready to drop into a game engine
  with no extra conversions.
- Designed for **retro development pipelines**: demakes and ports to classic
  consoles like the Sega Mega Drive (SGDK).

## What I learned / solved

- **Color spaces for real**: why comparing colors in RGB fools the eye, and how
  CIELAB models perceptual distance. I implemented the conversion and the
  distance formula.
- Handling **indexed images** with Pillow (mode P, palettes, transparency).
- Splitting the program into modules (color logic, palette parsing, interface)
  and offering the **same logic from both the CLI and the GUI**.

## Why I include it

It combines something I'm passionate about —retro development— with a nice
technical problem to solve. And it connects to my project of porting a game to
the Sega Mega Drive: it's a tool from my own pipeline.
