"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { type RefObject, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Options = {
  /** Selector de los elementos que se colocan en el escenario 3D. */
  items: string;
  /** Posición de un elemento a distancia `d` (con signo) del actual; `size` es el del primero. */
  place: (d: number, size: { w: number; h: number }) => gsap.TweenVars;
  /** Se llama en cada fotograma con el progreso continuo (0 … n-1). */
  onProgress?: (p: number) => void;
  /** Se llama al cambiar el elemento actual (redondeado). */
  onIndex: (i: number) => void;
  /** Montaje alternativo con reduced-motion; devuelve su limpieza. */
  reduced?: (
    el: HTMLElement,
    setGoTo: (fn: (i: number) => void) => void,
  ) => (() => void) | undefined;
};

/**
 * Escenario fijado con ScrollTrigger: el scroll recorre los elementos uno a uno, con snap.
 * Mientras está activo, la sección lleva `data-mode="carousel"`; sin JS o con reduced-motion,
 * `data-mode="list"`, y el CSS decide cómo se ve cada modo.
 */
export function useScrollStack(root: RefObject<HTMLElement | null>, opts: Options) {
  const goTo = useRef<(i: number) => void>(() => {});
  const latest = useRef(opts);
  latest.current = opts;

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        el.dataset.mode = "carousel";
        const items = gsap.utils.toArray<HTMLElement>(latest.current.items, el);
        const last = items.length - 1;
        if (last < 1) return;
        const state = { p: 0 };
        let shown = -1;

        const render = () => {
          const size = { w: items[0]?.offsetWidth ?? 0, h: items[0]?.offsetHeight ?? 0 };
          for (const [i, item] of items.entries()) {
            const d = i - state.p;
            gsap.set(item, latest.current.place(d, size));
            item.inert = Math.abs(d) > 0.5;
          }
          latest.current.onProgress?.(state.p);
          const idx = Math.round(state.p);
          if (idx !== shown) {
            shown = idx;
            latest.current.onIndex(idx);
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

      mm.add("(prefers-reduced-motion: reduce)", () => {
        const cleanup = latest.current.reduced?.(el, (fn) => {
          goTo.current = fn;
        });
        return () => {
          cleanup?.();
          goTo.current = () => {};
        };
      });
    },
    { scope: root },
  );

  return goTo;
}
