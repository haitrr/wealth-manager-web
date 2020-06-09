import React from "react";
import {get} from "./httpClient";
import {getEndpoint} from "./api";
import useTransactionsCategories from "./useTransactionCategories";

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

export const useTransactions = (dateFrom, dateTo) => {
  const [transactions, setTransactions] = React.useState(null)
  React.useEffect(() => {
    get(`${getEndpoint()}/transactions`, {dateFrom, dateTo}).then(data => setTransactions(data.items))
  }, [])
  const categories = useTransactionsCategories()
  if (categories === null || transactions == null) {
    return null
  }
  mapTransactionCategoriesName(transactions, categories)
  return transactions
}