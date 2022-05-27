import { defineConfig } from 'vite'
import { peerDependencies, dependencies } from './package.json'
import { resolve } from 'path'
import plugin from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [plugin({ 'jsxRuntime': 'classic' })],
  build: {
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      formats: ['es', 'cjs'],
      fileName: (ext) => `index.${ext}.js`,
      // for UMD name: 'GlobalName'
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies), ...Object.keys(dependencies)]
    },
    target: 'esnext',
    sourcemap: true
  }
})
