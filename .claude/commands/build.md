# Build a preview

Postav web lokálně a spusť dev server.

## Kroky

1. Ověř, že jsou nainstalované závislosti:
   ```bash
   ls node_modules/.bin/eleventy 2>/dev/null || npm install
   ```

2. Spusť dev server:
   ```bash
   npx @11ty/eleventy --serve
   ```
   Web bude dostupný na http://localhost:8080.

3. Pro jednorázový build (bez serveru):
   ```bash
   npx @11ty/eleventy
   ```
   Output je v `_site/` — tento adresář **negituj** (je v `.gitignore`).

## Časté problémy

- **Port obsazen:** Eleventy zkusí jiný port automaticky, sleduj výstup.
- **Chybí obrázek:** Zkontroluj, zda je soubor v `src/images/` (passthrough copy).
- **Stránka se nezobrazuje:** Zkontroluj frontmatter — chybějící nebo špatný `layout` způsobí vynechání stránky.
- **Špatné datum:** Eleventy parsuje datum ze jména souboru (`YYYY-MM-DD-slug.md`) i z frontmatter `date:`. Prioritu má frontmatter.

## Deploy

Deploy se spouští automaticky pushnutím na větev `main`. Ručně spustit workflow lze přes GitHub Actions UI (workflow_dispatch není nakonfigurován — push je jediný trigger).
