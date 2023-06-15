import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'

import microLc from './plugins/vite-plugin-micro-lc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/applications/vue/',
  build: {
    minify: false,
    outDir: 'build',
  },
  plugins: [
    vue(),
    vueJsx(),
    microLc('vue3'),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
