# AGENTS.md — De Complimenten-tent

## Bron van waarheid

Lees vóór iedere taak:

- `docs/de-complimenten-tent-v1-specificatie.md`

De specificatie bepaalt de functionele scope. Bij een conflict heeft dit document voorrang.

## Projectdoel

Een snelle mobiele festivalervaring voor Wildeburg:

1. QR openen.
2. Eén van acht figuren kiezen.
3. Eén van drie voorgestelde complimenten kiezen.
4. De figuur in het echt zoeken.
5. Het compliment live uitspreken.
6. Een ludieke fysieke beloning ontvangen.

## Technische principes

- Vanilla HTML, CSS en JavaScript.
- Vite als buildtool.
- Supabase voor database en admin-auth.
- Vercel voor hosting en beveiligde functies.
- Mobiel eerst.
- Geen zwaar framework zonder expliciete toestemming.
- Geen publieke tellers of leaderboard.
- Geen vrije tekst door festivalbezoekers.
- Geen bezoekersaccounts.
- Geen externe analytics of tracking.
- Geen service-role key in browsercode.
- Kleine, gerichte wijzigingen.
- Bestaande werkende functionaliteit niet ongevraagd herschrijven.

## Werkwijze

Voor iedere taak:

1. Lees de relevante bestaande bestanden.
2. Beschrijf kort welke architectuurlaag geraakt wordt.
3. Maak alleen de gevraagde wijziging.
4. Voeg waar zinvol tests toe.
5. Voer bestaande checks en tests uit.
6. Meld gewijzigde bestanden, beslissingen en resterende risico’s.

Bij functionele onduidelijkheid niet zelf een nieuw productconcept verzinnen.