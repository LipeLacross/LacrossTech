import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Habilita o modo estrito para detectar problemas durante o desenvolvimento
  swcMinify: true, // Habilita minificação via SWC, mais rápida que o Terser
  images: {
    domains: ['example.com'], // Permite imagens de domínios específicos (adapte para seu projeto)
  },
  sassOptions: {
    // Inclui pastas adicionais para Sass se necessário
    includePaths: [path.join(__dirname, 'src', 'styles')],
  },
  // Outras configurações adicionais...
};

export default nextConfig;
