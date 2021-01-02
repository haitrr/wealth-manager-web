import React from 'react';
import moment from 'moment';
import { formatMoney } from './formatMoney';
import { VND } from './currencyCodes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/free-solid-svg-icons'

interface Transaction {
  createdAt: string;
  id: number;
  amount: number;
  categoryName: string;
  iconName: IconName;
}

interface Props {
  transactions: Transaction[];
}

const TransactionTimeline: React.FC<Props> = ({ transactions }) => {
  // this gives an object with dates as keys
  const groups = transactions.reduce((group: { [key: string]: Transaction[] }, transaction) => {
    const date = moment(transaction.createdAt).startOf('day').unix();
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
  }).sort((a,b) => Number.parseInt(b.date) - Number.parseInt(a.date));


  return (
    <div>
      {groupArrays.map((g) => (
        <div key={g.date}>
          <span>{moment.unix(Number.parseInt(g.date)).format('MMM DD YYYY')}</span>
          {g.transactions.map((t) => (
            <div style={{ marginLeft: '1rem' }} key={t.id}>
              <FontAwesomeIcon icon={t.iconName}/>
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
