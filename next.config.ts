import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/case-lp-camilo",
        destination: "/cases/acquire",
        permanent: true,
      },
      {
        source: "/cases/whatsapp-ai",
        destination: "/cases/acquire",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
