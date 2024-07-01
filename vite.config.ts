import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
import path from 'path'
import KumaUI from '@kuma-ui/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    KumaUI(),
    TanStackRouterVite(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // 你可以在这里添加更多的别名
    },
  },
})
