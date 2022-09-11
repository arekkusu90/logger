/// <reference types="vitest" />
import { defineConfig } from "vite";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "logger",
      fileName: "logger",
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
      },
    },
  },
  // https://vitest.dev/config/
  test: {
    environment: "jsdom",
  },
});
