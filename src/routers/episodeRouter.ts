import { Router } from 'express';

import validateToken from '../middlewares/authHandlerMiddleware.js';

import { getById, getNextEpisodeId } from '../controllers/episodeController.js';

const episodeRouter = Router();

episodeRouter.use(validateToken);
episodeRouter.get('/episode/:id', getById);
episodeRouter.get('/episode/next-previous/:id', getNextEpisodeId);

export default episodeRouter;