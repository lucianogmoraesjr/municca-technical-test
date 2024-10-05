import { AppError } from '@/errors/app-error'
import { DocumentsRepository } from '@/repositories/documents-repository'
import { UsersRepository } from '@/repositories/users-repository'

interface UpdateUserDocumentUseCaseRequest {
  id: string
  name: string
  userId: string
}

export class UpdateUserDocumentUseCase {
  constructor(
    private documentsRepository: DocumentsRepository,
    private usersRepository: UsersRepository,
  ) {}

  async execute({ id, name, userId }: UpdateUserDocumentUseCaseRequest) {
    const usersExists = await this.usersRepository.getById(userId)

    if (!usersExists) {
      throw new AppError('User not found', 404)
    }

    const documentExists = await this.documentsRepository.getByIdAndUserId({
      documentId: id,
      userId,
    })

    if (!documentExists) {
      throw new AppError('Document not found', 404)
    }

    const updatedDocument = await this.documentsRepository.update({
      id,
      name,
      userId,
    })

    return updatedDocument
  }
}
