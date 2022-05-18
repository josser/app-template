import 'reflect-metadata';
import './providers/index.js'
import app from './app.js';
import http from 'http';
import config from './config.js';
import { container } from 'tsyringe';
import type { Logger } from 'pino';
import Knex from 'knex';
import knexConfig from './knexfile.js';
import { Model } from 'objection';

const knex = Knex(knexConfig);

// Bind all Models to a knex instance. If you only have one database in
// your server this is all you have to do. For multi database systems, see
// the Model.bindKnex() method.
Model.knex(knex)

const logger = container.resolve<Logger>('logger');
http.createServer(app.callback()).listen(config.app.port, () => {
 logger.info(`Server is running on port ${config.app.port}`);
});
