import React from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import { ShadowedBox } from "../../../components/index";

const LoginForm = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <>
      <div className="top">
        <h2 className="top__title">Войти в аккаунт</h2>
        <p className="top__subtitle">Пожалуйста, войдите в свой аккаунт</p>
      </div>
      <ShadowedBox>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
              size="large"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" className="button" htmlType="submit">
              Войти в аккаунт
            </Button>
          </Form.Item>
        </Form>
        <Link className="register-link" to="/register">
          Зарегистрироваться
        </Link>
      </ShadowedBox>
    </>
  );
};

export default LoginForm;
