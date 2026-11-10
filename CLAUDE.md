# engrama

Stack: Next.js 16 (App Router, RSC), React 19, Tailwind v4, TypeScript 7 strict, Biome, pnpm 12, Node 24. Repo independiente (antes vivía en el monorepo `mfdev`, en `apps/engrama`).

## Instalar en otro ordenador
1. Node 24 y `npm i -g pnpm` (no uses corepack: falla con pnpm 12).
2. `git clone` del repo y `pnpm install`.
3. Copia `.env.example` a `.env.local` y rellena lo que haga falta.
4. `npx impeccable install --providers=claude --scope=project` (el binario de impeccable no se versiona).

## Comandos
- Dev: `pnpm dev` (:3000). Build: `pnpm build` (genera `out/`).
- Verificar: `pnpm check` (Biome, tipos y build). Formatear: `pnpm format`.
- En Windows lanza el build desde PowerShell: desde Git Bash `next build` falla con `0xc0000142`.

## Reglas
- UI: componentes shadcn en `components/ui/` (ya están `button` y `dialog`). Para añadir otro: `pnpm dlx shadcn@latest add <comp>` y revisa que `cn` venga de `@/lib/utils`.
- Tokens base en `app/tokens.css`; la marca los sobrescribe en `app/globals.css`. Sin colores ni tamaños arbitrarios en el JSX.
- Valida con zod los datos externos (env, fetch).
- Diseño: `/impeccable shape` antes de construir y `/impeccable audit` o `polish` al terminar. Antes de dar algo por terminado, ejecuta la skill `ship-check`.
- Marca: sobrescribe tokens en el CSS global de la app; no metas colores sueltos en el JSX.
- Alias: `@/*` → raíz de la app.
- Contexto de diseño: `PRODUCT.md` (qué y para quién) y `DESIGN.md` (sistema visual), gestionados por impeccable.

## Proyecto
Landing de Engrama: dos psicólogas colegiadas que trabajan con fotografía terapéutica (sesiones, talleres y formación), itinerantes por España, en presencial y online.
- Fuente de verdad: `BRIEF.md`. El contexto de producto está en `PRODUCT.md`.
- Ruta del MVP: `/` (una sola página) más `/aviso-legal`, `/privacidad` y `/cookies`.
- Conversión: botón de WhatsApp o llamada, siempre visible en el móvil. Sin backend ni formularios.
- Despliegue: Netlify, proyecto `engrama-904` (https://engrama-904.netlify.app), web estática (`output: "export"`). Publicar: `pnpm dlx --package=netlify-cli netlify deploy --build --prod`.
- Primera versión sin WhatsApp ni teléfono: la sección de contacto muestra «muy pronto» (`contactSoon`). Al tenerlos, añádelos como variables en Netlify y vuelve a publicar.
- Variables de entorno (ver `.env.example`): `NEXT_PUBLIC_WHATSAPP` (formato E.164 sin +), `NEXT_PUBLIC_PHONE` y `NEXT_PUBLIC_SITE_URL`.
- Psicólogas: Bianca y Laura. Los textos de piezas, bios y contacto de `content/site.ts` son inventados y aprobados (2026-10-14); se pueden reescribir.
- Imágenes, testimonios y números de colegiada: solo reales. Mientras no los haya, usa marcadores `TODO`. No inventes credenciales.
- Estructura inspirada en huyml.co (portada con ficha, piezas numeradas en carril horizontal, índice, contacto por intención, pie con reloj), con la marca de Engrama.
