import React from 'react';
import {Router, Route, Switch} from "react-router-dom";
import AuthenticatedPage from "./AuthenticatedPage";
import LoginPage from "./LoginPage";
import {GetToken} from "./Jwt";
import history from "./history";

export const AuthenticationContext = React.createContext([{}, null])

function App() {
  const [authentication, setAuthentication] = React.useState({})
  if (!authentication.token) {
    const token = GetToken()
    if (token) {
      setAuthentication({token})
    }
  }
  return (
    <AuthenticationContext.Provider value={[authentication, setAuthentication]}>
      <Router history={history}>
        <Switch>
          <Route path="/login">
            <LoginPage/>
          </Route>
          <Route>
            <AuthenticatedPage/>
          </Route>
        </Switch>
      </Router>
    </AuthenticationContext.Provider>
  );
}

export default App;
