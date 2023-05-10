import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: { enabled: true },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
      manifest: {
        name: "MyMovies",
        short_name: "MyMovies",
        description: "MyMovies is a school project with React and Vite",
        theme_color: "#0a0a0a",
        icons: [
          {
            src: "/img/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/img/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/img/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
});
