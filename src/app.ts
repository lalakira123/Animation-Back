import express, { json } from 'express';
import 'express-async-errors';
import cors from 'cors';

import routers from './routers/index.js';
import handleError from './middlewares/errorHandlerMiddleware.js';

const app = express();

app.use(cors());
app.use(json());
app.use(routers);
app.use(handleError);

export default app;