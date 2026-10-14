import { ArrowUpRight } from "lucide-react";
import { services } from "@/content/site";
import { whatsappHref } from "@/lib/contact";

/** Índice de formatos: una ficha por fila, como el índice de una revista. */
export function IndexList() {
  return (
    <section
      id="servicios"
      aria-labelledby="servicios-title"
      className="screen reveal mx-auto max-w-[90rem] px-5 py-32 md:px-10 md:py-40"
    >
      <h2 id="servicios-title" className="display text-[3.5rem] leading-[0.9] md:text-[5.5rem]">
        Tres maneras <em>de empezar</em>
      </h2>
      <p className="mt-6 max-w-[44ch] text-muted-foreground text-sm leading-relaxed">
        Presencial donde estés o por videollamada. Escríbenos y te contamos fechas y precios.
      </p>

      <ol className="mt-16 md:mt-24">
        {services.map((s, i) => (
          <li
            key={s.id}
            className="grid gap-5 border-border border-t py-8 last:border-b md:grid-cols-12 md:gap-8 md:py-10"
          >
            <span className="label text-muted-foreground tabular-nums md:col-span-1 md:pt-2">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="md:col-span-5">
              <h3 className="caption text-[2.25rem] md:text-[3rem]">{s.title}</h3>
              <p className="display mt-2 text-xl italic">{s.lead}</p>
            </div>
            <dl className="grid grid-cols-3 gap-4 text-sm md:col-span-3 md:grid-cols-1 md:gap-3 md:pt-2">
              {[
                ["Modalidad", s.mode],
                ["Duración", s.duration],
                ["Quién", s.with],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="label text-muted-foreground">{k}</dt>
                  <dd className="mt-1">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="md:col-span-3 md:pt-2">
              <p className="max-w-[38ch] text-muted-foreground text-sm leading-relaxed">{s.body}</p>
              <a
                href={whatsappHref(s.message)}
                className="label mt-5 inline-flex items-center gap-1.5 underline decoration-1 underline-offset-4 hover:decoration-2"
              >
                Preguntar por WhatsApp
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </a>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
