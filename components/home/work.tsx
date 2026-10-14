"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { pieces } from "@/content/site";
import { TextPlate } from "../text-plate";

const pad = (n: number) => String(n).padStart(2, "0");

/** Piezas: una secuencia numerada de planchas de texto que se recorre en horizontal. */
export function Work() {
  const track = useRef<HTMLUListElement>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const root = track.current;
    if (!root) return;
    // La pieza actual es la que queda pegada al borde izquierdo del carril.
    const onScroll = () => {
      const [a, b] = root.children as unknown as HTMLElement[];
      const step = a && b ? b.offsetLeft - a.offsetLeft : 1;
      const atEnd = root.scrollLeft + root.clientWidth >= root.scrollWidth - 2;
      setCurrent(atEnd ? pieces.length - 1 : Math.round(root.scrollLeft / step));
    };
    root.addEventListener("scroll", onScroll, { passive: true });
    return () => root.removeEventListener("scroll", onScroll);
  }, []);

  function go(step: -1 | 1) {
    const root = track.current;
    const next = root?.children[Math.min(Math.max(current + step, 0), pieces.length - 1)];
    if (!(root && next instanceof HTMLElement)) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    root.scrollTo({
      left: next.offsetLeft - root.offsetLeft,
      behavior: reduced ? "auto" : "smooth",
    });
  }

  return (
    <section
      id="piezas"
      aria-labelledby="piezas-title"
      className="screen reveal mx-auto max-w-[90rem] py-32 md:py-24"
    >
      <div className="grid gap-6 px-5 md:grid-cols-12 md:items-end md:gap-8 md:px-10">
        <h2
          id="piezas-title"
          className="display text-[3.5rem] leading-[0.9] md:col-span-7 md:text-[5.5rem]"
        >
          Piezas <em>para mirarte</em>
        </h2>
        <p className="max-w-[36ch] text-muted-foreground text-sm leading-relaxed md:col-span-4 md:col-start-9">
          Algunas de las propuestas con las que trabajamos en sesiones, talleres y formación. Cada
          una empieza con una frase.
        </p>
      </div>

      <ul
        ref={track}
        aria-label="Piezas"
        // biome-ignore lint/a11y/noNoninteractiveTabindex: carril con scroll horizontal, debe poder recorrerse con teclado
        tabIndex={0}
        className="mt-14 flex snap-x snap-mandatory scroll-px-5 gap-5 overflow-x-auto px-5 pb-4 [scrollbar-width:none] md:mt-20 md:scroll-px-10 md:gap-8 md:px-10"
      >
        {pieces.map((p, i) => (
          <li key={p.id} className="w-[78vw] shrink-0 snap-start sm:w-[22rem] md:w-[24rem]">
            <article aria-labelledby={`${p.id}-title`}>
              <TextPlate phrase={p.phrase} emphasis={p.emphasis} />
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h3 id={`${p.id}-title`} className="label text-muted-foreground">
                  {p.category}
                </h3>
                <span className="label text-muted-foreground tabular-nums">{pad(i + 1)}</span>
              </div>
              <p className="mt-3 max-w-[36ch] text-sm leading-relaxed">{p.body}</p>
            </article>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex items-center justify-between px-5 md:px-10">
        <p className="display text-[2rem] tabular-nums leading-none" aria-live="polite">
          <span className="sr-only">Pieza </span>
          {pad(current + 1)}
          <span className="text-muted-foreground"> / {pad(pieces.length)}</span>
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => go(-1)}
            disabled={current === 0}
            className="pill pill-line px-4 disabled:opacity-40"
            aria-label="Pieza anterior"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            disabled={current === pieces.length - 1}
            className="pill pill-line px-4 disabled:opacity-40"
            aria-label="Pieza siguiente"
          >
            <ArrowRight className="size-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
