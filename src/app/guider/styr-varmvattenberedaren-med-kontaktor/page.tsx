import type { Metadata } from "next";
import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import Callout from "@/components/Callout";
import Faq from "@/components/Faq";
import { Products } from "@/components/ProductCard";
import { guide } from "@/lib/guides";

const meta = guide("styr-varmvattenberedaren-med-kontaktor");
const path = `/guider/${meta.slug}`;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: path },
};

export default function Page() {
  return (
    <ArticlePage title={meta.title} subtitle={meta.description} path={path} guide={meta}>
      <p>
        En vanlig varmvattenberedare är en stor, välisolerad tank med ett elelement i. När termostaten känner att vattnet
        har svalnat slår den på elementet – oftast just när familjen har duschat på morgonen eller kvällen, alltså när
        elen är som dyrast. Men vattnet håller värmen i många timmar, så det går lika bra att värma det på natten.
      </p>

      <h2>Hur mycket handlar det om?</h2>
      <p>
        En familj kan lägga runt 3 000–5 000 kWh om året på varmvatten. Elementet i en 300-litersberedare är ofta på 3
        kW, och efter morgonduschen kan det gå i flera timmar.
      </p>
      <Callout title="Räkneexempel" tone="butter">
        <p>
          Flyttar du 10 kWh om dagen från dyra till billiga timmar och prisskillnaden är 50 öre per kWh sparar du 5
          kronor om dagen – drygt 1 800 kronor om året. Med större prisskillnader, som under kalla vinterdagar i södra
          Sverige, blir det mer.
        </p>
      </Callout>

      <h2>Varför en kontaktor?</h2>
      <p>
        Varmvattenberedaren är fast ansluten och drar för mycket för ett smart uttag. Lösningen är en{" "}
        <strong>kontaktor</strong>: en kraftig, elektriskt styrd brytare som monteras i elcentralen och kopplas in på
        beredarens matning. Kontaktorn styrs i sin tur av ett <strong>smart relä</strong> som tar emot signaler från
        appen eller ditt smart hem-system.
      </p>
      <ol>
        <li>Det smarta reläet bestämmer när beredaren <em>får</em> värma.</li>
        <li>Reläet styr kontaktorn, som slår på eller bryter strömmen till beredaren.</li>
        <li>Beredarens egen termostat bestämmer som vanligt när den <em>behöver</em> värma.</li>
      </ol>
      <p>
        Beredaren fungerar alltså precis som förut – den får bara värma under de timmar du har bestämt.
      </p>

      <Callout title="Det här är ett jobb för en elinstallatör" tone="clay">
        <p>
          Kontaktor och relä monteras i elcentralen och ska installeras av ett registrerat elinstallationsföretag. Be
          installatören välja en kontaktor för beredarens effekt och antal faser, och gärna montera en manuell
          förbikoppling så att du kan köra beredaren som vanligt om styrningen krånglar.
        </p>
      </Callout>

      <h2>Vem bestämmer när beredaren får gå?</h2>
      <h3>Enklast: ett fast schema</h3>
      <p>
        Låt beredaren gå på natten, till exempel mellan klockan 1 och 6, och kanske ett par timmar mitt på dagen. Det
        kräver ingen elprisstyrning alls och ger en stor del av vinsten. De flesta smarta reläer kan schemaläggas direkt
        i sin app.
      </p>
      <h3>Bäst: styrning efter elpriset</h3>
      <p>
        Ett smart hem-system som <strong>Home Assistant</strong> eller <strong>Homey</strong> kan läsa in morgondagens
        elpriser och välja de billigaste timmarna varje dygn. En vanlig regel är ”värm under de fem billigaste
        timmarna, men minst en gång på morgonen och en gång på kvällen”.
      </p>

      <h2>Glöm inte legionellan</h2>
      <p>
        Legionellabakterier trivs i vatten som är mellan 20 och 45 grader. Därför ska varmvattenberedaren hålla minst
        60 grader. Sänk aldrig beredarens termostat för att spara el, och se till att schemat ger beredaren tid att
        bli riktigt varm varje dygn.
      </p>

      <h2>Mät att det fungerar</h2>
      <p>
        Ett relä med energimätning, eller en energimätare i elcentralen, visar när beredaren faktiskt går. Det är det
        enklaste sättet att se att styrningen gör det den ska – och vad den sparar. Har du en trefasberedare behöver du
        en mätare som mäter alla tre faserna.
      </p>

      <h2>Prylarna</h2>
      <p>
        Så här ser utrustningen ut. Kontaktorn köper elinstallatören. Se också{" "}
        <Link href="/produkter/smarta-relaer">vår lista över smarta reläer</Link>.
      </p>
      <Products ids={["shelly-pro-1", "shelly-pro-1pm", "shelly-pro-3em"]} />

      <h2>Har du värmepump?</h2>
      <p>
        Gör värmepumpen även varmvattnet styr du det i värmepumpen i stället. Många kan kopplas till appar som flyttar
        både värme och varmvatten till billiga timmar, till exempel{" "}
        <Link href="/guider/sa-fungerar-tibber">via Tibber</Link>.
      </p>

      <Faq
        title="Vanliga frågor"
        items={[
          {
            q: "Räcker varmvattnet om beredaren bara värmer på natten?",
            a: "För de flesta ja, eftersom en full beredare räcker till flera duschar. Har ni stor förbrukning kan ni lägga till en eller två billiga timmar mitt på dagen.",
          },
          {
            q: "Kan jag använda ett smart uttag i stället?",
            a: "Nej. Varmvattenberedare är fast anslutna och drar för mycket för ett vanligt uttag.",
          },
          {
            q: "Sliter det på beredaren?",
            a: "Nej, inte märkbart. Elementet slås av och på av termostaten hela tiden ändå. Styrningen ändrar bara när det får hända.",
          },
        ]}
      />
    </ArticlePage>
  );
}
