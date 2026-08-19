import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/case-lp-camilo",
        destination: "/cases/whatsapp-ai",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
