import 'express-async-errors'

import express from 'express'
import { errorHandler } from './http/middlewares/error-handler'
import { router } from './router'

export const app = express()

app.use(express.json())

app.use(router)

app.use(errorHandler)
