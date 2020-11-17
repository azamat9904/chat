export default ({ isAuth, values, errors }) => {
  const rules = {
    email: (errors, value) => {
      if (!value) {
        errors.email = "Email is required";
      } else if (!/(\w(=?@)\w+\.{1}[a-zA-Z]{2,})/i.test(value)) {
        errors.email = "Email is invalid";
      }
    },
    password: (errors, value) => {
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
    rules[key] &&
      rules[key](
        errors,
        values[key]
      );
  });
};
