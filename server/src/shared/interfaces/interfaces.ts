export interface CreateUser {
  first_name: string;
  last_name: string;
  email: string;
  date_of_birth: Date;
}

export interface UpdateUser {
  first_name?: string;
  last_name?: string;
  email?: string;
  date_of_birth?: Date;
}
