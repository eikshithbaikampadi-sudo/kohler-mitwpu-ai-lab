import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // or vue, svelte, etc.

export default defineConfig({
  plugins: [react()],
  base: '/kohler-mitwpu-ai-lab/', // 👈 Add this line (case-sensitive)
})
