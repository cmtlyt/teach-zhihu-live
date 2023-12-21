import { defineConfig, normalizePath } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import viteImagemin from '@vheemstra/vite-plugin-imagemin'
import imageminWebp from 'imagemin-webp'
import imageminSvg from 'imagemin-svgo'
import imageminGif2webp from 'imagemin-gif2webp'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import { ArcoResolver } from 'unplugin-vue-components/resolvers'
import { vitePluginForArco } from '@arco-plugins/vite-vue'
import legacy from '@vitejs/plugin-legacy'

const styleVariablePath = normalizePath(path.resolve(__dirname, './src/variable.scss'))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteImagemin({
      plugins: { svg: imageminSvg() },
      makeWebp: { plugins: { jpg: imageminWebp(), png: imageminWebp(), gif: imageminGif2webp() } },
    }),
    createSvgIconsPlugin({ iconDirs: [path.join(__dirname, './src/assets/icons')] }),
    // AutoImport({ resolvers: [ArcoResolver()] }),
    // Components({ resolvers: [ArcoResolver({ sideEffect: true })] }),
    vitePluginForArco({ style: 'css' }),
    legacy(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${styleVariablePath}";`,
      },
    },
  },
  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      '@arco-design/web-vue',
      'pinia',
      '@fingerprintjs/fingerprintjs',
      '@vueuse/core',
      'mitt',
      'simdjson',
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@icon': path.resolve(__dirname, './src/assets/icons'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vue-vendor': ['vue', 'vue-router', 'pinia'],
          'comp-vendor': ['@arco-design/web-vue'],
        },
      },
    },
  },
})
