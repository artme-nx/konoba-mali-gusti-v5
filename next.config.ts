import type { NextConfig } from "next";

// Static export for GitHub Pages (served at /konoba-mali-gusti-v5/)
const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/konoba-mali-gusti-v5" : "",
  images: { unoptimized: true },
};

export default nextConfig;
