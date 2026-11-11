import Image from "next/image";
import { sectionImages } from "@/content/section-images";

export function Where() {
  return (
    <section
      id="donde"
      aria-labelledby="donde-title"
      className="screen reveal mx-auto grid max-w-[90rem] content-center gap-8 px-5 pt-12 pb-28 md:grid-cols-12 md:gap-10 md:px-10 md:py-16"
    >
      <h2
        id="donde-title"
        className="display text-[clamp(2.5rem,7svh,3.25rem)] leading-[0.95] md:col-span-8 md:text-[6rem]"
      >
        Por toda España. <em>Y también online.</em>
      </h2>
      <p className="max-w-[40ch] self-end text-muted-foreground leading-relaxed md:col-span-4">
        Vamos a tu ciudad para sesiones y talleres presenciales. Si lo prefieres, nos vemos por
        videollamada desde donde estés.
      </p>
      <div className="-mx-5 h-[min(32svh,70vw)] overflow-hidden bg-night md:col-span-12 md:mx-0 md:h-[min(46svh,40rem)] md:rounded-[3px]">
        <Image
          src={sectionImages.donde.src}
          alt={sectionImages.donde.alt}
          width={1800}
          height={1000}
          sizes="(min-width: 1440px) 1360px, 100vw"
          className="size-full object-cover"
        />
      </div>
    </section>
  );
}
