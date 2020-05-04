import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AuthenticatedPage from "./AuthenticatedPage";
import LoginPage from "./LoginPage";
import {GetToken} from "./Jwt";

export const AuthenticationContext = React.createContext([null, null])

function App() {
  const [authentication, setAuthentication] = React.useState(null)
  if (!authentication) {
    const token = GetToken()
    if (token) {
      setAuthentication({token})
    }
  }
  return (
    <AuthenticationContext.Provider value={[authentication, setAuthentication]}>
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
    </AuthenticationContext.Provider>
  );
}

export default App;
