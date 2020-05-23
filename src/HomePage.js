import React from "react";
import {Link} from "react-router-dom";
import {WalletContext} from "./AuthenticatedPage";

const HomePage = () => {
  const [wallet] = React.useContext(WalletContext)
  const balance = wallet.wallets.reduce((a, b) => a.balance + b.balance)
  return <div>
    <h1>Home Page</h1>
    <Link to="/wallets">Wallets</Link>
    <br/>
    <Link to="transactions/add">Add Transaction</Link>
    <h2>Balance</h2>
    <div>{balance}</div>
  </div>;
}
export default HomePage;
