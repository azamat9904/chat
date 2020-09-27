import React from "react";
import { Route } from "react-router-dom";

import { Auth, Home } from "./pages/index";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Route exact path={["/login", "/register"]} component={Auth} />
        <Route exact path="/" component={Home} />
      </div>
    </div>
  );
}

export default App;
