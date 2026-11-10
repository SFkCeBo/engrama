import { Mail } from "lucide-react";
import { contactInvite, type Door } from "@/content/site";
import { email, mailHref } from "@/lib/contact";
import { PullQuote } from "../editorial";
import { Footer } from "../home/footer";
import { Masthead } from "../home/masthead";
import { StickyCta } from "../home/sticky-cta";
import { DoorIndex } from "./door-index";
import { DoorOpener } from "./door-opener";
import { NextSection } from "./next-section";

/**
 * Una puerta como sección del número: portadilla, índice desplegable de sus grupos, cierre en la
 * noche y paso a la sección siguiente.
 */
export function DoorPage({ door }: { door: Door }) {
  return (
    <>
      <Masthead folio={`Vol. I · Sección ${door.numeral} · ${door.name}`} />
      <main>
        <DoorOpener door={door} />

        <div className="mx-auto max-w-[90rem] px-5 pb-32 md:px-10 md:pb-48">
          <DoorIndex groups={door.groups} />
          {door.pullQuote && (
            <PullQuote
              text={door.pullQuote.text}
              emphasis={door.pullQuote.emphasis}
              className="mt-24 border-t-0 md:mt-36 md:ml-[calc(100%/12)]"
            />
          )}
        </div>

        <section
          aria-labelledby="hablamos-title"
          className="overflow-hidden bg-night py-32 text-night-foreground md:py-48"
        >
          <div className="mx-auto grid max-w-[90rem] gap-12 px-5 md:grid-cols-12 md:items-end md:gap-10 md:px-10">
            <h2
              id="hablamos-title"
              className="display -ml-1 text-[5.5rem] leading-[0.8] tracking-[-0.03em] md:col-span-7 md:text-[9rem]"
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
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
