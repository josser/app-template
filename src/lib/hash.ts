import argon2 from 'argon2';

export const hash = (password: string, secret: string, salt?: string) => {

  // @see https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html
  const options: argon2.Options & { raw?: false } = {
    secret: Buffer.from(secret),
    type: argon2.argon2id,
    memoryCost: 37 * 1024,
  };

  if (salt) {
    options.salt = Buffer.from(salt);
  }

  return argon2.hash(password, options);
};

export const verify = (password: string, hash: string, secret: string) => argon2.verify(
  hash, password, { secret: Buffer.from(secret) }
);
