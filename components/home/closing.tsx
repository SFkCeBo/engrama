import { ArrowUpRight, Mail } from "lucide-react";
import { sectionImages } from "@/content/section-images";
import { closing, contactGroups, contactInvite, contactSoon, instagramUrl } from "@/content/site";
import { email, hasWhatsapp, mailHref, whatsappHref } from "@/lib/contact";
import { TextPlate } from "../text-plate";
import { WhatsappIcon } from "../whatsapp-icon";

/** «¿Hablamos?»: las preguntas de entrada, el contacto agrupado por canal y una plancha de foto y frase. */
export function Closing() {
  return (
    <section
      id="contacto"
      aria-labelledby="contacto-title"
      className="screen screen-last reveal mx-auto max-w-[90rem] px-5 pt-20 pb-10 max-md:snap-align-none md:px-10 md:py-12"
    >
      <div className="grid gap-16 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-7">
          <div className="scroll-mt-20 max-md:snap-start">
            <h2
              id="contacto-title"
              className="display text-[clamp(2.75rem,7svh,3.5rem)] leading-[0.92] md:text-[clamp(4.5rem,min(7vw,11svh),7rem)]"
            >
              ¿Habla<em>mos</em>?
            </h2>
            <div className="mt-[min(1.5rem,3svh)] max-w-[56ch] space-y-1 text-muted-foreground text-sm leading-relaxed md:mt-6">
              {closing.questions.map((q) => (
                <p key={q}>{q}</p>
              ))}
              <p className="pt-2 text-foreground">{contactInvite}</p>
            </div>
          </div>

          <dl className="mt-[min(2rem,4svh)] grid scroll-mt-20 gap-[min(2rem,3.5svh)] max-md:snap-start sm:grid-cols-2 md:mt-8 md:gap-x-8 md:gap-y-7">
            <div className="border-border border-t pt-4">
              <dt className="label text-muted-foreground">{contactGroups.email.title}</dt>
              <dd className="mt-3">
                <a href={mailHref()} className="pill pill-solid">
                  <Mail className="size-4" aria-hidden="true" />
                  {email}
                </a>
              </dd>
            </div>
            <div className="border-border border-t pt-4">
              <dt className="label text-muted-foreground">{contactGroups.instagram.title}</dt>
              <dd className="mt-3">
                {instagramUrl ? (
                  <a href={instagramUrl} className="pill pill-line">
                    {contactGroups.instagram.note}
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                ) : (
                  <p className="max-w-[32ch] text-sm leading-relaxed">{contactSoon.instagram}</p>
                )}
              </dd>
            </div>
            <div className="border-border border-t pt-4">
              <dt className="label text-muted-foreground">{contactGroups.whatsapp.title}</dt>
              <dd className="mt-3">
                {hasWhatsapp ? (
                  <a href={whatsappHref()} className="pill pill-line">
                    <WhatsappIcon className="size-5" />
                    Escríbenos
                  </a>
                ) : (
                  <p className="max-w-[32ch] text-sm leading-relaxed">{contactSoon.whatsapp}</p>
                )}
              </dd>
            </div>
            <div className="border-border border-t pt-4">
              <dt className="label text-muted-foreground">{contactGroups.where.title}</dt>
              <dd className="mt-3 max-w-[40ch] text-sm leading-relaxed">
                {contactGroups.where.note}
              </dd>
            </div>
          </dl>
        </div>

        <TextPlate
          phrase={closing.plate.text}
          emphasis={closing.plate.emphasis}
          image={sectionImages.contacto}
          className="mx-auto w-[min(100%,calc(62svh*0.8))] scroll-mt-20 max-md:snap-start md:col-span-4 md:col-start-9 md:mx-0 md:w-[min(100%,calc(66svh*0.8))] md:self-center md:justify-self-end"
        />
      </div>
    </section>
  );
}
