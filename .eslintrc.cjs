module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:vue/essential',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaVersion: 12,
  },
  overrides: [
    {
      files: [
        '.eslintrc.{js,cjs}',
        'public/**/*.js',
        'vite.config.{js,ts}',
        'plugins/**/*.{js,ts}',
        'mockSystem/**/*.{js,mjs,cjs}',
      ],
      parserOptions: {
        project: false,
      },
    },
    {
      files: ['src/**/*.vue'],
      parserOptions: {
        project: false,
        extraFileExtensions: ['.vue'],
      },
    },
  ],
  plugins: ['@typescript-eslint', 'import', 'prettier', 'vue'],
  rules: {
    'vue/multi-word-component-names': 'off',
    'no-console': ['error', { allow: ['warn', 'error', 'debug'] }],
    'no-debugger': 'error',
    'no-alert': 'error',
    'vue/no-multiple-template-root': 'off',
    'prettier/prettier': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/ban-ts-comment': 'off',
    'no-undef': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-var': 'error',
    'prefer-rest-params': 'error',
    eqeqeq: 'error',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-multi-spaces': 'error',
    'no-dupe-args': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
  },
}
