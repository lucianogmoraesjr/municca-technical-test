import { app } from '@/app'
import request from 'supertest'

describe('Delete user document (E2E)', () => {
  test('[DELETE] /documents/:documentId', async () => {
    const { body: authResponseBody } = await request(app).post('/auth').send({
      email: 'john@mail.com',
      password: '12345678',
    })

    const { body } = await request(app)
      .post('/documents')
      .set('Authorization', `Bearer ${authResponseBody.accessToken}`)
      .send({
        name: 'document-name.test',
      })

    const response = await request(app)
      .delete(`/documents/${body.id}`)
      .set('Authorization', `Bearer ${authResponseBody.accessToken}`)
      .send()

    expect(response.status).toBe(204)
  })
})
