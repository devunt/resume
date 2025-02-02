import { defineTokens } from '@pandacss/dev';

export const sizes = defineTokens.sizes({
  full: { value: '100%' },

  min: { value: 'min-content' },
  fit: { value: 'fit-content' },
  max: { value: 'max-content' },
});
