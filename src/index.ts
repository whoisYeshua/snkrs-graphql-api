import Fastify from 'fastify'

const fastifyOptions = {
  logger: {
    transport: {
      target: 'pino-pretty',
      options: { destination: 1 },
    },
  },
}

const fastify = Fastify(fastifyOptions)

fastify.get('/', (request, reply) => {
  reply.send({ hello: 'build' })
})

fastify.listen({ port: 3000 }, err => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
