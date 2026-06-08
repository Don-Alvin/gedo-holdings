import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Gedo Holdings",
    short_name: "Gedo",
    description: "Building across Kenya since 2018.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0C11",
    theme_color: "#1E47E6",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}