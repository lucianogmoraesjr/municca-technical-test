import 'express-async-errors'

import cors from 'cors'
import express from 'express'
import { rateLimit } from 'express-rate-limit'
import swaggerUI from 'swagger-ui-express'

import swaggerDocument from '../swagger.json'
import { errorHandler } from './http/middlewares/error-handler'
import { router } from './router'

export const app = express()

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100,
  standardHeaders: true,
  legacyHeaders: false,
})

app.use(limiter)

app.use(
  cors({
    origin: 'http://localhost:5173',
  }),
)

app.use(express.json())

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
app.use(router)

app.use(errorHandler)
