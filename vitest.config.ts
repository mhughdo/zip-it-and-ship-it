/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    setupFiles: ['./tests/helpers/vitest_setup.ts'],
    include: ['tests/**/*.test.ts'],
    testTimeout: 30_000,
    deps: {
      external: ['**/fixtures/**', '**/node_modules/**', '**/dist/**'],
      interopDefault: false,
    },
    coverage: {
      provider: 'c8',
      reporter: ['text', 'lcov'],
    },
  },
})
