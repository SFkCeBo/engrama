import { cn } from "@/lib/utils";
import { Emphasis, TextPlate } from "./text-plate";

const clean = (title: string) => title.replace(/[,:]$/, "");
const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

type PlateItem = { title: string; body?: string; emphasis?: string };

/**
 * Serie de planchas desfasadas en vertical, como un pliego de fotos: el título va en la plancha y
 * el cuerpo como pie de foto. En móvil, carril horizontal con scroll-snap.
 */
export function PlateSeries({ items, label }: { items: PlateItem[]; label: string }) {
  return (
    // biome-ignore lint/a11y/noNoninteractiveTabindex: el carril se desplaza en horizontal y debe poder recorrerse con el teclado
    <ul aria-label={label} tabIndex={0} className="plate-series">
      {items.map((item) => (
        <li key={item.title}>
          <TextPlate phrase={clean(item.title)} emphasis={item.emphasis} />
          {item.body && (
            <p className="mt-4 max-w-[32ch] text-muted-foreground text-sm leading-relaxed">
              {capitalize(item.body)}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}

/** Cita a todo el ancho entre filetes: la frase que la página quiere que recuerdes. */
export function PullQuote({
  text,
  emphasis,
  className,
}: {
  text: string;
  emphasis?: string;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "display max-w-[22ch] border-border border-y py-10 text-[2.25rem] leading-[1.02] md:py-14 md:text-[clamp(3rem,4.5vw,4.25rem)]",
        className,
      )}
    >
      <Emphasis text={text} emphasis={emphasis} />
    </p>
  );
}
