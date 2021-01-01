import React from 'react';
import { Link } from 'react-router-dom';
import { useTransactions } from './useTransactions';
import useWallets from './useWallets';
import { formatMoney } from './formatMoney';
import { VND } from './currencyCodes';
import TransactionFilterForm from './TransactionFilterForm';
import TransactionTimeline from './TransactionTimeLine';

const Transactions = () => {
  const [transactions] = useTransactions();
  if (!transactions) {
    return <div />;
  }

  if (transactions === null) {
    return <h3>Loading</h3>;
  }
  return (
    <div>
      <TransactionFilterForm />
      <TransactionTimeline transactions={transactions} />
    </div>
  );
};

const HomePage = () => {
  const wallets = useWallets();
  if (wallets == null) return <h1>Loading</h1>;
  const balance = wallets.reduce((a, b) => a + b.balance, 0);
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/wallets">Wallets</Link>
      <br />
      <Link to="/categories">Categories</Link>
      <br />
      <Link to="transactions/add">Add Transaction</Link>
      <h2>Balance</h2>
      <div>{formatMoney(balance, VND)}</div>
      <h2>Transactions</h2>
      <Transactions />
    </div>
  );
};
export default HomePage;
