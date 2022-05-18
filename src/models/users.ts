import { Model } from 'objection';

export default class Users extends Model {
  static override get tableName() {
    return 'users';
  }
}
