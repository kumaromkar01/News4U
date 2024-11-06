import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base : "/News4U/",
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://news4u-pt82.onrender.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
