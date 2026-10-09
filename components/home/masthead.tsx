import Link from "next/link";
import { whatsappHref } from "@/lib/contact";

const links = [
  { href: "#que-es", label: "Qué es" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotras", label: "Nosotras" },
  { href: "#donde", label: "Dónde" },
];

export function Masthead() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 mx-auto flex max-w-[90rem] items-center justify-between px-5 py-5 md:px-10">
      <Link
        href="/"
        className="flex items-baseline gap-3 no-underline"
        aria-label="Engrama, inicio"
      >
        <span className="display text-2xl italic">engrama</span>
        <span className="label hidden text-muted-foreground sm:inline">
          Vol. I · Fotografía terapéutica
        </span>
      </Link>
      <nav aria-label="Secciones" className="hidden gap-8 text-sm md:flex">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="no-underline hover:underline">
            {l.label}
          </a>
        ))}
      </nav>
      <a href={whatsappHref()} className="label no-underline hover:underline md:hidden">
        Escríbenos
      </a>
      <a href={whatsappHref()} className="pill pill-line hidden min-h-10 text-sm md:inline-flex">
        Escríbenos
      </a>
    </header>
  );
}
