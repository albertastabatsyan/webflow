import type { NextConfig } from "next";

const basePath = process.env.BASE_URL ?? "";
const assetPrefix = process.env.ASSETS_PREFIX ?? basePath;

const nextConfig: NextConfig = {
  ...(basePath ? { basePath } : {}),
  ...(assetPrefix ? { assetPrefix } : {}),
};

export default nextConfig;
