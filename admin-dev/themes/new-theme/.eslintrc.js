// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    jquery: true,
  },
  globals: {
    google: true,
    document: true,
    navigator: false,
    window: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'prestashop',
    'plugin:vue/strongly-recommended'
  ],
  plugins: [
    'import',
    'vue',
  ],
  rules: {
    'no-new': 0,
    'func-names': 0,
    'no-alert': 0,
    'no-bitwise': 0,
    'class-methods-use-this': 0,
    'max-len': ['error', { code: 120 }],
    'no-param-reassign': ['error', { props: false }],
    'prefer-destructuring': ['error', {object: true, array: false}],
    'no-restricted-globals': [
      'error',
      {
        name: 'global',
        message: 'Use window variable instead.',
      },
    ],
    'vue/script-indent': [
      'error',
      2,
      {
        baseIndent: 1,
        switchCase: 1,
      }
    ],
  },
  settings: {
    'import/resolver': 'webpack',
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 0,
      },
    },
  ],
};
