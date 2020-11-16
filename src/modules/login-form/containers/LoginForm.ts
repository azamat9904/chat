import LoginForm from "../components/LoginForm";
import { withFormik } from "formik";
import { loginForm } from "../../../types/interfaces";
import validateForm from "../../../util/validations";
import { connect } from 'react-redux';
import authActions from '../../../redux/user/actions';

interface MyFormProps {
  signIn: (values: loginForm) => Promise<void>;
}

const LoginFormik = withFormik<MyFormProps, loginForm>({
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

  handleSubmit: async (values, { setSubmitting, props }) => {
    props.signIn(values).then(() => {
      setSubmitting(false);
    });
  },
})(LoginForm);

const mapDispatchToProps = {
  signIn: authActions.fetchUserLogin
}

export default connect(null, mapDispatchToProps)(LoginFormik);