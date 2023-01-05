module.exports = {
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'lf',
  jsxSingleQuote: true,
  printWidth: 80,
  requirePragma: false,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  overrides: [
    {
      files: '*.md',
      options: {
        singleQuote: false,
        proseWrap: 'always',
      },
    },
    {
      files: 'tsconfig.json',
      options: {
        parser: 'json5',
        quoteProps: 'preserve',
        singleQuote: false,
        trailingComma: 'all',
      },
    },
  ],
};
