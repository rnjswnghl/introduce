import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  // GitHub Pages에서 /projects/project4/dist/ 경로로 서빙될 것을 가정
  base: "/demos/onwear/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true,
    https: true,
    port: 5173,
    strictPort: true,
  },
});

