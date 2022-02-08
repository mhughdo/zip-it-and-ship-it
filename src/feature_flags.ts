import { env } from 'process'

export const defaultFlags: Record<string, boolean> = {
  buildGoSource: Boolean(env.NETLIFY_EXPERIMENTAL_BUILD_GO_SOURCE),
  buildRustSource: Boolean(env.NETLIFY_EXPERIMENTAL_BUILD_RUST_SOURCE),
  defaultEsModulesToEsbuild: Boolean(env.NETLIFY_EXPERIMENTAL_DEFAULT_ES_MODULES_TO_ESBUILD),
  parseWithEsbuild: false,
  traceWithNft: false,
  zisi_pure_esm: false,
}

export type FeatureFlag = keyof typeof defaultFlags
export type FeatureFlags = Record<FeatureFlag, boolean>

// List of supported flags and their default value.

export const getFlags = (input: Record<string, boolean> = {}, flags = defaultFlags) =>
  Object.entries(flags).reduce(
    (result, [key, defaultValue]) => ({
      ...result,
      [key]: input[key] === undefined ? defaultValue : input[key],
    }),
    {},
  )
