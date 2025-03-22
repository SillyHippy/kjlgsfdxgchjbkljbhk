import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
  },
  build: {
    // Reduce chunk size warnings
    chunkSizeWarningLimit: 1000,
    // Ensure compatibility with Cloudflare Pages
    target: 'es2015',
  }
})
