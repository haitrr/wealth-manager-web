import React from "react";

const DateTimeSelect = ({defaultValue, name, onChange, required}) => {
  return <input
    type="datetime-local"
    name={name}
    required={required}
    defaultValue={defaultValue}
    onChange={onChange}/>
}

export default DateTimeSelect;