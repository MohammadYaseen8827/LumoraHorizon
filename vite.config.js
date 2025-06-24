import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV === 'production' ? '/LumoraHorizon/' : '/',
  server: {
    host: '0.0.0.0',
    port: 5000,
    strictPort: true,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '705bfe19-7023-4f7a-b126-67894f919bee-00-32dvh8xuttoju.picard.replit.dev',
      '.replit.dev'
    ],
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
