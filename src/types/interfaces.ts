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
  _id: string;
  fullname: string;
  online?: boolean;
  avatar?: string | null;
  isMe?: boolean;
}

export interface message {
  text: string;
  isReaded?: boolean;
  unreaded?: number;
  created_at: string;
}

export interface dialog {
  user: userDialog;
  message: message;
}
