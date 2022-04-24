import { registry } from "tsyringe";
import logger from './logger.js';

@registry([logger])
export default class ContainerRegistry {}
