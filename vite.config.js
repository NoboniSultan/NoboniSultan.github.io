import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // This repo is a GitHub *user* page (noboniSultan.github.io), served from the
  // domain root — so the base path stays '/'. If this ever moves to a project
  // repo, change this to '/<repo-name>/'.
  base: '/',
  build: {
    // Emit every asset as a real file instead of inlining small ones. Vite
    // would otherwise turn resume.pdf into a data: URI, and browsers block
    // data: URLs opened in a new tab — the Resume button would do nothing.
    assetsInlineLimit: 0,
  },
})
