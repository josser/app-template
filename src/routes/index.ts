import Router from '@koa/router';
import swagger from './swagger.js';
import users from './users.js';

const router = new Router({ prefix: '/api' });

router.use(users.routes(), users.allowedMethods());
router.use(swagger.routes(), swagger.allowedMethods());

export default router;
