# engrama

Stack: Next.js 16 (App Router, RSC), React 19, Tailwind v4. Dev: `pnpm --filter engrama dev` (next dev en :3000).

- UI: importa de `@mfdev/ui/components/*`. Si falta un componente, añádelo al paquete compartido (`cd packages/ui && pnpm dlx shadcn@latest add <comp>`), no a la app.
- Marca: sobrescribe tokens en el CSS global de la app; no metas colores sueltos en el JSX.
- Alias: `@/*` → raíz de la app.
- Contexto de diseño: `PRODUCT.md` (qué y para quién) y `DESIGN.md` (sistema visual), gestionados por impeccable.

## Proyecto
Landing de Engrama: dos psicólogas colegiadas que trabajan con fotografía terapéutica (sesiones, talleres y formación), itinerantes por España, en presencial y online.
- Fuente de verdad: `BRIEF.md`. El contexto de producto está en `PRODUCT.md`.
- Ruta del MVP: `/` (una sola página) más `/aviso-legal`, `/privacidad` y `/cookies`.
- Conversión: botón de WhatsApp o llamada, siempre visible en el móvil. Sin backend ni formularios.
- Variables de entorno (ver `.env.example`): `NEXT_PUBLIC_WHATSAPP` (formato E.164 sin +), `NEXT_PUBLIC_PHONE` y `NEXT_PUBLIC_SITE_URL`.
- Psicólogas: Bianca y Laura. Los textos de piezas, bios y contacto de `content/site.ts` son inventados y aprobados (2026-10-14); se pueden reescribir.
- Imágenes, testimonios y números de colegiada: solo reales. Mientras no los haya, usa marcadores `TODO`. No inventes credenciales.
- Estructura inspirada en huyml.co (portada con ficha, piezas numeradas en carril horizontal, índice, contacto por intención, pie con reloj), con la marca de Engrama.
