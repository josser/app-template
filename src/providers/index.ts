import { registry } from "tsyringe";
import logger from './logger.js';
import config from './config.js';

@registry([logger, config])
export default class ContainerRegistry {}
