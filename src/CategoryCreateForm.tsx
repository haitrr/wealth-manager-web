import React, {useState} from "react";
import {Button, Form, Input} from "antd";
import CategorySelect from "./CategorySelect";
import {post} from "./httpClient";
import {getEndpoint} from "./api";
import history from "./history";

interface CreateCategoryFormValues {
  parentId: number;
}


const createCategory = (
  values: CreateCategoryFormValues,
  setSubmitting: (submitting: boolean) => void) => {
  setSubmitting(true)
  post(getEndpoint() + '/transaction-categories', {...values}).then(() => {
    history.push('/categories')
  }).catch(() => {
    setSubmitting(false)
  })
}


const CategoryCreateForm = () => {
  const [submitting, setSubmitting] = useState(false)
  const [form] = Form.useForm();
  return <Form form={form} onFinish={(values) => createCategory(values, setSubmitting)}>
    <Form.Item label="Name" name="name" required rules={[{required: true}]}>
      <Input type="text"/>
    </Form.Item>
    <Form.Item label="Parent" name="parentId">
      <CategorySelect/>
    </Form.Item>
    <Button htmlType="submit" disabled={submitting}>Create</Button>
  </Form>
}

export default CategoryCreateForm;