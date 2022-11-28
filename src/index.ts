import 'reflect-metadata';
import './providers/index.js'

import http from 'node:http';
import { container } from 'tsyringe';
import type { Logger } from 'pino';

import app from './app.js';
import config from './config.js';

container.resolve('knex');

const logger = container.resolve<Logger>('logger');
http.createServer(app.callback()).listen(config.app.port, () => {
 logger.info(`Server is running on port ${config.app.port}`);
});
