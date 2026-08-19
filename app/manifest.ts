import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jhon Camilo Rios — Senior Product Designer",
    short_name: "Jhon Camilo Rios",
    description:
      "Portfolio de Jhon Camilo Rios, Senior Product Designer especializado em Growth, Inteligência Artificial, CRO e SaaS.",
    start_url: "/",
    display: "browser",
    background_color: "#0A0A0A",
    theme_color: "#622FFD",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
