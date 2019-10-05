import compression from 'compression';
import express, { Application } from 'express';
import { Middleware } from './middleware';
import loginRoutes from './routes/login';
import wellcomeRoutes from './routes/wellcome';

const app: Application = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: '10mb' }));
app.use(compression());

app.use('/api', wellcomeRoutes);
app.use('/api', loginRoutes);
app.use(Middleware.logged);

export default app;
