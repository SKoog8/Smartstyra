import ArticlePage from "@/components/ArticlePage";
import ContactForm from "@/components/ContactForm";
import { pageMetadata } from "@/lib/metadata";

const subtitle = "Frågor, tips på guider eller något som inte stämmer? Skriv till oss.";

export const metadata = pageMetadata("Kontakt", subtitle, "/kontakt");

export default function ContactPage() {
  return (
    <ArticlePage title="Kontakt" subtitle={subtitle} path="/kontakt">
      <p>
        Vi läser allt och svarar så snart vi kan. Vi kan tyvärr inte ge personlig rådgivning om just din elinstallation
        – för sådant behöver du en elinstallatör.
      </p>
      <ContactForm />
    </ArticlePage>
  );
}
