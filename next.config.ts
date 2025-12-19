import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/AirBnb",
  assetPrefix: "/AirBnb/",
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "web.codans.com.br",
      },
    ],
  },
};

export default nextConfig;
