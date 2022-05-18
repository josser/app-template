import dotenv from 'dotenv'
import type { Knex } from 'knex';
import { dirname } from './compat/esm.js';

const __dirname = dirname(import.meta.url);

dotenv.config({
  path: `${__dirname}/../.env`
});

export default {
  app: {
    port: process.env['PORT'] || 3000,
  },
  knex: {
    client: 'pg',
    connection: {
      host: process.env['DB_HOST'] || 'localhost',
      user: process.env['DB_USER'] || 'postgres',
      password: process.env['DB_PASSWORD'] || 'postgres',
      database: process.env['DB_NAME'] || 'app',
      port: process.env['DB_PORT'] || 5432,
    },
    migrations: {
      directory: 'db/migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: 'db/seeds',
    },
    pool: {
      min: 2,
      max: 10,
    }
  } as Knex.Config,
}
