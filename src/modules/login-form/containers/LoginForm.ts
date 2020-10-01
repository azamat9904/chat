import LoginForm from "../components/LoginForm";
import { withFormik } from "formik";
import { loginForm } from "../../../types/interfaces";
import validateForm from "../../../util/validations";

export default withFormik({
  mapPropsToValues: (): loginForm => {
    return {
      email: "",
      password: "",
    };
  },
  validate: (values: loginForm) => {
    const errors = {};
    validateForm({ isAuth: true, values, errors });
    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values));
      setSubmitting(false);
    }, 1000);
  },
})(LoginForm);
