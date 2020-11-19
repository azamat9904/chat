import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { Auth, Home } from "./pages/index";
import { connect } from 'react-redux';
import userActions from './redux/user/actions';
import { Switch } from 'react-router-dom';

const App = ({ isAuth, initApp }) => {

  useEffect(() => {
    initApp();
  }, [initApp, isAuth]);

  return (
    <div className="App">
      <div className="wrapper">
        <Switch>
          <Route exact path={["/login", "/register", '/email/check']} component={Auth} />
          {
            isAuth && <Route exact path="/" component={Home} />
          }
        </Switch>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.userState.isAuth,
  }
};

const mapDispatchToProps = {
  initApp: userActions.initApp
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
