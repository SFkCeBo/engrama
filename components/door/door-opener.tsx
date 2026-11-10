import type { Door } from "@/content/site";
import { Emphasis, TextPlate } from "../text-plate";

/** Portadilla de la sección: numeral del número, titular, plancha con su frase e intro con capitular. */
export function DoorOpener({ door }: { door: Door }) {
  return (
    <header className="mx-auto grid max-w-[90rem] gap-x-10 px-5 pt-28 pb-20 md:grid-cols-12 md:px-10 md:pt-40 md:pb-32">
      <div className="door-enter md:col-span-7 md:pt-8">
        <p aria-hidden="true" className="numeral -ml-1 text-[8rem] md:-ml-2 md:text-[15rem]">
          {door.numeral}
        </p>
        <h1 className="display mt-6 max-w-[14ch] text-[3.25rem] leading-[0.92] [--i:1] md:mt-10 md:text-[clamp(4.5rem,6.5vw,6rem)]">
          <span className="sr-only">
            Sección {door.numeral}, {door.name}:{" "}
          </span>
          <Emphasis text={door.title} emphasis={door.emphasis} />
        </h1>
      </div>

      <TextPlate
        phrase={door.plate.text}
        emphasis={door.plate.emphasis}
        className="recall mt-14 ml-auto w-[72%] md:col-span-4 md:col-start-9 md:mt-0 md:w-full md:self-start"
      />

      <div className="mt-16 md:col-span-9 md:col-start-4 md:mt-24 md:columns-2 md:gap-10">
        {door.intro.map((paragraph, i) => (
          <p
            key={paragraph}
            className={`mb-4 break-inside-avoid text-[1.0625rem] leading-relaxed ${i === 0 ? "dropcap" : "text-muted-foreground"}`}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </header>
  );
}
