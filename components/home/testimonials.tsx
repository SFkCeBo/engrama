import { testimonials } from "@/content/site";

/** Solo se muestra con testimonios reales (content/site.ts). */
export function Testimonials() {
  if (testimonials.length === 0) return null;
  return (
    <section
      aria-labelledby="voces-title"
      className="screen reveal mx-auto max-w-[90rem] px-5 py-32 md:px-10 md:py-48"
    >
      <h2 id="voces-title" className="display text-[3rem] leading-[0.95] md:text-[4.5rem]">
        Lo que <em>vieron</em>
      </h2>
      <ul className="mt-14 grid gap-12 md:grid-cols-2 md:gap-x-16">
        {testimonials.map((t) => (
          <li key={t.author}>
            <figure>
              <blockquote className="display text-[1.75rem] leading-[1.15]">«{t.quote}»</blockquote>
              <figcaption className="label mt-5 text-muted-foreground">
                {t.author}
                {t.context && ` · ${t.context}`}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
