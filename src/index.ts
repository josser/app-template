import 'reflect-metadata';
import './providers/index.js'
import app from './app.js';
import http from 'http';
import config from './config.js';
import { container } from 'tsyringe';
import type { Logger } from 'pino';

const logger = container.resolve<Logger>('logger');
http.createServer(app.callback()).listen(config.app.port, () => {
 logger.info(`Server is running on port ${config.app.port}`);
});
