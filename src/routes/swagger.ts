import Router from '@koa/router';
import { container } from 'tsyringe';

const router = new Router({ prefix: "/swagger" });

router.get('/spec.json', (ctx) => {
	const spec = container.resolve('swagger');
	ctx.body = spec;
})

export default router;
