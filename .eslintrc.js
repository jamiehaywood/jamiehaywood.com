// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

const foldersUnderSrc = fs
  .readdirSync('src', { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

module.exports = {
  extends: ['react-app'],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['simple-import-sort'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-restricted-globals': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'sort-imports': 'off',
    'no-console': 'warn',
    'no-debugger': 'warn',
    'id-length': ['warn', { min: 2, exceptions: ['e', '_'] }],
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  },
  overrides: [
    {
      files: ['*.tsx', '*.ts', '*.js', '*.jsx'],
      rules: {
        'simple-import-sort': [
          'error',
          {
            groups: [
              ['^react', '^@?\\w'],
              // Internal packages.
              ['^(@|@company|@ui|components|utils|config|vendored-lib)(/.*|$)'],
              // Side effect imports.
              ['^\\u0000'],
              // Parent imports. Put `..` last.
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              [`^(${foldersUnderSrc.join('|')})(/.*|$)`, '^\\.'],
              // Other relative imports. Put same-folder imports and `.` last.
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              // Style imports.
              ['^.+\\.s?css$'],
            ],
          },
        ],
      },
    },
    {
      files: '.eslintrc.js',
      rules: {
        'simple-import-sort/imports': 'off',
      },
    },
  ],
};
