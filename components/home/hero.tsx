import Image from "next/image";
import { whatsappHref } from "@/lib/contact";
import { WhatsappIcon } from "../whatsapp-icon";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="screen relative isolate overflow-hidden pt-20 pb-28 md:justify-start md:pt-20 md:pb-0"
    >
      <div className="relative z-10 mx-auto w-full max-w-[90rem] px-5 pt-10 md:my-auto md:px-10 md:pt-0 md:pb-8">
        <h1
          id="hero-title"
          className="display max-w-[11ch] text-[3.5rem] leading-[0.92] md:text-[clamp(5rem,8vw,7.5rem)]"
        >
          Lo que sientes <em>deja</em> huella. Aprende a <em>mirarla</em>.
        </h1>
        <p className="mt-8 max-w-[34ch] text-[0.9375rem] leading-relaxed md:mt-12 md:text-base">
          Somos dos psicólogas colegiadas que usan la fotografía para que veas lo que sientes. Por
          toda España y online.
        </p>
        <a href={whatsappHref()} className="pill pill-solid mt-8 hidden md:inline-flex">
          <WhatsappIcon className="size-5" />
          Escríbenos por WhatsApp
        </a>
      </div>

      {/* La amapola recortada por su propio contorno, a la derecha y detrás del titular. */}
      <div className="relative -mt-4 ml-[12vw] aspect-[14/13] w-[105vw] md:absolute md:top-[4%] md:right-[-5%] md:mt-0 md:ml-0 md:h-[96%] md:w-auto">
        <Image
          src="/img/amapola-coral.webp"
          alt="Una amapola roja abierta, con los estambres amarillos y el corazón oscuro"
          fill
          priority
          sizes="(min-width: 768px) 60vw, 105vw"
          className="recall object-contain"
        />
      </div>
    </section>
  );
}
