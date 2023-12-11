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
    open: true,
    port: 5173,
    strictPort: true,
  },
  resolve: {
    alias: {
      "@/components": resolve(root, "components"),
      "@/styles": resolve(root, "styles"),
      "@/assets": resolve(root, "assets"),
      "@/context": resolve(root, "context"),
      "@/theme": resolve(root, "theme"),
      "@/types": resolve(root, "types"),
      "@/utils": resolve(root, "utils"),
      "@/fonts": resolve(root, "fonts"),
    }
  }

})
