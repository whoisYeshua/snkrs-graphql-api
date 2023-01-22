import { makeExecutableSchema } from '@graphql-tools/schema'
import { loadFiles } from '@graphql-tools/load-files'

const resolvers = await loadFiles('src/resolvers/**/*.ts')
const typeDefs = await loadFiles('src/typeDefs/**/*.gql')

export const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
})
