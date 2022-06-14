import joi from 'joi';

export const userCreateSchema = joi.object<IUserCreateSchema>({
  login: joi.string().max(255).required(),
  email: joi.string().email().required(),
  password: joi.string().max(255).min(8).required(),
  passwordConfirm: joi.ref('password'),
});

export interface IUserCreateSchema {
  login: string;
  email: string;
  password: string;
  passwordConfirm: string;
}
