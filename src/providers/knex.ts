import { instanceCachingFactory } from "tsyringe";
import Knex from 'knex';
import { Model } from 'objection';
import knexConfig from '../knexfile.js';

export default {
  token: 'knex',
  useFactory: instanceCachingFactory(() => {
    const knex = Knex(knexConfig);

    // Bind all Models to a knex instance. If you only have one database in
    // your server this is all you have to do. For multi database systems, see
    // the Model.bindKnex() method.
    Model.knex(knex)

    return knex;
  }),
}
