import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export interface GraphQLContext {
  prisma: PrismaClient
}

export const context: GraphQLContext = {
  prisma,
}
