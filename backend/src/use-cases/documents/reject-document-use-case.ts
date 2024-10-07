import { AppError } from '@/errors/app-error'
import { DocumentsRepository } from '@/repositories/documents-repository'
import { UsersRepository } from '@/repositories/users-repository'

interface RejectDocumentUseCaseRequest {
  userId: string
  documentId: string
}

export class RejectDocumentUseCase {
  constructor(
    private documentsRepository: DocumentsRepository,
    private usersRepository: UsersRepository,
  ) {}

  async execute({ documentId, userId }: RejectDocumentUseCaseRequest) {
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

    await this.documentsRepository.update({
      id: documentId,
      userId: userId,
      status: 'REJECTED',
    })
  }
}
