import HomePage from "./HomePage";
import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {AuthenticationContext} from "./App";


const AuthenticatedPage = () => {
  const [authentication] = React.useContext(AuthenticationContext)
  if (authentication != null) {
    return <Switch>
      <Route path="/">
        <HomePage/>
      </Route>
    </Switch>
  }
  return <Redirect to="/login"/>
}

export default AuthenticatedPage
