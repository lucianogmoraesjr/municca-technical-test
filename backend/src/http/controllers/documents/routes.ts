import { Router } from 'express'
import { ApproveDocumentController } from './approve-document-controller'
import { CreateDocumentController } from './create-document-controller'
import { DeleteUserDocumentController } from './delete-user-document-controller'
import { FetchUserDocumentsController } from './fetch-user-documents-controller'
import { GetUserDocumentController } from './get-user-document-controller'
import { RejectDocumentController } from './reject-document-controller'
import { UpdateUserDocumentController } from './update-user-document-controller'

const documentsRoutes = Router()

const fetchUserDocumentsController = new FetchUserDocumentsController()
const getUserDocumentController = new GetUserDocumentController()
const createDocumentController = new CreateDocumentController()
const updateUserDocumentController = new UpdateUserDocumentController()
const deleteUserDocumentController = new DeleteUserDocumentController()
const approveDocumentController = new ApproveDocumentController()
const rejectDocumentController = new RejectDocumentController()

documentsRoutes.get('/', fetchUserDocumentsController.handle)
documentsRoutes.get('/:documentId', getUserDocumentController.handle)
documentsRoutes.post('/', createDocumentController.handle)
documentsRoutes.put('/:documentId', updateUserDocumentController.handle)
documentsRoutes.patch('/:documentId/approve', approveDocumentController.handle)
documentsRoutes.patch('/:documentId/reject', rejectDocumentController.handle)
documentsRoutes.delete('/:documentId', deleteUserDocumentController.handle)

export { documentsRoutes }
