import React from "react";

interface Props {
  defaultValue: string;
  onChange?: (value: string) => void;
  required: boolean;
}

const DateTimeSelect: React.FC<Props> = ({defaultValue, onChange, required}) => {
  return <input
    type="datetime-local"
    required={required}
    defaultValue={defaultValue}
    onChange={(e) => {
      if(onChange) {
        onChange(e.target.value);
      }
    }}/>
}

export default DateTimeSelect;