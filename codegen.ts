import type { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
  schema: 'http://localhost:1337/graphql',
  documents: './src/app/graphql/queries/*.graphql',
  generates: {
    './src/app/graphql/generated.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-apollo-angular'],
      config: {
        strictScalars: true,
      }
    }
  }
}
export default config
