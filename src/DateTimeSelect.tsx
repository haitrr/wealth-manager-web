import {DatePicker} from "antd";
import React from "react";
import {Moment} from "moment";

interface Props {
  defaultValue: string;
  onChange?: (value: Moment | null) => void;
  value?: Moment,
  required: boolean;
}

const DateTimeSelect: React.FC<Props> = ({onChange, value}) => {
  return <DatePicker
    onChange={onChange}
    value={value}
    showTime={{format: 'HH:mm'}}
    format="YYYY-MM-DD HH:mm"
  />
}

export default DateTimeSelect;