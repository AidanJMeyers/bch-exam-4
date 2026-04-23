import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/bch-exam-4/',
  build: { outDir: 'dist' }
});
