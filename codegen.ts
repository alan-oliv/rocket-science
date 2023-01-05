import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://api.spacex.land/graphql/',
  documents: 'containers/**/!(*.d).{ts,tsx}',
  generates: {
    'generated/graphql.ts': {
      plugins: ['typescript', 'typescript-operations', 'fragment-matcher'],
      config: {
        apolloClientVersion: 3,
        useTypeImports: true,
        dedupeOperationSuffix: true,
        namingConvention: 'keep',
      },
    },
  },
};

export default config;
