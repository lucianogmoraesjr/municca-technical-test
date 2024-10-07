import { NextFunction, Request, Response } from 'express'
import { ZodError } from 'zod'

import { AppError } from '@/errors/app-error'

export function errorHandler(
  error: Error,
  request: Request,
  response: Response,
  _: NextFunction,
) {
  if (error instanceof AppError) {
    response.status(error.statusCode).json({ message: error.message })
    return
  }

  if (error instanceof ZodError) {
    response.status(400).json({
      message: 'Validation error',
      issues: error.flatten().fieldErrors,
    })

    return
  }

  console.error(error)

  response.sendStatus(500)
  return
}
