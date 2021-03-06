import React from "react";
import { Route } from "react-router-dom";

import "./Auth.scss";

import { LoginForm, RegisterForm, CheckEmail } from "../../modules/index";

const Auth = () => {
  return (
    <section className="auth">
      <div className="auth__content">
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/email/check" component={CheckEmail} />
      </div>
    </section>
  );
};

export default Auth;
