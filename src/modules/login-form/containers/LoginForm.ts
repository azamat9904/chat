import LoginForm from "../components/LoginForm";
import { withFormik } from "formik";
import { loginForm } from "../../../types/interfaces";
import validateForm from "../../../util/validations";
import { connect } from 'react-redux';
import authActions from '../../../redux/user/actions';
import { appState } from "../../../redux/store";

interface MyFormProps {
  signIn: (values: loginForm) => void;
  loginSuccess: boolean,
  loginFailed: boolean
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

  handleSubmit: async (values, { props }) => {
    props.signIn(values);
    console.log(props.loginSuccess);
  },
})(LoginForm);

const mapStateToProps = (state: appState) => {
  return {
    loginSuccess: state.userState.loginSuccess,
    loginFailed: state.userState.loginFailed
  }
}

const mapDispatchToProps = {
  signIn: authActions.fetchUserLogin,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormik);