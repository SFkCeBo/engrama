import { cn } from "@mfdev/utils";

type Props = { phrase: string; emphasis?: string; className?: string };

/** Plancha 4:5 en noche con una frase en serif: ocupa el sitio de una foto. */
export function TextPlate({ phrase, emphasis, className }: Props) {
  const at = emphasis ? phrase.indexOf(emphasis) : -1;
  return (
    <div
      className={cn(
        "group @container flex aspect-[4/5] items-end overflow-hidden rounded-[3px] bg-night p-[8%] text-night-foreground",
        className,
      )}
    >
      <p className="display text-[clamp(1.125rem,12cqi,2.5rem)] leading-[1] transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.03]">
        {at < 0 || !emphasis ? (
          phrase
        ) : (
          <>
            {phrase.slice(0, at)}
            <em>{emphasis}</em>
            {phrase.slice(at + emphasis.length)}
          </>
        )}
      </p>
    </div>
  );
}
