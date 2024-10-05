import { NextFunction, Request, Response } from 'express'
import { ZodError } from 'zod'

import { AppError } from '@/errors/app-error'

export function errorHandler(
  error: Error,
  request: Request,
  response: Response,
  _next: NextFunction,
) {
  if (error instanceof AppError) {
    response.status(error.statusCode).json({ message: error.message })
  }

  if (error instanceof ZodError) {
    response.status(400).json({
      message: 'Validation error',
      issues: error.flatten().fieldErrors,
    })
  }

  console.error(error)

  response.sendStatus(500)
}
