import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      input: 'index.html',
      output: {
        manualChunks: undefined
      }
    }
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
});
