import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "node:path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@App": path.resolve(__dirname, "src"),
      "@Assets": path.resolve(__dirname, "src/Assets"),
      "@Components": path.resolve(__dirname, "src/Components"),
      "@Pages": path.resolve(__dirname, "src/Pages"),
      "@Styles": path.resolve(__dirname, "src/Styles"),
      "@Public": path.resolve(__dirname, "public")
    },
  },
})
