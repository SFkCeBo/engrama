import Image from "next/image";
import { type SectionImage, sectionImages } from "@/content/section-images";
import { method } from "@/content/site";

const photos = sectionImages as Record<string, SectionImage | undefined>;

/**
 * «Cómo trabajamos»: titular con la entradilla y el compromiso con el consentimiento; debajo, los
 * cinco pasos en columnas con su foto, como fichas de un índice. En el móvil, una parada por paso.
 */
export function Method() {
  return (
    <section
      id="como-trabajamos"
      aria-labelledby="como-trabajamos-title"
      className="screen reveal mx-auto w-full max-w-[90rem] px-5 py-24 max-md:snap-align-none md:px-10 md:py-12"
    >
      <div className="grid scroll-mt-20 gap-6 max-md:snap-start md:grid-cols-12 md:items-end md:gap-8">
        <h2
          id="como-trabajamos-title"
          className="display text-[3.5rem] leading-[0.9] md:col-span-6 md:text-[clamp(3.5rem,min(5.5vw,9svh),5.5rem)]"
        >
          Cómo <em>trabajamos</em>
        </h2>
        <div className="max-w-[60ch] space-y-3 text-sm leading-relaxed md:col-span-6">
          <p className="text-muted-foreground">{method.intro}</p>
          <p>{method.care}</p>
        </div>
      </div>

      <ol className="mt-12 grid gap-14 md:mt-10 md:grid-cols-3 md:gap-6 lg:grid-cols-5">
        {method.steps.map((step, i) => {
          const photo = photos[step.image];
          return (
            <li
              key={step.title}
              className="scroll-mt-6 border-border border-t pt-5 max-md:snap-start"
            >
              {photo && (
                <div className="group aspect-[3/2] overflow-hidden rounded-[3px] bg-night md:aspect-auto md:h-[min(15svh,11rem)]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={900}
                    height={1125}
                    sizes="(min-width: 1024px) 18vw, (min-width: 768px) 30vw, 100vw"
                    className="size-full object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.03]"
                  />
                </div>
              )}
              <p className="label mt-4 text-muted-foreground tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="caption mt-1.5 text-[2rem] md:text-[clamp(1.25rem,1.6vw,1.5rem)]">
                {step.title}
              </h3>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed md:text-[0.8125rem] md:leading-normal">
                {step.body}
              </p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
