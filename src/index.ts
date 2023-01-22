import { createServer } from 'node:http'

import { createYoga } from 'graphql-yoga'

import { schema } from './schema'
import { context } from './context'

const yoga = createYoga({ schema, context })
const server = createServer(yoga)
server.listen(4000, () => {
  console.info('Server is running on http://localhost:4000/graphql')
})
