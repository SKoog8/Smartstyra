# Daglig guide – rutin

En ny guide publiceras på smartstyra.se varje morgon. Följ stegen i ordning. Publicera hellre ingenting
än en guide med fel fakta.

## 1. Utgå från senaste main

```
git fetch origin main && git checkout main && git pull origin main
npm install
```

All publicering sker direkt på `main` – det är den grenen Vercel publicerar.

## 2. Välj ämne

Ta den första punkten i `docs/guide-ideer.md` som inte är avbockad. Kontrollera i `src/lib/guides.ts` att
ämnet inte redan täcks av en befintlig guide. Gör det det: bocka av punkten med en kommentar och ta nästa.

## 3. Researcha

- Läs förstahandskällor: myndigheter (Energimyndigheten, Ei, Skatteverket, Boverket, Elsäkerhetsverket),
  tillverkarnas egna sidor och nätbolagens prislistor. Forum och jämförelsesajter är bara ledtrådar.
- Kontrollera att allt med datum, belopp och regler gäller **i dag**. Regler har ändrats nyligen, t.ex.
  effektavgiften (kravet upphävt juni 2026), 60-öringen (borta från 2026) och grönt avdrag (15 % solceller,
  50 % batteri och laddbox).
- Kan du inte bekräfta en uppgift: skriv inte den, eller formulera den försiktigt och hänvisa läsaren
  till källan ("kontrollera hos ditt nätbolag").

## 4. Skriv guiden

Kopiera en befintlig guide som mall, t.ex. `src/app/guider/effektavgift/page.tsx`.

**Innehåll**

- 500–900 ord på svenska, du-tilltal, korta stycken, konkreta råd. Skriv som en kunnig vän, inte som en
  broschyr. Inga utropstecken, inga floskler som "i dagens samhälle".
- En inledning som säger varför ämnet spelar roll för elräkningen.
- Mellanrubriker (`<h2>`) som matchar det folk söker på.
- Minst ett räkneexempel eller en tabell där det passar (`<Callout>` eller `<div className="table-wrap"><table>`).
- `<Faq>` med tre vanliga frågor och korta svar.
- Minst två länkar till befintliga guider (`<Link href="/guider/...">`), och gärna till `/kalkylator`.
- Elinstallationsarbete: skriv alltid att det ska göras av ett registrerat elinstallationsföretag.

**Ärlighet – viktigt**

- Smartstyra har **inte** testat produkterna. Skriv aldrig "vi har testat", "i vårt test" eller "bäst i test".
- Hitta inte på siffror, priser, besparingar eller citat. Räkneexempel ska visa hur man räknar, med
  tydliga antaganden.
- Produktkort (`<Products ids={[...]} />`) får bara använda produkter som redan finns i
  `data/products.json`. Lägg inte till nya produkter eller Amazon-länkar i den dagliga rutinen.
- Nämner guiden Tibber kan `<TibberInvite />` läggas in en gång, sent i texten.

**Registrera guiden**

Lägg till guiden **först** i `GUIDES` i `src/lib/guides.ts`:

- `slug`: kort, med bindestreck, utan å/ä/ö (å→a, ä→a, ö→o)
- `title`: rubriken på sidan
- `seoTitle`: bara om titeln är längre än ca 50 tecken – en kortare variant för sökresultaten
- `description`: 100–160 tecken, säljande och konkret
- `published` och `updated`: dagens datum (ÅÅÅÅ-MM-DD)
- `minutes`: ungefärlig lästid (ord / 130)
- `tone`: `mint`, `sky`, `butter` eller `clay` – välj en annan än guiden som ligger närmast under
- `theme`: `Använd mindre`, `Flytta i tid` eller `Styr automatiskt`

Kopiera `src/app/guider/effektavgift/opengraph-image.tsx` till den nya guidens mapp och byt slug.

Bocka av ämnet i `docs/guide-ideer.md` med `[x]` och lägg till sluggen efter.

## 5. Kontrollera

```
node scripts/check-seo.mjs
npx tsc --noEmit
npm run build
```

Alla tre ska gå igenom. Läs sedan igenom guiden en gång till och leta efter:

- påståenden du inte har en källa för
- stavfel och engelska ord
- trasiga länkar (sluggen måste finnas i `src/lib/guides.ts`)

## 6. Publicera

```
git add -A
git commit -m "Ny guide: <titel>"
git push origin main
```

Om pushen misslyckas för att main har ändrats: `git pull --rebase origin main`, bygg igen och pusha.

## 7. Sammanfatta

Avsluta med en kort sammanfattning på svenska till Martin:

- guidens titel och adress (`https://smartstyra.se/guider/<slug>`)
- de viktigaste källorna
- uppgifter du valde bort eller formulerade försiktigt, och varför

Hittar du inget ämne som går att skriva om med säkra fakta: ändra ingenting och förklara kort varför.
