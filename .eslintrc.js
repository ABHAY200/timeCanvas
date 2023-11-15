module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  // YO_FIXME: Use below lint plugins for react-hooks & typescript
  // Eg: 'airbnb-typescript', 'airbnb/hooks', '@react-native-community'
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'eslint-config-prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', '@typescript-eslint', 'jest', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
      },
    ],
    'react/jsx-filename-extension': [
      2,
      {extensions: ['.js', '.jsx', '.ts', '.tsx']},
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-param-reassign': 'off',
    'react/prop-types': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        controlComponents: ['Field', 'FastField'],
        assert: 'either',
        depth: 3,
      },
    ],
    'react/jsx-props-no-spreading': ['off'],
    'react/require-default-props': 'off',
    camelcase: 'off',
    'no-shadow': 'error',
    'no-console': 'error',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  overrides: [
    {
      files: ['**/*.stories.*'],
      rules: {
        'import/no-anonymous-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        'react/jsx-props-no-spreading': 'off',
      },
    },
    {
      files: ['**/*.test.*', 'test-utils.tsx', 'setupTests.ts'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
  globals: {
    JSX: true,
  },
};
