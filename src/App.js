import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AuthenticatedPage from "./AuthenticatedPage";
import LoginPage from "./LoginPage";

export const AuthenticationContext = React.createContext([null, null])

function App() {
  const [authentication, setAuthentication] = React.useState(null)
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginPage/>
        </Route>
        <Route>
          <AuthenticationContext.Provider value={[authentication, setAuthentication]}>
            <AuthenticatedPage/>
          </AuthenticationContext.Provider>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
