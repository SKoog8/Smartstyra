# Smartstyra — Komma igång

Guider och produktrekommendationer för villaägare som vill sänka elförbrukningen.
Samma upplägg som Cashbacka: Next.js, Tailwind och Vercel.

## Starta

```
npm install
npm run dev
```

Öppna sedan http://localhost:3000.

## Publicera på Vercel med smartstyra.se

1. Skapa ett nytt projekt på vercel.com och importera GitHub-repot. Inställningarna för Next.js hittas automatiskt.
2. Lägg in miljövariablerna från `.env.example` under Settings → Environment Variables
   (minst `NEXT_PUBLIC_SITE_URL=https://smartstyra.se`).
3. Under Settings → Domains: lägg till `smartstyra.se` och `www.smartstyra.se`. Vercel visar vilka
   DNS-poster som ska läggas in hos domänregistraren (en A-post för smartstyra.se och en CNAME för www).
4. Slå på Analytics under fliken Analytics om du vill ha besöksstatistik.

## Amazon-länkar (`data/products.json`)

Alla produkter och produktkategorier ligger i `data/products.json`.

- **Partner-taggen:** fyll i `amazonTag` (t.ex. `"smartstyra-21"`) när du har skapat den i Amazon Associates.
  Taggen läggs då automatiskt på alla länkar, och texten om Amazon-partnerskap visas i sidfoten.
- **Länkarna** är just nu sökningar på amazon.se. Byt gärna till den riktiga produktsidan
  (`https://www.amazon.se/dp/<ASIN>`) när du har valt exakt vilken variant du vill länka till.
- **Lägga till en produkt:** kopiera ett block i `products` och sätt `category` till en befintlig kategori.
  Produkten dyker upp i kategorins topplista under `/produkter/<kategori>` i den ordning den står i filen.
- **Ny kategori:** kopiera ett block i `categories` och lägg till en ikon i `src/components/CategoryIcon.tsx`.
- Uppdatera `checkedAt` när du har gått igenom en kategori.

## Lägga till en guide

1. Lägg till guiden i `GUIDES` i `src/lib/guides.ts` (slug, titel, beskrivning, datum, lästid, färg och tema).
2. Skapa `src/app/guider/<slug>/page.tsx` – kopiera en befintlig guide som mall.
   Produktkort läggs in med `<Products ids={["tapo-p110"]} />`, faktarutor med `<Callout>`.
3. Kopiera `opengraph-image.tsx` från en befintlig guide och byt slug.
4. Guiden kommer automatiskt med i guidelistan, startsidan och sitemapen. Lägg gärna till den i `public/llms.txt`.

## Kontaktformulär och nyhetsbrev

Båda skickar via Resend (resend.com), precis som Cashbacka.

- Skapa ett konto, skapa en API-nyckel och fyll i `RESEND_API_KEY` och `CONTACT_TO`.
- Verifiera domänen smartstyra.se hos Resend och sätt `CONTACT_FROM` för att kunna skicka från din egen adress.
- **Nyhetsbrev:** skapa en Audience hos Resend och fyll i `RESEND_AUDIENCE_ID`, så hamnar prenumeranterna där
  och du kan skicka utskick därifrån. Utan den mejlas varje ny prenumerant till `CONTACT_TO`.
