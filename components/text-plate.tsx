import Image from "next/image";
import type { SectionImage } from "@/content/section-images";
import { cn } from "@/lib/utils";

/** Pone en cursiva la palabra que carga la emoción (regla Cursiva Que Señala). */
export function Emphasis({ text, emphasis }: { text: string; emphasis?: string }) {
  const at = emphasis ? text.indexOf(emphasis) : -1;
  if (!emphasis || at < 0) return text;
  return (
    <>
      {text.slice(0, at)}
      <em>{emphasis}</em>
      {text.slice(at + emphasis.length)}
    </>
  );
}

type Props = {
  phrase: string;
  emphasis?: string;
  /** Foto de fondo. Sin ella, la plancha queda en noche y ocupa el sitio de una foto. */
  image?: SectionImage;
  /** La plancha repite algo que ya está en la página: la foto no se anuncia dos veces. */
  decorative?: boolean;
  className?: string;
};

/** Plancha 4:5 con una frase en serif, sobre una foto velada en noche o sobre la noche sola. */
export function TextPlate({ phrase, emphasis, image, decorative, className }: Props) {
  return (
    <div
      className={cn(
        "group @container relative isolate flex aspect-[4/5] items-end overflow-hidden rounded-[3px] bg-night p-[8%] text-night-foreground",
        className,
      )}
    >
      {image && (
        <>
          <Image
            src={image.src}
            alt={decorative ? "" : image.alt}
            fill
            sizes="(min-width: 768px) 33vw, 72vw"
            className="-z-20 object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.03]"
          />
          {/* Velo de noche parejo (no un degradado): la frase se lee igual sobre cualquier foto. */}
          <span aria-hidden="true" className="absolute inset-0 -z-10 bg-night/55" />
        </>
      )}
      <p className="display text-[clamp(1.125rem,12cqi,2.5rem)] leading-[1] transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.03]">
        <Emphasis text={phrase} emphasis={emphasis} />
      </p>
    </div>
  );
}
