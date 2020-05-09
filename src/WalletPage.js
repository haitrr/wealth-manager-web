import React from "react";
import {useParams} from "react-router-dom";
import {get} from "./httpClient";
import {getEndpoint} from "./api";

const WalletPage = () => {
  const {id} = useParams()
  const [wallet, setWallet] = React.useState(null)
  const [transactions, setTransactions] = React.useState([])
  React.useEffect(() => {
    get(`${getEndpoint()}/wallets/${id}`).then(data => setWallet(data)).catch(e => alert(e))
  }, [])
  React.useEffect(() => {
    get(getEndpoint() + "/transactions", {walletId: id}).then(data => setTransactions(data.items))
  }, [wallet])
  if (!wallet) {
    return <h1>Loading</h1>
  }
  return <div>
    <div>{wallet.name}</div>
    <div>{wallet.balance}</div>
    {transactions.forEach(transaction => <div>{transaction.amount}</div>)}
  </div>
}

export default WalletPage;
