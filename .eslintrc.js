module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
  },

  extends: ['@nuxt/eslint-config'],

  ignorePatterns: ['dist/**/*', '.output/**/*', '.nuxt/**/*'],

  rules: {
    // '@typescript-eslint/no-this-alias': 'off',
    // '@typescript-eslint/no-unused-vars': 'off',
    // '@typescript-eslint/no-var-requires': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-v-html': 'off',
    'vue/require-explicit-emits': 'off',
    'vue/script-setup-no-uses-vars': 'off',
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 4,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    'max-len': ['error', { code: 80 }],
  },
};
