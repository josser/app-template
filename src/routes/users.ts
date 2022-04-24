import Router from "@koa/router";
import { container } from "tsyringe";
import type { Logger } from 'pino';
import UsersService from "../services/users.js";

const router = new Router({ prefix: "/users" });
const logger = container.resolve<Logger>("logger");
const userService = container.resolve(UsersService);

router.get('/', async (ctx) => {
  userService.doSomething();
  logger.info("GET /users");
  // also
  ctx.log.info('Some message');
  ctx.body = {
    message: 'Hello World!'
  };
});

export default router;
