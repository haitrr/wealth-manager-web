import React from "react";

const useForm = (submitCallback, onChange) => {
  const [values, setValues] = React.useState({})
  const [isSubmitting, setSubmitting] = React.useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    submitCallback(values, setSubmitting)
  }

  const handleChange = e => {
    e.preventDefault()
    const {name, value} = e.target;
    const newValues = {...values, [name]: value}
    setValues(newValues)
    if (onChange) {
      onChange(newValues)
    }
  }

  return [values, handleChange, handleSubmit, isSubmitting]
}

export default useForm;