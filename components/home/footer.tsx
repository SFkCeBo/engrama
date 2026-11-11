import Link from "next/link";
import { Clock } from "./clock";

export function Footer() {
  return (
    <footer className="mx-auto grid max-w-[90rem] gap-8 border-border border-t px-5 pt-10 pb-28 text-sm md:h-[var(--footer-h)] md:grid-cols-12 md:content-center md:items-baseline md:gap-8 md:px-10 md:py-0">
      <p className="display text-2xl italic md:col-span-3">engrama</p>
      <div className="md:col-span-3">
        <p className="label text-muted-foreground">Psicología y fotografía</p>
        <p className="mt-1">Por toda España y online</p>
      </div>
      <div className="md:col-span-2">
        <p className="label text-muted-foreground">Madrid</p>
        <p className="mt-1">
          <Clock />
        </p>
      </div>
      <nav
        aria-label="Legal"
        className="flex flex-wrap gap-x-6 gap-y-2 md:col-span-4 md:justify-end"
      >
        <Link href="/aviso-legal">Aviso legal</Link>
        <Link href="/privacidad">Privacidad</Link>
        <Link href="/cookies">Cookies</Link>
        <span className="text-muted-foreground">Fotografía de portada provisional</span>
      </nav>
    </footer>
  );
}
