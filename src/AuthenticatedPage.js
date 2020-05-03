import HomePage from "./HomePage";
import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

const AuthenticatedPage = () => {
  const authenticated = false
  if (authenticated) {
    return <Switch>
      <Route path="/">
        <HomePage/>
      </Route>
    </Switch>
  }
  return <Redirect to="/login"/>
}

export default AuthenticatedPage
