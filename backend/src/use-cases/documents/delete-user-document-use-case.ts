import { AppError } from '@/errors/app-error'
import { DocumentsRepository } from '@/repositories/documents-repository'
import { UsersRepository } from '@/repositories/users-repository'

interface DeleteUserDocumentUseCaseRequest {
  documentId: string
  userId: string
}

export class DeleteUserDocumentUseCase {
  constructor(
    private documentsRepository: DocumentsRepository,
    private usersRepository: UsersRepository,
  ) {}

  async execute({ documentId, userId }: DeleteUserDocumentUseCaseRequest) {
    const userExists = await this.usersRepository.getById(userId)

    if (!userExists) {
      throw new AppError('User not found', 404)
    }

    const documentExists = await this.documentsRepository.getByIdAndUserId({
      documentId,
      userId,
    })

    if (!documentExists) {
      throw new AppError('Document not found', 404)
    }

    await this.documentsRepository.deleteByUserId({
      documentId,
      userId,
    })
  }
}
