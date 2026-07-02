---
title: 'LOGIK//CORE — UTN entrance exam simulator'
description: 'A single-page app with a spy-terminal aesthetic to train for the pseudocode final evaluation of the UTN entrance course.'
tech: ['HTML', 'CSS', 'JavaScript']
repo: 'https://github.com/valenzuelagustavo/logikcore-utn-ingreso'
kind: 'personal'
status: 'finished'
order: 4
draft: false
cover: ../../../assets/projects/logikcore/cover.png
gallery:
  - ../../../assets/projects/logikcore/cover.png
  - ../../../assets/projects/logikcore/quiz.png
  - ../../../assets/projects/logikcore/flashcard.png
---

## What it is

A single-page app (HTML + CSS + JS, no dependencies, no build step) to
practice for the pseudocode final evaluation of the **UTN entrance course**
(TUPad). I built it with a spy-terminal look — green phosphor, CRT texture,
code-named categories, an "Intelligence File" for the flashcards section — so
studying before the exam feels less like re-reading a PDF and more like
training for a mission.

## What it does

- **Training mode**: a quiz configurable by number of exercises and
  categories (loops, conditionals, operators, general theory), with feedback
  and an explanation on every answer.
- Two question types: complete/predict the output of a pseudocode snippet, or
  answer a theory question.
- **Intelligence File**: quick-review flashcards for control structures,
  operators, and common patterns (counter, accumulator).
- A bank of 30+ questions, based on my own attempts at UTN's real practice
  exam (with a few contributions from classmates).

## What I learned / solved

- All the pedagogical content is my own work: which questions to include,
  which exam they come from, what concepts they cover, and how to group them
  into categories so the review actually maps onto the real exam.
- I built the interface and logic with **Claude's assistance** as a
  development tool. The goal here wasn't to learn low-level programming
  (that's what the Mega Drive port is for) — it was to get a working study
  tool quickly. Using AI as an accelerator and spending my own time on the
  part that mattered most — the content and getting it pedagogically right —
  felt like the right call.
- Directing that collaboration was work too: reviewing and hand-correcting
  generated questions and explanations against the real exam, since accuracy
  matters more here than anywhere else on the site.

## Why I include it

Because it shows another valid way to solve a problem: not everything has to
be hand-coded line by line to have value, and knowing when to lean on a tool
(and verifying what it gives you) is part of working well today. I'd rather
be upfront about that, with the same transparency I use for every other
project on this site.
