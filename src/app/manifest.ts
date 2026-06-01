import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PracticeLingo",
    short_name: "PracticeLingo",
    description: "Multilingual patient communication for UK GP surgeries",
    start_url: "/",
    display: "standalone",
    background_color: "#F7F9FC",
    theme_color: "#005EB8",
    icons: [
      { src: "/brand/Icon.png", sizes: "192x192", type: "image/png" },
      { src: "/brand/Icon.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
