import { Plus } from "lucide-react";
import type { OfferGroup, OfferItem } from "@/content/site";
import { slugify } from "@/content/site";

const pad = (n: number) => String(n + 1).padStart(2, "0");

/** Filas de definición en dos columnas: título en serif cursiva y su explicación debajo. */
function ItemGrid({ items }: { items: OfferItem[] }) {
  return (
    <ul className="grid gap-x-10 md:grid-cols-2">
      {items.map((item) => (
        <li key={item.title} className="border-border border-t py-5">
          <p className="display text-[1.5rem] italic leading-[1.15]">
            {item.title.replace(/[,:]$/, "")}
          </p>
          {item.body && (
            <p className="mt-1 max-w-[44ch] text-muted-foreground text-sm leading-relaxed">
              {item.body.charAt(0).toUpperCase() + item.body.slice(1)}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}

/** Lo que va dentro de cada grupo, siempre alineado a la misma columna. */
function Panel({ group }: { group: OfferGroup }) {
  const essay = !group.list && !group.items && !group.offers;

  return (
    <div className="space-y-8 pb-14 md:pb-20">
      {group.intro &&
        (essay ? (
          <div className="md:columns-2 md:gap-10">
            {group.intro.map((paragraph, i) => (
              <p
                key={paragraph}
                className={`mb-4 break-inside-avoid leading-relaxed ${i === 0 ? "dropcap" : "text-muted-foreground"}`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        ) : (
          <div className="max-w-[60ch] space-y-3 text-muted-foreground leading-relaxed">
            {group.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        ))}

      {group.list && (
        <ul className="grid gap-x-10 md:grid-cols-2">
          {group.list.map((text) => (
            <li
              key={text}
              className="display border-border border-t py-5 text-[1.375rem] leading-[1.2] md:text-[1.5rem]"
            >
              {text}
            </li>
          ))}
        </ul>
      )}

      {group.items && <ItemGrid items={group.items} />}

      {group.offers && (
        <div className="grid gap-x-10 gap-y-10 md:grid-cols-2">
          {group.offers.map((offer) => (
            <article key={offer.title} className="border-border border-t pt-5">
              <h3 className="caption text-[1.75rem]">{offer.title}</h3>
              {offer.body && (
                <p className="mt-3 max-w-[46ch] text-muted-foreground leading-relaxed">
                  {offer.body}
                </p>
              )}
              {offer.items && (
                <ul className="mt-4 space-y-3">
                  {offer.items.map((item) => (
                    <li key={item.title}>
                      <span className="display text-[1.375rem] italic">
                        {item.title.replace(/:$/, "")}
                      </span>
                      {item.body && (
                        <span className="block text-muted-foreground text-sm">{item.body}</span>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      )}

      {group.note && (
        <p className="display max-w-[30ch] border-border border-t pt-6 text-[1.75rem] leading-[1.1] md:text-[2.25rem]">
          {group.note}
        </p>
      )}
    </div>
  );
}

const row =
  "grid grid-cols-[2.5rem_1fr_auto] items-center gap-x-4 py-7 md:grid-cols-12 md:gap-x-8 md:py-10";
const num = "display text-[1.25rem] text-muted-foreground italic tabular-nums md:col-span-1";
const title = "display text-[2rem] leading-[1] md:col-span-10 md:text-[clamp(2.75rem,4.5vw,4rem)]";

function Body({ group }: { group: OfferGroup }) {
  return (
    <div className="md:grid md:grid-cols-12 md:gap-x-8">
      <div className="md:col-span-10 md:col-start-2">
        <Panel group={group} />
      </div>
    </div>
  );
}

/**
 * Índice desplegable de la puerta: cada grupo es una fila numerada con filete que se abre al
 * pulsarla. `<details>` nativo: funciona sin JS y la búsqueda del navegador abre la fila que toca.
 */
export function DoorIndex({ groups }: { groups: OfferGroup[] }) {
  // Con un solo grupo no hay nada que elegir: se muestra abierto, sin pliegue.
  const [only] = groups;
  if (only && groups.length === 1) {
    const group = only;
    return (
      <section aria-labelledby="grupo-title" className="border-border border-y">
        <div className={row}>
          <span className={num}>01</span>
          <h2 id="grupo-title" className={title}>
            {group.title}
          </h2>
        </div>
        <Body group={group} />
      </section>
    );
  }

  return (
    <div className="door-index border-border border-b">
      {groups.map((group, i) => (
        <details
          key={group.title}
          id={slugify(group.title)}
          open={i === 0}
          className="border-border border-t"
        >
          <summary className={`group cursor-pointer ${row}`}>
            <span className={num}>{pad(i)}</span>
            <h2
              className={`${title} transition-colors duration-300 group-hover:text-muted-foreground`}
            >
              {group.title}
            </h2>
            <Plus
              className="door-index-icon size-6 md:col-span-1 md:size-8 md:justify-self-end"
              aria-hidden="true"
              strokeWidth={1.25}
            />
          </summary>
          <Body group={group} />
        </details>
      ))}
    </div>
  );
}
