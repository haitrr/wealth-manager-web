import React from "react";
import {Link} from "react-router-dom";
import {WalletContext} from "./AuthenticatedPage";
import {get} from "./httpClient";
import {getEndpoint} from "./api";

const useTransactionsCategories = () => {
  const [transactionCategories, setTransactionCategories] = React.useState(null)
  React.useEffect(() => {
    get(`${getEndpoint()}/transaction-categories`).then(data => setTransactionCategories(data.items))
  }, [])
  return transactionCategories
}

const mapTransactionCategoriesName = (transactions, categories) => {
  transactions.forEach(t => {
    let category = categories.find(c => c.id === t.categoryId)
    let name = "Others"
    if (category) {
      name = category.name
    }
    t.categoryName = name;
  })
}

const useTransactions = () => {
  const [transactions, setTransactions] = React.useState(null)
  React.useEffect(() => {
    get(`${getEndpoint()}/transactions`).then(data => setTransactions(data.items))
  }, [])
  const categories = useTransactionsCategories()
  if (categories === null || transactions == null) {
    return null
  }
  mapTransactionCategoriesName(transactions, categories)
  return transactions
}

const Transactions = () => {
  const transactions = useTransactions()
  if (transactions === null) {
    return <h3>Loading</h3>
  }
  return <div>
    {transactions.map(transaction => <div>
      <div>{transaction.amount}</div>
      <div>{transaction.categoryName}</div>
      <hr/>
    </div>)}
  </div>
}


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
    <h2>Transactions</h2>
    <Transactions/>
  </div>;
}
export default HomePage;
