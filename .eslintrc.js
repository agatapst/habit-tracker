module.exports = {
  parser: 'eslint/parser',
  env: {
    browser: true,
    es6: true
  },
  extends: ['plugin:eslint/recommended', 'prettier/eslint', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'require-jsdoc': 0,
    'no-invalid-this': 0,
    'eslint/no-unused-vars': 0,
    'eslint/explicit-function-return-type': 0,
    'eslint/no-object-literal-type-assertion': 0,
    'eslint/no-parameter-properties': 0,
    'eslint/no-empty-interface': 1,
    'eslint/no-non-null-assertion': 0
  }
};
