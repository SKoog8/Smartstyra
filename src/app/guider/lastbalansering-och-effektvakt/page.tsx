import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import Callout from "@/components/Callout";
import Faq from "@/components/Faq";
import { guide } from "@/lib/guides";
import { pageMetadata } from "@/lib/metadata";

const meta = guide("lastbalansering-och-effektvakt");
const path = `/guider/${meta.slug}`;

export const metadata = pageMetadata(meta.seoTitle ?? meta.title, meta.description, path, true, meta);

export default function Page() {
  return (
    <ArticlePage title={meta.title} subtitle={meta.description} path={path} guide={meta}>
      <p>
        <strong>
          En effektvakt, eller belastningsvakt, är en automatik som mäter hur mycket ström huset drar och tillfälligt
          kopplar bort eller sänker en stor förbrukare när huvudsäkringen är på väg att bli överbelastad.
        </strong>{" "}
        Lastbalansering är samma idé, men i stället för att stänga av sänker utrustningen effekten steglöst –
        vanligast i laddboxar. Båda gör att du kan ha elbil, värmepump och spis igång utan att huvudsäkringen går,
        och utan att betala för en större säkring varje månad.
      </p>

      <h2>Varför huvudsäkringen kostar pengar</h2>
      <p>
        Boverket förklarar det enkelt: huvudsäkringen bestämmer hur mycket el du kan använda samtidigt, och ju
        större säkring, desto högre fast avgift för elnätsabonnemanget. Många nätbolag tar betalt efter
        säkringsstorlek, och sedan kravet på effektavgift upphävdes har en del gått tillbaka till det (se{" "}
        <Link href="/guider/effektavgift">guiden om effektavgiften</Link>). Ellevio är ett exempel. Så här ser deras
        fasta avgift ut för villor med trefas från den 1 juni 2026:
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Huvudsäkring</th>
              <th>Fast avgift, kr/mån inkl. moms</th>
              <th>Ungefärlig maxeffekt</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>16 A</td>
              <td>450</td>
              <td>ca 11 kW</td>
            </tr>
            <tr>
              <td>20 A</td>
              <td>590</td>
              <td>ca 14 kW</td>
            </tr>
            <tr>
              <td>25 A</td>
              <td>740</td>
              <td>ca 17 kW</td>
            </tr>
            <tr>
              <td>35 A</td>
              <td>1 130</td>
              <td>ca 24 kW</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Överföringsavgiften är densamma, 26 öre per kWh inklusive moms, oavsett säkring. Maxeffekten är räknad med
        400 volt mellan faserna och jämn belastning på alla tre faser, ungefär 0,69 kW per ampere. I verkligheten
        fördelas lasten sällan jämnt, och det är fasen som drar mest som löser ut säkringen. Andra nätbolag har andra
        priser, så kontrollera i ditt nätbolags prislista.
      </p>

      <Callout title="Räkneexempel: vad kostar en större säkring?" tone="butter">
        <p>
          Med Ellevios priser kostar ett steg från 20 till 25 A 740 − 590 = 150 kronor mer i månaden, alltså
          1 800 kronor om året. Det kostar varje år så länge du har säkringen, även de månader då du aldrig är i
          närheten av gränsen. Till det kommer elinstallatörens arbete och eventuella avgifter från nätbolaget för
          själva ändringen. Byt ut siffrorna mot ditt nätbolags priser.
        </p>
      </Callout>

      <h2>Så fungerar en effektvakt</h2>
      <p>
        En effektvakt har strömkännare på de inkommande faserna i elcentralen. När strömmen närmar sig huvudsäkringens
        värde stänger den av, eller stegar ner, en förbrukare som tål ett kort avbrott. Boverket nämner elpannor och
        elbilsladdare som typiska exempel, och skriver att du med en belastningsvakt kanske kan välja en lägre säkring
        utan att riskera strömavbrott.
      </p>
      <p>
        En del värmepumpar och elpannor har effektvakten inbyggd. NIBE:s elpanna EVC 13 levereras till exempel med tre
        strömkännare och en inställning för säkringsstorlek. När den totala belastningen på huvudsäkringen blir för
        stor spärras en del av pannans effekt tills det finns utrymme igen. Titta i installatörshandboken till din
        värmepump eller panna – står där något om strömkännare, effektvakt eller säkringsstorlek finns funktionen
        troligen redan, och då handlar det om att koppla in kännarna och ställa in rätt värde.
      </p>
      <p>
        Det som passar bäst att koppla bort är sådant som lagrar värme: elpatronen, varmvattenberedaren och
        golvvärmen. Ett kort uppehåll märks inte, eftersom vattnet och huset håller värmen. Samma tanke ligger bakom{" "}
        <Link href="/guider/styr-varmvattenberedaren-med-kontaktor">att styra varmvattenberedaren med en kontaktor</Link>.
      </p>

      <h2>Lastbalansering i laddboxen</h2>
      <p>
        Elbilen är ofta den största enskilda lasten i en villa, och den kan oftast sänka effekten i stället för att
        stängas av helt. Därför har laddboxar egen lastbalansering. Den kräver en mätare som ser hela husets
        förbrukning:
      </p>
      <ul>
        <li>
          <strong>Easee Equalizer</strong> ansluts till elmätaren och fördelar den tillgängliga effekten mellan
          laddboxen och resten av huset. Equalizer Amp mäter i stället med egen utrustning i elcentralen.
        </li>
        <li>
          <strong>Zaptec Sense</strong> läser av förbrukningen via elmätarens P1-port och höjer eller sänker
          laddeffekten därefter.
        </li>
      </ul>
      <p>
        Har du Tibber kan Tibber Pulse fylla samma funktion för laddboxar som är kopplade till Tibber-appen, se{" "}
        <Link href="/guider/smart-laddning-elbil-tibber">smart laddning med Tibber</Link>. Vill du veta mer om vad
        du ska titta på när du köper laddbox finns{" "}
        <Link href="/guider/valj-laddbox">guiden om att välja laddbox</Link>.
      </p>

      <Callout title="Exempel: elbil och elpatron på 20 A" tone="mint">
        <p>
          Antag ett hus med 20 A, alltså runt 14 kW om lasten är jämnt fördelad. En kall kväll går värmepumpen med en
          elpatron på 6 kW samtidigt som spisen och tvättmaskinen är på. Om laddboxen dessutom drar 11 kW blir summan
          långt över gränsen. Med lastbalansering sänker laddboxen effekten till det som blir över, och laddar ikapp
          under natten när resten av huset drar mindre. Siffrorna är antaganden – din elinstallatör kan räkna på ditt hus.
        </p>
      </Callout>

      <h2>Effektvakt eller större säkring?</h2>
      <p>
        En effektvakt passar när toppen bara inträffar ibland, till exempel några kalla kvällar om året. Då är det
        billigare att låta elpatronen eller laddboxen vänta en stund än att betala för en större säkring varje månad.
        En större säkring kan vara rätt när huset ofta ligger nära gränsen ändå, eller om de saker som drar mest inte
        går att styra.
      </p>
      <p>
        Att byta säkring går till ungefär så här hos Vattenfall Eldistribution: du anlitar ett elinstallationsföretag
        som gör arbetet och anmäler det till nätbolaget, som sedan ändrar ditt abonnemang. Inom samma intervall
        (16–25 A) tar Vattenfall ingen avgift utöver installatörens arbete, men för att höja till ett högre intervall
        betalar du en anslutningsavgift, och det kan ta från någon månad till över ett år om nätet behöver byggas ut.
        Reglerna skiljer sig mellan nätbolag, så fråga ditt nätbolag innan.
      </p>
      <p>
        Vet du inte hur nära gränsen du ligger i dag? Börja med att{" "}
        <Link href="/guider/mat-din-elforbrukning">mäta din elförbrukning</Link> med en realtidsmätare på elmätarens
        P1-port. Då ser du hur höga topparna blir och när de inträffar.
      </p>

      <h2>Installation</h2>
      <p>
        Strömkännare, kontaktorer och mätare i elcentralen ska installeras av ett registrerat
        elinstallationsföretag. Be installatören kontrollera att effektvakten och apparaten som ska styras fungerar
        ihop, och att lasten fördelas så jämnt som möjligt mellan faserna. Det är ofta billigare att ordna det i samma
        veva som en ny laddbox eller värmepump installeras.
      </p>
      <p>
        Vill du se hur mycket du kan spara på att flytta förbrukningen till billigare timmar kan du prova{" "}
        <Link href="/kalkylator">kalkylatorn</Link>.
      </p>

      <h2>Källor</h2>
      <ul>
        <li>
          Boverket:{" "}
          <a href="https://www.boverket.se/sv/energiguiden/energirenovera-smahus/3.viktiga_hansyn/energi/">Energi- och effektbehov</a>
        </li>
        <li>
          Ellevio:{" "}
          <a href="https://www.ellevio.se/globalassets/content/priserabonnemang-pdf/2026/sakring/sakringsabonnemang-16-63a_260601.pdf">Säkringsabonnemang 16–63 A från 1 juni 2026 (pdf)</a>
        </li>
        <li>
          Vattenfall Eldistribution:{" "}
          <a href="https://www.vattenfalleldistribution.se/elnatsanslutning/min-elanlaggning/andra-huvudsakring/">Ändra huvudsäkring</a>
        </li>
        <li>
          NIBE:{" "}
          <a href="https://assetstore.nibe.se/hcms/v2.3/entity/document/872657/storage/ODcyNjU3LzAvbWFzdGVy">Användar- och installatörshandbok NIBE EVC 13 (pdf)</a>
        </li>
        <li>
          Easee: <a href="https://easee.com/sv/produkter/tillbehor/equalizer/">Equalizer</a> och{" "}
          <a href="https://easee.com/sv/produkter/tillbehor/equalizer/equalizer-amp/">Equalizer Amp</a>
        </li>
        <li>
          Zaptec: <a href="https://www.zaptec.com/charging-solutions/zaptec-sense">Zaptec Sense</a>
        </li>
      </ul>

      <Faq
        title="Vanliga frågor"
        items={[
          {
            q: "Vad är skillnaden mellan effektvakt och lastbalansering?",
            a: "En effektvakt kopplar bort eller stegar ner en förbrukare, till exempel elpatronen, när huset drar för mycket. Lastbalansering sänker effekten steglöst och finns oftast i laddboxar. Båda skyddar huvudsäkringen.",
          },
          {
            q: "Kan jag ha laddbox utan att byta till större huvudsäkring?",
            a: "Ofta, om laddboxen har lastbalansering som mäter hela husets förbrukning. Hur mycket effekt som räcker för just ditt hus får elinstallatören räkna på.",
          },
          {
            q: "Får jag installera en effektvakt själv?",
            a: "Nej. Strömkännare och kontaktorer i elcentralen ska installeras av ett registrerat elinstallationsföretag.",
          },
        ]}
      />
    </ArticlePage>
  );
}
