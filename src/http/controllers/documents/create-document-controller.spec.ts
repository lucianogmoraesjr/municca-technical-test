import { app } from '@/app'
import request from 'supertest'

describe('Create document (E2E)', () => {
  test('[POST] /documents', async () => {
    const response = await request(app).post('/documents').send({
      name: 'document-name.test',
      userId: '4a6fd64d-d50e-4f53-b0c3-a9859d71e417',
    })

    expect(response.status).toBe(201)
    expect(response.body).toMatchObject({
      id: expect.any(String),
    })
  })
})
