import type { Metadata } from "next";
import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import Callout from "@/components/Callout";
import Faq from "@/components/Faq";
import { guide } from "@/lib/guides";

const meta = guide("plejd-smart-belysning");
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
        Plejd är ett svenskt system för smart belysning som skiljer sig från de flesta andra på en viktig punkt: det
        byggs in i husets elinstallation. Dimrar och reläer monteras bakom dina vanliga strömbrytare, så allt ser ut och
        fungerar som förut – men går också att styra från mobilen, med scheman och sensorer.
      </p>

      <h2>Så fungerar Plejd</h2>
      <ul>
        <li>
          <strong>Små moduler, ”puckar”,</strong> monteras i befintliga apparatdosor eller vid lampan. Det finns bland
          annat dosdimmer (DIM-01), krondimmer med två kanaler (DIM-02), reläer (REL-01-2P och REL-02) och
          LED-drivdon.
        </li>
        <li>
          <strong>Bluetooth-mesh.</strong> Modulerna pratar med varandra och med mobilen via Bluetooth och skickar
          vidare signalen, så räckvidden växer med varje modul.
        </li>
        <li>
          <strong>Dina vanliga strömbrytare</strong> fortsätter att fungera. Du kan också lägga till trådlösa knappar,
          vridreglage och rörelsevakter.
        </li>
        <li>
          <strong>Allt ställs in i Plejd-appen:</strong> scener, scheman och vad varje knapp ska göra.
        </li>
      </ul>

      <h2>Gatewayen – behövs den?</h2>
      <p>
        Utan gateway styr du Plejd när du är hemma och mobilen är inom räckhåll. Plejd Gateway (GWY-01) kopplas med
        nätverkskabel till routern och gör att du kan styra hemmet på distans och koppla Plejd till röststyrning och
        andra smarta hem-system. Den behövs också för vissa funktioner, till exempel semesterläge för Plejds termostat.
      </p>

      <h2>Sparar smart belysning el?</h2>
      <p>
        Lite, men inte mycket. Med LED-lampor är belysningen en liten del av elräkningen i en villa jämfört med värme,
        varmvatten och elbil. Besparingen kommer från att lampor inte står tända i onödan:
      </p>
      <ul>
        <li>Rörelsevakter i hall, tvättstuga och förråd släcker när ingen är där.</li>
        <li>Utebelysningen tänds och släcks efter solen i stället för efter ett fast schema.</li>
        <li>En ”släck allt”-knapp vid ytterdörren.</li>
        <li>Dimrade lampor drar mindre än fullt tända.</li>
      </ul>
      <Callout title="Det stora värdet ligger någon annanstans" tone="butter">
        <p>
          Plejds reläer kan styra mer än lampor. Ett tvåpoligt relä kan till exempel slå av handdukstorken på natten
          eller styra motorvärmaren efter schema – förbrukare som drar betydligt mer än belysningen. Kontrollera alltid
          med elinstallatören att reläet klarar lasten.
        </p>
      </Callout>

      <h2>Golvvärme med Plejd</h2>
      <p>
        Plejd har en egen termostat för elektrisk golvvärme, TRM-01, som styrs i samma app med dag- och nattsänkning.{" "}
        <Link href="/guider/uppkopplade-golvtermostater">Läs guiden om golvtermostater</Link>.
      </p>

      <h2>Installation och kostnad</h2>
      <p>
        Plejd installeras av en elinstallatör, på samma sätt som vanliga dimrar och reläer. Det är därför Plejd passar
        bäst vid en renovering eller när elen ändå ska ses över. Konfigurationen gör du sedan själv i appen. Be om offert
        per rum – priset beror mest på hur många moduler som behövs.
      </p>

      <h2>Plejd och andra smarta hem</h2>
      <p>
        Via gatewayen fungerar Plejd ihop med andra system för smarta hem, och Plejd lägger löpande till nya
        integrationer. För Home Assistant finns integrationer som utvecklats av användare. Kontrollera på plejd.com
        vilka integrationer som stöds just nu innan du bygger din lösning kring en viss tjänst.
      </p>

      <Faq
        title="Vanliga frågor"
        items={[
          {
            q: "Kan jag installera Plejd själv?",
            a: "Nej. Modulerna kopplas in i den fasta elinstallationen och ska installeras av ett registrerat elinstallationsföretag. Konfigurationen i appen gör du däremot själv.",
          },
          {
            q: "Fungerar lamporna om mobilen är urladdad?",
            a: "Ja. Dina vanliga strömbrytare fortsätter att fungera som vanligt, med eller utan mobil.",
          },
          {
            q: "Behöver jag byta lampor?",
            a: "Oftast inte. Dimbara LED-lampor fungerar med Plejds dimrar. Kontrollera att lamporna är dimbara om du vill dimra dem.",
          },
        ]}
      />
    </ArticlePage>
  );
}
