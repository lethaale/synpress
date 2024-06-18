import { defineConfig } from 'tsup'

export default defineConfig({
  name: 'ethereum-wallet-mock',
  entry: ['src/index.ts'],
  outDir: 'dist',
  format: 'esm',
  splitting: false,
  treeshake: true,
  sourcemap: true,
  external: ['@playwright/test']
})