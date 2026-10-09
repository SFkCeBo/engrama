import Link from "next/link";
import type { ReactNode } from "react";
import { Footer } from "./home/footer";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <header className="mx-auto max-w-[90rem] px-5 py-5 md:px-10">
        <Link href="/" className="display text-2xl italic no-underline">
          engrama
        </Link>
      </header>
      <main className="mx-auto max-w-[68ch] px-5 py-16 md:py-24">
        <h1 className="display text-[3rem] leading-[0.95] md:text-[4.5rem]">{title}</h1>
        <div className="[&_h2]:display mt-10 space-y-5 leading-relaxed [&_h2]:pt-6 [&_h2]:text-3xl">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}

/** Dato legal pendiente de Engrama: se ve en la página para que no pase desapercibido. */
export function Pending({ children }: { children: ReactNode }) {
  return <mark className="rounded-sm bg-accent/20 px-1 text-inherit">[{children}]</mark>;
}
