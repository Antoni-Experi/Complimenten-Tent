# De Complimenten-tent — Functionele en Technische Definitie V1

## 1. Doel van dit document

Dit document is de bindende product- en bouwspecificatie voor versie 1 van **De Complimenten-tent**.

Het document vervangt alle eerdere ideeën waarin bezoekers digitale vrije tekst instuurden of waarin complimenten publiek werden opgeslagen en gemodereerd.

De definitieve kern is:

> Een festivalganger scant een QR-code, kiest één van acht figuren, kiest één voorgesteld compliment, zoekt die figuur in het echt op Wildeburg en spreekt het compliment live uit. De beloning gebeurt fysiek en ludiek op het festival.

Codex mag binnen deze definitie technische oplossingen kiezen, maar mag geen functionele keuzes zelf herinterpreteren.

---

# 2. Productvisie

## 2.1 Kernidee

Op Wildeburg worden meer dan 100 QR-stickers verspreid.

Na het scannen komt een festivalganger in een korte, mobiele ervaring terecht:

1. De gebruiker wordt ludiek “uitverkoren”.
2. De gebruiker kiest vrij één van acht figuren.
3. De gebruiker kiest één van drie voorgestelde complimenten.
4. Het gekozen compliment wordt als persoonlijke missie getoond.
5. De gebruiker steekt de telefoon weg en gaat de gekozen figuur zoeken.
6. Bij een echte ontmoeting spreekt de gebruiker het compliment uit.
7. De gekozen figuur beloont de bezoeker live met een instelbare ludieke beloning.

De digitale ervaring is uitsluitend de trigger.  
De echte ervaring moet buiten het scherm plaatsvinden.

## 2.2 Ontwerpprincipes

De app moet:

- binnen enkele seconden begrijpbaar zijn;
- zo weinig mogelijk schermen en tikken vereisen;
- verwondering en nieuwsgierigheid oproepen;
- snel terugleiden naar de fysieke festivalwereld;
- mobielvriendelijk zijn;
- goed werken bij drukte, lawaai, roes en matige verbinding;
- volwassen, liefdevol, absurd en festivalachtig aanvoelen;
- geen kinderfeeststijl of commerciële merkactivatie uitstralen;
- geen accounts of persoonsgegevens van bezoekers vragen;
- geen uitgebreide uitleg, onboarding of spelregels tonen.

Iedere extra actie of ieder extra scherm moet aantoonbaar nodig zijn.

---

# 3. Definitieve publieke gebruikersflow

## 3.1 Stap 1 — QR scannen

Alle QR-stickers mogen voorlopig naar dezelfde publieke URL verwijzen.

Na het openen van de URL ziet de gebruiker onmiddellijk het startscherm.

Er is geen account, login, toestemmingstraject of introductiewizard.

## 3.2 Stap 2 — Startscherm

Het eerste scherm bevat:

- de titel van het concept;
- een zeer korte ludieke uitverkiezingsboodschap;
- één duidelijke primaire knop;
- geen lange uitleg;
- geen extra scherm vóór de targetkeuze.

Richting voor de copy:

> Proficiat.  
> Je bent uitverkoren om op Wildeburg één van acht figuren te vinden.

Primaire knop:

> Choose your target

De app is hoofdzakelijk Nederlandstalig, maar korte Engelse festivaltermen mogen gebruikt worden wanneer ze onmiddellijk begrijpbaar zijn.

## 3.3 Bestaande missie detecteren

Wanneer lokaal al een missie bewaard is, toont de app eerst een compacte keuze:

> Verdergaan met je missie?

Acties:

- bestaande missie hervatten;
- opnieuw een figuur kiezen.

De gebruiker mag zijn doelwit later onbeperkt veranderen.

## 3.4 Stap 3 — Target kiezen

Na de primaire startactie ziet de gebruiker alle acht figuren in één overzicht.

Per figuur toont de kaart uitsluitend:

- afbeelding;
- bijnaam.

Geen voornaam.  
Geen extra herkenningszin.  
Geen publieke teller.  
Geen rangschikking.

De gebruiker mag vrij kiezen uit alle acht figuren.

De volgorde wordt bepaald via configureerbare `sort_order`.

## 3.5 Beeldmateriaal

Versie 1 gebruikt echte foto’s als initiële bron.

De architectuur moet toelaten dat een foto later eenvoudig vervangen wordt door een AI-karikatuur, zonder structurele codewijziging.

Afbeeldingen worden niet via admin geüpload.

Afbeeldingen blijven als geoptimaliseerde bestanden in de repository of statische publieke assetmap.

Per persoon verwijst de configuratie naar één afbeeldingpad.

## 3.6 Stap 4 — Persoonsoverlay

Na het aantikken van een figuur opent geen nieuwe klassieke pagina.

Er opent een schermvullende overlay binnen dezelfde publieke webpagina.

De overlay bevat:

- een compacte maar duidelijk zichtbare afbeelding van de gekozen figuur;
- de bijnaam;
- drie grote, volledig uitgeschreven complimenten;
- geen vrije tekst;
- geen toetsenbord;
- geen formulier voor persoonsgegevens.

De foto blijft tijdens de volledige complimentkeuze zichtbaar als visuele houvast.

De drie complimenten worden willekeurig gekozen uit een grotere actieve lijst die aan die figuur gekoppeld is.

Richtwaarde:

- per figuur ongeveer 8 tot 10 actieve complimenten;
- bij elke opening willekeurig 3 tonen;
- geen duplicaten binnen dezelfde set van 3.

## 3.7 Complimentstijl

De voorgestelde complimenten zijn volledige zinnen.

Ze mogen per figuur verschillen in toon:

- warm;
- droog;
- absurd;
- flirterig;
- licht seksueel of suggestief;
- totaal geschift;
- liefdevol.

Ze blijven altijd positief en speels.

De bezoeker kent de persoon meestal niet. Complimenten mogen daarom geen echte persoonlijke karakterkennis veronderstellen.

Ze mogen wel geïnspireerd zijn op:

- uitstraling;
- uiterlijk;
- foto;
- festivalsfeer;
- herkenbare stijl of eigenheden die de makers bewust in de tekst verwerken.

Referentietoon:

> Als je ogen konden spreken, ze zouden mijn broek spontaan doen uitvallen.

## 3.8 Stap 5 — Compliment kiezen

De gebruiker kiest exact één van de drie getoonde complimenten.

Er is geen vrije tekstoptie.

Na selectie verschijnt de gekozen zin groot als persoonlijke missie.

Daaronder staat een duidelijke primaire knop:

> Ik ga zoeken

## 3.9 Stap 6 — Missiescherm

Na selectie toont de app een rustig missiescherm met:

- afbeelding van de gekozen figuur;
- bijnaam;
- gekozen compliment;
- mogelijke beloning;
- knop om een andere figuur te kiezen.

De missie wordt lokaal bewaard op het toestel.

Na heropenen moet de gebruiker de missie opnieuw kunnen zien.

Er is geen digitale bevestiging dat de persoon werkelijk gevonden werd.

Er zijn dus geen:

- geheime codes;
- tweede QR-scans;
- validatieknoppen;
- “gevonden”-statussen;
- bewijsuploads;
- locatiechecks.

De echte ontmoeting is de bevestiging.

## 3.10 Fysieke beloning

De beloning wordt niet hard gecodeerd.

Er bestaat:

- één algemene standaardbeloning;
- optioneel een afwijkende beloning per figuur.

De persoonsgebonden beloning overschrijft de algemene standaardbeloning.

De beloningstekst wordt via admin beheerd en opgeslagen in Supabase.

Voorbeelden van toon:

- een scheutje godendrank;
- een onzedig maar volledig vrijwillig gebaar;
- een absurde festivalbeloning.

De app mag nooit impliceren dat fysiek contact verplicht is.

## 3.11 Micro-animaties

Na een belangrijke succesvolle interactie mag een zeer korte micro-animatie verschijnen.

Versie 1 bevat precies drie algemene animatievarianten.

De variant wordt willekeurig gekozen.

Sferen mogen verschillen:

1. liefdevol — hartjes, kusjes, zachte confetti;
2. festivalachtig — neonvormen, lichtflitsen, confetti;
3. absurd — een onverwachte vreemde micro-animatie.

Eisen:

- zeer kort;
- lichtgewicht;
- geen externe zware animatiebibliotheek;
- geen merkbare vertraging;
- performant op mobiele toestellen;
- respecteer `prefers-reduced-motion`.

---

# 4. Wat expliciet niet in versie 1 zit

Niet bouwen:

- vrije tekst door bezoekers;
- digitale complimentenopslag van bezoekers;
- publiek complimentenoverzicht;
- chat;
- speedchat;
- openbare feed;
- reacties;
- likes;
- leaderboard;
- publieke tellers;
- GPS;
- locatiebepaling;
- accounts voor bezoekers;
- social login;
- foto-upload;
- audio-upload;
- notificaties;
- AI-generatie tijdens gebruik;
- AI-moderatie;
- uitgebreide analytics;
- digitale verificatie van een ontmoeting;
- punten;
- prijzen;
- badges;
- complexe realtime functionaliteit;
- framework tenzij technisch aantoonbaar noodzakelijk.

---

# 5. Pagina- en schermarchitectuur

De publieke app moet aanvoelen als één vloeiende ervaring, niet als een website met veel pagina’s.

## 5.1 Publieke route

Voorkeursroute:

- `/`

De publieke app bevat intern toestanden, geen klassieke paginanavigatie:

- `landing`
- `resume_prompt`
- `target_selection`
- `target_overlay`
- `mission`

Gebruik één hoofddocument met client-side state.

## 5.2 Adminroute

- `/admin`

Doel:

- configuratie beheren;
- personen beheren;
- complimenten beheren;
- beloningen beheren;
- statistieken bekijken;
- event activeren/deactiveren.

## 5.3 Vriendenroute

- `/friends`

Doel:

- totaal aantal scans bekijken;
- gekozen missies per figuur bekijken;
- ingestelde complimenten nalezen;
- algemene en persoonsgebonden beloningen nalezen.

Vrienden kunnen niets aanpassen.

De vriendenpagina moet extreem eenvoudig zijn.

De vrienden mogen niet in het Supabase-dashboard terechtkomen.

---

# 6. Rollen en toegang

## 6.1 Publieke bezoeker

Mag:

- actieve eventconfiguratie lezen;
- actieve personen lezen;
- actieve complimenten lezen;
- missie lokaal bewaren;
- anonieme scan registreren;
- anonieme targetkeuze registreren.

Mag niet:

- adminconfiguratie wijzigen;
- verborgen of inactieve inhoud lezen;
- statistische detailrecords uitlezen;
- andere gebruikers volgen;
- persoonsgegevens insturen.

## 6.2 Admin

Authenticatie:

- Supabase Auth;
- e-mail en wachtwoord;
- één persoonlijk adminaccount voor Rik;
- login wordt niet gedeeld.

Mag:

- eventinstellingen wijzigen;
- titel en intro wijzigen;
- personen activeren/deactiveren;
- bijnaam wijzigen;
- sorteervolgorde wijzigen;
- complimenten toevoegen;
- complimenten wijzigen;
- complimenten verwijderen of deactiveren;
- standaardbeloning wijzigen;
- persoonsgebonden beloning wijzigen;
- statistieken bekijken;
- vriendenpagina-inhoud controleren.

## 6.3 Vrienden

Er komt geen volledige Supabase-loginervaring voor de zeven andere vrienden.

Voorkeur:

- eenvoudige afgeschermde vriendenpagina;
- één gedeelde toegangscode;
- server-side of veilig gecontroleerde toegang;
- geen geheime code zichtbaar in publieke frontendbron;
- geen adminrechten.

Mogen:

- totaal aantal scans bekijken;
- keuzes per figuur bekijken;
- ingestelde complimenten nalezen;
- beloningen nalezen.

Mogen niet:

- configuratie aanpassen;
- personen wijzigen;
- complimenten wijzigen;
- beloningen wijzigen;
- adminfuncties uitvoeren.

---

# 7. Datamodel

Gebruik Supabase Postgres.

## 7.1 Tabel `events`

Doel: app herbruikbaar maken voor latere festivals of evenementen.

Velden:

```sql
id uuid primary key default gen_random_uuid()
slug text unique not null
title text not null
intro_text text not null
primary_cta_text text not null default 'Choose your target'
default_reward_text text not null
is_active boolean not null default false
submissions_enabled boolean not null default true
created_at timestamptz not null default now()
updated_at timestamptz not null default now()
```

Opmerking:

`submissions_enabled` slaat in deze versie op het registreren van scan- en keuze-events, niet op vrije tekst.

Er mag maximaal één event tegelijk actief zijn, tenzij later bewust uitgebreid.

## 7.2 Tabel `people`

Velden:

```sql
id uuid primary key default gen_random_uuid()
event_id uuid not null references events(id) on delete cascade
slug text not null
display_name text not null
image_path text not null
custom_reward_text text null
sort_order integer not null default 0
is_active boolean not null default true
created_at timestamptz not null default now()
updated_at timestamptz not null default now()
unique(event_id, slug)
```

`display_name` bevat de bijnaam.

`image_path` wijst naar een statische asset.

## 7.3 Tabel `compliment_templates`

Velden:

```sql
id uuid primary key default gen_random_uuid()
person_id uuid not null references people(id) on delete cascade
message text not null
sort_order integer not null default 0
is_active boolean not null default true
created_at timestamptz not null default now()
updated_at timestamptz not null default now()
```

Validatie:

- `message` mag niet leeg zijn;
- redelijke maximumlengte, bijvoorbeeld 240 tekens;
- minimaal 3 actieve complimenten per actieve persoon voordat het event publiek geactiveerd kan worden.

## 7.4 Tabel `usage_events`

Doel: minimale anonieme statistieken.

Velden:

```sql
id bigint generated always as identity primary key
event_id uuid not null references events(id) on delete cascade
person_id uuid null references people(id) on delete set null
event_type text not null
created_at timestamptz not null default now()
```

Toegestane `event_type`:

- `scan`
- `mission_selected`

Geen browser-ID opslaan tenzij strikt nodig voor rate limiting.

Geen:

- naam;
- e-mail;
- telefoonnummer;
- GPS;
- user agent-profiel;
- leesbaar IP-adres;
- advertentie-ID;
- socialmedia-ID.

## 7.5 Optionele tabel `app_users`

Alleen indien nodig voor rolbeheer bovenop Supabase Auth.

```sql
user_id uuid primary key references auth.users(id) on delete cascade
role text not null check (role in ('admin'))
created_at timestamptz not null default now()
```

Vriendentoegang hoeft niet via deze tabel te lopen wanneer gekozen wordt voor een aparte toegangscodeflow.

---

# 8. Statistieken

## 8.1 Publieke statistieken

Geen statistieken publiek tonen.

Geen teller per figuur.

Geen rangschikking.

## 8.2 Admin- en vriendenstatistieken

Toon:

- totaal aantal scans;
- totaal aantal gekozen missies;
- aantal gekozen missies per figuur.

Geen leaderboardtaal gebruiken.

Wel neutraal tonen als inzicht.

## 8.3 Veilige aggregatie

De publieke client mag geen losse `usage_events` kunnen uitlezen.

Gebruik bij voorkeur:

- een beveiligde databasefunctie/RPC voor registratie;
- een admin-only of friends-only aggregatie-endpoint;
- een view die alleen via beveiligde serverlogica wordt uitgelezen.

Voorbeelden:

```sql
record_public_event(p_event_slug text, p_event_type text, p_person_slug text default null)
```

en:

```sql
get_event_stats(p_event_id uuid)
```

De publieke functie valideert:

- actief event;
- geldige event type;
- actieve persoon wanneer `mission_selected`;
- geen vrije payloadvelden;
- geen willekeurige tekstinput.

---

# 9. Row Level Security

RLS staat aan op alle tabellen.

## 9.1 `events`

Publiek:

- alleen actieve event lezen;
- alleen noodzakelijke publieke velden.

Admin:

- volledige CRUD.

## 9.2 `people`

Publiek:

- alleen actieve personen van actief event lezen.

Admin:

- volledige CRUD.

## 9.3 `compliment_templates`

Publiek:

- alleen actieve complimenten van actieve personen binnen actief event lezen.

Admin:

- volledige CRUD.

## 9.4 `usage_events`

Publiek:

- geen directe `SELECT`;
- geen directe vrije `INSERT`.

Registratie uitsluitend via beveiligde RPC of serverless functie.

Admin:

- statistieken via aggregatie;
- ruwe records alleen indien werkelijk nodig.

## 9.5 Service role

De Supabase service role key mag nooit in browsercode terechtkomen.

Wanneer een serverless functie nodig is:

- service role key uitsluitend als Vercel server environment variable;
- niet prefixen met `VITE_`, `NEXT_PUBLIC_` of vergelijkbare publieke namen.

---

# 10. Vriendenpagina-beveiliging

De vriendenpagina moet eenvoudig zijn, maar niet uitsluitend vertrouwen op een geheime URL.

Aanbevolen V1-oplossing:

1. Route `/friends`.
2. Eén gedeelde toegangscode.
3. Code wordt via een serverless endpoint gecontroleerd.
4. Na correcte code wordt een korte, beveiligde sessiecookie geplaatst.
5. Cookie:
   - `HttpOnly`;
   - `Secure`;
   - `SameSite=Lax` of strenger;
   - beperkte levensduur.
6. De vriendenpagina haalt daarna alleen geaggregeerde stats en publieke configuratie op via beveiligde serverroute.

Niet doen:

- toegangscode hardcoderen in publieke JavaScript;
- toegangscode als queryparameter;
- Supabase service key in browser;
- vrienden rechtstreeks toegang geven tot Supabase dashboard.

---

# 11. Adminfunctionaliteit

## 11.1 Eventinstellingen

Admin kan wijzigen:

- titel;
- intro;
- primaire knoptekst;
- standaardbeloning;
- actief/inactief;
- registratie van statistieken aan/uit.

## 11.2 Personenbeheer

Admin kan per persoon:

- bijnaam wijzigen;
- actief/inactief zetten;
- sorteervolgorde wijzigen;
- statisch afbeeldingpad bekijken;
- optionele eigen beloning instellen;
- eigen beloning leegmaken zodat standaardbeloning geldt.

Geen afbeeldingupload in V1.

## 11.3 Complimentenbeheer

Admin kan per persoon:

- compliment toevoegen;
- compliment wijzigen;
- compliment verwijderen;
- compliment activeren/deactiveren;
- lijst herschikken.

De publieke app kiest willekeurig drie actieve complimenten.

Admin moet kunnen zien wanneer een persoon minder dan drie actieve complimenten heeft.

## 11.4 Statistieken

Admin toont minimaal:

- totaal scans;
- totaal geselecteerde missies;
- selectie per figuur.

Mobiel bruikbaar.

Geen uitgebreide dashboards of grafiekbibliotheken nodig.

---

# 12. Offline- en verbindingsgedrag

## 12.1 Doel

De kernflow moet grotendeels blijven werken bij slechte festivalverbinding.

## 12.2 Te cachen

Cache:

- HTML;
- CSS;
- JavaScript;
- acht geoptimaliseerde afbeeldingen;
- actieve eventtekst;
- actieve personen;
- actieve complimenttemplates;
- lokaal gekozen missie.

## 12.3 Niet bouwen

Geen zware offline database.

Geen grote mediabestanden.

Geen volledige complexe synchronisatie-engine.

## 12.4 Lokale missie

Bewaar lokaal:

```json
{
  "eventSlug": "wildeburg-2026",
  "personId": "...",
  "personSlug": "...",
  "personDisplayName": "...",
  "imagePath": "...",
  "complimentId": "...",
  "complimentMessage": "...",
  "rewardText": "...",
  "selectedAt": "ISO timestamp"
}
```

Gebruik `localStorage` of een vergelijkbare lichte browseropslag.

Geen persoonsgegevens.

## 12.5 Statistieken bij offline gebruik

Wanneer registratie mislukt:

- blokkeer de flow niet;
- bewaar maximaal een kleine lokale queue van anonieme usage events;
- probeer opnieuw bij volgende verbinding;
- voorkom onbeperkte groei;
- dubbele events zijn aanvaardbaarder dan een kapotte gebruikersflow, maar eenvoudige deduplicatie heeft voorkeur.

---

# 13. Performance en mobiele UX

## 13.1 Afbeeldingen

- geoptimaliseerd WebP of AVIF met fallback indien nodig;
- redelijke maximale resolutie;
- vaste aspect ratio;
- geen originele zware telefoonfoto’s publiceren;
- lazy loading waar zinvol;
- preload alleen noodzakelijke eerste assets.

## 13.2 Interactie

- grote tapzones;
- voldoende contrast;
- één primaire actie per toestand;
- geen hover-afhankelijk gedrag;
- geschikt voor bediening met één hand;
- belangrijke actie niet in moeilijk bereikbare hoek;
- geen lange scrollpagina’s;
- overlay mag intern beperkt scrollen op kleine schermen.

## 13.3 Toegankelijkheid

- semantische knoppen;
- zichtbare focusstates;
- toetsenbordbasis blijft werken;
- `aria`-labels waar nodig;
- `prefers-reduced-motion`;
- tekst als echte tekst, niet ingebakken in beelden;
- voldoende contrast in zonlicht en donkerte.

---

# 14. Vormgeving

Visuele richting:

- donkere festivalbasis;
- neon en lichtkunst;
- warme felle kleuren;
- collageachtige vormen;
- liefdevolle absurditeit;
- volwassen en niet-commercieel;
- geen kinderfeeststijl;
- foto’s of karikaturen visueel centraal.

De interface moet verwonderen, maar niet de flow vertragen.

Gebruik bij voorkeur:

- CSS;
- gradients;
- eenvoudige vectorvormen;
- kleine CSS-animaties;
- lokale assets.

Vermijd:

- zware UI-libraries;
- zware animatiepackages;
- generieke SaaS-look;
- overmatige glassmorphism;
- veel kleine tekst;
- decoratie die leesbaarheid schaadt.

---

# 15. Frontendstructuur

Voorkeur: Vanilla HTML, CSS en JavaScript.

Een framework is alleen toegestaan wanneer Codex duidelijk kan aantonen dat het de V1 eenvoudiger en betrouwbaarder maakt. Standaard wordt geen framework gebruikt.

Aanbevolen structuur:

```text
/
├─ index.html
├─ admin.html
├─ friends.html
├─ package.json
├─ vercel.json
├─ public/
│  ├─ images/
│  │  ├─ person-01.webp
│  │  ├─ person-02.webp
│  │  └─ ...
│  ├─ icons/
│  └─ manifest.webmanifest
├─ src/
│  ├─ app.js
│  ├─ admin.js
│  ├─ friends.js
│  ├─ supabase-client.js
│  ├─ api.js
│  ├─ state.js
│  ├─ storage.js
│  ├─ offline.js
│  ├─ animations.js
│  ├─ validation.js
│  └─ styles/
│     ├─ base.css
│     ├─ public.css
│     ├─ admin.css
│     └─ friends.css
├─ api/
│  ├─ friends-login.js
│  ├─ friends-stats.js
│  └─ record-event.js
├─ supabase/
│  ├─ migrations/
│  │  └─ 001_initial_schema.sql
│  └─ seed.sql
└─ tests/
   ├─ public-flow.test.js
   ├─ admin.test.js
   └─ security.test.js
```

Exacte bundling mag aangepast worden aan de gekozen Vercel-opzet, zolang de verantwoordelijkheden duidelijk gescheiden blijven.

---

# 16. API- en clientgedrag

## 16.1 Publieke configuratie laden

Bij opstart:

1. laad actieve eventconfiguratie;
2. laad actieve personen;
3. laad actieve complimenten;
4. cache resultaat lokaal;
5. toon cached fallback wanneer netwerk faalt.

## 16.2 Scan registreren

Registreer één `scan` bij het openen van een geldige publieke sessie.

Eenvoudige beperking tegen extreme dubbeltellingen mag lokaal gebeuren, bijvoorbeeld maximaal één scanregistratie per korte periode per browser.

Dit is statistische hygiëne, geen bezoekersidentificatie.

## 16.3 Missie registreren

Bij definitieve complimentkeuze:

- registreer `mission_selected`;
- koppel de gekozen persoon;
- laat mislukte statistiekregistratie de missieflow nooit blokkeren.

## 16.4 Willekeurige complimentselectie

Client of server mag drie complimenten kiezen.

Vereisten:

- alleen actieve complimenten;
- drie unieke complimenten;
- gelijkwaardige willekeur;
- foutmelding of fallback wanneer minder dan drie actief zijn;
- admin waarschuwen vóór activatie van ongeldige configuratie.

---

# 17. Privacy en GDPR-richting

De app past dataminimalisatie toe.

Publieke bezoekers leveren geen persoonsgegevens aan.

Niet verzamelen:

- naam;
- e-mail;
- telefoonnummer;
- account;
- profielfoto;
- GPS;
- vrije tekst;
- advertentietracking;
- socialmedia-identiteit.

Gebruik geen:

- Google Analytics;
- Meta Pixel;
- advertentiecookies;
- cross-site tracking;
- fingerprinting.

Lokale opslag wordt uitsluitend gebruikt voor:

- functionele missiecontinuïteit;
- lichte offlinewerking;
- beperkte statistiekqueue.

De publieke pagina bevat een korte privacytekst of link met heldere uitleg.

Geen cookie-banner nodig zolang uitsluitend strikt functionele opslag gebruikt wordt en geen niet-noodzakelijke tracking plaatsvindt. Dit moet vóór livegang juridisch praktisch gecontroleerd worden.

---

# 18. Omgevingsvariabelen

Publieke browservariabelen:

```env
SUPABASE_URL=
SUPABASE_ANON_KEY=
```

Server-only Vercel variabelen:

```env
SUPABASE_SERVICE_ROLE_KEY=
FRIENDS_ACCESS_CODE_HASH=
FRIENDS_SESSION_SECRET=
```

Optioneel:

```env
APP_EVENT_SLUG=wildeburg-2026
```

Geen secrets in repository committen.

Lever een `.env.example` zonder echte waarden.

---

# 19. Deployment

## 19.1 Hosting

Gebruik Vercel.

## 19.2 Database en auth

Gebruik Supabase gratis plan.

De oplossing moet binnen het gratis Supabase-plan blijven voor deze schaal.

Verwachte schaal:

- meer dan 100 stickers;
- beperkte festivalduur;
- acht personen;
- enkele duizenden scans maximaal;
- zeer weinig databaseopslag;
- één adminaccount;
- eenvoudige vriendenpagina.

## 19.3 Domein

Initieel mag een Vercel-subdomein gebruikt worden.

De uiteindelijke QR-code mag pas definitief gedrukt worden nadat:

- productie-URL vaststaat;
- HTTPS werkt;
- mobiele flow getest is;
- eventuele custom domain redirect getest is.

---

# 20. Minimale teststrategie

## 20.1 Publieke flow

Test:

- eerste bezoek zonder missie;
- startknop;
- acht personen zichtbaar;
- overlay opent en sluit;
- drie unieke complimenten zichtbaar;
- complimentselectie;
- missie wordt getoond;
- missie blijft na refresh;
- bestaande missie hervatten;
- andere figuur kiezen;
- geen publieke teller;
- geen vrije tekst.

## 20.2 Configuratiefouten

Test:

- geen actief event;
- persoon zonder afbeelding;
- minder dan drie actieve complimenten;
- lege standaardbeloning;
- persoonsbeloning overschrijft standaard;
- inactieve persoon verschijnt niet.

## 20.3 Offline

Test:

- eerste bezoek online;
- refresh zonder netwerk;
- beelden en teksten blijven zichtbaar;
- bewaarde missie blijft zichtbaar;
- statistiekregistratie faalt zonder gebroken flow;
- queue synchroniseert later.

## 20.4 Admin

Test:

- niet-ingelogde gebruiker geweigerd;
- admin kan instellingen aanpassen;
- admin kan compliment toevoegen/wijzigen/verwijderen;
- admin kan persoon activeren/deactiveren;
- admin ziet stats;
- service key komt nooit in browserbundle.

## 20.5 Vriendenpagina

Test:

- zonder code geen toegang;
- verkeerde code geweigerd;
- correcte code creëert veilige sessie;
- alleen stats, complimenten en beloningen zichtbaar;
- geen wijzigingsacties;
- sessie verloopt correct.

## 20.6 Mobiele test

Minimaal testen op:

- recente iPhone Safari;
- Android Chrome;
- kleine schermbreedte;
- zonlichtsimulatie/hoge helderheid;
- donkere omgeving;
- trage netwerkmodus;
- offline modus;
- bediening met één hand.

---

# 21. Implementatievolgorde

## Fase 1 — Basisstructuur

1. repository en Vercel-opzet;
2. Supabase-project;
3. SQL-migratie;
4. seeddata met acht tijdelijke figuren;
5. RLS;
6. publieke configuratiequery.

## Fase 2 — Publieke kernflow

1. startscherm;
2. acht figuren;
3. schermvullende overlay;
4. willekeurige drie complimenten;
5. missiescherm;
6. lokaal bewaren en hervatten;
7. andere figuur kiezen.

## Fase 3 — Statistieken

1. beveiligd registratie-endpoint/RPC;
2. scanregistratie;
3. missieselectieregistratie;
4. adminaggregaties.

## Fase 4 — Admin

1. Supabase Auth;
2. eventinstellingen;
3. personenbeheer;
4. complimentenbeheer;
5. beloningen;
6. statistieken.

## Fase 5 — Vriendenpagina

1. toegangscodeflow;
2. veilige sessie;
3. read-only stats;
4. complimenten en beloningen tonen.

## Fase 6 — Offline en polish

1. assetoptimalisatie;
2. lichte service worker/cache;
3. offline fallback;
4. drie micro-animaties;
5. responsive afwerking;
6. toegankelijkheid;
7. foutmeldingen;
8. privacytekst.

## Fase 7 — Livecheck

1. productie-URL testen;
2. mobiele test;
3. slechte verbinding testen;
4. databasebeveiliging nalopen;
5. QR-code genereren;
6. testprint en scan;
7. definitieve stickerproductie.

---

# 22. Acceptatiecriteria V1

Versie 1 is klaar wanneer:

- een nieuwe bezoeker binnen enkele seconden begrijpt wat hij moet doen;
- alle acht figuren zichtbaar zijn;
- targetkeuze zonder paginaherlading werkt;
- per figuur willekeurig drie complimenten verschijnen;
- vrije tekst nergens mogelijk is;
- gekozen missie lokaal bewaard blijft;
- bestaande missie hervat of vervangen kan worden;
- beloningen configureerbaar zijn;
- standaardbeloning per persoon overschreven kan worden;
- admin mobiel bruikbaar is;
- vriendenpagina read-only en eenvoudig is;
- totaal scans en keuzes per figuur zichtbaar zijn voor beheer/vrienden;
- publiek nergens tellers of rangschikking ziet;
- slechte verbinding de kernflow niet onmiddellijk breekt;
- geen persoonsgegevens van bezoekers worden gevraagd;
- geen secrets in browsercode staan;
- alles binnen Vercel en Supabase free tier functioneert.

---

# 23. Risico’s en bewuste vereenvoudigingen

## 23.1 Mensen vinden de figuren niet

Bewuste keuze:

- geen live locatie;
- geen hints;
- geen verificatie.

Dit houdt het mysterie en de menselijke spontaniteit centraal.

## 23.2 Foto versus karikatuur

De app start met foto’s.

Afbeeldingen blijven eenvoudig vervangbaar door AI-karikaturen.

## 23.3 Statistieken zijn indicatief

Zonder bezoekersaccounts of tracking zijn scans en keuzes geen exact unieke personen.

Dat is aanvaardbaar.

De statistieken zijn speelse gebruiksindicaties, geen wetenschappelijke analytics.

## 23.4 Gedeelde vriendencode kan uitlekken

Aanvaardbaar risico voor V1, beperkt door:

- alleen read-only data;
- geen persoonsgegevens;
- geen beheerrechten;
- code kan gewijzigd worden;
- sessie heeft beperkte levensduur.

## 23.5 Offline cache kan verouderde teksten tonen

Aanvaardbaar voor korte festivalduur.

Bij hernieuwde verbinding moet de app configuratie verversen.

## 23.6 Geen digitale eindbevestiging

Dit is bewust.

Het productdoel is de ontmoeting, niet het meten van voltooide opdrachten.

---

# 24. Codex-regels

Codex moet:

- deze specificatie als functionele bron van waarheid behandelen;
- geen vrije tekstfunctionaliteit toevoegen;
- geen publieke teller of leaderboard toevoegen;
- geen extra onboardingflow toevoegen;
- geen bezoekersaccounts toevoegen;
- geen zware frameworkarchitectuur introduceren zonder aantoonbare noodzaak;
- geen service role key naar de browser sturen;
- geen analyticsdienst van derden toevoegen;
- iedere securitygevoelige serverroute valideren;
- mobiel gebruik als primaire context behandelen;
- wijzigingen aan scope expliciet melden in plaats van zelf interpreteren.

Bij twijfel geldt:

> Kies de oplossing met de minste schermen, minste frictie, minste persoonsgegevens en de snelste overgang van telefoon naar echte ontmoeting.
