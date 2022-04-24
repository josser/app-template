import type { Logger } from "pino";
import { inject, injectable } from "tsyringe";

@injectable()
export default class UsersService {
  constructor(@inject("logger") private readonly logger: Logger) {}

  doSomething() {
    this.logger.info('UsersService.doSomething()');
  }
}
