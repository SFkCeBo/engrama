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

// Nunca publicar un número inventado: en el despliegue de producción, el contacto es obligatorio.
const isProductionDeploy =
  process.env.VERCEL_ENV === "production" || process.env.CONTEXT === "production";
if (isProductionDeploy && (!env.NEXT_PUBLIC_WHATSAPP || !env.NEXT_PUBLIC_PHONE)) {
  throw new Error("Faltan NEXT_PUBLIC_WHATSAPP y NEXT_PUBLIC_PHONE para publicar Engrama.");
}

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
