import { About } from "@/components/home/about";
import { Closing } from "@/components/home/closing";
import { Doors } from "@/components/home/doors";
import { Footer } from "@/components/home/footer";
import { Hero } from "@/components/home/hero";
import { Masthead } from "@/components/home/masthead";
import { Method } from "@/components/home/method";
import { StickyCta } from "@/components/home/sticky-cta";
import { Team } from "@/components/home/team";
import { Testimonials } from "@/components/home/testimonials";
import { Where } from "@/components/home/where";
import { Why } from "@/components/home/why";
import { siteUrl } from "@/lib/contact";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Engrama",
  description:
    "Psicología y fotografía. Mirar, expresar y dar sentido a través de las imágenes: propuestas para personas, grupos, organizaciones y artistas.",
  url: siteUrl,
  areaServed: "ES",
  image: `${siteUrl}/img/og.jpg`,
  email: "engramafoto@gmail.com",
};

export default function Home() {
  return (
    <>
      <Masthead />
      <main>
        <Hero />
        <About />
        <Why />
        <Doors />
        <Method />
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
