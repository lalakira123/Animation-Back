import { Router } from 'express';

import validateSchema from './../middlewares/schemaHandlerMiddleware.js';
import { createUserSchema } from './../schemas/userSchema.js';

import { createUser } from './../controllers/userController.js';

const userRouter = Router();

userRouter.post('/signup', validateSchema(createUserSchema), createUser);
userRouter.post('/signin');

export default userRouter;