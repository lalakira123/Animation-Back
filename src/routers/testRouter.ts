import { Router } from 'express';

import { resetDatabase } from '../controllers/testController.js';

const testRouter = Router();

testRouter.post('/reset', resetDatabase);

export default testRouter;
