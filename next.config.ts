import type { NextConfig } from "next";

const basePath = process.env.BASE_URL ?? "";
const assetPrefix = process.env.ASSETS_PREFIX ?? basePath;

const nextConfig: NextConfig = {
  ...(basePath ? { basePath } : {}),
  ...(assetPrefix ? { assetPrefix } : {}),
  async rewrites() {
    return [
      {
        // Webflow Cloud serves this app under /test_albert already, so a public
        // request for /test_albert/:slug enters Next as /:slug. Rewrite that to
        // the nested route tree that currently owns the article pages.
        source: "/:slug((?!test_albert|test_albert_2|_next|favicon.ico).+)",
        destination: "/test_albert/:slug",
      },
    ];
  },
};

export default nextConfig;
