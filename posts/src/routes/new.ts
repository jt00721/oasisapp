import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { requireAuth, validateRequest } from '@jtgoasis/common';
import { Post } from '../models/post';

const router = express.Router();

router.post(
  '/api/posts',
  requireAuth,
  [
    body('message')
        .not()
        .isEmpty()
        .withMessage('Message is required'),
    body('date')
        .not()
        .isEmpty()
        .withMessage('Must be a valid date')
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { message, date } = req.body;
    const post = Post.build({
        message,
        date,
        userId: req.currentUser!.id,
    });
    await post.save();
    return res.status(201).send(post);
  }
);

export { router as createPostRouter };