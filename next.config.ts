import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Permite todas as origens externas
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src", "styles")],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: { and: [/\.(js|ts)x?$/] },
      use: ["@svgr/webpack", ],
    });
    return config;
  },
};

export default nextConfig;
