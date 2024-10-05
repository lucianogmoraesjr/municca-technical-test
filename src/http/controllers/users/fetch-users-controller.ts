import { makeFetchUsersUseCase } from '@/use-cases/users/factories/make-fetch-users-use-case'
import { Request, Response } from 'express'

export class FetchUsersController {
  async handle(request: Request, response: Response) {
    const fetchUsersUseCase = makeFetchUsersUseCase()

    const users = await fetchUsersUseCase.execute()

    response.json(users)
  }
}
