export type authForm = registerForm | loginForm;

export interface registerForm {
  email: string;
  name: string;
  password: string;
  repeatPassword: string;
}

export interface loginForm {
  email: string;
  password: string;
}

export interface validationForm {
  isAuth: boolean;
  values: authForm;
  errors: any;
}

export interface validationFields {
  email: string;
  password: string;
}

export interface obj {
  [name: string]: string;
}

export interface userDialog {
  fullname: string;
  online?: boolean;
  avatar?: string;
  isMe?: boolean;
  isReaded?: boolean;
}
