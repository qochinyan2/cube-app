import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  assetPrefix: "./",
  trailingSlash: true,
  output: "export",
  basePath: "/cube-app",
};

export default nextConfig;
