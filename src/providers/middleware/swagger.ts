import { instanceCachingFactory } from "tsyringe";
import { koaSwagger } from 'koa2-swagger-ui';
import type { AppConfig } from "../../config";
import emptyMiddleware from "../../lib/middleware/empty.js";

export default {
  token: 'middleware.swagger',
  useFactory: instanceCachingFactory((container) => {
    const config = container.resolve<AppConfig>('config');
    // maybe should be config.useSwagger?
    return  config.env !== 'production' ? koaSwagger({
      routePrefix: '/swagger', // host at /swagger instead of default /docs
      swaggerOptions: {
        url: '/api/swagger/spec.json', // example path to json
      },
    }) : emptyMiddleware;
  }),
}
