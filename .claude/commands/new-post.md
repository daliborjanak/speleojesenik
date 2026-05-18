# Nová aktualita

Vytvoř nový příspěvek do aktualit (hlavní stránka webu).

## Pokyny

Zeptej se uživatele na:
1. **Titulek** příspěvku
2. **Obsah** (může být krátký, 1–3 odstavce)
3. **Autora** (default: Dála)
4. **Meta** — krátký popis pro výpis (formát: `měsíc rok, Lokalita`)

Pak vytvoř soubor `src/posts/YYYY-MM-DD-slug.md` kde:
- `YYYY-MM-DD` je dnešní datum
- `slug` je titulek přepsaný do kebab-case bez diakritiky

### Šablona frontmatter

```yaml
---
title: "TITULEK"
date: YYYY-MM-DD
author: "AUTOR"
meta: "META"
tags: ["aktuality"]
---
```

Za frontmatter vložíme obsah příspěvku v Markdownu. Obrázky odkazuj jako `/images/setkani/nazev.jpg` nebo `/images/article/clanek/1.jpg`.

Po vytvoření souboru oznám cestu k souboru a navrhni spuštění `npx @11ty/eleventy --serve` pro preview.
