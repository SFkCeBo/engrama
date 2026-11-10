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

type Props = { phrase: string; emphasis?: string; className?: string };

/** Plancha 4:5 en noche con una frase en serif: ocupa el sitio de una foto. */
export function TextPlate({ phrase, emphasis, className }: Props) {
  return (
    <div
      className={cn(
        "group @container flex aspect-[4/5] items-end overflow-hidden rounded-[3px] bg-night p-[8%] text-night-foreground",
        className,
      )}
    >
      <p className="display text-[clamp(1.125rem,12cqi,2.5rem)] leading-[1] transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.03]">
        <Emphasis text={phrase} emphasis={emphasis} />
      </p>
    </div>
  );
}
