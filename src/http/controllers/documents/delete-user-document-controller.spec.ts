import { app } from '@/app'
import request from 'supertest'

describe('Delete user document (E2E)', () => {
  test('[DELETE] /documents/:documentId', async () => {
    const { body } = await request(app).post('/documents').send({
      name: 'document-name.test',
      userId: '4a6fd64d-d50e-4f53-b0c3-a9859d71e417',
    })

    const response = await request(app).delete(`/documents/${body.id}`).send()

    expect(response.status).toBe(204)
  })
})
