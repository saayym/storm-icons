import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts', 'src/metadata.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: true,
  treeshake: true,
  clean: true,
  external: ['react'],
  banner: {
    js: "'use client'",
  },
})
