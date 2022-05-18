import { expect } from 'chai';
import { hash, verify } from '../../src/lib/hash';

describe('lib/hash helper', () => {
  it('Should hash a password', async () => {
    const password = 'password';
    const hash_value = await hash(password, 'pepper', 'verysalt');
    expect(hash_value).to.equal('$argon2id$v=19$m=37888,t=3,p=1$dmVyeXNhbHQ$/Pi1Q5aKC0I6as/pqy5vJxmmg6qv2uHfA28+AC9rKoY');
  });

  it('Should verify a password', async () => {
    const password = 'password';
    const result = await verify(password, '$argon2id$v=19$m=37888,t=3,p=1$dmVyeXNhbHQ$/Pi1Q5aKC0I6as/pqy5vJxmmg6qv2uHfA28+AC9rKoY', 'pepper');
    expect(result).to.equal(true);
  });
})
