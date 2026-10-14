"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import { pieces } from "@/content/site";
import { TextPlate } from "../text-plate";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const pad = (n: number) => String(n).padStart(2, "0");
const last = pieces.length - 1;

/**
 * Piezas, a la manera del «Selected work» de huyml.co: la sección se fija y el scroll hace girar
 * un carrusel de planchas en 3D, encajando pieza a pieza; la ficha central entra enfocándose.
 * Sin JS o con reduced-motion queda como un carril horizontal con scroll-snap.
 */
export function Work() {
  const root = useRef<HTMLElement>(null);
  const info = useRef<HTMLDivElement>(null);
  const goTo = useRef<(i: number) => void>(() => {});
  const [current, setCurrent] = useState(0);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        el.dataset.mode = "carousel";
        const items = gsap.utils.toArray<HTMLElement>("[data-pieza]", el);
        const state = { p: 0 };
        let shown = 0;

        const render = () => {
          const w = items[0]?.offsetWidth ?? 0;
          for (const [i, item] of items.entries()) {
            const d = i - state.p;
            const a = Math.abs(d);
            gsap.set(item, {
              x: d * w * 1.12,
              z: -a * w * 0.35,
              rotationY: d * -18,
              // Separadas para que no se pisen: la vecina queda a media tinta y la segunda se desvanece.
              opacity: a <= 1 ? 1 - a * 0.5 : Math.max(0, (2 - a) * 0.5),
              zIndex: 100 - Math.round(a * 10),
            });
            item.inert = a > 0.5;
          }
          const idx = Math.round(state.p);
          if (idx !== shown) {
            shown = idx;
            setCurrent(idx);
            gsap.fromTo(
              info.current,
              { autoAlpha: 0, filter: "blur(6px)", y: 8 },
              { autoAlpha: 1, filter: "blur(0px)", y: 0, duration: 0.6, ease: "power2.out" },
            );
          }
        };

        const tween = gsap.to(state, {
          p: last,
          ease: "none",
          onUpdate: render,
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: () => `+=${last * window.innerHeight * 0.75}`,
            pin: true,
            scrub: 0.8,
            snap: { snapTo: 1 / last, duration: { min: 0.2, max: 0.6 }, ease: "power2.inOut" },
            invalidateOnRefresh: true,
            onRefresh: render,
          },
        });
        render();

        goTo.current = (i) => {
          const st = tween.scrollTrigger;
          if (st)
            window.scrollTo({
              top: st.start + ((st.end - st.start) * i) / last,
              behavior: "smooth",
            });
        };

        return () => {
          el.dataset.mode = "list";
          for (const item of items) item.inert = false;
          gsap.set(items, { clearProps: "all" });
          goTo.current = () => {};
        };
      });

      // Carril horizontal: la pieza actual es la que queda pegada al borde izquierdo.
      mm.add("(prefers-reduced-motion: reduce)", () => {
        const track = el.querySelector<HTMLElement>(".piezas-track");
        if (!track) return;
        const items = Array.from(track.children) as HTMLElement[];
        const left = (i: number) => (items[i]?.offsetLeft ?? 0) - (items[0]?.offsetLeft ?? 0);
        const onScroll = () => {
          const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
          const step = left(1) || 1;
          setCurrent(atEnd ? last : Math.round(track.scrollLeft / step));
        };
        track.addEventListener("scroll", onScroll, { passive: true });
        goTo.current = (i) => track.scrollTo({ left: left(i) });
        return () => {
          track.removeEventListener("scroll", onScroll);
          goTo.current = () => {};
        };
      });
    },
    { scope: root },
  );

  const piece = pieces[current] ?? pieces[0];

  return (
    <section
      ref={root}
      id="piezas"
      aria-labelledby="piezas-title"
      data-mode="list"
      className="piezas mx-auto max-w-[90rem]"
    >
      <div className="piezas-head grid gap-6 px-5 md:grid-cols-12 md:items-end md:gap-8 md:px-10">
        <h2
          id="piezas-title"
          className="display text-[3.5rem] leading-[0.9] md:col-span-7 md:text-[5.5rem]"
        >
          Piezas <em>para mirarte</em>
        </h2>
        <p className="piezas-intro max-w-[36ch] text-muted-foreground text-sm leading-relaxed md:col-span-4 md:col-start-9">
          Algunas de las propuestas con las que trabajamos en sesiones, talleres y formación. Cada
          una empieza con una frase.
        </p>
      </div>

      <div className="piezas-stage">
        <ul aria-label="Piezas" className="piezas-track">
          {pieces.map((p, i) => (
            <li key={p.id} data-pieza className="piezas-item">
              <article aria-labelledby={`${p.id}-title`}>
                <TextPlate phrase={p.phrase} emphasis={p.emphasis} />
                <div className="piezas-caption">
                  <div className="mt-5 flex items-baseline justify-between gap-4">
                    <h3 id={`${p.id}-title`} className="label text-muted-foreground">
                      {p.category}
                    </h3>
                    <span className="label text-muted-foreground tabular-nums">{pad(i + 1)}</span>
                  </div>
                  <p className="mt-3 max-w-[36ch] text-sm leading-relaxed">{p.body}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>

      {/* Ficha central (solo en modo carrusel): categoría, filete corto y descripción. */}
      <div ref={info} className="piezas-info" aria-live="polite">
        <p className="label text-muted-foreground">{piece?.category}</p>
        <span aria-hidden="true" className="mx-auto my-3 block h-px w-3 bg-foreground" />
        <p className="mx-auto max-w-[34ch] text-sm leading-relaxed">{piece?.body}</p>
      </div>

      <div className="piezas-bar flex items-end justify-between px-5 md:px-10">
        <p className="flex items-baseline gap-3">
          <span className="label hidden text-muted-foreground sm:inline">Pieza</span>
          <span className="display text-[2.5rem] tabular-nums leading-none md:text-[3.25rem]">
            {pad(current + 1)}
          </span>
          <span className="label text-muted-foreground tabular-nums">/ {pad(pieces.length)}</span>
        </p>
        <p className="label hidden text-muted-foreground md:block">Desliza para girar</p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => goTo.current(current - 1)}
            disabled={current === 0}
            className="pill pill-line px-4 disabled:opacity-40"
            aria-label="Pieza anterior"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => goTo.current(current + 1)}
            disabled={current === last}
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
