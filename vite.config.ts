
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
        },
      },
    },
    // Compress assets
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 500,
  },
})
