# Grounded Climbing — website

Tweetalig (NL/EN) Astro-project, mobiel eerst. Stijl en structuur volgen `grounded-climbing-website-stijl.md`.

```
npm install
npm run dev      # lokaal
npm run build    # statische site in dist/
```

## Voorbeeld bekijken
- **Online (aanbevolen):** koppel deze repository aan Netlify (gratis): *Add new site → Import from Git → deze repo → branch `claude/fervent-hamilton-o3yg00`*. De instellingen staan al in `netlify.toml`. Netlify geeft meteen een voorbeeldlink en bouwt elke nieuwe push opnieuw.
- **Lokaal:** `git clone`, `npm install`, `npm run dev` en open http://localhost:4321.

## Waar zit wat
- `src/i18n/content.ts` — alle teksten NL + EN, retreats, prijzen, WhatsApp- en Instagramlink
- `src/components/Page.astro` — homepage; `TeamPage.astro` — coaches & partners (`/coaches/`); `Header.astro`, `Footer.astro` gedeeld
- `src/styles/global.css` — kleuren (tokens bovenaan), typografie, layout
- `src/scripts/main.ts` — GSAP: intro, parallax, reveal, kernwaardencirkel, kaartlijnen

## Nog in te vullen (zoek op `TODO`)
- Foto's: grijze/groene vlakken (`.photo`) vervangen door `<img>` zodra de Drive-map met foto's klaar is
- Echte retreats, data en prijzen; aanbodkaarten
- Twee cijfers en tekst voor "Over mij"; bio's Jarne, Pauline, Caro (akkoord nodig)
- Domeinnaam (staat nu op `groundedclimbing.example` in `astro.config.mjs`)
- Lettertype (nu Inter Tight als placeholder)
- Contactformulier koppelen aan een dienst (nu geen backend)
- Kaart: echte bestemmingen en nauwkeurigere omlijning
- Verhaal: Jarne bepaalt hoeveel persoonlijks erin komt
- Juridisch: pakketreis / insolventieverzekering checken
