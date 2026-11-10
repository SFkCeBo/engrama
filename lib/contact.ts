import { z } from "zod";

const schema = z.object({
  NEXT_PUBLIC_WHATSAPP: z
    .string()
    .regex(/^\d{8,15}$/, "E.164 sin +")
    .optional(),
  NEXT_PUBLIC_PHONE: z.string().min(9).optional(),
  NEXT_PUBLIC_SITE_URL: z.url().default("http://localhost:3000"),
});

const env = schema.parse({
  NEXT_PUBLIC_WHATSAPP: process.env.NEXT_PUBLIC_WHATSAPP || undefined,
  NEXT_PUBLIC_PHONE: process.env.NEXT_PUBLIC_PHONE || undefined,
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || undefined,
});

// Primera versión publicada sin contacto (decisión de Engrama, 2026-10-14): mientras falten,
// los botones llevan a #contacto y esa sección dice que el WhatsApp y el teléfono llegan pronto.
export const hasWhatsapp = Boolean(env.NEXT_PUBLIC_WHATSAPP);

export const siteUrl = env.NEXT_PUBLIC_SITE_URL;

/** null mientras Engrama no facilite su número (TODO). */
export const phone = env.NEXT_PUBLIC_PHONE ?? null;
export const phoneHref = phone ? `tel:${phone.replace(/\s/g, "")}` : "#contacto";

export function whatsappHref(
  message = "Hola, me gustaría saber más sobre la fotografía terapéutica.",
) {
  if (!env.NEXT_PUBLIC_WHATSAPP) return "#contacto";
  return `https://wa.me/${env.NEXT_PUBLIC_WHATSAPP}?text=${encodeURIComponent(message)}`;
}

/** Correo de Engrama (briefing v2): lo usan las páginas de servicio. */
export const email = "engramafoto@gmail.com";

export function mailHref(subject?: string) {
  return subject ? `mailto:${email}?subject=${encodeURIComponent(subject)}` : `mailto:${email}`;
}
