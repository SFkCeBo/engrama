import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { type Door, nextDoor } from "@/content/site";

/** Pasar página: enlace a la sección siguiente del número; tras la última, vuelta a la portada. */
export function NextSection({ door }: { door: Door }) {
  const next = nextDoor(door.slug);

  return (
    <Link
      href={next ? `/${next.slug}` : "/"}
      className="group mx-auto block max-w-[90rem] px-5 py-16 no-underline md:px-10 md:py-24"
    >
      <span className="label text-muted-foreground">
        {next ? "Sección siguiente" : "Fin del número"}
      </span>
      <span className="mt-6 flex items-end justify-between gap-6 border-border border-b pb-6">
        <span className="flex items-baseline gap-5 md:gap-10">
          {next && (
            <span
              aria-hidden="true"
              className="numeral text-[3.5rem] text-muted-foreground md:text-[7rem]"
            >
              {next.numeral}
            </span>
          )}
          <span className="caption text-[3rem] transition-colors duration-300 group-hover:text-muted-foreground md:text-[clamp(4.5rem,9vw,8rem)]">
            {next ? next.name : "Volver a la portada"}
          </span>
        </span>
        <ArrowRight
          className="mb-2 size-8 shrink-0 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-2 md:size-12"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
