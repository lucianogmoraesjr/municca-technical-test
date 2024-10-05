import { Router } from 'express'
import { CreateDocumentController } from './create-document-controller'
import { FetchUserDocumentsController } from './fetch-user-documents-controller'
import { GetUserDocumentController } from './get-user-document-controller'
import { UpdateUserDocumentController } from './update-user-document-controller'

const documentsRoutes = Router()

const fetchUserDocumentsController = new FetchUserDocumentsController()
const getUserDocumentController = new GetUserDocumentController()
const createDocumentController = new CreateDocumentController()
const updateUserDocumentController = new UpdateUserDocumentController()

documentsRoutes.get('/', fetchUserDocumentsController.handle)
documentsRoutes.get('/:documentId', getUserDocumentController.handle)
documentsRoutes.post('/', createDocumentController.handle)
documentsRoutes.put('/:documentId', updateUserDocumentController.handle)

export { documentsRoutes }
