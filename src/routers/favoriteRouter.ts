import { Router } from 'express';

import validateToken from '../middlewares/authHandlerMiddleware.js';

import { favoriteSerie } from '../controllers/favoriteController.js';

const favoriteRouter = Router();

favoriteRouter.use(validateToken);
favoriteRouter.post('/favorite/serie/:id', favoriteSerie);

export default favoriteRouter;