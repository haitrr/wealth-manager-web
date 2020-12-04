import React from 'react';
import {Router, Route, Switch} from "react-router-dom";
import AuthenticatedPage from "./AuthenticatedPage";
import LoginPage from "./LoginPage";
import {GetToken} from "./Jwt";
import history from "./history";
import 'antd/dist/antd.css';
import RootReducer from "./reducer";
import {applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk';
import {Provider} from "react-redux";

export const AuthenticationContext = React.createContext([{}, null])
const store = createStore(RootReducer, applyMiddleware(thunk))

function App() {
  const [authentication, setAuthentication] = React.useState({})
  if (!authentication.token) {
    const token = GetToken()
    if (token) {
      setAuthentication({token})
    }
  }
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
