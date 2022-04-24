import Router from '@koa/router';
import users from './users.js';

const router = new Router({ prefix: '/api' });

router.use(users.routes(), users.allowedMethods());

export default router;
