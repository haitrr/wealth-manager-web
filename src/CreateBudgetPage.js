import React from "react";
import useForm from "./useForm";
import CategoryMultiSelect from "./CategoryMultiSelect";
import MoneyInput from "./ MoneyInput";
import Checkbox from '@material-ui/core/Checkbox';
import TimeRangeInput from "./TimeRangeInput";
import WalletMultiSelect from "./WalletMultiSelect";

const CreateBudgetPage = () => {
  const onSubmit = (values, setSubmitting) => {
    console.log(values)
    setSubmitting(false)
  }
  const [values, handleChange, handleSubmit, isSubmitting] = useForm(onSubmit, null, {})
  return <div>
  <h1>Create Budget</h1>
    <form onSubmit={handleSubmit}>
      <p>Categories</p>
      <CategoryMultiSelect onChange={handleChange} value={values.categories} name={values.categories}/>
      <p>Amount</p>
      <MoneyInput/>
      <p>Time Range</p>
      <TimeRangeInput/>
      <p>Wallets</p>
      <WalletMultiSelect/>
      <p>Repeat ?</p>
      <Checkbox/>
      <button type="submit" disabled={isSubmitting}>Create</button>
    </form>
  </div>
}

export default CreateBudgetPage;