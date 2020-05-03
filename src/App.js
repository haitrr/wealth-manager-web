import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AuthenticatedPage from "./AuthenticatedPage";
import LoginPage from "./LoginPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginPage/>
        </Route>
        <Route>
          <AuthenticatedPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
