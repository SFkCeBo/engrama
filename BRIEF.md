# Brief: engrama

<!--
Rellena lo que sepas; lo que dejes en blanco usa el "Por defecto".
Escribe en frases cortas o listas. Borra las preguntas guía si quieres.
Cuando acabes, ejecuta en Claude Code:  /nuevo-proyecto engrama
-->

## 0. Arranque
- **Una frase:** Web de dos psicólogas que trabajan con fotografía emocional; la propia web debe transmitir emociones a través de la fotografía.
- **Servicios:** sesiones fotográficas con acompañamiento psicológico para expresar o reconocer emociones; talleres grupales; formación sobre fotografía y emociones.
- **Fase de arranque:** hasta-diseño <!-- solo-setup | hasta-diseño | mvp-completo -->
- **Fecha límite / ritmo:**

## 1. Objetivo y métricas de éxito
<!-- ¿Qué problema resuelve? ¿Qué acción principal debe hacer el usuario? ¿Cómo sabrás que funciona? -->
El objetivo es poder transmitir a futuros clientes la idea revolucionaria centrada en la fotografia emocional
- **Conversión principal:** contactar por WhatsApp o llamada (botón directo, sin formulario ni backend).

## 2. Audiencia
<!-- Perfiles, nivel técnico, contexto de uso, dispositivo principal, edad, país. -->
El perfil es publico de 15 a 45 años, españoles de momento, el dispositivo principal sera el movil

## 3. Tipo de producto
<!-- landing | web corporativa | blog/contenido | SaaS/dashboard | e-commerce | herramienta interna | PWA | otro -->
> Por defecto: se deduce de las secciones 4 y 5. Plantilla **next**; **vite-react** solo si es una SPA tras login con backend externo y sin SEO.
landing

## 4. Mapa de páginas / pantallas
<!-- Lista de rutas con una línea por página: qué muestra y su objetivo. -->
 Claude propone un mapa mínimo según el tipo de producto y lo valida contigo.


## 5. Funcionalidades
**MVP (imprescindible):**
-

**Después (futuro):**
-
> Por defecto: solo lo necesario para la conversión principal de la sección 1.

## 6. Contenido
<!-- ¿Quién escribe y actualiza el contenido? ¿Existe ya? ¿Imágenes propias, stock o generadas? Blog/noticias? -->
> Por defecto: contenido en el código (MDX o archivos TS); textos provisionales realistas, nunca lorem ipsum; imágenes provisionales marcadas como TODO.

## 7. Datos y backend
<!-- ¿Hay datos que persistir? Entidades principales y relaciones. ¿Base de datos existente? -->
> Por defecto: sin backend si no hace falta. Si hace falta: Supabase (Postgres + storage), validación con zod, Server Actions en Next.

## 8. Autenticación y roles
<!-- ¿Quién inicia sesión? ¿Roles (admin, editor, cliente)? ¿Login social, magic link? -->
> Por defecto: sin login. Si hace falta: Supabase Auth con email + magic link; rol admin para gestión.

## 9. Integraciones
<!-- Pagos, email transaccional, formularios, mapas, calendario, CRM, IA, newsletter... -->
> Por defecto: ninguna. Si se piden: Stripe (pagos), Resend (email), Claude API (IA).

## 10. Diseño
- **Personalidad en 3 palabras:** íntima, cálida, serena (editorial y pausada, mucho aire, la foto como protagonista)
- **Referencias (URLs) y qué te gusta de cada una:** `ideas/web1.PNG` y `ideas/web1Secciones.png`: revista de arte editorial con fondo melocotón, serif fino con cursivas, foto macro gigante tras el titular y fotos sobre fondo oscuro con pie en mayúsculas.
- **Dirección elegida (2026-10-09):** «La amapola»: revista de arte, número 1, unida a la idea de engrama (la huella de un recuerdo). Boceto en `.impeccable/decision/r3/a.html`.
- **Anti-referencias (lo que NO quieres):**
- **Marca existente (logo, colores, fuentes):** ninguna todavía; identidad propuesta desde cero. Sin fotos propias: imágenes provisionales marcadas como TODO.
- **Modo oscuro:** <!-- sí | no | solo oscuro -->
- **Densidad / animación:** <!-- aireado-editorial | equilibrado | denso-datos ; animación sutil | expresiva -->
> Por defecto: lo decide `/impeccable shape` a partir del resto del brief; modo claro + oscuro; densidad equilibrada; animación sutil y respetando reduced-motion.

## 11. Copy y tono de voz
<!-- ¿Tú, usted, vosotros? ¿Cercano, técnico, institucional? Palabras prohibidas. -->
> Por defecto: español de España, tuteo, tono cercano y directo, frases cortas.

## 12. SEO y compartir
<!-- Palabras clave, competencia, negocio local (Google Business), redes sociales. -->
> Por defecto: metadatos por página, Open Graph con imagen, sitemap.xml, robots.txt y datos estructurados básicos (Organization/WebSite). No aplica a apps tras login.

## 13. Accesibilidad y rendimiento
> Por defecto: WCAG 2.2 AA (contraste, teclado, foco visible, alt en imágenes); Core Web Vitals en verde; imágenes optimizadas; sin JS innecesario en cliente.

## 14. Idiomas (i18n)
<!-- Idiomas, idioma por defecto, ¿URLs por idioma (/es, /ca, /en)? -->
> Por defecto: solo español, sin prefijo en la URL.

## 15. Legal
<!-- ¿Recoges datos personales? ¿Cookies de terceros? ¿Datos de la empresa para el aviso legal? -->
> Por defecto: aviso legal, privacidad y cookies (RGPD/LSSI) si hay formularios o analítica; analítica sin cookies (p. ej. Vercel Analytics/Plausible) para evitar banner.

## 16. Hosting, dominio y entornos
<!-- ¿Dominio? ¿Hosting preferido? ¿Entorno de staging? -->
> Por defecto: Vercel (next) o Netlify (vite-react) en plan gratuito; preview por rama; dominio más adelante.

## 17. Calidad y tests
> Por defecto: Vitest para lógica y validaciones; Playwright solo para el flujo de conversión principal; `ship-check` antes de cada entrega.

## 18. Fuera de alcance
<!-- Lo que explícitamente NO se hará en esta versión. -->
> Por defecto: todo lo que no esté en el MVP de la sección 5.

## 19. Criterios de aceptación
<!-- Checklist de "terminado". Ejemplo: "un visitante puede enviar el formulario desde el móvil y recibo un email". -->
- [x] `pnpm check` en verde (2026-10-09)
- [x] `/impeccable audit` y revisión final sin problemas críticos; detector solo con avisos de tamaños de letra
- [ ] Teléfono y WhatsApp reales en `.env.local` y en el hosting
- [ ] Fotos propias (sustituir las de `public/img`, ver `CREDITOS.md`)
- [ ] Nombres y números de colegiada en `content/site.ts`; datos del titular en las páginas legales
- [ ] Testimonios reales con permiso en `content/site.ts`
- [ ] Publicada en producción
> Por defecto: MVP funcionando en producción, `pnpm check` en verde y `/impeccable audit` sin problemas críticos.

## 20. Notas y preguntas abiertas
-
