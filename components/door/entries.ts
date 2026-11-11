import { imageKey, offerImages } from "@/content/offer-images";
import type { OfferGroup, OfferItem } from "@/content/site";
import { slugify } from "@/content/site";

/** Una pieza de lo que ofrecemos, sea cual sea su forma en el contenido (lista, ítem u oferta). */
export type Entry = {
  title: string;
  body?: string;
  sub?: OfferItem[];
  image?: { src: string; alt: string };
};

const clean = (title: string) => title.replace(/[,:]$/, "");
const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

/** La foto de la pieza, si la hay, en public/img/oferta/. */
function imageFor(title: string): Entry["image"] {
  const key = imageKey(slugify(title));
  const image = offerImages[key];
  return image && { src: `/img/oferta/${key}.webp`, alt: image.alt };
}

function entry(title: string, rest: Omit<Entry, "title" | "image"> = {}): Entry {
  return { title, ...rest, image: imageFor(title) };
}

/** Aplana un grupo en piezas iguales para que la vista solo tenga que decidir cómo pintarlas. */
export function entriesOf(group: OfferGroup): Entry[] {
  if (group.list) return group.list.map((text) => entry(text));
  if (group.items)
    return group.items.map((item) =>
      entry(clean(item.title), { body: item.body ? capitalize(item.body) : undefined }),
    );
  if (group.offers)
    return group.offers.map((offer) =>
      entry(offer.title, {
        body: offer.body,
        sub: offer.items?.map((item) => ({ title: clean(item.title), body: item.body })),
      }),
    );
  return [];
}

export const pad = (n: number) => String(n + 1).padStart(2, "0");
