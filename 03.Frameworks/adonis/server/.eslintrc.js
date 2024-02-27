module.exports = {
    root: true,
    env: {
      node: true,
    },
    parserOptions: {
      ecmaVersion: 2021,
    },
    extends: [
      '@adonisjs',
      'plugin:adonis/eslint-recommended',
      'plugin:adonis/all',
    ],
    rules: {
        "quotes": ["error", "single", { "avoidEscape": true }],
        "semi": ["error", "always"],
    },
  };
  