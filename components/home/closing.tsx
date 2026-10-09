import { Phone } from "lucide-react";
import { phone, phoneHref, whatsappHref } from "@/lib/contact";
import { WhatsappIcon } from "../whatsapp-icon";

export function Closing() {
  return (
    <section
      id="contacto"
      aria-labelledby="contacto-title"
      className="mx-auto max-w-[90rem] border-border border-t px-5 py-24 text-center md:px-10 md:py-36"
    >
      <h2
        id="contacto-title"
        className="display mx-auto max-w-[16ch] text-[3.25rem] leading-[0.95] md:text-[6rem]"
      >
        Cuéntanos qué te gustaría <em>mirar</em>.
      </h2>
      <p className="mx-auto mt-6 max-w-[44ch] text-muted-foreground leading-relaxed">
        Escríbenos por WhatsApp o llámanos. Te respondemos nosotras, sin formularios.
      </p>
      <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a href={whatsappHref()} className="pill pill-solid">
          <WhatsappIcon className="size-5" />
          Escríbenos por WhatsApp
        </a>
        <a href={phoneHref} className="pill pill-line">
          <Phone className="size-4" aria-hidden="true" />
          {/* TODO: NEXT_PUBLIC_PHONE en .env.local */}
          {phone ? (
            <>
              Llamar al <span className="tabular-nums">{phone}</span>
            </>
          ) : (
            "Teléfono pendiente"
          )}
        </a>
      </div>
    </section>
  );
}
