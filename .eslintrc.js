module.exports = {
  root: true, // Make sure eslint picks up the config at the root of the directory
  parserOptions: {
    ecmaVersion: 2020, // Use the latest ecmascript standard
    sourceType: 'module', // Allows using import/export statements
    ecmaFeatures: {
      jsx: true, // Enable JSX since we're using React
    },
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['.'],
      },
    },
    react: {
      version: 'detect', // Automatically detect the react version
    },
  },
  env: {
    amd: true, // Enables require() and define() as global variables as per the amd spec.
    browser: true, // Enables browser globals like window and document
    'jest/globals': true,
    node: true, // Enables Node.js global variables and Node.js scoping.
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended', // Make this the last element so prettier config overrides other formatting rules
  ],
  plugins: ['jest'],
  rules: {
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: 'src/**/*',
            group: 'parent',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Use our .prettierrc file as source
  },
};
