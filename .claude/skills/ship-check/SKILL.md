---
name: ship-check
description: Verificación final antes de dar por terminado un cambio en Engrama. Ejecuta formato, lint, tipos, build y una revisión de código con ECC.
---

1. `pnpm biome check --write <rutas cambiadas>`. Corrige a mano lo que no se arregle solo.
2. `pnpm typecheck` y `pnpm build` (en Windows, desde PowerShell). Si falla, corrige y repite.
3. Ejecuta `/ecc:code-review` sobre el cambio y corrige los problemas CRITICAL y HIGH. Si cambió la UI, revísala también contra `DESIGN.md` y las reglas de `.claude/rules/ecc/web/` (accesibilidad, contraste, responsive en 390 px).
4. Informa en 3 a 5 líneas: qué se verificó, qué falló y cómo se resolvió, y qué queda pendiente. No pegues logs completos.
