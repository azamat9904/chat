import {
  validationForm,
  validationFields,
  authForm,
} from "../types/interfaces";

export default ({ isAuth, values, errors }: validationForm): void => {
  const rules = {
    email: (errors: any, value: string) => {
      if (!value) {
        errors.email = "Email is required";
      } else if (!/(\w(=?@)\w+\.{1}[a-zA-Z]{2,})/i.test(value)) {
        errors.email = "Email is invalid";
      }
    },
    password: (errors: any, value: string) => {
      if (!value) {
        errors.password = "Password is required";
      } else if (!/(?=.*[0-9])/i.test(value)) {
        errors.password = isAuth
          ? "Неверный пароль"
          : "Password should contain number";
      }
    },
  };

  Object.keys(values).forEach((key) => {
    rules[key as keyof validationFields] &&
      rules[key as keyof validationFields](
        errors,
        values[key as keyof authForm]
      );
  });
};
