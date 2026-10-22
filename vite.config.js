import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // This repo is a GitHub *user* page (noboniSultan.github.io), served from the
  // domain root — so the base path stays '/'. If this ever moves to a project
  // repo, change this to '/<repo-name>/'.
  base: '/',
})
