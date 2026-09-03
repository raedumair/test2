const js = require("@eslint/js");

/**
 * Flat config, ESLint 9. `recommended` is what makes the checks real rather
 * than decorative — `no-undef` alone catches the `print(...)` call in
 * test.js, which throws the moment the file runs.
 */
module.exports = [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "commonjs",
      globals: { console: "readonly", require: "readonly", module: "writable" },
    },
    rules: {
      eqeqeq: "error",
      "no-var": "error",
      "prefer-const": "error",
    },
  },
];
