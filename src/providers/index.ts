import { registry } from "tsyringe";
import logger from './logger.js';
import config from './config.js';
import knex from "./knex.js";
import swaggerMiddleware from "./middleware/swagger.js";
import helmetMiddleware from './middleware/helmet.js';

import swagger from "./swagger.js";

@registry([logger, config, knex, swaggerMiddleware, swagger, helmetMiddleware])
export default class ContainerRegistry {}
