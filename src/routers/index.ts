import { Router } from 'express';
import dotenv from 'dotenv';

import userRouter from './userRouter.js';
import testRouter from './testRouter.js';
import serieRouter from './serieRouter.js';
import categoryRouter from './categoryRouter.js';
import episodeRouter from './episodeRouter.js';
import favoriteRouter from './favoriteRouter.js';
import commentRouter from './commentRouter.js';

dotenv.config();
const routers = Router();

routers.use(userRouter);
routers.use(serieRouter);
routers.use(categoryRouter);
routers.use(episodeRouter);
routers.use(favoriteRouter);
routers.use(commentRouter);

if(process.env.NODE_ENV === 'test'){
  routers.use(testRouter);
}

export default routers;