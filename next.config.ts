import type { NextConfig } from "next";

const config: NextConfig = {
  // Todas las rutas son estáticas: se exporta a `out/` y se sirve como web estática (Netlify).
  output: "export",
  // Sin servidor no hay optimizador de imágenes; la única foto ya es WebP ligera.
  images: { unoptimized: true },
  transpilePackages: ["@mfdev/ui", "@mfdev/utils"],
  // El typecheck lo hace turbo con tsc por separado: así el build es más rápido.
  typescript: { ignoreBuildErrors: true },
};

export default config;
