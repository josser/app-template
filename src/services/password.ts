import argon2 from 'argon2';
import type { AppConfig } from '../config.js';
import { inject, injectable } from 'tsyringe';

@injectable()
export default class PasswordService {
  constructor(@inject('config') private readonly config: AppConfig) {}
  public hash(password: string, salt?: string): Promise<string> {

    // @see https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html
    const options: argon2.Options & { raw?: false } = {
      secret: Buffer.from(this.config.app.passwords.pepper),
      type: argon2.argon2id,
      memoryCost: 37 * 1024,
    };

    if (salt) {
      options.salt = Buffer.from(salt);
    }

    return argon2.hash(password, options);
  }

  public verify(password: string, hash: string) {
    return argon2.verify(
      hash, password, { secret: Buffer.from(this.config.app.passwords.pepper) }
    );
  }
}
