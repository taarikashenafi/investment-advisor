import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "public", // Ensures the output directory is "dist"
    rollupOptions: {
      external: ["axios", "lucide-react"], // Externalize problematic dependencies
    },
  },
  server: {
    port: 3000, // Optional: Customize your local dev server port
  },
});