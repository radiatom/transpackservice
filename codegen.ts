import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://xcmg.devseonet.com/graphql',
  documents: 'src/**/*.graphql.ts',
  generates: {
    'src/graphql/generated/index.tsx': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
    },
  },
}
export default config
