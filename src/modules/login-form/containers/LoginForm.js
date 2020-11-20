import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import { withRouter } from 'react-router-dom';

import LoginForm from "../components/LoginForm";
import validateForm from "../../../util/validations";
import authActions from '../../../redux/user/actions';
import { openNotification } from '../../../util/helpers';

const LoginContainer = (props) => {
  const {
    loginSuccess,
    loginFailed,
    signIn,
    fetchUserClear,
    history
  } = props;

  useEffect(() => {
    if (loginSuccess) {
      openNotification('Успех', 'Вы успешно авторизовались', 'success');
      fetchUserClear();
      history.push('/dialogs');
    }

    if (loginFailed) {
      openNotification('Ошибка', 'Логин или пароль не правильный', 'error');
      fetchUserClear();
    }

  }, [loginSuccess, loginFailed, fetchUserClear, history]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ''
    },
    validate: (values) => {
      const errors = {};
      validateForm({ isAuth: true, values, errors });
      return errors;
    },
    onSubmit: (values, { setSubmitting }) => {
      signIn(values, setSubmitting);
    },
  });
  return (
    <LoginForm {...formik} />
  );
};

const mapStateToProps = (state) => {
  return {
    loginSuccess: state.userState.loginSuccess,
    loginFailed: state.userState.loginFailed
  }
}

const mapDispatchToProps = {
  signIn: authActions.fetchUserLogin,
  fetchUserClear: authActions.fetchUserClear
}

const withRouterProps = withRouter(LoginContainer);
export default connect(mapStateToProps, mapDispatchToProps)(withRouterProps)