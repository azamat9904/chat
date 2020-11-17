import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button } from "antd";

import { validateField } from "../../../util/helpers/index";

import {
  MailOutlined,
  UserOutlined,
  LockOutlined,
  InfoCircleTwoTone,
} from "@ant-design/icons";

import { ShadowedBox } from "../../../components/index";

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

  const success = true;
  return (
    <>
      <div className="top">
        <h2 className="top__title">Регистрация</h2>
        <p className="top__subtitle">
          Для входа в чат, вам нужно Зарегистрироваться
        </p>
      </div>
      <ShadowedBox>
        {success ? (
          <Fragment>
            <Form
              className="login-form"
              initialValues={{
                email: "",
                password: "",
                name: "",
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

              <Form.Item name="name">
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  type="text"
                  placeholder="Ваше имя"
                  size="large"
                  value={values.name}
                  onChange={handleChange}
                />
              </Form.Item>

              <Form.Item
                name="password"
                validateStatus={validateField("password", touched, errors)}
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

              <Form.Item name="repeatPassword">
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Повторите Пароль"
                  size="large"
                  value={values.repeatPassword}
                  onChange={handleChange}
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
          </Fragment>
        ) : (
            <div className="success-block">
              <div>
                <InfoCircleTwoTone style={{ fontSize: "50px" }} />
              </div>
              <h3 className="success-block__title">Подтвердите свой аккаунт</h3>
              <p className="success-block__content">
                На вашу почту отправлено письмо с ссылкой на подтверждение
                аккаунта
            </p>
            </div>
          )}
      </ShadowedBox>
    </>
  );
};

export default RegisterForm;
