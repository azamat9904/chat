import LoginForm from "../components/LoginForm";
import { withFormik } from "formik";
import validateForm from "../../../util/validations";
import { connect } from 'react-redux';
import authActions from '../../../redux/user/actions';

const LoginFormik = withFormik({
  mapPropsToValues: () => {
    return {
      email: "",
      password: "",
    };
  },
  validate: (values) => {
    const errors = {};
    validateForm({ isAuth: true, values, errors });
    return errors;
  },

  handleSubmit: async (values, { props }) => {
    props.signIn(values);
    console.log(props.loginSuccess);
  },
})(LoginForm);

const mapStateToProps = (state) => {
  return {
    loginSuccess: state.userState.loginSuccess,
    loginFailed: state.userState.loginFailed
  }
}

const mapDispatchToProps = {
  signIn: authActions.fetchUserLogin,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormik);