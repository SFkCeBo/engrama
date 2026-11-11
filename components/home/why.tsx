import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { home } from "@/content/site";

/**
 * «¿Por qué Engrama?»: titular y convicción en serif a la izquierda; los párrafos en dos columnas a
 * la derecha, con el paso a la sección de fototerapia. En el móvil, dos paradas.
 */
export function Why() {
  const { why } = home;
  return (
    <section
      id="por-que"
      aria-labelledby="por-que-title"
      className="screen reveal mx-auto grid w-full max-w-[90rem] content-center gap-10 px-5 pt-12 pb-28 max-md:snap-align-none md:grid-cols-12 md:gap-10 md:px-10 md:py-16"
    >
      <div className="scroll-mt-16 max-md:snap-start md:col-span-5">
        <h2
          id="por-que-title"
          className="display text-[clamp(2.75rem,7svh,3.5rem)] leading-[0.9] md:text-[clamp(3.5rem,min(5.5vw,9svh),5.5rem)]"
        >
          ¿Por qué <em>Engrama</em>?
        </h2>
        <p className="display mt-6 text-[clamp(1.375rem,3.6svh,1.75rem)] leading-[1.1] md:mt-10 md:text-[clamp(1.75rem,min(2.6vw,4.5svh),2.5rem)]">
          {/* why.conviction, con la idea que la carga en cursiva. */}
          En Engrama partimos de una convicción: mirar una imagen también es una forma de
          relacionarnos con <em>nuestra propia historia</em>.
        </p>
      </div>

      <div className="scroll-mt-16 max-md:snap-start md:col-span-6 md:col-start-7 md:self-end">
        <div className="text-muted-foreground text-sm leading-relaxed md:columns-2 md:gap-8 md:text-[0.9375rem]">
          {why.paragraphs.map((p) => (
            <p key={p} className="mb-4 break-inside-avoid">
              {p}
            </p>
          ))}
        </div>
        <Link
          href="/fototerapia"
          className="label mt-4 inline-flex items-center gap-1.5 underline decoration-1 underline-offset-4 hover:decoration-2"
        >
          Fototerapia y fotografía terapéutica
          <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
