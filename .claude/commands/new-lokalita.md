# Nová lokalita

Přidej stránku pro novou speleologickou lokalitu (krasová oblast, jeskyně).

## Pokyny

Zeptej se uživatele na:
1. **Název lokality** (zobrazí se jako titulek stránky)
2. **Slug** — krátký identifikátor pro URL (kebab-case, bez diakritiky, např. `na-pomezi`)
3. **Obsah** — popis lokality, jednotlivé jeskyně jako `### Název jeskyně`

Vytvoř soubor `src/lokality/SLUG.md`:

### Šablona

```yaml
---
title: "NÁZEV LOKALITY"
layout: layouts/layout.njk
---

NÁZEV LOKALITY
--------------

### Jeskyně 1

Popis...

### Jeskyně 2

Popis...
```

**Navigace:** Lokalita se automaticky zobrazí na stránce `/lokality/` (výpis z kolekce). Pokud chceš přidat odkaz do hlavní navigace v `src/_includes/layouts/layout.njk`, upozorni uživatele, že to vyžaduje ruční úpravu layoutu.

Po vytvoření souboru spusť `npx @11ty/eleventy` pro ověření.
