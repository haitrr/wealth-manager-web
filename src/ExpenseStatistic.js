import {useTransactions} from "./useTransactions";
import React from "react";
import {PieChart, Pie, Legend, Cell, Label, ResponsiveContainer} from 'recharts'
import {formatMoney} from "./formatMoney";
import {VND} from './currencyCodes'
import moment from "moment";
import TransactionFilter from "./TransactionFilter";

const colors = ["#3366cc", "#dc3912", "#ff9900", "#109618", "#990099", "#0099c6", "#dd4477", "#66aa00", "#b82e2e", "#316395", "#3366cc", "#994499", "#22aa99", "#aaaa11", "#6633cc", "#e67300", "#8b0707", "#651067", "#329262", "#5574a6", "#3b3eac", "#b77322", "#16d620", "#b91383", "#f4359e", "#9c5935", "#a9c413", "#2a778d", "#668d1c", "#bea413", "#0c5922", "#743411"]

const getExpenseByCategory = (transations) => {
  const map = {}
  transations.forEach(t => {
    if (map[t.categoryId]) {
      map[t.categoryId].amount += t.amount
    } else {
      map[t.categoryId] = {name: t.categoryName, amount: t.amount}
    }
  })
  const rs = []
  Object.keys(map).forEach(k => rs.push(map[k]))
  return rs;
}

const ExpenseStatistic = () => {
  const [transactions, setFilters] = useTransactions({
    dateFrom: moment().startOf('month').toISOString(),
    dateTo: moment().toISOString()
  })
  if (!transactions) {
    return <h2>Loading</h2>
  }
  const expenseByCategory = getExpenseByCategory(transactions)
  const total = expenseByCategory.reduce((a, b) => a + b.amount, 0)
  return <div>
    <h2>Total: {formatMoney(total, VND)}</h2>
    <TransactionFilter onChange={(values) => {
      setFilters({
        dateFrom: moment(values.dateFrom).toISOString(),
        dateTo: moment(values.dateTo).toISOString(),
      })
    }}/>
    <ResponsiveContainer width="100%" height={500}>
      <PieChart>
        <Legend verticalAlign="top"/>
        <Pie data={expenseByCategory} dataKey="amount" nameKey="name" label={(entry) => {
          return entry.name + " (" + entry.percent.toFixed(2) * 100 + "%)";
        }}>
          {
            expenseByCategory.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]}/>
            ))
          }
        </Pie>
      </PieChart>
    </ResponsiveContainer>
    <ExpenseByCategory transactions={transactions}/>
  </div>
}

const ExpenseByCategory = ({transactions}) => {
  const expenseByCategory = getExpenseByCategory(transactions)
  return <div>
    {expenseByCategory.map(e => {
      return <div key={e.name}>{e.name} : {formatMoney(e.amount, VND)}</div>
    })}
  </div>
}

export default ExpenseStatistic;
