"use client";

import gsap from "gsap";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { doors } from "@/content/site";

const doorPaths = new Set(doors.map((d) => `/${d.slug}`));
const clean = (path: string) => path.replace(/(\.html)?\/?$/, "") || "/";

/**
 * Cortina coral entre páginas, a la manera de huyml.co: al entrar en un servicio sube desde abajo
 * y tapa la pantalla, cambia la página y se retira hacia arriba descubriendo la portadilla.
 * Escucha los clics de todo el documento, así que vale para cualquier enlace a una puerta.
 * Con reduced-motion o con teclas modificadoras, la navegación es la normal.
 */
export function Curtain() {
  const router = useRouter();
  const pathname = usePathname();
  const el = useRef<HTMLDivElement>(null);
  const pending = useRef(false);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a || (a.target && a.target !== "_self") || a.hasAttribute("download")) return;
      const url = new URL(a.href, window.location.href);
      const path = clean(url.pathname);
      if (url.origin !== window.location.origin || !doorPaths.has(path)) return;
      if (path === clean(window.location.pathname)) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      // Paramos aquí el clic para que el <Link> no navegue antes de que la cortina tape la página.
      e.preventDefault();
      e.stopPropagation();
      pending.current = true;
      gsap
        .timeline()
        .set(el.current, { yPercent: 100, autoAlpha: 1, pointerEvents: "auto" })
        .to(el.current, {
          yPercent: 0,
          duration: 0.65,
          ease: "power3.inOut",
          onComplete: () => router.push(path + url.hash),
        });
    };
    window.addEventListener("click", onClick, true);
    return () => window.removeEventListener("click", onClick, true);
  }, [router]);

  // La página nueva ya está montada (cambió `pathname`): la cortina sigue su camino hacia arriba.
  // biome-ignore lint/correctness/useExhaustiveDependencies: el efecto debe dispararse al cambiar de ruta.
  useEffect(() => {
    if (!pending.current) return;
    pending.current = false;
    gsap.to(el.current, {
      yPercent: -100,
      duration: 0.8,
      delay: 0.15,
      ease: "power3.inOut",
      onComplete: () => {
        gsap.set(el.current, { autoAlpha: 0, pointerEvents: "none" });
      },
    });
  }, [pathname]);

  return (
    <div
      ref={el}
      aria-hidden="true"
      className="pointer-events-none invisible fixed inset-0 z-[100] bg-accent"
    />
  );
}
