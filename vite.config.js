import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Replace 'repo-name' with whatever you name your GitHub repository
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
})