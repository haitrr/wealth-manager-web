import React from 'react'
import CategorySelect from "./CategorySelect";
import useForm from "./useForm";
import {post} from "./httpClient";
import {getEndpoint} from "./api";
import history from "./history";

const createCategory = (values, setSubmitting) => {
  values.parentId = parseInt(values.parentId)
  setSubmitting(true)
  post(getEndpoint() + '/transaction-categories', {...values}).then(() => {
    history.push('/categories')
  }).catch(() => {
    setSubmitting(false)
  })
}

const CategoryCreatePage = () => {
  const [values, handleChange, handleSubmit, isSubmitting] = useForm(createCategory)
  return <div>
    <h1>Create category</h1>
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input name="name" type="text" defaultValue={values.name} onChange={handleChange}/>
      <label>Parent</label>
      <CategorySelect name="parentId" defaultValue={values.parentId} onChange={handleChange}/>
      <button type="submit" disabled={isSubmitting}>Create</button>
    </form>
  </div>
}

export default CategoryCreatePage;