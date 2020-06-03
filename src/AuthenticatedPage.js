import HomePage from "./HomePage";
import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {AuthenticationContext} from "./App";
import WalletsPage from "./WalletsPage";
import CreateWalletPage from "./CreateWalletPage";
import WalletPage from "./WalletPage";
import LogoutPage from "./LogoutPage";
import AddTransactionPage from "./AddTransactionPage";
import {get} from "./httpClient";
import {getEndpoint} from "./api";
import CategoriesPage from "./CategoriesPage";
import CategoryCreatePage from "./CategoryCreatePage";

export const TransactionCategoryContext = React.createContext([{categories: null, tree: null}, null])
export const WalletContext = React.createContext([{wallets: null}, null])

const AuthenticatedPage = () => {
  const [authentication] = React.useContext(AuthenticationContext)
  const [transactionCategory, setTransactionCategory] = React.useState({categories: null})
  const [wallet, setWallet] = React.useState({wallets: null})
  React.useEffect(() => {
    get(`${getEndpoint()}/transaction-categories`).then(data => setTransactionCategory({categories: data.items}))
  }, [])
  React.useEffect(() => {
    get(`${getEndpoint()}/wallets`).then(data => setWallet({wallets: data.items}))
  }, [])

  if(wallet.wallets === null) {
    return <h1>Loading</h1>
  }

  if (authentication != null) {
    return <TransactionCategoryContext.Provider value={[transactionCategory, setTransactionCategory]}>
      <WalletContext.Provider value={[wallet, setWallet]}>
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route exact path="/wallets">
            <WalletsPage/>
          </Route>
          <Route exact path="/categories">
            <CategoriesPage/>
          </Route>
          <Route exact path="/categories/create">
            <CategoryCreatePage/>
          </Route>
          <Route exact path="/wallets/create">
            <CreateWalletPage/>
          </Route>
          <Route path="/wallets/:id">
            <WalletPage/>
          </Route>
          <Route exact path="/logout">
            <LogoutPage/>
          </Route>
          <Route exact path="/transactions/add">
            <AddTransactionPage/>
          </Route>
        </Switch>
      </WalletContext.Provider>
    </TransactionCategoryContext.Provider>
  }
  return <Redirect to="/login"/>
}

export default AuthenticatedPage
