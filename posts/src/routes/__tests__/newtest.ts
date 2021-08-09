import request from 'supertest';
import { app } from '../../app';
import { Post } from '../../models/post';

it('has a route handler listening to /api/posts fro post requests', async () => {
  const response = await request(app)
    .post('/api/posts')
    .send({});

  expect(response.status).not.toEqual(404);
});

it('can only be accessed if the user is signed in', async () => {
  await request(app)
    .post('/api/posts')
    .send({})
    .expect(401);
});

it('returns a status other than 401 if the user is signed in', async () => {
  const response = await request(app)
    .post('/api/posts')
    .set('Cookie', global.signin())
    .send({});

  expect(response.status).not.toEqual(401);
});

it('returns an error if an invalid message is provided', async () => {
  await request(app)
    .post('/api/posts')
    .set('Cookie', global.signin())
    .send({
      message: '',
      date: '08/08/21'
    })
    .expect(400);

  await request(app)
    .post('/api/posts')
    .set('Cookie', global.signin())
    .send({
      date: '08/08/21'
    })
    .expect(400);
});

it('returns an error if an invalid date is provided', async () => {
  await request(app)
    .post('/api/posts')
    .set('Cookie', global.signin())
    .send({
      message: 'asdfgkjf',
      date: '',
    })
    .expect(400);

  await request(app)
    .post('/api/posts')
    .set('Cookie', global.signin())
    .send({
      message: 'asdfgkjf',
    })
    .expect(400);
});

it('creates a post with valid inputs', async () => {
  let posts = await Post.find({});
  expect(posts.length).toEqual(0);

  const message = 'asdfgkjf';

  await request(app)
    .post('/api/posts')
    .set('Cookie', global.signin())
    .send({
      message,
      date: '08/08/21'
    })
    .expect(201);

  posts = await Post.find({});

  expect(posts.length).toEqual(1);
  expect(posts[0].date).toEqual('08/08/21');
  expect(posts[0].message).toEqual(message);
});