import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      /* eslint no-undef: "off" */
      entry: resolve(__dirname, 'lib/index.jsx'),
      formats: ['es'],
      name: 'react-autopg',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react'],
      output: {
        chunkFileNames: 'chunks/[name].[hash].js',
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      },
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
  optimizeDeps: {
    exclude: ['react-autopg'],
  },
});
