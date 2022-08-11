import { Router } from 'express';

import validateToken from '../middlewares/authHandlerMiddleware.js';

import { favoriteSerie, getFavoriteSerie, checkFavorite } from '../controllers/favoriteController.js';

const favoriteRouter = Router();

favoriteRouter.use(validateToken);
favoriteRouter.post('/favorite/serie/:id', favoriteSerie);
favoriteRouter.get('/favorite', getFavoriteSerie);
favoriteRouter.get('/favorite/serie/:id', checkFavorite);

export default favoriteRouter;