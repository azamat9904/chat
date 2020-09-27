import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button } from "antd";
import {
  MailOutlined,
  UserOutlined,
  LockOutlined,
  InfoCircleTwoTone,
} from "@ant-design/icons";

import { ShadowedBox } from "../../../components/index";

const RegisterForm = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

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
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your Email!" },
                ]}
              >
                <Input
                  prefix={<MailOutlined className="site-form-item-icon" />}
                  placeholder="Email"
                  size="large"
                />
              </Form.Item>

              <Form.Item
                name="name"
                rules={[{ required: true, message: "Please input your Name!" }]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  type="text"
                  placeholder="Ваше имя"
                  size="large"
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Пароль"
                  size="large"
                />
              </Form.Item>

              <Form.Item
                name="repeat-password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Повторите Пароль"
                  size="large"
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" className="button" htmlType="submit">
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
