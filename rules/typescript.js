module.exports = {
  "@typescript-eslint/no-unused-vars": "error",
  "@typescript-eslint/no-explicit-any": "error",
  "@typescript-eslint/naming-convention": [
    "error",
    {
      selector: "default",
      format: ["camelCase"],
    },
    // PascalCase for Classes, Interfaces, Types, ...
    {
      selector: "typeLike",
      format: ["PascalCase"],
    },
    {
      selector: "enumMember",
      format: ["UPPER_CASE"],
    },
    {
      selector: "variable",
      format: ["camelCase", "UPPER_CASE", "PascalCase"],
    },
    {
      selector: "parameter",
      format: ["camelCase", "PascalCase"],
    },
    // camelCase | snake_case | PascalCase for regular properties
    {
      selector: "property",
      format: ["camelCase", "snake_case", "PascalCase"],
    },
    // properties with single or double leading-underscores will be camelCase (__html, _id, ...)
    {
      selector: "property",
      format: ["camelCase"],
      prefix: ["__", "_"],
      filter: {
        regex: "^_+",
        match: true,
      },
    },
    // ignore format from quoted properties following BEM nomenclature for CSSinJS
    {
      selector: "property",
      format: [],
      filter: {
        regex: ".+[--|__].+",
        match: true,
      },
    },
  ],
};
