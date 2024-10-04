import { AppError } from '@/errors/app-error'
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { makeUser } from 'test/factories/make-user'
import { DeleteUserUseCase } from './delete-user-use-case'

let inMemoryUsersRepository: InMemoryUsersRepository
let sut: DeleteUserUseCase

describe('Delete user use case', () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository()
    sut = new DeleteUserUseCase(inMemoryUsersRepository)
  })

  it('should be able to delete a user', async () => {
    const mockedUser = await inMemoryUsersRepository.create(makeUser())

    expect(inMemoryUsersRepository.users.length).toBe(3)

    await sut.execute(mockedUser.id)

    expect(inMemoryUsersRepository.users.length).toBe(2)
  })

  it('should not be able to delete a non-existent user', async () => {
    await expect(sut.execute('non-existent-user-id')).rejects.toThrowError(
      AppError,
    )
  })
})
