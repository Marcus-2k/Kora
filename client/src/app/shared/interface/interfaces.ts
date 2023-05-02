export interface CreateUser {
  first_name: string;
  last_name: string;
  email: string;
  date_of_birth: Date;
}

export interface UserInfo {
  readonly _id: string;
  first_name: string;
  last_name: string;
  email: string;
  date_of_birth: Date;
  date_of_create: Date;
}
