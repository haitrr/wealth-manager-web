import React from "react";
import useForm from "./useForm";
import moment from "moment";

const TransactionFilter = ({onChange}) => {
  const startOfMonth = moment().startOf("month").format("YYYY-MM-DD")
  const today = moment().format("YYYY-MM-DD")
  const [values, handleChange, handleSubmit, isSubmitting] = useForm(null, onChange, {dateFrom:startOfMonth, dateTo: today})
  return <form>
    <label>From</label>
    <input type="date" name="dateFrom" defaultValue={startOfMonth} max={values.dateTo} onChange={handleChange}/>
    <br/>
    <label>To</label>
    <input type="date" name="dateTo" defaultValue={today} min={values.dateFrom} onChange={handleChange}/>
  </form>
}

export default TransactionFilter;