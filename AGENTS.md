# AGENTS.md — speleojesenik.cz

Web speleologické skupiny SEVER (základní organizace 7-04 ČSS). Statický generátor **Eleventy (11ty)**, nasazeno na **GitHub Pages** přes GitHub Actions.

## Technologie

| Vrstva | Nástroj |
|--------|---------|
| SSG | [@11ty/eleventy](https://www.11ty.dev/) v3 |
| Šablonovací systém | Nunjucks (`.njk`) + Markdown |
| CSS | `/src/css/speleo.css` (vlastní, bez frameworku) |
| Deploy | GitHub Actions → GitHub Pages (branch `main`) |

## Struktura projektu

```
src/
  _includes/layouts/layout.njk   # Jediný layout, použit všude
  css/speleo.css                 # Globální styly
  images/                        # Obrázky (article/, photo/, setkani/)
  js/ga.js                       # Google Analytics
  posts/                         # Aktuality (krátké novinky na hlavní stránce)
    posts.json                   # Výchozí frontmatter: layout + tag "posts"
    YYYY-MM-DD-slug.md
  clanky/                        # Delší odborné články
    clanky.json                  # tag "clanky"
    NN.md                        # Číslované soubory (21, 22, …)
    index.njk                    # Výpis článků
  lokality/                      # Stránky lokalit (krasové oblasti)
    lokality.json                # tag "lokality"
    nazev.md
    index.njk
  index.njk                      # Hlavní stránka (výpis posts)
  o-skupine.md
  kontakt.md
  diskuze.md
  setkani-2026.md                # Speciální stránka pro akci
  robots.txt
  favicon.ico
.eleventy.js                     # Konfigurace: passthrough copy, dateFilter
.github/workflows/deploy.yml     # Build + deploy na Pages při push na main
_site/                           # Build output (v .gitignore, negitovat!)
```

## Příkazy

```bash
npm install                      # Instalace závislostí
npx @11ty/eleventy               # Jednorázový build → _site/
npx @11ty/eleventy --serve       # Dev server s live reload (port 8080)
```

## Frontmatter konvence

### Post (aktualita) — `src/posts/YYYY-MM-DD-slug.md`
```yaml
---
title: "Titulek"
date: 2026-06-01
author: "Jméno"
meta: "červen 2026, Na Pomezí"
tags: ["aktuality"]        # nezapomínat — "aktuality" se zobrazuje na HP
---
```
Tag `"posts"` dodá `posts.json` automaticky; `"aktuality"` přidej ručně pokud chceš zobrazit i v kolekci aktualit.

### Článek (clanek) — `src/clanky/NN.md`
```yaml
---
title: "Titulek"
date: 2020-01-01
author: ""
meta: "měsíc rok | lokalita"
tags: ["clanky"]
---
```
Soubory jsou číslované (26.md → 27.md …). Tag `"clanky"` dodá `clanky.json`, ale lze přepsat.

### Lokalita — `src/lokality/nazev.md`
```yaml
---
title: "Název lokality"
layout: layouts/layout.njk
---
```

## Obrázky

Obrázky vkládej do `src/images/`:
- `article/` — k článkům
- `setkani/` — k setkání
- `photo/` — fotogalerie

V Markdownu odkazuj absolutní cestou: `![popis](/images/article/clanek/1.jpg)`

## Navigace

Navigace je pevně zakódována v `layout.njk`. Přidáš-li novou sekci (novou top-level stránku), musíš přidat i `<li>` do menu v layoutu.

## Deploy

Push na `main` → GitHub Action automaticky builduje a nasazuje na GitHub Pages. Jiná větev deploy nespouští.

## Jazyk a styl

Veškerý obsah je **česky**. Drž se hovorového ale srozumitelného tónu, bez zbytečného formalního jazyka. Odborná speleologická terminologie je vítána.

## Co nedělat

- Negitovat adresář `_site/` (build output).
- Nemazat `node_modules/` bez `npm install` po ruce.
- Neměnit `layout.njk` pro malé úpravy obsahu — layout je sdílený.
- Nepřidávat JS frameworky — web je záměrně bez závislostí na frontendu.
