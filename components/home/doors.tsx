"use client";

import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { sectionImages } from "@/content/section-images";
import { doors } from "@/content/site";
import { useScrollStack } from "@/lib/use-scroll-stack";
import { TextPlate } from "../text-plate";

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Qué hacemos, a la manera del «Selected work» de huyml.co: la sección se fija y el scroll apila
 * las planchas de cada puerta en 3D, en vertical. A la derecha, la lista de servicios se desplaza
 * con el actual enfocado; a la izquierda, lo que incluye; abajo, el contador.
 * Sin JS o con reduced-motion queda como una lista de filas.
 */
export function Doors() {
  const root = useRef<HTMLElement>(null);
  const list = useRef<HTMLOListElement>(null);
  const [current, setCurrent] = useState(0);

  useScrollStack(root, {
    items: "[data-plancha]",
    place: (d, { h }) => {
      const a = Math.abs(d);
      return {
        y: d * h * 0.58,
        z: -a * h * 0.45,
        rotationX: d * -32,
        opacity: a <= 1 ? 1 - a * 0.45 : Math.max(0, (2 - a) * 0.55),
        zIndex: 100 - Math.round(a * 10),
      };
    },
    // La lista sube a la par que las planchas: la fila actual queda centrada y nítida.
    onProgress: (p) => {
      const ol = list.current;
      if (!ol) return;
      const rows = gsap.utils.toArray<HTMLElement>("[data-fila]", ol);
      const centers = rows.map((r) => r.offsetTop + r.offsetHeight / 2);
      const i0 = Math.min(Math.floor(p), centers.length - 1);
      const from = centers[i0] ?? 0;
      const to = centers[i0 + 1] ?? from;
      const windowH = ol.parentElement?.clientHeight ?? 0;
      gsap.set(ol, { y: windowH / 2 - (from + (to - from) * (p - i0)) });
      for (const [i, row] of rows.entries()) {
        const a = Math.min(Math.abs(i - p), 1.5);
        gsap.set(row, { opacity: 1 - a * 0.55, filter: `blur(${a * 2.5}px)` });
      }
    },
    onIndex: (i) => {
      setCurrent(i);
      gsap.fromTo(
        gsap.utils.toArray("[data-enfoca]", root.current),
        { autoAlpha: 0, filter: "blur(6px)", y: 8 },
        { autoAlpha: 1, filter: "blur(0px)", y: 0, duration: 0.6, ease: "power2.out" },
      );
    },
  });

  const door = doors[current] ?? doors[0];

  return (
    <section
      ref={root}
      id="que-hacemos"
      aria-labelledby="que-hacemos-title"
      data-mode="list"
      className="servicios mx-auto max-w-[90rem] px-5 md:px-10"
    >
      <div className="servicios-head">
        <h2 id="que-hacemos-title" className="display text-[3.5rem] leading-[0.9] md:text-[5.5rem]">
          Qué <em>hacemos</em>
        </h2>
      </div>

      {/* Escenario 3D (solo en modo carrusel). Las planchas repiten lo que dice la lista. */}
      <div className="servicios-stage" aria-hidden="true">
        <div className="servicios-track">
          {doors.map((d) => (
            <Link
              key={d.slug}
              href={`/${d.slug}`}
              tabIndex={-1}
              data-plancha
              className="servicios-plate no-underline"
            >
              <TextPlate
                phrase={d.plate.text}
                emphasis={d.plate.emphasis}
                image={sectionImages[`puerta-${d.slug}`]}
                decorative
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Ficha de la puerta actual: lo que incluye (solo en modo carrusel, en escritorio). */}
      <div className="servicios-meta" aria-hidden="true">
        {door && (
          <dl data-enfoca className="grid grid-cols-[5.5rem_1fr] gap-x-4 gap-y-6 text-sm">
            <dt className="label pt-0.5 text-muted-foreground">Sección</dt>
            <dd>
              {door.numeral} · {door.name}
            </dd>
            <dt className="label pt-0.5 text-muted-foreground">Incluye</dt>
            <dd>
              <ul className="space-y-1">
                {door.groups.map((g) => (
                  <li key={g.title}>{g.title}</li>
                ))}
              </ul>
            </dd>
          </dl>
        )}
      </div>

      <div className="servicios-window">
        <ol ref={list} className="servicios-list">
          {doors.map((d) => (
            <li key={d.slug} data-fila className="servicios-row">
              <Link href={`/${d.slug}`} className="group servicios-link no-underline">
                <span className="servicios-kicker label text-muted-foreground">
                  Sección {d.numeral}
                </span>
                <span className="servicios-name caption transition-colors group-hover:text-muted-foreground">
                  {d.name}
                </span>
                <span aria-hidden="true" className="servicios-rule" />
                <span className="servicios-title text-muted-foreground text-sm leading-relaxed">
                  {d.title}
                </span>
                <ArrowUpRight
                  className="servicios-arrow size-6 transition-transform duration-300 ease-[var(--ease-out-expo)] group-hover:translate-x-1 group-hover:-translate-y-1"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ol>
      </div>

      <p className="servicios-count" aria-hidden="true">
        <span className="label hidden text-muted-foreground sm:inline">Servicio</span>
        <span data-enfoca className="numeral text-[4.5rem] leading-none md:text-[9rem]">
          {pad(current + 1)}
        </span>
        <span className="label text-muted-foreground tabular-nums">/ {pad(doors.length)}</span>
      </p>
    </section>
  );
}
