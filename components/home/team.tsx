import Image from "next/image";
import { team } from "@/content/site";

/**
 * «Nosotras», en el pliego nocturno: el titular gigante y, debajo, cada psicóloga con su retrato
 * al lado de su bio. En el móvil, una parada por persona.
 */
export function Team() {
  return (
    <section
      id="nosotras"
      aria-labelledby="nosotras-title"
      className="screen reveal overflow-hidden bg-night pt-20 pb-28 text-night-foreground max-md:snap-align-none md:py-14"
    >
      <div className="mx-auto w-full max-w-[90rem] px-5 md:px-10">
        <h2
          id="nosotras-title"
          className="display -ml-1 scroll-mt-20 text-[5.5rem] leading-[0.8] tracking-[-0.03em] max-md:snap-start md:text-[clamp(6rem,15svh,10rem)]"
        >
          Noso<em>tras</em>
        </h2>
        <ul className="mt-12 grid gap-16 md:mt-10 md:grid-cols-2 md:gap-10">
          {team.map((p) => (
            <li
              key={p.name}
              className="grid scroll-mt-16 gap-5 max-md:snap-start sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] sm:gap-6"
            >
              <div className="aspect-[4/5] w-[min(100%,calc(20svh*0.8))] self-start overflow-hidden rounded-[3px] bg-night sm:w-full md:aspect-auto md:h-[min(46svh,24rem)]">
                <Image
                  src={p.photo.src}
                  alt={p.photo.alt}
                  width={900}
                  height={1125}
                  sizes="(min-width: 768px) 18vw, 80vw"
                  className="size-full object-cover object-top"
                />
              </div>
              <div className="border-night-foreground/25 border-t pt-4">
                <p className="caption text-2xl">{p.name}</p>
                <p className="display mt-1 text-lg italic">{p.role}</p>
                <div className="mt-3 space-y-2 text-night-foreground/80 text-sm leading-relaxed">
                  {p.bio.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {/* TODO: número de colegiada real en content/site.ts; sin él no se muestra. */}
                {p.license && (
                  <p className="label mt-4 text-night-foreground/70">Colegiada · Nº {p.license}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
