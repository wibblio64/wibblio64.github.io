import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "https://github.com/wibblio64/wibblio64.github.io",
};

export default nextConfig;
