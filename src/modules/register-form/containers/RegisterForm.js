import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import { withRouter } from 'react-router-dom';
import get from 'lodash/get';

import RegisterForm from "../components/RegisterForm";
import validateForm from "../../../util/validations";
import authActions from '../../../redux/user/actions';
import { openNotification } from '../../../util/helpers';

const RegisterContainer = (props) => {
  const {
    registerSuccess,
    registerFailed,
    registerUser,
    registerError,
    registerClear,
    history
  } = props;

  useEffect(() => {
    if (registerSuccess) {
      openNotification('Успех', 'Вы успешно зарегистрировались', 'success');
      registerClear();
      history.push('/email/check');
    }

    if (registerFailed) {
      if (get(registerError, 'response.data.message.errmsg', '').indexOf('dup') >= 0) {
        openNotification(
          'Ошибка',
          'Аккаунт с такой почтой уже создан.',
          'error'
        );
      } else {
        openNotification(
          'Ошибка',
          'Возникла серверная ошибка при регистрации. Повторите позже.',
          'error'
        );
      }
      registerClear();
    }
  }, [registerSuccess, registerFailed, registerClear, history]);

  const formik = useFormik({
    initialValues: {
      email: "",
      fullname: '',
      password: '',
      repeatPassword: ''
    },
    validate: (values) => {
      const errors = {};
      validateForm({ isAuth: false, values, errors });
      return errors;
    },
    onSubmit: (values, { setSubmitting }) => {
      registerUser(values, setSubmitting);
    },
  });

  return (
    <RegisterForm {...formik} />
  );
};


const mapStateToProps = (state) => {
  return {
    registerSuccess: state.userState.registerSuccess,
    registerFailed: state.userState.registerFailed,
    registerError: state.userState.registerError
  }
}

const mapDispatchToProps = {
  registerUser: authActions.registerUser,
  registerClear: authActions.registerClear
}

const withRouterComponent = withRouter(RegisterContainer);
export default connect(mapStateToProps, mapDispatchToProps)(withRouterComponent)
