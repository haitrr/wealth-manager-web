import React from 'react';
import moment from 'moment';
import { formatMoney } from './formatMoney';
import { VND } from './currencyCodes';

interface Transaction {
  createdAt: string;
  id: number;
  amount: number;
  categoryName: string;
}

interface Props {
  transactions: Transaction[];
}

const TransactionTimeline: React.FC<Props> = ({ transactions }) => {
  // this gives an object with dates as keys
  const groups = transactions.reduce((group: { [key: string]: Transaction[] }, transaction) => {
    const date = moment(transaction.createdAt).startOf('day').format('DD-MM-YYYY');
    if (!group[date]) {
      group[date] = [];
    }
    group[date].push(transaction);
    return group;
  }, {});


  // Edit: to add it in the array format instead
  const groupArrays = Object.keys(groups).map((date) => {
    return {
      date,
      transactions: groups[date],
    };
  });


  return (
    <div>
      {groupArrays.map((g) => (
        <div key={g.date}>
          <span>{moment(g.date, 'DD-MM-YYYY').format('MMM DD')}</span>
          {g.transactions.map((t) => (
            <div style={{ marginLeft: '1rem' }} key={t.id}>
              <div>{formatMoney(t.amount, VND)}</div>
              <div>{t.categoryName}</div>
              <hr />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TransactionTimeline;
