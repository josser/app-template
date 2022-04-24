import Koa from 'koa';
import router from './routes/index.js';
import pinoMiddleware from 'koa-pino-logger';
import { container } from 'tsyringe';

const app = new Koa();

app.use(pinoMiddleware({
  logger: container.resolve('logger'),
}));

app.use(router.routes());
app.use(router.allowedMethods());

export default app;
