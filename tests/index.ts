import "reflect-metadata";
import { expect } from 'chai';
import config from '../src/config.js';

describe('root', () => {
  it('Should be able to run basic tests', () => {
    expect(config).has.property('app');
  });
});
