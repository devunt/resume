import adapter from '@sveltejs/adapter-static';
import { sveltePreprocess } from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
export default {
  preprocess: sveltePreprocess(),

  kit: {
    adapter: adapter(),
    alias: {
      '$assets/*': './src/assets/*',
      '$styled-system/*': './styled-system/*',
    },
    files: {
      hooks: {
        server: 'src/hooks/server',
        client: 'src/hooks/client',
        universal: 'src/hooks/universal',
      },
    },
    paths: { relative: false },
    output: { preloadStrategy: 'preload-mjs' },
    version: { pollInterval: 60 * 1000 },
  },
};
