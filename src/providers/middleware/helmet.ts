import type { AppConfig } from '../../config';
import helmet from 'koa-helmet'
import { instanceCachingFactory } from 'tsyringe'
import emptyMiddleware from '../../lib/middleware/empty.js'

export default {
	token: 'middleware.helmet',
	useFactory: instanceCachingFactory((container) => {
		// Maybe should be config.useHelmet?
		const config = container.resolve<AppConfig>('config');
		return config.env === 'production' ? helmet() : emptyMiddleware;
	})
}
