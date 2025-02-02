import { defineTokens } from '@pandacss/dev';
import { colors } from './colors';
import { fontWeights } from './font-weights';
import { fonts } from './fonts';
import { radii } from './radii';
import { sizes } from './sizes';

export const tokens = defineTokens({
  colors,
  fonts,
  fontWeights,
  radii,
  sizes,
});
