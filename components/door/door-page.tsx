import { Mail } from "lucide-react";
import { contactInvite, type Door } from "@/content/site";
import { email, mailHref } from "@/lib/contact";
import { PullQuote } from "../editorial";
import { Footer } from "../home/footer";
import { Masthead } from "../home/masthead";
import { StickyCta } from "../home/sticky-cta";
import { DoorOpener } from "./door-opener";
import { NextSection } from "./next-section";
import { OfferRail } from "./offer-rail";

/**
 * Una puerta como sección del número: portadilla, sus grupos en carriles de planchas, cierre en la
 * noche y paso a la sección siguiente.
 */
export function DoorPage({ door }: { door: Door }) {
  return (
    <>
      <Masthead folio={`Vol. I · Sección ${door.numeral} · ${door.name}`} />
      <main>
        <DoorOpener door={door} />

        <OfferRail groups={door.groups} />
        {door.pullQuote && (
          <div className="screen reveal mx-auto w-full max-w-[90rem] px-5 pt-20 pb-28 md:px-10 md:py-20">
            <PullQuote
              text={door.pullQuote.text}
              emphasis={door.pullQuote.emphasis}
              className="border-t-0 md:ml-[calc(100%/12)]"
            />
          </div>
        )}

        {/* Cierre: «¿Hablamos?» y el paso a la sección siguiente comparten la última pantalla con el pie. */}
        <div className="screen screen-last justify-between max-md:min-h-0 max-md:snap-align-none">
          <section
            aria-labelledby="hablamos-title"
            className="flex flex-1 flex-col justify-center overflow-hidden bg-night py-16 text-night-foreground max-md:snap-start md:py-12"
          >
            <div className="mx-auto grid w-full max-w-[90rem] gap-12 px-5 md:grid-cols-12 md:items-end md:gap-10 md:px-10">
              <h2
                id="hablamos-title"
                className="display -ml-1 text-[4.5rem] leading-[0.8] tracking-[-0.03em] md:col-span-7 md:text-[clamp(6rem,15svh,9rem)]"
              >
                ¿Habla<em>mos</em>?
              </h2>
              <div className="md:col-span-4 md:col-start-9">
                <div className="max-w-[36ch] space-y-3 text-night-foreground/80 leading-relaxed">
                  <p>{door.contact}</p>
                  <p>{contactInvite}</p>
                </div>
                <a
                  href={mailHref(door.subject)}
                  className="pill mt-6 bg-night-foreground text-night no-underline transition-opacity hover:opacity-85"
                >
                  <Mail className="size-4" aria-hidden="true" />
                  {email}
                </a>
              </div>
            </div>
          </section>

          <NextSection door={door} />
        </div>
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
