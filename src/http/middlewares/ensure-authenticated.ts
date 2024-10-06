import { AppError } from '@/errors/app-error'
import { NextFunction, Request, Response } from 'express'
import { JwtPayload, verify } from 'jsonwebtoken'

interface Payload extends JwtPayload {
  sub: string
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    throw new AppError('Token is missing', 401)
  }

  const [bearer, token] = authHeader.split(' ')

  if (bearer !== 'Bearer') {
    throw new AppError('Invalid token', 401)
  }

  try {
    const payload = verify(token, 'jwt-secret') as Payload

    request.user = {
      id: payload.sub,
    }

    return next()
  } catch {
    throw new AppError('Invalid token', 401)
  }
}
