import useTransactionsCategories from "./useTransactionCategories";
import React from "react";

const CategoryMultiSelect = (props) => {
  const categories = useTransactionsCategories()
  if (categories == null) {
    return <h1>Loading</h1>
  }
  return <select{...props} multiple>
    <option/>
    {categories.map(category => {
      return <option key={category.id} value={category.id}>{category.name}</option>
    })}
  </select>;
}
export default CategoryMultiSelect;