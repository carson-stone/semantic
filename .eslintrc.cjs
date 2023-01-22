module.exports = {
  root: true,
  env: {
    es2020: true,
    node: true,
  },
  extends: [
    'eslint-config-airbnb-typescript/base',
    'eslint-config-airbnb-base',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
  ],
  plugins: [
    'import',
    '@typescript-eslint',
  ],
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
  },
  ignorePatterns: [
    'out',
  ],
};
