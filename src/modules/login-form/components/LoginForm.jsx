import React from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { ShadowedBox } from "../../../components/index";
import { validateField } from "../../../util/helpers";

const LoginForm = (props) => {
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    errors,
    isSubmitting
  } = props;

  return (
    <>
      <div className="top">
        <h2 className="top__title">Войти в аккаунт</h2>
        <p className="top__subtitle">Пожалуйста, войдите в свой аккаунт</p>
      </div>
      <ShadowedBox>
        <Form
          className="login-form"
          initialValues={{ email: values.email, password: values.password }}
          onFinish={handleSubmit}
        >
          <Form.Item
            name="email"
            validateStatus={validateField("email", touched, errors)}
            hasFeedback
            help={!touched.email ? null : errors.email}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
              size="large"
              value={values.email}
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
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              size="large"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              className="button"
              htmlType="submit"
              disabled={isSubmitting}
            >
              Войти в аккаунт
            </Button>
          </Form.Item>
        </Form>
        <Link
          className="register-link"
          to="/register"
        >
          Зарегистрироваться
        </Link>
      </ShadowedBox>
    </>
  );
};

export default LoginForm;
