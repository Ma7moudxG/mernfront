/* eslint-disable */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    strictPort: true,
    port: 8000,
    proxy: {
      '/api': {
        target: "https://mern-todo-xllz.onrender.com"
      }
    }
  }
})


