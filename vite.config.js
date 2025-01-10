import { defineConfig } from 'vite'; // eslint-disable-line
import react from '@vitejs/plugin-react'; // eslint-disable-line

export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html'
      },
      output: {
        entryFileNames: `assets/[name].[hash].js`,
        chunkFileNames: `assets/[name].[hash].js`,
        assetFileNames: `assets/[name].[hash].[ext]`
      }
    },
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
});
