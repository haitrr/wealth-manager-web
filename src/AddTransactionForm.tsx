import useWallets from "./useWallets";
import moment from "moment";
import {post} from "./httpClient";
import {getEndpoint} from "./api";
import history from "./history";
import CategorySelect from "./CategorySelect";
import DateTimeSelect from "./DateTimeSelect";
import React, {useState} from "react";
import {Form, Input} from "antd";
import WalletSelect from "./WalletSelect";

export interface AddTransactionFormValues {
  createdAt: string;
  categoryId: number;
  amount: number;
  walletId: number;
}

const AddTransactionForm = () => {
  const [form] = Form.useForm()
  const [isSubmitting, setSubmitting] = useState<boolean>(false)

  const handleSubmit = (values: AddTransactionFormValues) => {
    // values.walletId = parseInt(values.walletId)
    // values.amount = parseInt(values.amount)
    // values.categoryId = parseInt(values.categoryId)
    values.createdAt = moment(values.createdAt).toISOString();
    setSubmitting(true)
    post(getEndpoint() + "/transactions", values).then(d => {
      setSubmitting(false)
      history.push("/")
    }).catch(e => {
      alert(e)
      setSubmitting(false)
    })
  }

  return <Form labelCol={{span: 8}} wrapperCol={{span: 8}} form={form} onFinish={handleSubmit}>
    <Form.Item name="amount" label="Amount" rules={[{required: true}]}>
      <Input type="number"
             placeholder="Amount"/>
    </Form.Item>
    <Form.Item name="walletId" label="Wallet" rules={[{required: true}]}>
      <WalletSelect/>
    </Form.Item>
    <Form.Item label="Category" name="categoryId" rules={[{required: true}]}>
      <CategorySelect/>
    </Form.Item>
    <Form.Item name="createdAt" label="At" rules={[{required: true}]}>
      <DateTimeSelect
        required
        defaultValue={moment().format('YYYY-MM-DDThh:mm')}
      />
    </Form.Item>
    <button type="submit" disabled={isSubmitting}>Add</button>
  </Form>
}

export default AddTransactionForm;