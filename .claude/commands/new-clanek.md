# Nový článek

Vytvoř nový odborný článek do sekce Články.

## Pokyny

Zeptej se uživatele na:
1. **Titulek** článku
2. **Obsah** — může být delší, s obrázky, podnadpisy
3. **Autora** (nepovinné, lze nechat prázdné)
4. **Meta** — formát `měsíc rok | Lokalita`
5. **Rok události** (pro datum — články jsou datovány k 1. 1. daného roku)

Zjisti číslo posledního článku:
```bash
ls src/clanky/*.md | grep -v index | sort | tail -1
```

Nový soubor pojmenuj o 1 výš, např. `src/clanky/27.md`.

### Šablona frontmatter

```yaml
---
title: "TITULEK"
date: ROK-01-01
author: "AUTOR"
meta: "META"
tags: ["clanky"]
---
```

Za frontmatter vložíme obsah v Markdownu. Obrázky jsou v `src/images/article/SLUG/` — připomeň uživateli, že je tam musí zkopírovat, a v textu odkazuj jako `/images/article/SLUG/1.jpg`.

Nadpisy v obsahu článku začínají od `##` (H2), protože `#` (H1) je vyhrazen pro `<title>` stránky.

Po vytvoření souboru: `npx @11ty/eleventy` pro ověření buildu.
