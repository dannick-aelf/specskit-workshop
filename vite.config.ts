import { defineConfig } from 'vite';

export default defineConfig({
  // TypeScript is supported out of the box
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  server: {
    port: 5173,
    open: true,
  },
});






