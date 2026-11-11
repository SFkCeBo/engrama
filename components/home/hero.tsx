import Image from "next/image";
import { home } from "@/content/site";
import { whatsappHref } from "@/lib/contact";
import { WhatsappIcon } from "../whatsapp-icon";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="screen relative isolate overflow-hidden pt-20 pb-28 md:justify-start md:pt-20 md:pb-24"
    >
      <div className="relative z-10 mx-auto w-full max-w-[90rem] px-5 pt-4 md:my-auto md:px-10 md:pt-0 md:pb-8">
        <p className="label mb-[min(1.5rem,2.5svh)] text-muted-foreground">{home.tagline}</p>
        <h1
          id="hero-title"
          className="display max-w-[13ch] text-[clamp(2.25rem,6.2svh,3.5rem)] leading-[0.92] md:text-[clamp(4rem,min(7vw,10.5svh),7rem)]"
        >
          {/* home.hero.title, con las palabras que cargan la emoción en cursiva. */}
          Mirar, expresar y dar <em>sentido</em> a través de las <em>imágenes</em>.
        </h1>
        <p className="mt-[min(2rem,3svh)] max-w-[34ch] text-[0.9375rem] leading-relaxed md:mt-[min(3rem,5svh)] md:text-base">
          {home.hero.lead}
        </p>
        <a href={whatsappHref()} className="pill pill-solid mt-8 hidden md:inline-flex">
          <WhatsappIcon className="size-5" />
          Escríbenos por WhatsApp
        </a>
      </div>

      {/* La amapola recortada por su propio contorno, a la derecha y detrás del titular. */}
      <div className="relative -mt-4 ml-auto aspect-[14/13] w-[min(105vw,calc(28svh*14/13))] md:absolute md:top-[4%] md:right-[-5%] md:mt-0 md:ml-0 md:h-[96%] md:w-auto">
        <Image
          src="/img/amapola-coral.webp"
          alt="Una amapola roja abierta, con los estambres amarillos y el corazón oscuro"
          fill
          priority
          sizes="(min-width: 768px) 60vw, 105vw"
          className="recall object-contain"
        />
      </div>

      {/* Ficha de portada, como los créditos de un número: quiénes, desde cuándo, dónde. */}
      <div className="absolute inset-x-0 bottom-0 z-10 mx-auto hidden max-w-[90rem] items-end gap-16 px-10 pb-8 text-sm md:flex">
        <dl className="flex gap-16">
          {[
            ["Número", "Vol. I · 2026"],
            ["Psicólogas", "Bianca y Laura"],
            ["Formato", "Presencial y online"],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="label text-muted-foreground">{k}</dt>
              <dd className="mt-1">{v}</dd>
            </div>
          ))}
        </dl>
        <a href="#que-es" className="label no-underline hover:underline">
          Desliza <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
