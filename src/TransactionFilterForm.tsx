import {DatePicker, Form} from "antd";
import React from "react";
import moment from "moment";

const TransactionFilterForm = () => {
  const [form] = Form.useForm()
  return <Form form={form}>
    <Form.Item
      label="Time Range"
      name="timeRange"
      initialValue={[moment().startOf('month'), moment().endOf('month')]}
    >
      <DatePicker.RangePicker/>
    </Form.Item>
  </Form>
}

export default TransactionFilterForm;