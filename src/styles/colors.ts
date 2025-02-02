import { defineTokens } from '@pandacss/dev';

export const colors = defineTokens.colors({
  current: { value: 'currentColor' },

  transparent: { value: 'rgb(0 0 0 / 0)' },

  gray: {
    '50': { value: 'oklch(0.985 0.001 106.423)' },
    '100': { value: 'oklch(0.97 0.001 106.424)' },
    '200': { value: 'oklch(0.923 0.003 48.717)' },
    '300': { value: 'oklch(0.869 0.005 56.366)' },
    '400': { value: 'oklch(0.709 0.01 56.259)' },
    '500': { value: 'oklch(0.553 0.013 58.071)' },
    '600': { value: 'oklch(0.444 0.011 73.639)' },
    '700': { value: 'oklch(0.374 0.01 67.558)' },
    '800': { value: 'oklch(0.268 0.007 34.298)' },
    '900': { value: 'oklch(0.216 0.006 56.043)' },
    '950': { value: 'oklch(0.147 0.004 49.25)' },
  },
  white: { value: '#ffffff' },
});
