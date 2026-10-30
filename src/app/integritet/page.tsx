import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import { OWNER_NAME } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

const subtitle = "Vilka uppgifter Smartstyra hanterar – och vilka vi inte samlar in.";

export const metadata = pageMetadata("Integritetspolicy och kakor", subtitle, "/integritet");

export default function PrivacyPage() {
  return (
    <ArticlePage title="Integritetspolicy" subtitle={subtitle} path="/integritet">
      <p>
        Smartstyra har inga användarkonton. Den här sidan beskriver de uppgifter som ändå hanteras när du använder
        sajten.
      </p>

      <h2>Personuppgiftsansvarig</h2>
      <p>
        {OWNER_NAME || "Smartstyra"} ansvarar för behandlingen. Frågor skickas via formuläret på{" "}
        <Link href="/kontakt">kontaktsidan</Link>.
      </p>

      <h2>Uppgifter vi hanterar</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Vad</th>
              <th>Varför</th>
              <th>Var det lagras</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>IP-adress och teknisk information om din webbläsare</td>
              <td>Drift och säkerhet</td>
              <td>I serverloggar hos vårt webbhotell under en begränsad tid.</td>
            </tr>
            <tr>
              <td>Besöksstatistik: vilka sidor som visas, varifrån besökaren kom, land, enhetstyp och webbläsare</td>
              <td>För att se vilka sidor som används och förbättra sajten</td>
              <td>
                Hos Vercel Web Analytics, utan kakor. Besökare räknas med ett tillfälligt, anonymt värde som byts varje
                dygn, och IP-adressen sparas inte.
              </td>
            </tr>
            <tr>
              <td>Din e-postadress om du prenumererar på nyhetsbrevet</td>
              <td>För att skicka nyhetsbrevet</td>
              <td>Hos e-posttjänsten Resend tills du avslutar prenumerationen.</td>
            </tr>
            <tr>
              <td>Det du skriver i kontaktformuläret: namn (valfritt), e-postadress och meddelande</td>
              <td>För att kunna svara</td>
              <td>
                Skickas via Resend till vår e-post och sparas där tills ärendet är avslutat. Resend sparar en kopia en
                kortare tid för leveransen.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Den rättsliga grunden är vårt berättigade intresse av att kunna driva och skydda tjänsten, ditt samtycke när du
        prenumererar på nyhetsbrevet och, när det gäller kontaktformuläret, att kunna besvara din fråga.
      </p>

      <h2>Kakor</h2>
      <p>
        Smartstyra sätter inga egna kakor. Besöksstatistiken ovan fungerar utan kakor och kan inte användas för att följa
        dig mellan sajter.
      </p>
      <p>
        När du klickar på en produktlänk kommer du till Amazon. Där gäller Amazons villkor och integritetspolicy, och
        Amazon kan sätta kakor för att se att köpet kom via oss.
      </p>

      <h2>Dina rättigheter</h2>
      <p>
        Du har rätt att få veta vilka uppgifter vi har om dig, att få dem rättade eller raderade och att invända mot
        behandlingen. Avsluta nyhetsbrevet med länken i varje utskick, eller kontakta oss via{" "}
        <Link href="/kontakt">kontaktsidan</Link>. Du kan också klaga hos Integritetsskyddsmyndigheten (IMY).
      </p>
    </ArticlePage>
  );
}
