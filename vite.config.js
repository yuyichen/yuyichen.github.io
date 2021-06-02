import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import WindiCSS from 'vite-plugin-windicss';
import path from 'path';
// import vitePluginImport from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  plugins: [
    reactRefresh(),
    WindiCSS(),
    // vitePluginImport({
    //   libs: [
    //     {
    //       libraryName: 'antd',
    //       esModule: true,
    //       resolveStyle: (name) => {
    //         return `antd/es/${name}/style/index`;
    //       },
    //     },
    //   ],
    // }),
  ],
  server: {
    port: 8000,
    // cors: true, // 默认启用并允许任何源
    // 反向代理配置
    proxy: {
      // '/tro-web/api': {
      //   target: 'http://47.99.119.242:10008', // 代理接口
      //   changeOrigin: true,
      // },
    },
  },
});
