import { defineConfig } from 'tsdown';

export default defineConfig([
  {
    entry: { 'jsmigemo': './src/index.ts' },
    format: ['esm', 'cjs', 'iife'],
    globalName: 'jsmigemo',
    minify: false,
    sourcemap: true,
    dts: true,
    clean: true,
  },

  {
    entry: { 'jsmigemo.min': './src/index.ts' },
    format: ['esm', 'cjs', 'iife'],
    globalName: 'jsmigemo',
    minify: true,
    sourcemap: true,
    dts: false,
    clean: false,
  }
]);