---
title: 'Dosto'
description: 'Herramienta interna en Python que automatiza la extracción y el control cruzado de facturas, notas de crédito y remitos en una empresa real.'
tech: ['Python', 'Pandas', 'pdfplumber', 'CustomTkinter']
repo: 'https://github.com/valenzuelagustavo/Dosto'
kind: 'personal'
order: 1
draft: false
---

## Qué es

Una herramienta de automatización que desarrollé para **Papillon Libros S.A.**,
donde trabajo. Reemplaza la carga manual de datos de documentos comerciales
(facturas, notas de crédito y remitos): procesa los PDFs, extrae la información y
hace controles cruzados automáticos de stock y devoluciones.

## Qué hace

- Convierte facturas y notas de crédito en PDF a planillas de Excel limpias,
  mapeando códigos de barra, ISBN y descuentos fila por fila.
- Soporta los formatos de **varias editoriales grandes** (Penguin Random House,
  Santillana, Maipue, Heliasta), cada una con su estructura de PDF distinta.
- Compara remitos contra notas de crédito para detectar faltantes, y hasta
  **redacta sola la carta de reclamo** a la editorial.

## Qué aprendí / qué resolví

- **Extraer datos de PDFs que no fueron pensados para eso**: cada editorial arma
  sus documentos distinto, así que usé expresiones regulares (RegEx) y "huellas"
  como el CUIT para identificar y parsear cada formato.
- **Pandas para cruzar inventarios**: agrupar, consolidar y comparar miles de
  líneas con _outer joins_ para encontrar diferencias.
- Armar una **interfaz de escritorio** usable por personas no técnicas: mis
  compañeros la abren con doble click, sin tocar la terminal.
- Sobre todo, **resolver un problema real** que antes se hacía a mano y llevaba
  horas.

## Por qué lo incluyo

Es el proyecto que más me enorgullece: nació de una necesidad concreta del
trabajo y hoy se usa de verdad. Muestra que puedo llevar el código desde un
problema del mundo real hasta una herramienta terminada.
