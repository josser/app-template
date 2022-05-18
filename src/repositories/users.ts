import { injectable } from "tsyringe";
import UserModel from "../models/users.js";

@injectable()
export default class Users {
  findAll() {
    return UserModel.query();
  }
}
