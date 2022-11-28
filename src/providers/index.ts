import { registry } from "tsyringe";
import logger from './logger.js';
import config from './config.js';
import knex from "./knex.js";

@registry([logger, config, knex])
export default class ContainerRegistry {}
