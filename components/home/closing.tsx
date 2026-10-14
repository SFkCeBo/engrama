import { Phone } from "lucide-react";
import { contactGroups, contactSoon } from "@/content/site";
import { hasWhatsapp, phone, phoneHref, whatsappHref } from "@/lib/contact";
import { TextPlate } from "../text-plate";
import { WhatsappIcon } from "../whatsapp-icon";

/** «Ven a decir hola»: contacto agrupado por intención, con una plancha de texto. */
export function Closing() {
  return (
    <section
      id="contacto"
      aria-labelledby="contacto-title"
      className="screen reveal mx-auto max-w-[90rem] px-5 py-32 md:px-10 md:py-40"
    >
      <div className="grid gap-16 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-7">
          <h2
            id="contacto-title"
            className="display text-[3.5rem] leading-[0.92] md:text-[clamp(5rem,8vw,7.5rem)]"
          >
            Ven a decir <em>hola</em>.
          </h2>

          <dl className="mt-14 grid gap-10 sm:grid-cols-2 md:mt-20 md:gap-x-8 md:gap-y-12">
            <div className="border-border border-t pt-5">
              <dt className="label text-muted-foreground">{contactGroups.write.title}</dt>
              <dd className="mt-3">
                {hasWhatsapp ? (
                  <>
                    <p className="max-w-[32ch] text-sm leading-relaxed">
                      {contactGroups.write.note}
                    </p>
                    <a href={whatsappHref()} className="pill pill-solid mt-5">
                      <WhatsappIcon className="size-5" />
                      WhatsApp
                    </a>
                  </>
                ) : (
                  <p className="max-w-[32ch] text-sm leading-relaxed">{contactSoon.write}</p>
                )}
              </dd>
            </div>
            <div className="border-border border-t pt-5">
              <dt className="label text-muted-foreground">{contactGroups.call.title}</dt>
              <dd className="mt-3">
                {phone ? (
                  <>
                    <p className="max-w-[32ch] text-sm leading-relaxed">
                      {contactGroups.call.note}
                    </p>
                    <a href={phoneHref} className="pill pill-line mt-5">
                      <Phone className="size-4" aria-hidden="true" />
                      <span className="tabular-nums">{phone}</span>
                    </a>
                  </>
                ) : (
                  <p className="max-w-[32ch] text-sm leading-relaxed">{contactSoon.call}</p>
                )}
              </dd>
            </div>
            <div className="border-border border-t pt-5 sm:col-span-2">
              <dt className="label text-muted-foreground">{contactGroups.where.title}</dt>
              <dd className="mt-3 max-w-[48ch] text-sm leading-relaxed">
                {contactGroups.where.note}
              </dd>
            </div>
          </dl>
        </div>

        <TextPlate
          phrase="Lo primero es contarlo. Lo segundo, mirarlo juntas."
          emphasis="mirarlo"
          className="md:col-span-4 md:col-start-9 md:mt-32"
        />
      </div>
    </section>
  );
}
