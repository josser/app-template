import { expect } from 'chai';
import PasswordService from '../../src/services/password';
import configStub from '../stub/config';

describe('lib/hash helper', () => {
  let service: PasswordService;

  beforeEach(() => {
    service = new PasswordService(configStub);
  });

  it('Should hash a password', async () => {
    const password = 'password';
    const hash_value = await service.hash(password, 'verysalt');
    expect(hash_value).to.equal('$argon2id$v=19$m=37888,t=3,p=4$dmVyeXNhbHQ$++yePiL9ChZy1Z0gP6xIb08T3fT4M4c4XVqH/IIlQ8c');
  });

  it('Should verify a password', async () => {
    const password = 'password';
    const result = await service.verify(password, '$argon2id$v=19$m=37888,t=3,p=4$dmVyeXNhbHQ$++yePiL9ChZy1Z0gP6xIb08T3fT4M4c4XVqH/IIlQ8c');
    expect(result).to.equal(true);
  });
})
