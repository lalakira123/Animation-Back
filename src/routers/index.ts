import { Router } from 'express';
import dotenv from 'dotenv';

import userRouter from './userRouter.js';
import testRouter from './testRouter.js';
import serieRouter from './serieRouter.js';
import categoryRouter from './categoryRouter.js';

dotenv.config();
const routers = Router();

routers.use(userRouter);
routers.use(serieRouter);
routers.use(categoryRouter);

if(process.env.NODE_ENV === 'test'){
  routers.use(testRouter);
}

export default routers;