const ORDER_RULES = require("./rules/order");
const REACT_RULES = require("./rules/react");
const TYPESCRIPT_RULES = require("./rules/typescript");

const PLUGINS = ["import", "prettier", "react", "react-hooks"];

module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    project: "./tsconfig.json",
    sourceType: "module",
  },

  overrides: [
    {
      files: ["*.jsx", "*.js"],
      extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
      ],
      plugins: ["babel", ...PLUGINS],
      rules: { ...REACT_RULES, ...ORDER_RULES },
    },
    {
      files: ["*.tsx", ".ts"],
      extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended",
      ],
      plugins: ["@typescript-eslint", ...PLUGINS],
      rules: { ...TYPESCRIPT_RULES, ...REACT_RULES, ...ORDER_RULES },
    },
  ],

  rules: {
    "no-console": "warn",
    ...REACT_RULES,
    ...ORDER_RULES,
  },

  settings: {
    react: {
      version: "detect",
    },
  },
};
