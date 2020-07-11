import React from "react";
import useForm from "./useForm";
import CategoryMultiSelect from "./CategoryMultiSelect";

const CreateBudgetPage = () => {
  const onSubmit = (values, setSubmitting) => {
    console.log(values)
    setSubmitting(false)
  }
  const [values, handleChange, handleSubmit, isSubmitting] = useForm(onSubmit, null, {})
  return <div>
  <h1>Create Budget</h1>
    <form onSubmit={handleSubmit}>
      <CategoryMultiSelect onChange={handleChange} value={values.categories} name={values.categories}/>
      {/*<MoneyInput/>*/}
      {/*<TimeRangeInput/>*/}
      {/*<WalletMultiSelect/>*/}
      {/*<CheckBox/>*/}
      <button type="submit" disabled={isSubmitting}>Create</button>
    </form>
  </div>
}

export default CreateBudgetPage;