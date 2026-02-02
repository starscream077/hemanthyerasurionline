import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'repo-name' with whatever you name your GitHub repository
export default defineConfig({
  plugins: [react()],
  base: '/hemanthyerasurionline/', 
})