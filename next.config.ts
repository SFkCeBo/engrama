import type { NextConfig } from "next";

const config: NextConfig = {
  transpilePackages: ["@mfdev/ui", "@mfdev/utils"],
  // El typecheck lo hace turbo con tsc por separado: así el build es más rápido.
  typescript: { ignoreBuildErrors: true },
};

export default config;
