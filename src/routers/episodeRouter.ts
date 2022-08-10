import { Router } from 'express';

import validateToken from '../middlewares/authHandlerMiddleware.js';

import { getById } from '../controllers/episodeController.js';

const episodeRouter = Router();

episodeRouter.use(validateToken);
episodeRouter.get('/episode/:id', getById);

export default episodeRouter;