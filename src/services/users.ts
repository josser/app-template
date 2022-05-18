import Users from "../repositories/users.js";
import type { Logger } from "pino";
import { inject, injectable } from "tsyringe";

@injectable()
export default class UsersService {
  constructor(
    @inject("logger") private readonly logger: Logger,
    private readonly userRepo: Users,
  ) { }

  async doSomething() {
    const result = await this.userRepo.findAll();
    this.logger.info(result);
  }
}
