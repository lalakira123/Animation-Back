import { Router } from 'express';

import validateToken from '../middlewares/authHandlerMiddleware.js';
import validateSchema from '../middlewares/schemaHandlerMiddleware.js';

import { commentSchema } from '../schemas/commentSchema.js';

import { listComments, postComment } from '../controllers/commentController.js';

const commentRouter = Router();

commentRouter.use(validateToken);
commentRouter.post('/comment', validateSchema(commentSchema), postComment);
commentRouter.get('/comment/episode/:id', listComments);
commentRouter.delete('/comment');

export default commentRouter;
