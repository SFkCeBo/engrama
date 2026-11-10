---
name: ship-check
description: Verificación final antes de dar por terminado un cambio en Engrama. Ejecuta formato, lint, tipos, build y una auditoría de diseño con impeccable si hubo cambios de UI.
---

1. `pnpm biome check --write <rutas cambiadas>`. Corrige a mano lo que no se arregle solo.
2. `pnpm typecheck` y `pnpm build` (en Windows, desde PowerShell). Si falla, corrige y repite.
3. Si cambió la UI, ejecuta `/impeccable audit` sobre las pantallas tocadas y aplica los problemas críticos y altos. Si el usuario lo pide, ejecuta también `/impeccable polish`.
4. Informa en 3 a 5 líneas: qué se verificó, qué falló y cómo se resolvió, y qué queda pendiente. No pegues logs completos.
