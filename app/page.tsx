import { About } from "@/components/home/about";
import { Closing } from "@/components/home/closing";
import { Footer } from "@/components/home/footer";
import { Hero } from "@/components/home/hero";
import { Masthead } from "@/components/home/masthead";
import { Services } from "@/components/home/services";
import { StickyCta } from "@/components/home/sticky-cta";
import { Team } from "@/components/home/team";
import { Testimonials } from "@/components/home/testimonials";
import { Where } from "@/components/home/where";
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
        <Services />
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
