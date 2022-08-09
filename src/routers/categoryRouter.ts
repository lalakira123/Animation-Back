import { Router } from 'express';

import validateToken from '../middlewares/authHandlerMiddleware.js';
import { getCategoriesSeries } from '../controllers/categoryController.js';

const categoryRouter = Router();

categoryRouter.use(validateToken);
categoryRouter.get('/categories/series', getCategoriesSeries);

export default categoryRouter;