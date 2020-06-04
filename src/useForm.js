import React from "react";

const useForm = submitCallback => {
  const [values, setValues] = React.useState({})
  const [isSubmitting, setSubmitting] = React.useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    submitCallback(values, setSubmitting)
  }

  const handleChange = e => {
    e.preventDefault()
    const {name, value} = e.target;
    setValues(values => ({...values, [name]: value}))
  }

  return [values, handleChange, handleSubmit, isSubmitting]
}

export default useForm;