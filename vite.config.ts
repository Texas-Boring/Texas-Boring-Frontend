import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/Texas-Boring-Frontend/',
  plugins: [react(), tailwindcss()],
})
