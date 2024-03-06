import fastify from 'fastify'
import cookie from '@fastify/cookie'

import { transactionsRoutes } from './routes/transactions'

export const app = fastify()

app.register(cookie) // precisa vir antes dos registros das rotas

app.register(transactionsRoutes, {
  prefix: 'transactions',
})
