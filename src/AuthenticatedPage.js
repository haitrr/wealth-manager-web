import HomePage from "./HomePage";
import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {AuthenticationContext} from "./App";
import WalletsPage from "./WalletsPage";
import CreateWalletPage from "./CreateWalletPage";
import WalletPage from "./WalletPage";
import LogoutPage from "./LogoutPage";
import AddTransactionPage from "./AddTransactionPage";
import CategoriesPage from "./CategoriesPage";
import CategoryCreatePage from "./CategoryCreatePage";
import Header from "./Header/Header";
import StatisticPage from "./StatisticPage";
import BudgetsPage from "./BudgetPage";
import CreateBudgetPage from "./CreateBudgetPage";

export const TransactionCategoryContext = React.createContext([{categories: null, tree: null}, null])

const AuthenticatedPage = () => {
  const [authentication] = React.useContext(AuthenticationContext)
  if (authentication != null) {
    return <div>
      <Header/>
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
        <Route exact path="/stats">
          <StatisticPage/>
        </Route>
        <Route exact path="/budgets">
          <BudgetsPage/>
        </Route>
        <Route exact path="/budgets/create">
          <CreateBudgetPage/>
        </Route>
      </Switch>
    </div>
  }
  return <Redirect to="/login"/>
}

export default AuthenticatedPage
