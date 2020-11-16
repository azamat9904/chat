import React, { FunctionComponent, useEffect } from "react";
import { Route } from "react-router-dom";
import { Auth, Home } from "./pages/index";
import { connect } from 'react-redux';
import { appState } from "./redux/store";
import userActions from './redux/user/actions';
import { Redirect } from 'react-router-dom';

type Props = {
  isAuth: boolean;
  initApp: () => void;
}

const App: FunctionComponent<Props> = ({ isAuth, initApp }) => {

  useEffect(() => {
    initApp();
  }, [initApp, isAuth]);

  return (
    <div className="App">
      <div className="wrapper">
        {
          isAuth ?
            <Route exact path="/" component={Home} />
            : <Route exact path={["/login", "/register"]} component={Auth} />
        }
        {
          isAuth ?
            <Redirect to="/" />
            : <Redirect to="/login" />
        }
      </div>
    </div>
  );
}

const mapStateToProps = (state: appState) => {
  return {
    isAuth: state.userState.isAuth,
  }
};

const mapDispatchToProps = {
  initApp: userActions.initApp
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
