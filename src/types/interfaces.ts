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

export interface userDialog {
  _id: string;
  avatar: string | null;
  fullname: string;
  isMe: boolean;
  isOnline: boolean;
}

export interface message {
  _id: string;
  text: string | null;
  date: string;
  isReaded: boolean | null;
  attachments: any | null;
  isTyping: boolean;
  audio: string | null;
  unreaded: number | null;
  user: userDialog;
}
