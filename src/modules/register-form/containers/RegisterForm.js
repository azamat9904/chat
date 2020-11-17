import { withFormik } from "formik";

import RegisterForm from "../components/RegisterForm";
import validateForm from "../../../util/validations";

export default withFormik({
  mapPropsToValues: () => {
    return {
      email: "",
      password: "",
      name: "",
      repeatPassword: "",
    };
  },
  validate: (values) => {
    let errors = {};
    validateForm({ isAuth: false, values, errors });
    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values));
      setSubmitting(false);
    }, 3000);
  },
})(RegisterForm);
