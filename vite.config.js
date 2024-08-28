import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { Pages } from 'vite-plugin-react-pages'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "build",
  },
  plugins: [react(), Pages()],
})
