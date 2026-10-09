import { Phone } from "lucide-react";
import { phone, phoneHref, whatsappHref } from "@/lib/contact";
import { WhatsappIcon } from "../whatsapp-icon";

export function Closing() {
  return (
    <section
      id="contacto"
      aria-labelledby="contacto-title"
      className="screen reveal mx-auto max-w-[90rem] px-5 py-32 md:px-10 md:py-48"
    >
      <h2
        id="contacto-title"
        className="display max-w-[12ch] text-[3.5rem] leading-[0.92] md:text-[clamp(5rem,8vw,7.5rem)]"
      >
        Cuéntanos qué te gustaría <em>mirar</em>.
      </h2>
      <p className="mt-10 max-w-[44ch] text-muted-foreground leading-relaxed">
        Escríbenos por WhatsApp o llámanos. Te respondemos nosotras, sin formularios.
      </p>
      <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row">
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
