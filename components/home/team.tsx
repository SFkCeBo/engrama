import { team } from "@/content/site";

export function Team() {
  return (
    <section
      id="nosotras"
      aria-labelledby="nosotras-title"
      className="overflow-hidden bg-night py-24 text-night-foreground md:py-36"
    >
      <div className="mx-auto max-w-[90rem] px-5 md:px-10">
        <h2
          id="nosotras-title"
          className="display -ml-1 text-[5.5rem] leading-[0.8] tracking-[-0.03em] md:text-[11rem]"
        >
          Noso<em>tras</em>
        </h2>
        <div className="mt-14 grid gap-12 md:grid-cols-12 md:gap-8">
          <p className="display text-[1.75rem] leading-[1.1] md:col-span-6 md:text-[2.5rem]">
            Somos dos psicólogas colegiadas. Unimos la psicología y la fotografía terapéutica en{" "}
            <em>un método propio</em> para acompañarte a ver, y no solo a contar, lo que sientes.
          </p>
          <ul className="grid gap-10 sm:grid-cols-2 md:col-span-5 md:col-start-8">
            {team.map((p, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: lista fija de dos personas, sin nombre todavía
              <li key={i} className="border-night-foreground/25 border-t pt-5">
                {/* TODO: nombre, número de colegiada y una línea de cada psicóloga. */}
                <p className="caption text-2xl">{p.name ?? "Nombre pendiente"}</p>
                <p className="label mt-3 text-night-foreground/70">
                  Psicóloga colegiada · Nº {p.license ?? "pendiente"}
                </p>
                {p.bio && (
                  <p className="mt-3 text-night-foreground/80 text-sm leading-relaxed">{p.bio}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
