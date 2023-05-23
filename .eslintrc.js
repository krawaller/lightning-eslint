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
  plugins: [
    "eslint-plugin-local-rules", // Will expose rules defined in `/eslint-local-rules`
  ],
  rules: {
    semi: 2,
    "no-console": 2,

    // We set local rules with the prefix `local-rules/`
    "local-rules/service-via-hook": 2,

    // If you just want to lint against a certain syntax, then an alternative to defining local rules
    // is to add a case for `no-restricted-syntax` using AST selectors. Example:
    "no-restricted-syntax": [
      "error",
      {
        selector:
          ":matches(JSXElement, JSXFragment) > JSXExpressionContainer > LogicalExpression[operator='&&']",
        message:
          "Please use `condition ? <Jsx /> : undefined`. Otherwise, there is a chance of rendering '0' instead of '' in some cases. Context: https://stackoverflow.com/q/53048037",
      },
    ],
  },
};
