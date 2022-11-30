import Router from "@koa/router";
import { container } from "tsyringe";
import type { Logger } from 'pino';
import UsersService from "../services/users.js";
import { userCreateSchema } from "../validate/users.js";
import { ApiError } from "../lib/errors.js";

const router = new Router({ prefix: "/users" });
const logger = container.resolve<Logger>("logger");
const userService = container.resolve(UsersService);

/**
 * @openapi
 * /api/users:
 *  get:
 *    description: List of users
 *    responses: 
 *      200: 
 *        description: Returns a mysterious string.
 */
router.get('/', async (ctx) => {
  await userService.doSomething();
  logger.info("GET /users");
  // also
  ctx.log.info('Some message');
  ctx.body = {
    message: 'Hello World!'
  };
});

router.post('/', async (ctx) => {
  const { error, value } = userCreateSchema.validate(ctx.request.body);
  if (error) {
    ctx.throw(new ApiError(error.message, 400));
    return;
  }
  const created = await userService.create(value);
  ctx.body = created;
});

export default router;
