import { defineConfig } from 'vite';
// https://vitejs.dev/config/
import vueSetupExtend from 'vite-plugin-vue-setup-extend';

import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue(), vueSetupExtend()],
  build: {
    // 打包配置
    lib: {
      entry: "./packages/index.js",
      name: "base-dmui",
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖,解决插件报错问题(reading 'isCE')
      external: ["vue"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
