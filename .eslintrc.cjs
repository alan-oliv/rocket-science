module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'prettier',
    'next/core-web-vitals',
  ],
  rules: {
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          Function: false,
          '{}': false,
        },
      },
    ],
    '@typescript-eslint/consistent-type-imports': 'error',
    // We are using TypeScript
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
