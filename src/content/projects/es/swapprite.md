---
title: 'Swapprite'
description: 'Herramienta (CLI y GUI) en Python para reemplazar la paleta de un sprite indexado eligiendo el color perceptualmente más cercano en el espacio CIELAB.'
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

## Qué es

Una herramienta para desarrolladores indie y artistas de pixel art que cambia la
paleta de colores de un sprite indexado. En vez de comparar colores con una
simple resta de RGB, los convierte al espacio **CIELAB** y elige el color que el
ojo humano percibe como más parecido. Funciona desde la terminal (para procesar
en lote) o con una interfaz gráfica.

## Qué hace

- Lee paletas en formato **.gpl** (GIMP / Aseprite).
- Mantiene el índice 0 como transparente, clave para hardware retro.
- Conserva el PNG en modo indexado (modo P), listo para inyectar en un motor de
  juego sin conversiones extra.
- Pensada para **pipelines de desarrollo retro**: demakes y ports a consolas
  clásicas como la Sega Mega Drive (SGDK).

## Qué aprendí / qué resolví

- **Espacios de color en serio**: por qué comparar colores en RGB engaña al ojo,
  y cómo CIELAB modela la distancia perceptual. Implementé la conversión y la
  fórmula de distancia.
- Manejo de **imágenes indexadas** con Pillow (modo P, paletas, transparencia).
- Separar el programa en módulos (lógica de color, parseo de paletas, interfaz) y
  ofrecer la **misma lógica desde la CLI y la GUI**.

## Por qué lo incluyo

Combina algo que me apasiona —el desarrollo retro— con un problema técnico lindo
de resolver. Y se conecta con mi proyecto de portar un juego a la Sega Mega
Drive: es una herramienta de mi propio pipeline.
