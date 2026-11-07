import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' : derlenen site herhangi bir klasörden / sunucudan açılabilsin
export default defineConfig({ plugins: [react()], base: './' })
