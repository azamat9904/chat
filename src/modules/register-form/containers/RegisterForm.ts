import { withFormik } from "formik";

import RegisterForm from "../components/RegisterForm";
import { registerForm } from "../../../types/interfaces";
import validateForm from "../../../util/validations";

export default withFormik({
  mapPropsToValues: (): registerForm => {
    return {
      email: "",
      password: "",
      name: "",
      repeatPassword: "",
    };
  },
  validate: (values: registerForm) => {
    let errors: any = {};
    validateForm({ isAuth: false, values, errors });
    return errors;
  },

  handleSubmit: (values: registerForm, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values));
      setSubmitting(false);
    }, 3000);
  },
})(RegisterForm);
