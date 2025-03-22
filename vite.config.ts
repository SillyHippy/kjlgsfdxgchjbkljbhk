import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Ensure sourcemaps are generated for better debugging
    sourcemap: true,
    // Configure output directory
    outDir: 'dist',
    // Optimize chunk size and implement code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          router: ['react-router-dom'],
          helmet: ['react-helmet-async'],
          toastify: ['react-toastify']
        },
      },
    },
    // Enable minification optimizations
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Enable CSS minification
    cssMinify: true,
  },
  // Enable asset optimization
  assetsInclude: ['**/*.{png,jpg,gif,svg,webp,avif}'],
  // Configure server options
  server: {
    compression: true
  }
})