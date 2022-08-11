import { Router } from 'express';

import validateToken from './../middlewares/authHandlerMiddleware.js';
import { getRandom, getSerieSeasonAndEpisodeById } from '../controllers/serieController.js';

const serieRouter = Router();

serieRouter.use(validateToken);
serieRouter.get('/serie/random', getRandom);
serieRouter.get('/serie/:id', getSerieSeasonAndEpisodeById);

export default serieRouter;