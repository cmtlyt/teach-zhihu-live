// vite.config.ts
import { defineConfig, normalizePath } from "file:///E:/repository/zhihu/teach-zhihu-live/node_modules/.pnpm/vite@5.0.9_@types+node@20.10.4_sass@1.69.5_terser@5.26.0/node_modules/vite/dist/node/index.js";
import vue from "file:///E:/repository/zhihu/teach-zhihu-live/node_modules/.pnpm/@vitejs+plugin-vue@4.5.2_vite@5.0.9_@types+node@20.10.4_sass@1.69.5_terser@5.26.0__vue@3.3.11_typescript@5.3.3_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "path";
import viteImagemin from "file:///E:/repository/zhihu/teach-zhihu-live/node_modules/.pnpm/@vheemstra+vite-plugin-imagemin@1.1.5_vite@5.0.9_@types+node@20.10.4_sass@1.69.5_terser@5.26.0_/node_modules/@vheemstra/vite-plugin-imagemin/dist/index.js";
import imageminSvg from "file:///E:/repository/zhihu/teach-zhihu-live/node_modules/.pnpm/imagemin-svgo@10.0.1/node_modules/imagemin-svgo/index.js";
import imageminGif2webp from "file:///E:/repository/zhihu/teach-zhihu-live/node_modules/.pnpm/imagemin-gif2webp@3.0.0/node_modules/imagemin-gif2webp/index.js";
import { createSvgIconsPlugin } from "file:///E:/repository/zhihu/teach-zhihu-live/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@5.0.9_@types+node@20.10.4_sass@1.69.5_terser@5.26.0_/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import { vitePluginForArco } from "file:///E:/repository/zhihu/teach-zhihu-live/node_modules/.pnpm/@arco-plugins+vite-vue@1.4.5/node_modules/@arco-plugins/vite-vue/lib/index.js";
import legacy from "file:///E:/repository/zhihu/teach-zhihu-live/node_modules/.pnpm/@vitejs+plugin-legacy@5.2.0_terser@5.26.0_vite@5.0.9_@types+node@20.10.4_sass@1.69.5_terser@5.26.0_/node_modules/@vitejs/plugin-legacy/dist/index.mjs";

// package.json
var package_default = {
  name: "teach-zhihu-live",
  private: true,
  version: "0.1.0",
  type: "module",
  author: {
    name: "cmtlyt",
    email: "cmtlyt@163.com"
  },
  license: "MIT",
  scripts: {
    prepare: "husky install",
    postinstall: "patch-package",
    dev: "vite",
    build: "vue-tsc && vite build",
    lint: 'eslint "src/**/*.{ts,js}" --fix',
    preview: "vite preview"
  },
  dependencies: {
    "@fingerprintjs/fingerprintjs": "^4.2.1",
    "@vueuse/core": "^10.7.0",
    axios: "^1.6.2",
    mitt: "^3.0.1",
    pinia: "^2.1.7",
    vue: "^3.3.11",
    "vue-i18n": "^9.8.0",
    "vue-request": "^2.0.4",
    "vue-router": "^4.2.5"
  },
  devDependencies: {
    "@arco-design/web-vue": "^2.53.3",
    "@arco-plugins/vite-vue": "^1.4.5",
    "@commitlint/cli": "^18.4.3",
    "@commitlint/config-conventional": "^18.4.3",
    "@intlify/unplugin-vue-i18n": "^2.0.0",
    "@milahu/patch-package": "^6.4.14",
    "@types/node": "^20.10.4",
    "@typescript-eslint/eslint-plugin": "^7.11.0",
    "@typescript-eslint/parser": "^7.11.0",
    "@vheemstra/vite-plugin-imagemin": "^1.1.5",
    "@vitejs/plugin-legacy": "^5.2.0",
    "@vitejs/plugin-vue": "^4.5.2",
    autoprefixer: "^10.4.16",
    commitlint: "^18.4.3",
    cssnano: "^6.0.2",
    eslint: "^8.57.0",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-import": "^2.29.1",
    "eslint-plugin-prettier": "^5.1.3",
    husky: "^8.0.3",
    "imagemin-gif2webp": "^3.0.0",
    "imagemin-svgo": "^10.0.1",
    "lint-staged": "^15.2.5",
    postcss: "^8.4.32",
    "postcss-preset-env": "^9.3.0",
    "postcss-pxtorem": "^6.0.0",
    prettier: "^3.1.1",
    sass: "^1.69.5",
    tailwindcss: "^3.3.6",
    typescript: "^5.2.2",
    vite: "^5.0.8",
    "vite-plugin-svg-icons": "^2.0.1",
    "vue-tsc": "^1.8.25"
  },
  "lint-staged": {
    "src/*.{js,jsx,tsx,ts}": [
      "pnpm run lint"
    ]
  }
};

// vite.config.ts
import VueI18nPlugin from "file:///E:/repository/zhihu/teach-zhihu-live/node_modules/.pnpm/@intlify+unplugin-vue-i18n@2.0.0_rollup@4.9.0_vue-i18n@9.8.0_vue@3.3.11_typescript@5.3.3__/node_modules/@intlify/unplugin-vue-i18n/lib/vite.mjs";
var __vite_injected_original_dirname = "E:\\repository\\zhihu\\teach-zhihu-live";
var styleVariablePath = normalizePath(path.resolve(__vite_injected_original_dirname, "./src/variable.scss"));
var vite_config_default = defineConfig({
  base: "/teach-zhihu-live/",
  plugins: [
    vue(),
    viteImagemin({
      plugins: { svg: imageminSvg() },
      makeWebp: {
        plugins: {
          // jpg: imageminWebp(),
          // png: imageminWebp(),
          gif: imageminGif2webp()
        }
      }
    }),
    createSvgIconsPlugin({ iconDirs: [normalizePath(path.join(__vite_injected_original_dirname, "./src/assets/icons"))] }),
    // AutoImport({ resolvers: [ArcoResolver()] }),
    // Components({ resolvers: [ArcoResolver({ sideEffect: true })] }),
    vitePluginForArco({ style: "css" }),
    legacy(),
    VueI18nPlugin({ include: normalizePath(path.resolve(__vite_injected_original_dirname, "./src/locales/*.json")) })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${styleVariablePath}";`
      }
    }
  },
  optimizeDeps: {
    include: [...Object.keys(package_default.dependencies), "@arco-design/web-vue"]
  },
  resolve: {
    alias: {
      "@": normalizePath(path.resolve(__vite_injected_original_dirname, "./src")),
      "@icon": normalizePath(path.resolve(__vite_injected_original_dirname, "./src/assets/icons")),
      "@comp": normalizePath(path.resolve(__vite_injected_original_dirname, "./src/components")),
      "@type": normalizePath(path.resolve(__vite_injected_original_dirname, "./src/types")),
      "@store": normalizePath(path.resolve(__vite_injected_original_dirname, "./src/stores"))
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "vue-vendor": ["vue", "vue-router", "pinia"],
          "comp-vendor": ["@arco-design/web-vue"],
          "locale-vendor": ["./src/locales"]
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTpcXFxccmVwb3NpdG9yeVxcXFx6aGlodVxcXFx0ZWFjaC16aGlodS1saXZlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxyZXBvc2l0b3J5XFxcXHpoaWh1XFxcXHRlYWNoLXpoaWh1LWxpdmVcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L3JlcG9zaXRvcnkvemhpaHUvdGVhY2gtemhpaHUtbGl2ZS92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZywgbm9ybWFsaXplUGF0aCB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xyXG5pbXBvcnQgdml0ZUltYWdlbWluIGZyb20gJ0B2aGVlbXN0cmEvdml0ZS1wbHVnaW4taW1hZ2VtaW4nXHJcbi8vIGltcG9ydCBpbWFnZW1pbldlYnAgZnJvbSAnaW1hZ2VtaW4td2VicCdcclxuaW1wb3J0IGltYWdlbWluU3ZnIGZyb20gJ2ltYWdlbWluLXN2Z28nXHJcbmltcG9ydCBpbWFnZW1pbkdpZjJ3ZWJwIGZyb20gJ2ltYWdlbWluLWdpZjJ3ZWJwJ1xyXG5pbXBvcnQgeyBjcmVhdGVTdmdJY29uc1BsdWdpbiB9IGZyb20gJ3ZpdGUtcGx1Z2luLXN2Zy1pY29ucydcclxuLy8gaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcclxuLy8gaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcclxuLy8gaW1wb3J0IHsgQXJjb1Jlc29sdmVyIH0gZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzJ1xyXG5pbXBvcnQgeyB2aXRlUGx1Z2luRm9yQXJjbyB9IGZyb20gJ0BhcmNvLXBsdWdpbnMvdml0ZS12dWUnXHJcbmltcG9ydCBsZWdhY3kgZnJvbSAnQHZpdGVqcy9wbHVnaW4tbGVnYWN5J1xyXG5pbXBvcnQgcGFja2FnZUNvbmZpZyBmcm9tICcuL3BhY2thZ2UuanNvbidcclxuaW1wb3J0IFZ1ZUkxOG5QbHVnaW4gZnJvbSAnQGludGxpZnkvdW5wbHVnaW4tdnVlLWkxOG4vdml0ZSdcclxuXHJcbmNvbnN0IHN0eWxlVmFyaWFibGVQYXRoID0gbm9ybWFsaXplUGF0aChwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvdmFyaWFibGUuc2NzcycpKVxyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBiYXNlOiAnL3RlYWNoLXpoaWh1LWxpdmUvJyxcclxuICBwbHVnaW5zOiBbXHJcbiAgICB2dWUoKSxcclxuICAgIHZpdGVJbWFnZW1pbih7XHJcbiAgICAgIHBsdWdpbnM6IHsgc3ZnOiBpbWFnZW1pblN2ZygpIH0sXHJcbiAgICAgIG1ha2VXZWJwOiB7XHJcbiAgICAgICAgcGx1Z2luczoge1xyXG4gICAgICAgICAgLy8ganBnOiBpbWFnZW1pbldlYnAoKSxcclxuICAgICAgICAgIC8vIHBuZzogaW1hZ2VtaW5XZWJwKCksXHJcbiAgICAgICAgICBnaWY6IGltYWdlbWluR2lmMndlYnAoKSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgICBjcmVhdGVTdmdJY29uc1BsdWdpbih7IGljb25EaXJzOiBbbm9ybWFsaXplUGF0aChwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi9zcmMvYXNzZXRzL2ljb25zJykpXSB9KSxcclxuICAgIC8vIEF1dG9JbXBvcnQoeyByZXNvbHZlcnM6IFtBcmNvUmVzb2x2ZXIoKV0gfSksXHJcbiAgICAvLyBDb21wb25lbnRzKHsgcmVzb2x2ZXJzOiBbQXJjb1Jlc29sdmVyKHsgc2lkZUVmZmVjdDogdHJ1ZSB9KV0gfSksXHJcbiAgICB2aXRlUGx1Z2luRm9yQXJjbyh7IHN0eWxlOiAnY3NzJyB9KSxcclxuICAgIGxlZ2FjeSgpLFxyXG4gICAgVnVlSTE4blBsdWdpbih7IGluY2x1ZGU6IG5vcm1hbGl6ZVBhdGgocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL2xvY2FsZXMvKi5qc29uJykpIH0pLFxyXG4gIF0sXHJcbiAgY3NzOiB7XHJcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XHJcbiAgICAgIHNjc3M6IHtcclxuICAgICAgICBhZGRpdGlvbmFsRGF0YTogYEBpbXBvcnQgXCIke3N0eWxlVmFyaWFibGVQYXRofVwiO2AsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgb3B0aW1pemVEZXBzOiB7XHJcbiAgICBpbmNsdWRlOiBbLi4uT2JqZWN0LmtleXMocGFja2FnZUNvbmZpZy5kZXBlbmRlbmNpZXMpLCAnQGFyY28tZGVzaWduL3dlYi12dWUnXSxcclxuICB9LFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgICdAJzogbm9ybWFsaXplUGF0aChwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMnKSksXHJcbiAgICAgICdAaWNvbic6IG5vcm1hbGl6ZVBhdGgocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL2Fzc2V0cy9pY29ucycpKSxcclxuICAgICAgJ0Bjb21wJzogbm9ybWFsaXplUGF0aChwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvY29tcG9uZW50cycpKSxcclxuICAgICAgJ0B0eXBlJzogbm9ybWFsaXplUGF0aChwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvdHlwZXMnKSksXHJcbiAgICAgICdAc3RvcmUnOiBub3JtYWxpemVQYXRoKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9zdG9yZXMnKSksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYnVpbGQ6IHtcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgbWFudWFsQ2h1bmtzOiB7XHJcbiAgICAgICAgICAndnVlLXZlbmRvcic6IFsndnVlJywgJ3Z1ZS1yb3V0ZXInLCAncGluaWEnXSxcclxuICAgICAgICAgICdjb21wLXZlbmRvcic6IFsnQGFyY28tZGVzaWduL3dlYi12dWUnXSxcclxuICAgICAgICAgICdsb2NhbGUtdmVuZG9yJzogWycuL3NyYy9sb2NhbGVzJ10sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufSlcclxuIiwgIntcclxuICBcIm5hbWVcIjogXCJ0ZWFjaC16aGlodS1saXZlXCIsXHJcbiAgXCJwcml2YXRlXCI6IHRydWUsXHJcbiAgXCJ2ZXJzaW9uXCI6IFwiMC4xLjBcIixcclxuICBcInR5cGVcIjogXCJtb2R1bGVcIixcclxuICBcImF1dGhvclwiOiB7XHJcbiAgICBcIm5hbWVcIjogXCJjbXRseXRcIixcclxuICAgIFwiZW1haWxcIjogXCJjbXRseXRAMTYzLmNvbVwiXHJcbiAgfSxcclxuICBcImxpY2Vuc2VcIjogXCJNSVRcIixcclxuICBcInNjcmlwdHNcIjoge1xyXG4gICAgXCJwcmVwYXJlXCI6IFwiaHVza3kgaW5zdGFsbFwiLFxyXG4gICAgXCJwb3N0aW5zdGFsbFwiOiBcInBhdGNoLXBhY2thZ2VcIixcclxuICAgIFwiZGV2XCI6IFwidml0ZVwiLFxyXG4gICAgXCJidWlsZFwiOiBcInZ1ZS10c2MgJiYgdml0ZSBidWlsZFwiLFxyXG4gICAgXCJsaW50XCI6IFwiZXNsaW50IFxcXCJzcmMvKiovKi57dHMsanN9XFxcIiAtLWZpeFwiLFxyXG4gICAgXCJwcmV2aWV3XCI6IFwidml0ZSBwcmV2aWV3XCJcclxuICB9LFxyXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcclxuICAgIFwiQGZpbmdlcnByaW50anMvZmluZ2VycHJpbnRqc1wiOiBcIl40LjIuMVwiLFxyXG4gICAgXCJAdnVldXNlL2NvcmVcIjogXCJeMTAuNy4wXCIsXHJcbiAgICBcImF4aW9zXCI6IFwiXjEuNi4yXCIsXHJcbiAgICBcIm1pdHRcIjogXCJeMy4wLjFcIixcclxuICAgIFwicGluaWFcIjogXCJeMi4xLjdcIixcclxuICAgIFwidnVlXCI6IFwiXjMuMy4xMVwiLFxyXG4gICAgXCJ2dWUtaTE4blwiOiBcIl45LjguMFwiLFxyXG4gICAgXCJ2dWUtcmVxdWVzdFwiOiBcIl4yLjAuNFwiLFxyXG4gICAgXCJ2dWUtcm91dGVyXCI6IFwiXjQuMi41XCJcclxuICB9LFxyXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcclxuICAgIFwiQGFyY28tZGVzaWduL3dlYi12dWVcIjogXCJeMi41My4zXCIsXHJcbiAgICBcIkBhcmNvLXBsdWdpbnMvdml0ZS12dWVcIjogXCJeMS40LjVcIixcclxuICAgIFwiQGNvbW1pdGxpbnQvY2xpXCI6IFwiXjE4LjQuM1wiLFxyXG4gICAgXCJAY29tbWl0bGludC9jb25maWctY29udmVudGlvbmFsXCI6IFwiXjE4LjQuM1wiLFxyXG4gICAgXCJAaW50bGlmeS91bnBsdWdpbi12dWUtaTE4blwiOiBcIl4yLjAuMFwiLFxyXG4gICAgXCJAbWlsYWh1L3BhdGNoLXBhY2thZ2VcIjogXCJeNi40LjE0XCIsXHJcbiAgICBcIkB0eXBlcy9ub2RlXCI6IFwiXjIwLjEwLjRcIixcclxuICAgIFwiQHR5cGVzY3JpcHQtZXNsaW50L2VzbGludC1wbHVnaW5cIjogXCJeNy4xMS4wXCIsXHJcbiAgICBcIkB0eXBlc2NyaXB0LWVzbGludC9wYXJzZXJcIjogXCJeNy4xMS4wXCIsXHJcbiAgICBcIkB2aGVlbXN0cmEvdml0ZS1wbHVnaW4taW1hZ2VtaW5cIjogXCJeMS4xLjVcIixcclxuICAgIFwiQHZpdGVqcy9wbHVnaW4tbGVnYWN5XCI6IFwiXjUuMi4wXCIsXHJcbiAgICBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiOiBcIl40LjUuMlwiLFxyXG4gICAgXCJhdXRvcHJlZml4ZXJcIjogXCJeMTAuNC4xNlwiLFxyXG4gICAgXCJjb21taXRsaW50XCI6IFwiXjE4LjQuM1wiLFxyXG4gICAgXCJjc3NuYW5vXCI6IFwiXjYuMC4yXCIsXHJcbiAgICBcImVzbGludFwiOiBcIl44LjU3LjBcIixcclxuICAgIFwiZXNsaW50LWNvbmZpZy1wcmV0dGllclwiOiBcIl45LjEuMFwiLFxyXG4gICAgXCJlc2xpbnQtcGx1Z2luLWltcG9ydFwiOiBcIl4yLjI5LjFcIixcclxuICAgIFwiZXNsaW50LXBsdWdpbi1wcmV0dGllclwiOiBcIl41LjEuM1wiLFxyXG4gICAgXCJodXNreVwiOiBcIl44LjAuM1wiLFxyXG4gICAgXCJpbWFnZW1pbi1naWYyd2VicFwiOiBcIl4zLjAuMFwiLFxyXG4gICAgXCJpbWFnZW1pbi1zdmdvXCI6IFwiXjEwLjAuMVwiLFxyXG4gICAgXCJsaW50LXN0YWdlZFwiOiBcIl4xNS4yLjVcIixcclxuICAgIFwicG9zdGNzc1wiOiBcIl44LjQuMzJcIixcclxuICAgIFwicG9zdGNzcy1wcmVzZXQtZW52XCI6IFwiXjkuMy4wXCIsXHJcbiAgICBcInBvc3Rjc3MtcHh0b3JlbVwiOiBcIl42LjAuMFwiLFxyXG4gICAgXCJwcmV0dGllclwiOiBcIl4zLjEuMVwiLFxyXG4gICAgXCJzYXNzXCI6IFwiXjEuNjkuNVwiLFxyXG4gICAgXCJ0YWlsd2luZGNzc1wiOiBcIl4zLjMuNlwiLFxyXG4gICAgXCJ0eXBlc2NyaXB0XCI6IFwiXjUuMi4yXCIsXHJcbiAgICBcInZpdGVcIjogXCJeNS4wLjhcIixcclxuICAgIFwidml0ZS1wbHVnaW4tc3ZnLWljb25zXCI6IFwiXjIuMC4xXCIsXHJcbiAgICBcInZ1ZS10c2NcIjogXCJeMS44LjI1XCJcclxuICB9LFxyXG4gIFwibGludC1zdGFnZWRcIjoge1xyXG4gICAgXCJzcmMvKi57anMsanN4LHRzeCx0c31cIjogW1xyXG4gICAgICBcInBucG0gcnVuIGxpbnRcIlxyXG4gICAgXVxyXG4gIH1cclxufVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXNTLFNBQVMsY0FBYyxxQkFBcUI7QUFDbFYsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sVUFBVTtBQUNqQixPQUFPLGtCQUFrQjtBQUV6QixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLHNCQUFzQjtBQUM3QixTQUFTLDRCQUE0QjtBQUlyQyxTQUFTLHlCQUF5QjtBQUNsQyxPQUFPLFlBQVk7OztBQ1puQjtBQUFBLEVBQ0UsTUFBUTtBQUFBLEVBQ1IsU0FBVztBQUFBLEVBQ1gsU0FBVztBQUFBLEVBQ1gsTUFBUTtBQUFBLEVBQ1IsUUFBVTtBQUFBLElBQ1IsTUFBUTtBQUFBLElBQ1IsT0FBUztBQUFBLEVBQ1g7QUFBQSxFQUNBLFNBQVc7QUFBQSxFQUNYLFNBQVc7QUFBQSxJQUNULFNBQVc7QUFBQSxJQUNYLGFBQWU7QUFBQSxJQUNmLEtBQU87QUFBQSxJQUNQLE9BQVM7QUFBQSxJQUNULE1BQVE7QUFBQSxJQUNSLFNBQVc7QUFBQSxFQUNiO0FBQUEsRUFDQSxjQUFnQjtBQUFBLElBQ2QsZ0NBQWdDO0FBQUEsSUFDaEMsZ0JBQWdCO0FBQUEsSUFDaEIsT0FBUztBQUFBLElBQ1QsTUFBUTtBQUFBLElBQ1IsT0FBUztBQUFBLElBQ1QsS0FBTztBQUFBLElBQ1AsWUFBWTtBQUFBLElBQ1osZUFBZTtBQUFBLElBQ2YsY0FBYztBQUFBLEVBQ2hCO0FBQUEsRUFDQSxpQkFBbUI7QUFBQSxJQUNqQix3QkFBd0I7QUFBQSxJQUN4QiwwQkFBMEI7QUFBQSxJQUMxQixtQkFBbUI7QUFBQSxJQUNuQixtQ0FBbUM7QUFBQSxJQUNuQyw4QkFBOEI7QUFBQSxJQUM5Qix5QkFBeUI7QUFBQSxJQUN6QixlQUFlO0FBQUEsSUFDZixvQ0FBb0M7QUFBQSxJQUNwQyw2QkFBNkI7QUFBQSxJQUM3QixtQ0FBbUM7QUFBQSxJQUNuQyx5QkFBeUI7QUFBQSxJQUN6QixzQkFBc0I7QUFBQSxJQUN0QixjQUFnQjtBQUFBLElBQ2hCLFlBQWM7QUFBQSxJQUNkLFNBQVc7QUFBQSxJQUNYLFFBQVU7QUFBQSxJQUNWLDBCQUEwQjtBQUFBLElBQzFCLHdCQUF3QjtBQUFBLElBQ3hCLDBCQUEwQjtBQUFBLElBQzFCLE9BQVM7QUFBQSxJQUNULHFCQUFxQjtBQUFBLElBQ3JCLGlCQUFpQjtBQUFBLElBQ2pCLGVBQWU7QUFBQSxJQUNmLFNBQVc7QUFBQSxJQUNYLHNCQUFzQjtBQUFBLElBQ3RCLG1CQUFtQjtBQUFBLElBQ25CLFVBQVk7QUFBQSxJQUNaLE1BQVE7QUFBQSxJQUNSLGFBQWU7QUFBQSxJQUNmLFlBQWM7QUFBQSxJQUNkLE1BQVE7QUFBQSxJQUNSLHlCQUF5QjtBQUFBLElBQ3pCLFdBQVc7QUFBQSxFQUNiO0FBQUEsRUFDQSxlQUFlO0FBQUEsSUFDYix5QkFBeUI7QUFBQSxNQUN2QjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7OztBRHZEQSxPQUFPLG1CQUFtQjtBQWQxQixJQUFNLG1DQUFtQztBQWdCekMsSUFBTSxvQkFBb0IsY0FBYyxLQUFLLFFBQVEsa0NBQVcscUJBQXFCLENBQUM7QUFHdEYsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osYUFBYTtBQUFBLE1BQ1gsU0FBUyxFQUFFLEtBQUssWUFBWSxFQUFFO0FBQUEsTUFDOUIsVUFBVTtBQUFBLFFBQ1IsU0FBUztBQUFBO0FBQUE7QUFBQSxVQUdQLEtBQUssaUJBQWlCO0FBQUEsUUFDeEI7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxxQkFBcUIsRUFBRSxVQUFVLENBQUMsY0FBYyxLQUFLLEtBQUssa0NBQVcsb0JBQW9CLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFBQTtBQUFBO0FBQUEsSUFHOUYsa0JBQWtCLEVBQUUsT0FBTyxNQUFNLENBQUM7QUFBQSxJQUNsQyxPQUFPO0FBQUEsSUFDUCxjQUFjLEVBQUUsU0FBUyxjQUFjLEtBQUssUUFBUSxrQ0FBVyxzQkFBc0IsQ0FBQyxFQUFFLENBQUM7QUFBQSxFQUMzRjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gscUJBQXFCO0FBQUEsTUFDbkIsTUFBTTtBQUFBLFFBQ0osZ0JBQWdCLFlBQVksaUJBQWlCO0FBQUEsTUFDL0M7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsY0FBYztBQUFBLElBQ1osU0FBUyxDQUFDLEdBQUcsT0FBTyxLQUFLLGdCQUFjLFlBQVksR0FBRyxzQkFBc0I7QUFBQSxFQUM5RTtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLEtBQUssUUFBUSxrQ0FBVyxPQUFPLENBQUM7QUFBQSxNQUNuRCxTQUFTLGNBQWMsS0FBSyxRQUFRLGtDQUFXLG9CQUFvQixDQUFDO0FBQUEsTUFDcEUsU0FBUyxjQUFjLEtBQUssUUFBUSxrQ0FBVyxrQkFBa0IsQ0FBQztBQUFBLE1BQ2xFLFNBQVMsY0FBYyxLQUFLLFFBQVEsa0NBQVcsYUFBYSxDQUFDO0FBQUEsTUFDN0QsVUFBVSxjQUFjLEtBQUssUUFBUSxrQ0FBVyxjQUFjLENBQUM7QUFBQSxJQUNqRTtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxRQUNOLGNBQWM7QUFBQSxVQUNaLGNBQWMsQ0FBQyxPQUFPLGNBQWMsT0FBTztBQUFBLFVBQzNDLGVBQWUsQ0FBQyxzQkFBc0I7QUFBQSxVQUN0QyxpQkFBaUIsQ0FBQyxlQUFlO0FBQUEsUUFDbkM7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
