---
title: 'Dosto'
description: 'Internal Python tool that automates the extraction and cross-checking of invoices, credit notes, and delivery notes at a real company.'
tech: ['Python', 'Pandas', 'pdfplumber', 'CustomTkinter']
repo: 'https://github.com/valenzuelagustavo/Dosto'
kind: 'personal'
order: 1
draft: false
---

## What it is

An automation tool I built for **Papillon Libros S.A.**, where I work. It
replaces the manual data entry of commercial documents (invoices, credit notes,
and delivery notes): it processes the PDFs, extracts the information, and runs
automatic cross-checks of stock and returns.

## What it does

- Converts invoice and credit-note PDFs into clean Excel sheets, mapping
  barcodes, ISBNs, and discounts row by row.
- Supports the formats of **several large publishers** (Penguin Random House,
  Santillana, Maipue, Heliasta), each with its own PDF structure.
- Compares delivery notes against credit notes to detect missing items, and even
  **drafts the claim letter** to the publisher automatically.

## What I learned / solved

- **Extracting data from PDFs that were never meant for it**: each publisher
  builds its documents differently, so I used regular expressions (RegEx) and
  "fingerprints" like the tax ID (CUIT) to identify and parse each format.
- **Pandas to cross-check inventories**: grouping, consolidating, and comparing
  thousands of rows with _outer joins_ to find discrepancies.
- Building a **desktop interface** usable by non-technical people: my coworkers
  open it with a double click, no terminal needed.
- Above all, **solving a real problem** that used to be done by hand and took
  hours.

## Why I include it

It's the project I'm most proud of: it came from a concrete need at work and is
actually used today. It shows I can take code from a real-world problem all the
way to a finished tool.
