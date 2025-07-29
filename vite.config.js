import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 5000,
    strictPort: true,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'effd7dce-a22a-4f2d-9b8d-58e8b401b141-00-3mtmqoiwo1n37.kirk.replit.dev',
      '.replit.dev'
    ]
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
