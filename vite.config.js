import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve("NS-SOLUTION", "./src"),
    },
  },
  build: {
    css: {
      ignoreWarnings: true,
    },
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // Define manual chunks here
          vendor: ["react", "react-dom"],
          // other chunks can be defined here
        },
      },
    },

    chunkSizeWarningLimit: 10000, // Adjust the chunk size limit
  },
});
