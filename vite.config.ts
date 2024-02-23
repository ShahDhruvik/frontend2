import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

const root = resolve(__dirname, "src")
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr({
    svgrOptions: {}
  })],
  server: {
    open: false,
    port: 3000,
    strictPort: true,
  },
  resolve: {
    alias: {
      "@/axiosInstance": resolve(root, "axiosInstance"),
      "@/appRoutes": resolve(root, "AppRoutes"),
      "@/app": resolve(root, "App"),
      "@/components": resolve(root, "components"),
      "@/lib": resolve(root, "lib"),
      "@/styles": resolve(root, "styles"),
      "@/assets": resolve(root, "assets"),
      "@/context": resolve(root, "context"),
      "@/theme": resolve(root, "theme"),
      "@/types": resolve(root, "types"),
      "@/utils": resolve(root, "utils"),
      "@/fonts": resolve(root, "fonts"),
      "@/middleware": resolve(root, "middleware"),
    }
  }

})
