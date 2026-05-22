import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        book: path.resolve(__dirname, 'book.html'),
        certificate: path.resolve(__dirname, 'certificate.html'),
        mainpage: path.resolve(__dirname, 'main.html'),
        intro3d: path.resolve(__dirname, 'intro-3d.html'),
      },
    },
  },
});
