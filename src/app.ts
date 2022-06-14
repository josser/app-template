import Koa from 'koa';
import router from './routes/index.js';
import pinoMiddleware from 'koa-pino-logger';
import { container } from 'tsyringe';
import koaBody from 'koa-body';

const app = new Koa();
app.use(koaBody());

app.use(pinoMiddleware({
  logger: container.resolve('logger'),
}));

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err: unknown) {
    // will only respond with JSON
    ctx.status = err.statusCode || err.status || 500;
    ctx.body = {
      message: err.message
    };
  }
})

app.use(router.routes());
app.use(router.allowedMethods());

export default app;
