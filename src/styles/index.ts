import { definePreset } from '@pandacss/dev';
import { globalCss, globalFontface } from './global';
import { tokens } from './tokens';
import { utilities } from './utilities';

export const preset = definePreset({
  name: '@devunt/preset',
  presets: ['@pandacss/preset-base'],

  theme: {
    tokens,
  },

  utilities,

  globalCss,
  globalFontface,
});
