import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import './src/assets/styles/var';`
      }
    }
  },
  resolve:{
    alias: {
      "@": path.resolve(__dirname, "./src"), // map '@' to './src' 
      "@c": path.resolve(__dirname, "./src/components")
    }
  }
})
