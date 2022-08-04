import { Router } from 'express';

import userRouter from './userRouter.js';

const routers = Router();

routers.use(userRouter);

export default routers;