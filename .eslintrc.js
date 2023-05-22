/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2022,
    sourceType: "module",
  },
  plugins: ["eslint-plugin-local-rules"],
  rules: {
    semi: 2,
    "no-console": 2,
    "local-rules/service-via-hook": 2,
  },
};
