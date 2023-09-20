import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Be careful: using "" instead of ''
  base: 'ReactVitePracticeWeb/'
})
