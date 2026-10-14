import { cn } from "@mfdev/utils";

type Props = { phrase: string; emphasis?: string; className?: string };

/** Plancha 4:5 en noche con una frase en serif: ocupa el sitio de una foto. */
export function TextPlate({ phrase, emphasis, className }: Props) {
  const at = emphasis ? phrase.indexOf(emphasis) : -1;
  return (
    <div
      className={cn(
        "group flex aspect-[4/5] items-end overflow-hidden rounded-[3px] bg-night p-6 text-night-foreground md:p-8",
        className,
      )}
    >
      <p className="display text-[2rem] leading-[1] transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.03] md:text-[2.5rem]">
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
