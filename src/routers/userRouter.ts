import { Router } from 'express';

import validateSchema from './../middlewares/schemaHandlerMiddleware.js';
import { createUserSchema, loginUserSchema } from './../schemas/userSchema.js';

import { createUser, loginUser } from './../controllers/userController.js';

const userRouter = Router();

userRouter.post('/signup', validateSchema(createUserSchema), createUser);
userRouter.post('/signin', validateSchema(loginUserSchema), loginUser);

export default userRouter;