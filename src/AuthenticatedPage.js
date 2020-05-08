import HomePage from "./HomePage";
import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {AuthenticationContext} from "./App";
import WalletsPage from "./WalletsPage";
import CreateWalletPage from "./CreateWalletPage";
import WalletPage from "./WalletPage";


const AuthenticatedPage = () => {
  const [authentication] = React.useContext(AuthenticationContext)
  if (authentication != null) {
    return <Switch>
      <Route exact path="/">
        <HomePage/>
      </Route>
      <Route exact path="/wallets">
        <WalletsPage/>
      </Route>
      <Route exact path="/wallets/create">
        <CreateWalletPage/>
      </Route>
      <Route path="/wallets/:id">
        <WalletPage/>
      </Route>
    </Switch>
  }
  return <Redirect to="/login"/>
}

export default AuthenticatedPage
