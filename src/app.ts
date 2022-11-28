import Koa from 'koa';
import router from './routes/index.js';
import pinoMiddleware from 'koa-pino-logger';
import { container } from 'tsyringe';
import { koaBody } from 'koa-body';
import { ApiError } from './lib/errors.js';
import type pino from 'pino';

const app = new Koa();
app.use(koaBody());

app.use(pinoMiddleware({
  logger: container.resolve('logger'),
}));

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err: unknown) {
    const logger = container.resolve<pino.Logger>('logger');
    logger.error(err);

    if (err instanceof ApiError) {
      ctx.status = err.status || 500;
      ctx.body = {
        message: err.message,
      };
    } else {
      ctx.status = 500;
      ctx.body = {
        message: 'Internal Server Error',
      };
    }
  }
})

app.use(router.routes());
app.use(router.allowedMethods());

export default app;
