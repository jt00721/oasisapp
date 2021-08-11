import request from 'supertest';
import mongoose from 'mongoose';
import { app } from '../../app';

it('returns a 404 if the post is not found', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  await request(app).get(`/api/posts/${id}`).send().expect(404);
  
});

it('returns the post if the post is found', async () => {
  const message = 'concert';
  const date = '08/08/21';

  const response = await request(app)
    .post('/api/posts')
    .set('Cookie', global.signin())
    .send({
      message,
      date
    })
    .expect(201);

  const postResponse = await request(app)
    .get(`/api/posts/${response.body.id}`)
    .send()
    .expect(200);

  expect(postResponse.body.message).toEqual(message);
  expect(postResponse.body.date).toEqual(date);
});