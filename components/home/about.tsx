import Image from "next/image";
import { sectionImages } from "@/content/section-images";
import { home } from "@/content/site";

export function About() {
  return (
    <section
      id="que-es"
      aria-labelledby="que-es-title"
      className="screen reveal mx-auto grid max-w-[90rem] content-center gap-8 px-5 pt-12 pb-28 max-md:snap-align-none md:grid-cols-12 md:gap-10 md:px-10 md:py-16"
    >
      <aside className="grid scroll-mt-12 grid-cols-[1fr_38%] items-start gap-x-5 text-muted-foreground text-sm leading-relaxed max-md:snap-start md:col-span-3 md:block">
        <div>
          <p className="display text-2xl text-foreground">
            en·gra·ma <span className="italic">(n.)</span>
          </p>
          <p className="mt-3 max-w-[34ch]">
            En neurociencia, la huella física que una experiencia deja en el cerebro y que nos
            permite volver a ella. El término lo acuñó el biólogo Richard Semon en 1904.
          </p>
        </div>
        <div className="aspect-[4/5] overflow-hidden rounded-[3px] bg-night md:mt-12 md:w-[min(100%,calc(48svh*0.8))]">
          <Image
            src={sectionImages["que-es"].src}
            alt={sectionImages["que-es"].alt}
            width={900}
            height={1125}
            sizes="(min-width: 768px) 22vw, 60vw"
            className="size-full object-cover"
          />
        </div>
      </aside>
      <div className="md:col-span-8 md:col-start-5">
        <h2 id="que-es-title" className="sr-only">
          Engrama: psicología y fotografía
        </h2>
        <p className="display text-[clamp(1.25rem,3.6svh,1.75rem)] leading-[1.08] md:text-[3.25rem]">
          {/* home.intro.statement, con las palabras clave en cursiva. */}
          Trabajamos con las imágenes como una vía para explorar la <em>memoria</em>, las{" "}
          <em>emociones</em>, la identidad y los vínculos.
        </p>
        <div className="mt-6 grid scroll-mt-12 gap-4 text-muted-foreground leading-relaxed max-md:snap-start max-md:text-sm md:mt-8 md:grid-cols-2 md:gap-8">
          {home.intro.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
