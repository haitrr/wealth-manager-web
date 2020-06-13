import React from "react";
import useForm from "./useForm";

const TransactionFilter = ({onChange}) => {
  const [values, handleChange, handleSubmit, isSubmitting] = useForm(null, onChange)
  return <form>
    <label>From</label>
    <input type="date" name="dateFrom" max={values.dateTo} onChange={handleChange}/>
    <br/>
    <label>To</label>
    <input type="date" name="dateTo" min={values.dateFrom} onChange={handleChange}/>
  </form>
}

export default TransactionFilter;