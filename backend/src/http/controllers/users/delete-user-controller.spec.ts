import { app } from '@/app'
import request from 'supertest'

describe('Delete user (E2E)', () => {
  test('[DELETE] /users/:userId', async () => {
    const response = await request(app)
      .delete('/users/4a6fd64d-d50e-4f53-b0c3-a9859d71e417')
      .send()

    expect(response.status).toBe(204)
  })
})
