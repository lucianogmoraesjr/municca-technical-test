import { AppError } from '@/errors/app-error'
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { makeUser } from 'test/factories/make-user'
import { GetUserUseCase } from './get-user-use-case'

let inMemoryUsersRepository: InMemoryUsersRepository
let sut: GetUserUseCase

describe('Get user use case', () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository()
    sut = new GetUserUseCase(inMemoryUsersRepository)
  })

  it('should be able to get user by id', async () => {
    const mockedUser = await inMemoryUsersRepository.create(makeUser())

    const user = await sut.execute(mockedUser.id)

    expect(user).toEqual(mockedUser)
  })

  it('should not be able to get a non-existent user', async () => {
    await expect(sut.execute('non-existent-user-id')).rejects.toThrowError(
      AppError,
    )
  })
})
