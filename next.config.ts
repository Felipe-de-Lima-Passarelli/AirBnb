import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/AirBnb",
  assetPrefix: "/AirBnb/",
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
