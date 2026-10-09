import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { services } from "@/content/site";
import { whatsappHref } from "@/lib/contact";

// Desfase vertical de cada foto, como en un pliego de revista.
const offsets = ["md:mt-0", "md:mt-40", "md:mt-16"];

export function Services() {
  return (
    <section
      id="servicios"
      aria-labelledby="servicios-title"
      className="mx-auto max-w-[90rem] px-5 pb-24 md:px-10 md:pb-36"
    >
      <div className="grid gap-14 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-3">
          <h2 id="servicios-title" className="display text-[3.5rem] leading-[0.9] md:text-[5.5rem]">
            Tres maneras <em>de mirarte</em>
          </h2>
          <p className="mt-6 max-w-[32ch] text-muted-foreground text-sm leading-relaxed">
            Presencial donde estés o por videollamada. Escríbenos y te contamos fechas, formatos y
            precios.
          </p>
        </div>
        <ul className="grid gap-16 md:col-span-9 md:grid-cols-3 md:gap-8">
          {services.map((s, i) => (
            <li key={s.id} className={offsets[i]}>
              <article aria-labelledby={`${s.id}-title`}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-[3px] bg-night">
                  <Image
                    src={s.image.src}
                    alt={s.image.alt}
                    fill
                    sizes="(min-width: 768px) 24vw, 90vw"
                    className="object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] hover:scale-[1.03]"
                  />
                </div>
                <h3 id={`${s.id}-title`} className="caption mt-5 text-[1.75rem]">
                  {s.title}
                </h3>
                <p className="display mt-2 text-xl italic">{s.lead}</p>
                <p className="mt-3 max-w-[38ch] text-muted-foreground text-sm leading-relaxed">
                  {s.body}
                </p>
                <a
                  href={whatsappHref(s.message)}
                  className="label mt-5 inline-flex items-center gap-1.5 underline decoration-1 underline-offset-4 hover:decoration-2"
                >
                  Preguntar por WhatsApp
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </a>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
