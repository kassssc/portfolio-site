module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-multi-spaces': 'off',
    'spaced-comment': 'off',
    'space-in-parens': 'off',
    'key-spacing': 'off',
    'camelcase': 'off',
    'unexpected-trailing-comma': 'off',
    'comma-dangle': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
