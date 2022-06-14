import Users from "../repositories/users.js";
import type { Logger } from "pino";
import { inject, injectable } from "tsyringe";
import type { IUserCreateSchema } from "../validate/users.js";
import PasswordService from './password.js';
@injectable()
export default class UsersService {
  constructor(
    @inject("logger") private readonly logger: Logger,
    private readonly passwordService: PasswordService,
    private readonly userRepo: Users,
  ) { }

  async doSomething() {
    const result = await this.userRepo.findAll();
    this.logger.info(result);
  }

  async create(userDto: IUserCreateSchema) {
    const user = {
      login: userDto.login,
      email: userDto.email,
      password: await this.passwordService.hash(userDto.password),
    }
    return this.userRepo.create(user);
  }
}
