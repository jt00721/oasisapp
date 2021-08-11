import request from 'supertest';
import { app } from '../../app';
import mongoose from 'mongoose';

it('return a 404 if the provided id does not exist', async () => {
  const id = mongoose.Types.ObjectId().toHexString();

  await request(app)
    .put(`/api/posts/${id}`)
    .set('Cookie', global.signin())
    .send({
      message: 'aslkdfj',
      date: '08/08/21',
    })
    .expect(404);
});

it('returns a 401 if the user is not authenticated', async () => {
  const id = mongoose.Types.ObjectId().toHexString();

  await request(app)
    .put(`/api/posts/${id}`)
    .send({
      message: 'aslkdfj',
      date: '08/08/21',
    })
    .expect(401);
});

it('return a 401 if the user does not own the post', async () => {
  const response = await request(app)
    .post('/api/posts')
    .set('Cookie', global.signin())
    .send({
      message: 'aslkdfj',
      date: '08/08/21',
    });
    // .expect(201);

  await request(app)
    .put(`/api/posts/${response.body.id}`)
    .set('Cookie', global.signin())
    .send({
      message: 'aslkdfj1',
      date: '09/08/21',
    })
    .expect(401);
});

it('return a 400 if the user provides an invalid message or date', async () => {
  const cookie = global.signin();

  const response = await request(app)
    .post('/api/posts')
    .set('Cookie', cookie)
    .send({
        message: 'aslkdfj',
      date: '08/08/21',
    })
    .expect(201);

  await request(app)
    .put(`/api/posts/${response.body.id}`)
    .set('Cookie', cookie)
    .send({
      message: '',
      date: '08/08/21',
    })
    .expect(400);

  await request(app)
    .put(`/api/posts/${response.body.id}`)
    .set('Cookie', cookie)
    .send({
      message: 'aslkdfj',
      date: '',
    })
    .expect(400);
});

it('updates the post provided valid input', async () => {
  const cookie = global.signin();

  const response = await request(app)
    .post('/api/posts')
    .set('Cookie', cookie)
    .send({
      message: 'aslkdfj',
      date: '08/08/21',
    })
    .expect(201);

  await request(app)
    .put(`/api/posts/${response.body.id}`)
    .set('Cookie', cookie)
    .send({
      message: 'new message',
      date: '09/08/21',
    })
    .expect(200);

  const postResponse = await request(app)
    .get(`/api/posts/${response.body.id}`)
    .send();

  expect(postResponse.body.message).toEqual('new message');
  expect(postResponse.body.date).toEqual('09/08/21');
});
