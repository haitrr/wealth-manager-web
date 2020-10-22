import React from "react";
import useTransactionsCategories from "./useTransactionCategories";

interface CategorySelectProps {
}

const CategorySelect = (props: CategorySelectProps) => {
  const categories = useTransactionsCategories()
  if (categories == null) {
    return <h1>Loading</h1>
  }
  return <select{...props}>
    <option/>
    {categories.map(category => {
      return <option key={category.id} value={category.id}>{category.name}</option>
    })}
  </select>;
}

export default CategorySelect;