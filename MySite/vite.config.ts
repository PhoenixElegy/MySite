import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "./",
  resolve: {
    alias: {
      "@": resolve(__dirname, 'src') //路径别名
    },
    extensions: ['.js', '.json', '.ts']
  },
  build: {
    outDir: '../dist', // 指定输出路径
  },
})
