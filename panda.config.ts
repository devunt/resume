import { defineConfig } from '@pandacss/dev';
import { preset } from './src/styles';

const prod = process.env.NODE_ENV === 'production';

export default defineConfig({
  include: ['./src/**/*.{js,ts,svelte}'],

  eject: true,
  presets: [preset],

  separator: '-',
  hash: prod,
  minify: prod,
});
