// @ts-check
import globals from 'globals';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt([
  {
    files: ['**/*.{ts,js,vue}'],
    ignores: [
      '**/.gitignore',
      '.nuxt/**/*',
      '.output/**/*',
      'dist/**/*',
      'node_modules/**/*',
      'vendor/**/*',
    ],

    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },

    rules: {
      'max-len': ['error', { code: 100 }],
      indent: ['error', 2, { SwitchCase: 1 }],

      semi: ['error', 'always'],

      quotes: ['error', 'single', {
        allowTemplateLiterals: true,
        avoidEscape: true,
      }],

      curly: ['error', 'all'],
      'comma-dangle': ['error', 'always-multiline'],

      'prefer-destructuring': ['error', {
        object: true,
        array: false,
      }],

      'no-empty-source': 0,
      'no-prototype-builtins': 0,
      'object-curly-spacing': ['error', 'always'],
      'no-console': ['error', { allow: ['warn', 'error'] }],
      '@typescript-eslint/ban-ts-comment': 0,
      '@typescript-eslint/no-this-alias': 0,
      '@typescript-eslint/no-extraneous-class': 0,
      '@typescript-eslint/no-explicit-any': 0,
      'vue/multi-word-component-names': 0,
      'vue/no-v-html': 0,
      'vue/singleline-html-element-content-newline': 0,
      'vue/html-self-closing': 0,

      'vue/max-attributes-per-line': ['error', {
        singleline: { max: 4 },
        multiline: { max: 1 },
      }],
    },
  },
]);
