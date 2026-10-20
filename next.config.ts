import type { NextConfig } from "next";

// Statische export naar out/ voor Cloudflare Pages; het contactformulier draait als Pages Function
// (functions/api/contact.ts). Zonder Next-server is er geen beeldoptimalisatie: afbeeldingen in public/
// staan daarom al in het juiste formaat en de juiste maat (WebP).
const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
