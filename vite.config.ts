import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx({}), Components({
    resolvers: [
      AntDesignVueResolver(),
    ],
  })],
  resolve: {
    alias: {
      '@': './src/'
    }
  },
  define: {
    'process.env': {}
  }
})
