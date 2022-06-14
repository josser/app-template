import { Model } from 'objection';

export default class Users extends Model {

  login!: string;
  email!: string;
  password!: string;

  static override get tableName() {
    return 'users';
  }
}
