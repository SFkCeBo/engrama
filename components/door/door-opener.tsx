import { sectionImages } from "@/content/section-images";
import type { Door } from "@/content/site";
import { Emphasis, TextPlate } from "../text-plate";

/**
 * Portadilla de la sección en dos pantallas: primero el numeral, el titular y la plancha con su
 * frase; después la entradilla, con el primer párrafo en grande y el resto al lado.
 */
export function DoorOpener({ door }: { door: Door }) {
  const [lead, ...rest] = door.intro;
  return (
    <>
      <header className="screen mx-auto grid w-full max-w-[90rem] content-center gap-x-10 px-5 pt-24 pb-28 md:grid-cols-12 md:items-center md:px-10 md:pt-24 md:pb-12">
        <div className="door-enter md:col-span-7">
          <p
            aria-hidden="true"
            className="numeral -ml-1 text-[clamp(4rem,11svh,5.5rem)] md:-ml-2 md:text-[clamp(8rem,22svh,13rem)]"
          >
            {door.numeral}
          </p>
          <h1 className="display mt-4 max-w-[14ch] text-[clamp(2.25rem,6svh,2.75rem)] leading-[0.92] [--i:1] md:mt-8 md:text-[clamp(3.5rem,min(6vw,9svh),6rem)]">
            <span className="sr-only">
              Sección {door.numeral}, {door.name}:{" "}
            </span>
            <Emphasis text={door.title} emphasis={door.emphasis} />
          </h1>
        </div>

        <TextPlate
          phrase={door.plate.text}
          emphasis={door.plate.emphasis}
          image={sectionImages[`puerta-${door.slug}`]}
          className="recall mt-8 ml-auto w-[min(72%,calc(34svh*0.8))] md:col-span-4 md:col-start-9 md:mt-0 md:w-[min(100%,calc(68svh*0.8))]"
        />
      </header>

      {lead && (
        <section
          aria-label="Entradilla"
          className="screen reveal mx-auto grid w-full max-w-[90rem] content-center gap-6 px-5 pt-12 pb-28 md:grid-cols-12 md:gap-10 md:px-10 md:py-16"
        >
          <p className="display text-[clamp(1.5rem,4.2svh,1.875rem)] leading-[1.1] md:col-span-8 md:text-[clamp(2.25rem,3.4vw,3.25rem)]">
            {lead}
          </p>
          {rest.length > 0 && (
            <div className="space-y-4 text-muted-foreground leading-relaxed max-md:text-sm md:col-span-4 md:self-end">
              {rest.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          )}
        </section>
      )}
    </>
  );
}
