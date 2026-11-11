"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { OfferGroup } from "@/content/site";
import { cn } from "@/lib/utils";
import { type Entry, entriesOf, pad } from "./entries";

/** Sin foto, la plancha alterna tres tonos: noche, papel en sombra y papel con filete. */
const tones = [
  "bg-night text-night-foreground",
  "bg-muted text-foreground",
  "border border-foreground/30 text-foreground",
];

/** Plancha con foto: la imagen en 4:5 y, debajo, el número, el título y el texto como pie de foto. */
function PhotoPlate({ entry, i, total }: { entry: Entry; i: number; total: number }) {
  if (!entry.image) return null;
  return (
    <figure className="group h-full">
      <div className="h-[var(--ph)] overflow-hidden rounded-[3px] bg-night">
        <Image
          src={entry.image.src}
          alt={entry.image.alt}
          width={900}
          height={1125}
          sizes="(min-width: 768px) 21rem, 70vw"
          className="size-full object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.03]"
        />
      </div>
      <figcaption className="mt-4">
        <p className="label text-muted-foreground tabular-nums">
          {pad(i)} / {pad(total - 1)}
        </p>
        <h3 className="display mt-1.5 text-[1.375rem] leading-[1.08] md:text-[1.5rem]">
          {entry.title}
        </h3>
        {entry.body && (
          <p className="mt-2 max-w-[38ch] text-muted-foreground text-sm leading-relaxed">
            {entry.body}
          </p>
        )}
        {entry.sub && (
          <ul className="mt-3 space-y-1 border-border border-t pt-2">
            {entry.sub.map((s) => (
              <li key={s.title} className="text-[0.8125rem] leading-tight">
                <span className="display text-[1.0625rem] italic">{s.title}</span>
                {s.body && <span className="text-muted-foreground"> {s.body}</span>}
              </li>
            ))}
          </ul>
        )}
      </figcaption>
    </figure>
  );
}

function Plate({ entry, i, total }: { entry: Entry; i: number; total: number }) {
  if (entry.image) return <PhotoPlate entry={entry} i={i} total={total} />;
  const dark = i % tones.length === 0;
  return (
    <div
      className={cn(
        "flex h-full min-h-[var(--ph)] flex-col justify-between gap-8 rounded-[3px] p-6 md:p-8",
        tones[i % tones.length],
      )}
    >
      <p className={cn("label tabular-nums", dark ? "opacity-70" : "text-muted-foreground")}>
        {pad(i)} / {pad(total - 1)}
      </p>
      <div>
        <h3 className="display text-[1.875rem] leading-[1.02] md:text-[2.25rem]">{entry.title}</h3>
        {entry.body && (
          <p
            className={cn(
              "mt-4 max-w-[34ch] text-sm leading-relaxed",
              dark ? "opacity-80" : "text-muted-foreground",
            )}
          >
            {entry.body}
          </p>
        )}
        {entry.sub && (
          <ul className="mt-5 space-y-2">
            {entry.sub.map((s) => (
              <li key={s.title} className="text-sm leading-snug">
                <span className="display text-[1.25rem] italic">{s.title}</span>
                {s.body && <span className="opacity-75"> {s.body}</span>}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function Controls({ count, onMove }: { count: number; onMove: (dir: 1 | -1) => void }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <p className="label text-muted-foreground">Desliza para ver {count}</p>
      <div className="hidden gap-2 md:flex">
        <button
          type="button"
          onClick={() => onMove(-1)}
          className="pill pill-line size-12 px-0"
          aria-label="Anterior"
        >
          <ArrowLeft className="size-5" aria-hidden="true" strokeWidth={1.5} />
        </button>
        <button
          type="button"
          onClick={() => onMove(1)}
          className="pill pill-line size-12 px-0"
          aria-label="Siguiente"
        >
          <ArrowRight className="size-5" aria-hidden="true" strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}

/**
 * Un grupo es una pantalla: número y título, su entradilla y las flechas arriba; debajo, el carril
 * de planchas. El alto de las fotos (--ph) sale del alto de la pantalla para que todo quepa.
 */
function Group({ group, gi }: { group: OfferGroup; gi: number }) {
  const ref = useRef<HTMLUListElement>(null);
  const entries = entriesOf(group);
  // Entradilla larga (o planchas con mucho texto): en el móvil, cabecera y carril paran por separado.
  const long =
    (group.intro?.join("").length ?? 0) > 200 ||
    Boolean(group.offers?.some((o) => (o.body?.length ?? 0) > 200));
  const move = (dir: 1 | -1) => {
    const ul = ref.current;
    if (!ul) return;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    ul.scrollBy({ left: dir * ul.clientWidth * 0.8, behavior: still ? "auto" : "smooth" });
  };

  // Si las planchas caben, se reparten todo el ancho y sobran las flechas; si no, se desliza.
  const [overflows, setOverflows] = useState(true);
  useEffect(() => {
    const ul = ref.current;
    if (!ul) return;
    const check = () => setOverflows(ul.scrollWidth > ul.clientWidth + 1);
    check();
    const observer = new ResizeObserver(check);
    observer.observe(ul);
    return () => observer.disconnect();
  }, []);

  // Sin planchas (un grupo solo de texto): título arriba y el texto debajo, a lo ancho.
  if (entries.length === 0) {
    return (
      <section
        aria-labelledby={`a-${gi}`}
        className="screen mx-auto w-full max-w-[90rem] px-5 pt-8 pb-28 md:px-10 md:py-10"
      >
        <div className="border-border border-t pt-6 md:pt-8">
          <div className="flex items-baseline gap-4 md:gap-6">
            <p
              aria-hidden="true"
              className="numeral shrink-0 text-[3rem] text-muted-foreground md:text-[4.5rem]"
            >
              {pad(gi)}
            </p>
            <h2
              id={`a-${gi}`}
              className="display text-[1.875rem] leading-[0.95] md:text-[clamp(2.5rem,min(5vw,9svh),5rem)]"
            >
              {group.title}
            </h2>
          </div>
          {group.intro && (
            <div className="mt-8 grid gap-6 md:mt-14 md:grid-cols-3 md:gap-10">
              {group.intro.map((p, i) => (
                <p
                  key={p}
                  className={cn(
                    "leading-relaxed max-md:text-sm md:text-lg",
                    i === 0 ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {p}
                </p>
              ))}
            </div>
          )}
          {group.note && (
            <p className="display mt-10 max-w-[30ch] text-[1.5rem] leading-[1.1] md:text-[2rem]">
              {group.note}
            </p>
          )}
        </div>
      </section>
    );
  }

  return (
    <section
      aria-labelledby={`a-${gi}`}
      className={cn(
        "screen mx-auto w-full max-w-[90rem] px-5 pt-8 pb-28 [--ph:min(22svh,16rem)] md:px-10 md:py-10 md:[--ph:min(36svh,26rem)]",
        long && "max-md:snap-align-none",
      )}
    >
      <div
        className={cn(
          "grid scroll-mt-8 gap-5 border-border border-t pt-6 md:grid-cols-12 md:items-end md:gap-x-8 md:pt-8",
          long && "max-md:snap-start",
        )}
      >
        <div className="flex items-baseline gap-4 md:col-span-7 md:gap-6">
          <p
            aria-hidden="true"
            className="numeral shrink-0 text-[3rem] text-muted-foreground md:text-[4.5rem]"
          >
            {pad(gi)}
          </p>
          <h2
            id={`a-${gi}`}
            className="display text-[1.875rem] leading-[0.95] md:text-[clamp(2.5rem,min(4vw,7svh),4rem)]"
          >
            {group.title}
          </h2>
        </div>
        <div className="space-y-4 md:col-span-5">
          {group.intro && (
            <div
              className={cn(
                "max-w-[52ch] space-y-3 leading-relaxed",
                "text-muted-foreground text-sm",
              )}
            >
              {group.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          )}
          {group.note && (
            <p className="display max-w-[30ch] text-[1.5rem] leading-[1.1] md:text-[1.75rem]">
              {group.note}
            </p>
          )}
          {overflows && <Controls count={entries.length} onMove={move} />}
        </div>
      </div>
      {
        <ul
          ref={ref}
          aria-label={group.title}
          // biome-ignore lint/a11y/noNoninteractiveTabindex: el carril se recorre en horizontal con el teclado
          tabIndex={0}
          className={cn(
            "-mx-5 mt-6 flex snap-x snap-mandatory scroll-mt-8 scroll-px-5 gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] md:-mx-10 md:mt-10 md:scroll-px-10 md:gap-6 md:px-10",
            long && "max-md:snap-start",
          )}
        >
          {entries.map((entry, i) => (
            <li
              key={entry.title}
              className="w-[78%] shrink-0 snap-start md:w-auto md:flex-[1_0_calc(var(--ph)*0.8)]"
            >
              <Plate entry={entry} i={i} total={entries.length} />
            </li>
          ))}
        </ul>
      }
    </section>
  );
}

/** Los grupos de una puerta, una pantalla cada uno, con su carril horizontal de planchas. */
export function OfferRail({ groups }: { groups: OfferGroup[] }) {
  return groups.map((group, gi) => <Group key={group.title} group={group} gi={gi} />);
}
