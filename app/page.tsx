import { About } from "@/components/home/about";
import { Closing } from "@/components/home/closing";
import { Footer } from "@/components/home/footer";
import { Hero } from "@/components/home/hero";
import { IndexList } from "@/components/home/index-list";
import { Masthead } from "@/components/home/masthead";
import { StickyCta } from "@/components/home/sticky-cta";
import { Team } from "@/components/home/team";
import { Testimonials } from "@/components/home/testimonials";
import { Where } from "@/components/home/where";
import { Work } from "@/components/home/work";
import { siteUrl } from "@/lib/contact";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Engrama",
  description:
    "Fotografía terapéutica con psicólogas colegiadas: sesiones individuales, talleres grupales y formación.",
  url: siteUrl,
  areaServed: "ES",
  image: `${siteUrl}/img/og.jpg`,
};

export default function Home() {
  return (
    <>
      <Masthead />
      <main>
        <Hero />
        <About />
        <Work />
        <IndexList />
        <Team />
        <Testimonials />
        <Where />
        <Closing />
      </main>
      <Footer />
      <StickyCta />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD estático generado en el servidor
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
