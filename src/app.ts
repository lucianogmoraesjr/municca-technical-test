import 'express-async-errors'

import express from 'express'
import swaggerUI from 'swagger-ui-express'

import swaggerDocument from '../swagger.json'
import { errorHandler } from './http/middlewares/error-handler'
import { router } from './router'

export const app = express()

app.use(express.json())

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
app.use(router)

app.use(errorHandler)
