import React from "react";
import {useParams} from "react-router-dom";
import {get} from "./httpClient";
import {getEndpoint} from "./api";
import {TransactionCategoryContext} from "./AuthenticatedPage";

const WalletPage = () => {
  const {id} = useParams()
  const [wallet, setWallet] = React.useState(null)
  const [transactions, setTransactions] = React.useState([])
  const [transactionCategory] = React.useContext(TransactionCategoryContext)
  React.useEffect(() => {
    get(`${getEndpoint()}/wallets/${id}`).then(data => setWallet(data)).catch(e => alert(e))
  }, [])
  React.useEffect(() => {
    get(getEndpoint() + "/transactions", {walletId: id}).then(data => setTransactions(data.items))
  }, [wallet])
  if (!wallet) {
    return <h1>Loading</h1>
  }

  if(transactionCategory.categories === null) {
    return <h1>Loading</h1>
  }

  return <div>
    <h1>{wallet.name}</h1>
    <div>{wallet.balance}</div>
    <h1>Transactions</h1>
    {transactions.map(transaction => <div>
      <div>
        {transaction.amount}
      </div>
      <div>
        {transactionCategory.categories.find(c => c.id === transaction.categoryId)?.name}
      </div>
      <hr/>
    </div>)}
  </div>
}

export default WalletPage;
