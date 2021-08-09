import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import {
  validateRequest,
  NotFoundError,
  requireAuth,
  NotAuthorisedError,
} from '@jtgoasis/common';
import { Post } from '../models/post';

const router = express.Router();

router.put(
  '/api/posts/:id',
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
    const post = await Post.findById(req.params.id);

    if (!post) {
      throw new NotFoundError();
    }

    if (post.userId !== req.currentUser!.id) {
      throw new NotAuthorisedError();
    }

    post.set({
      message: req.body.message,
      date: req.body.date,
    });

    await post.save();

    return res.status(200).send(post);
  }
);

export { router as updatePostRouter };
