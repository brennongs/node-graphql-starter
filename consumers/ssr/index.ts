import path from 'path';
import express from 'express';

import indexHandler from './routes';

const VIEWS_PATH = path.join(__dirname, 'views');

const app = express();
app.set('view engine', 'hbs')
app.set('views', VIEWS_PATH)

app.get('/', indexHandler);

export default app;