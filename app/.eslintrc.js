module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 10,
    sourceType: "module",
    allowImportExportEverywhere: true,
  },
  plugins: ["react"],
  settings: {
    react: {
      version: "17",
    },
  },
  rules: {},
  globals: {
    process: true,
  },
  overrides: [
    {
      files: ["**/*.test.js"],
      env: {
        jest: true,
      },
      plugins: ["jest"],
      rules: {
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error",
      },
    },
  ],
};
