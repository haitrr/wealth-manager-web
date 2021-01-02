import React from "react";
import {get} from "./httpClient";
import {getEndpoint} from "./api";
import useTransactionsCategories from "./useTransactionCategories";

const mapTransactionCategoriesName = (transactions, categories) => {
  transactions.forEach(t => {
    let category = categories.find(c => c.id === t.categoryId)
    let name = "Others"
    let iconName = 'boxes'
    if (category) {
      name = category.name
      iconName = category.iconName
    }
    t.categoryName = name;
    t.iconName = iconName
  })
}

export const useTransactions = (defaultFilters) => {
  const [transactions, setTransactions] = React.useState(null)
  const [filters, setFilters] = React.useState(defaultFilters)
  React.useEffect(() => {
    get(`${getEndpoint()}/transactions`, filters).then(data => setTransactions(data.items))
  }, [filters])
  const categories = useTransactionsCategories()
  if (categories === null || transactions == null) {
    return [null,null]
  }
  mapTransactionCategoriesName(transactions, categories)
  return [transactions, setFilters]
}