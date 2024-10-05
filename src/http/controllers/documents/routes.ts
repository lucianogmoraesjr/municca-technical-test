import { Router } from 'express'
import { CreateDocumentController } from './create-document-controller'
import { FetchUserDocumentsController } from './fetch-user-documents-controller'

const documentsRoutes = Router()

const fetchUserDocumentsController = new FetchUserDocumentsController()
const createDocumentController = new CreateDocumentController()

documentsRoutes.get('/', fetchUserDocumentsController.handle)
documentsRoutes.post('/', createDocumentController.handle)

export { documentsRoutes }
