import { Router } from 'express';
import dotenv from 'dotenv';

import userRouter from './userRouter.js';
import testRouter from './testRouter.js';

dotenv.config();
const routers = Router();

routers.use(userRouter);

if(process.env.NODE_ENV === 'test'){
  routers.use(testRouter);
}

export default routers;