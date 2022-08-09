import { Router } from 'express';

import validateToken from './../middlewares/authHandlerMiddleware.js';

import { getRandom } from '../controllers/serieController.js';

const serieRouter = Router();

serieRouter.use(validateToken);

serieRouter.get('/serie/random', getRandom);

export default serieRouter;