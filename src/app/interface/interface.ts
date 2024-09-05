export interface IRegister {
  last_name?: string;
  first_name?: string;
  first_phone?: string;
  phone_number: string;
  email: string;
  password: string;
  // is_used: boolean;
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

export interface IResetpassword {
  email: string;
}

export interface IChangePassword {
  old_password: string;
  password: string;
}

export interface ISettingSuggestJob {
  gender?: string;
  position: string;
  job_type: string[];
  skill?: string[];
  experience: string;
  salary: string;
  location: string[];
}

export interface IContact {
  name: string;
  email: string;
  phone: string;
  title: string;
  content: string;
}
