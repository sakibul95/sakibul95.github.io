import type { NextConfig } from "next";

/* GitHub Pages *project* sites are served from a sub-path
   (username.github.io/<repo>), so every asset needs that prefix. Set
   NEXT_PUBLIC_BASE_PATH="/<repo>" for those. Leave it empty for a user
   site (username.github.io) or a custom domain, which serve from root. */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  // Allow preview deployments under the monkeycode-ai.live domain during dev.
  // allowedDevOrigins: ["*.monkeycode-ai.live"],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
