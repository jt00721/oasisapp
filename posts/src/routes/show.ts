import express, { Request, Response } from 'express';
import { NotFoundError } from '@jtgoasis/common';
import { Post } from '../models/post';

const router = express.Router();

router.get('/api/posts/:id', async (req: Request, res: Response) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    throw new NotFoundError();
  }

  return res.status(200).send(post);
});

export { router as showPostRouter };