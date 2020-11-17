import React from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button } from "antd";

import { validateField } from "../../../util/helpers/index";

import {
  MailOutlined,
  UserOutlined,
  LockOutlined,
} from "@ant-design/icons";

import { ShadowedBox } from "../../../components";

const RegisterForm = (props) => {
  const {
    touched,
    errors,
    isSubmitting,
    values,
    handleSubmit,
    handleChange,
    handleBlur,
    isValid,
    dirty,
  } = props;

  return (
    <>
      <div className="top">
        <h2 className="top__title">Регистрация</h2>
        <p className="top__subtitle">
          Для входа в чат, вам нужно Зарегистрироваться
        </p>
      </div>
      <ShadowedBox>
        <Form
          className="login-form"
          initialValues={{
            email: "",
            password: "",
            fullname: "",
            repeatPassword: "",
          }}
          onFinish={handleSubmit}
        >
          <Form.Item
            name="email"
            validateStatus={validateField("email", touched, errors)}
            hasFeedback
            help={!touched.email ? null : errors.email}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Email"
              size="large"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>

          <Form.Item
            name="fullname"
            validateStatus={validateField("fullname", touched, errors)}
            hasFeedback
            help={!touched.fullname ? null : errors.fullname}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              type="text"
              placeholder="Ваше имя"
              size="large"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>

          <Form.Item
            name="password"
            validateStatus={validateField("password", touched, errors)}
            hasFeedback
            help={!touched.password ? null : errors.password}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Пароль"
              size="large"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              allowClear
            />
          </Form.Item>

          <Form.Item
            name="repeatPassword"
            validateStatus={validateField("repeatPassword", touched, errors)}
            hasFeedback
            help={!touched.repeatPassword ? null : errors.repeatPassword}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Повторите Пароль"
              size="large"
              value={values.repeatPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              allowClear
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              className="button"
              htmlType="submit"
              disabled={!isValid || !dirty}
              loading={isSubmitting}
            >
              Зарегистрироваться
                </Button>
          </Form.Item>
        </Form>
        <Link className="register-link" to="/login">
          Войти в аккаунт
            </Link>
      </ShadowedBox>
    </>
  );
};

export default RegisterForm;
