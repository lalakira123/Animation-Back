import { Router } from 'express';

import validateToken from '../middlewares/authHandlerMiddleware.js';

import { favoriteSerie, getFavoriteSerie } from '../controllers/favoriteController.js';

const favoriteRouter = Router();

favoriteRouter.use(validateToken);
favoriteRouter.post('/favorite/serie/:id', favoriteSerie);
favoriteRouter.get('/favorite', getFavoriteSerie);

export default favoriteRouter;