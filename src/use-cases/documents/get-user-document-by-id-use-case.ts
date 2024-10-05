import { AppError } from '@/errors/app-error'
import { DocumentsRepository } from '@/repositories/documents-repository'
import { UsersRepository } from '@/repositories/users-repository'

interface GetUserDocumentByIdUseCaseRequest {
  documentId: string
  userId: string
}

export class GetUserDocumentByIdUseCase {
  constructor(
    private documentsRepository: DocumentsRepository,
    private usersRepository: UsersRepository,
  ) {}

  async execute({ documentId, userId }: GetUserDocumentByIdUseCaseRequest) {
    const userExists = await this.usersRepository.getById(userId)

    if (!userExists) {
      throw new AppError('User not found', 404)
    }

    const document = await this.documentsRepository.getByIdAndUserId({
      documentId,
      userId,
    })

    if (!document) {
      throw new AppError('Document not found', 404)
    }

    return document
  }
}
