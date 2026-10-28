import type { Metadata } from "next";
import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import Callout from "@/components/Callout";
import Faq from "@/components/Faq";
import { Products } from "@/components/ProductCard";
import { guide } from "@/lib/guides";

const meta = guide("uppkopplade-golvtermostater");
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
        Golvvärmen i badrummet är skön en kall morgon. Men i många hus går den dygnet runt, året om – även på natten,
        när ingen är hemma och mitt i juli. En uppkopplad golvtermostat ger dig varmt golv när du vill ha det och ett
        svalare golv resten av tiden.
      </p>

      <h2>Elektrisk eller vattenburen golvvärme?</h2>
      <p>
        Den här guiden handlar om <strong>elektrisk golvvärme</strong>, med värmekabel eller värmematta i golvet och en
        termostat på väggen. Det är vanligast i badrum, hallar och mindre rum.
      </p>
      <p>
        Har du <strong>vattenburen golvvärme</strong>, med rör som värms av värmepumpen eller fjärrvärmen, styrs den
        oftast från en reglercentral och kräver andra produkter. Och har du vanliga element med termostatventiler passar{" "}
        <Link href="/guider/smarta-elementtermostater">smarta elementtermostater</Link> bättre.
      </p>

      <h2>Var finns besparingen?</h2>
      <ul>
        <li>
          <strong>Nattsänkning.</strong> Ingen står på badrumsgolvet klockan tre på natten.
        </li>
        <li>
          <strong>Sänkning dagtid.</strong> Står huset tomt på dagarna kan golvet vara svalare tills någon kommer hem.
        </li>
        <li>
          <strong>Sommarläge.</strong> När det är varmt ute behövs sällan golvvärme – stäng av den eller sänk rejält.
        </li>
        <li>
          <strong>Billiga timmar.</strong> Ett varmt golv håller värmen en stund. Med rätt system kan värmen hamna på de
          billigaste timmarna före morgonen.
        </li>
      </ul>
      <Callout title="Sänk inte för mycket i badrummet" tone="clay">
        <p>
          Golvvärmen hjälper till att torka upp badrummet efter duschen. Stäng inte av den helt under årets kalla
          månader – en sänkning på några grader räcker oftast.
        </p>
      </Callout>

      <h2>Tre vägar till en uppkopplad golvtermostat</h2>
      <h3>Med Tibber: Ebeco</h3>
      <p>
        Ebeco EB-Therm 500 med WiFi-modulen EB Connect kan kopplas till{" "}
        <Link href="/guider/sa-fungerar-tibber">Tibber-appen</Link>, som då styr golvvärmen efter elpriset. Enklast om
        du redan är Tibber-kund.
      </p>
      <h3>Med Plejd: TRM-01</h3>
      <p>
        Har du eller planerar du <Link href="/guider/plejd-smart-belysning">Plejd-belysning</Link> passar Plejds
        termostat TRM-01. Den styrs i samma app som belysningen och har dag- och nattsänkning. Semesterläge och
        fjärrstyrning kräver Plejd Gateway.
      </p>
      <h3>Med ett eget smart hem: Z-Wave</h3>
      <p>
        Styr du huset med Home Assistant eller Homey är en Z-Wave-termostat som Heatit Z-TRM6 ett bra val. Då kan du
        bygga egna regler, till exempel att golvet bara värms under de billigaste timmarna före morgonduschen.
      </p>

      <h2>Installation</h2>
      <p>
        Att byta golvvärmetermostat är elinstallationsarbete och ska göras av ett registrerat elinstallationsföretag.
        Det är ett snabbt jobb: den gamla termostaten skruvas ur väggdosan och den nya kopplas in på samma plats,
        tillsammans med golvgivaren.
      </p>
      <ul>
        <li>Kontrollera att termostaten klarar golvvärmens effekt.</li>
        <li>Behåll golvgivaren – den skyddar golvet mot överhettning, särskilt under trägolv och mattor.</li>
        <li>Fråga om termostaten passar i din ramserie, så att den ser ut som de andra brytarna.</li>
      </ul>

      <h2>Termostaterna vi rekommenderar</h2>
      <Products ids={["ebeco-eb-therm-500", "plejd-trm-01", "heatit-z-trm6"]} />

      <Faq
        title="Vanliga frågor"
        items={[
          {
            q: "Hur mycket el drar golvvärmen i ett badrum?",
            a: "Det beror på golvets yta, effekt och temperatur, men en golvvärme som står på året runt kan dra från några hundra till över tusen kWh om året.",
          },
          {
            q: "Kan jag byta termostaten själv?",
            a: "Nej. Termostaten är fast ansluten och bytet ska göras av ett registrerat elinstallationsföretag.",
          },
          {
            q: "Fungerar Aqara-termostaten för golvvärme?",
            a: "Aqara Radiator Thermostat E1 är gjord för vattenburna element med termostatventil, inte för elektrisk golvvärme.",
          },
        ]}
      />
    </ArticlePage>
  );
}
