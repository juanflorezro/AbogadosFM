import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server:{
    port: 3000
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // Ejemplo de chunk manual
        },
      },
    },
    chunkSizeWarningLimit: 1500, // Ajuste del límite
  },
})
