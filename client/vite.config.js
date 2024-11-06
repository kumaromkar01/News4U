import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base : "/NewsApp/",
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://newsapp-qvsw.onrender.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
