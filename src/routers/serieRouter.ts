import { Router } from 'express';

import validateToken from './../middlewares/authHandlerMiddleware.js';
import { getRandom, getById } from '../controllers/serieController.js';

const serieRouter = Router();

serieRouter.use(validateToken);
serieRouter.get('/serie/random', getRandom);
serieRouter.get('/serie/:id', getById);

export default serieRouter;