import Image from "next/image";
import { whatsappHref } from "@/lib/contact";
import { WhatsappIcon } from "../whatsapp-icon";

const trust =
  "Somos dos psicólogas colegiadas que usan la fotografía para que veas lo que sientes. Por toda España y online.";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden pb-28 md:h-[calc(100svh-5rem)] md:min-h-[42rem] md:pb-0"
    >
      <h1
        id="hero-title"
        className="display relative z-10 mx-auto mt-6 max-w-[14ch] px-5 text-center text-[3.25rem] leading-[0.95] md:mt-6 md:max-w-[18ch] md:text-[clamp(4.5rem,7vw,6rem)]"
      >
        Lo que sientes <em>deja</em> huella. Aprende a <em>mirarla</em>.
      </h1>
      <p className="relative z-10 mx-auto mt-5 max-w-[32ch] px-5 text-center text-[0.9375rem] leading-relaxed md:hidden">
        {trust}
      </p>

      {/* La amapola recortada por su propio contorno, detrás del titular. */}
      <div className="relative left-1/2 -mt-2 aspect-[14/13] w-[118vw] -translate-x-1/2 md:absolute md:top-[26%] md:mt-0 md:h-[84%] md:w-auto">
        <Image
          src="/img/amapola-coral.webp"
          alt="Una amapola roja abierta, con los estambres amarillos y el corazón oscuro"
          fill
          priority
          sizes="(min-width: 768px) 60vw, 118vw"
          className="recall object-contain"
        />
      </div>

      <div className="absolute inset-x-0 bottom-8 z-10 mx-auto hidden max-w-[90rem] items-end justify-between px-10 md:flex">
        <a href={whatsappHref()} className="pill pill-solid">
          <WhatsappIcon className="size-5" />
          Escríbenos por WhatsApp
        </a>
        <p className="max-w-[26ch] text-sm leading-relaxed">{trust}</p>
      </div>
    </section>
  );
}
