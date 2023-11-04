import type { CodegenConfig } from '@graphql-codegen/cli'

const documentsPattern = '**/*.graphql'
const plugins = [
  'typescript',
  'typescript-operations',
  'named-operations-object',
  'typed-document-node',
]
const configDetails = {
  avoidOptionals: false,
  exposeQueryKeys: true,
  fetcher: {
    endpoint: 'http://localhost:3000/graphql',
  },
  pureMagicComment: true,
}
const config: CodegenConfig = {
  overwrite: true,
  schema: '../../apps/api/src/schema.gql',
  watch: true,
  generates: {
    './src/generated/index.tsx': {
      documents: `./src/${documentsPattern}`,
      plugins,
      config: configDetails,
    },
    '../../standalone-projects/mobile/gql/generated/index.tsx': {
      documents: `../../standalone-projects/mobile/${documentsPattern}`,
      plugins,
      config: configDetails,
    },
  },
}

export default config
