import { AppError } from '@/errors/app-error'
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { makeUser } from 'test/factories/make-user'
import { UpdateUserUseCase } from './update-user-use-case'

let inMemoryUsersRepository: InMemoryUsersRepository
let sut: UpdateUserUseCase

describe('Update user use case', () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository()
    sut = new UpdateUserUseCase(inMemoryUsersRepository)
  })

  it('should be able to update a user', async () => {
    const mockedUser = await inMemoryUsersRepository.create(makeUser())

    const updatedUser = await sut.execute({
      id: mockedUser.id,
      name: 'John Doe',
      email: 'john@mail.com',
    })

    expect(inMemoryUsersRepository.users[2]).toEqual(updatedUser)
  })

  it('should not be able to update a non-existent user', async () => {
    await expect(
      sut.execute({
        id: 'non-existent-user-id',
        email: 'nonexistent@mail.com',
        name: 'Non-Existent',
      }),
    ).rejects.toThrowError(AppError)
  })
})
