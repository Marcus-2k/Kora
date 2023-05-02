import * as mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  date_of_birth: Date,
  date_of_create: Date,
});

export interface User {
  first_name: string;
  last_name: string;
  email: string;
  date_of_birth: Date;
  date_of_create: Date;
}
