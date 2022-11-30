import dotenv from 'dotenv'
import type { Knex } from 'knex';
import { dirname } from './compat/esm.js';

const __dirname = dirname(import.meta.url);

dotenv.config({
  path: `${__dirname}/../.env`
});

export interface AppConfig {
  env: string,
  app: {
    port: string | number,
    passwords: {
      pepper: string,
    }
  },
  knex: Knex.Config
}

const config: AppConfig = {
  env: process.env['NODE_ENV'] || 'production',
  app: {
    port: process.env['PORT'] || 3000,
    passwords: {
      pepper: process.env['APP_PASSWORDS_PEPPER'] || 'secret',
    }
  },
  knex: {
    client: 'pg',
    connection: {
      host: process.env['DB_HOST'] || 'localhost',
      user: process.env['DB_USER'] || 'postgres',
      password: process.env['DB_PASSWORD'] || 'postgres',
      database: process.env['DB_NAME'] || 'app',
      port: parseInt(process.env['DB_PORT'] || '5432'),
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
  }
};

export default config;
