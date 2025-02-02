import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import imports from 'eslint-plugin-import';
import importsSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import svelteParser from 'svelte-eslint-parser';

import fs from 'node:fs';
import path from 'node:path';
import ig from 'ignore';

const matcher = ig().add(fs.readFileSync('.gitignore', 'utf8'));

const ignore = (p) => {
  const relative = path.relative(process.cwd(), p);
  if (relative.length === 0) {
    return false;
  }

  return matcher.ignores(relative);
};


const compat = new FlatCompat();

/** @type {import('eslint').Linter.Config[]} */
// eslint-disable-next-line import/no-default-export
export default [
  { ignores: [ignore] },
  js.configs.recommended,
  ...compat.extends(
    'plugin:unicorn/recommended',
    'plugin:@typescript-eslint/strict',
    'plugin:@typescript-eslint/stylistic',
    'plugin:svelte/recommended',
    'plugin:svelte/prettier',
  ),
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.node, ...globals.browser },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.svelte'],
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    plugins: { import: imports, 'import-sort': importsSort },
    rules: {
      'no-undef': 'off',
      'object-shorthand': ['error', 'always'],
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
      'import/first': 'error',
      'import/newline-after-import': ['error', { considerComments: true }],
      'import/no-default-export': 'error',
      'import/no-duplicates': 'error',
      'import/no-named-default': 'error',
      'import-sort/exports': 'error',
      'import-sort/imports': [
        'error',
        {
          groups: [
            [String.raw`^\u0000`],
            [
              '^node:',
              String.raw`^@?\w`,
              '^',
              String.raw`^\.`,
              String.raw`^node:.*\u0000$`,
              String.raw`^@?\w.*\u0000$`,
              String.raw`\u0000$`,
              String.raw`^\..*\u0000$`,
            ],
          ],
        },
      ],
      'svelte/infinite-reactive-loop': 'error',
      'svelte/no-at-html-tags': 'off',
      'svelte/no-dupe-on-directives': 'error',
      'svelte/no-dupe-use-directives': 'error',
      'svelte/no-reactive-reassign': 'error',
      'svelte/no-store-async': 'error',
      'svelte/no-target-blank': 'error',
      'svelte/block-lang': ['error', { script: ['ts'] }],
      'svelte/button-has-type': 'error',
      'svelte/no-reactive-functions': 'error',
      'svelte/no-reactive-literals': 'error',
      'svelte/no-useless-mustaches': 'error',
      'svelte/require-each-key': 'error',
      'svelte/no-extra-reactive-curlies': 'error',
      'svelte/sort-attributes': 'error',
      'unicorn/catch-error-name': ['error', { name: 'err' }],
      'unicorn/consistent-function-scoping': 'off',
      'unicorn/no-array-callback-reference': 'off',
      'unicorn/no-array-for-each': 'off',
      'unicorn/no-array-method-this-argument': 'off',
      'unicorn/no-empty-file': 'off',
      'unicorn/no-null': 'off',
      'unicorn/no-process-exit': 'off',
      'unicorn/no-useless-undefined': 'off',
      'unicorn/prefer-code-point': 'off',
      'unicorn/prefer-global-this': 'off',
      'unicorn/prefer-switch': 'off',
      'unicorn/prefer-ternary': 'off',
      'unicorn/prefer-top-level-await': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/switch-case-braces': 'off',
    },
  },
  {
    files: ['**/*.config.[jt]s'],
    rules: {
      'import/no-default-export': 'off',
    },
  },
  {
    files: ['**/*.[jt]sx'],
    rules: {
      'import/no-default-export': 'off',
      'unicorn/filename-case': ['error', { cases: { kebabCase: true, pascalCase: true } }],
    },
  },
  {
    files: ['**/pulumi/**/*'],
    rules: {
      'unicorn/prefer-spread': 'off',
    },
  },
  {
    files: ['**/lib/types/**/*'],
    rules: {
      '@typescript-eslint/consistent-indexed-object-style': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
    rules: {
      'unicorn/filename-case': ['error', { cases: { kebabCase: true, pascalCase: true } }],
    },
  },
  ...compat.extends('prettier'),
];
