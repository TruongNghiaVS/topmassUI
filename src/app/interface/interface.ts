export interface IRegister {
  last_name?: string;
  first_name?: string;
  first_phone?: string;
  phone_number: string;
  email: string;
  password: string;
  is_used: boolean;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IEditUser {
  username: string;
  phone_number?: string;
  email?: string;
}
