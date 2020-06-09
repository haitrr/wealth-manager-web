import React from "react";
import ExpenseStatistic from "./ExpenseStatistic";
import moment from 'moment'

const StatisticPage = () => {
  return <div>
    <h1>Statistic</h1>
    <ExpenseStatistic dateFrom={moment().startOf('month')} dateTo={moment()}></ExpenseStatistic>
  </div>
}

export default StatisticPage;