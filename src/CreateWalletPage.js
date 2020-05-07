import React from "react";
import {Formik} from "formik";
import {AuthenticationContext} from "./App";
import {Redirect} from "react-router-dom";

const CreateWalletPage = () => {
  const [authentication] = React.useContext(AuthenticationContext)
  const [created, setCreated] = React.useState(false)
  if (created) {
    return <Redirect to="/wallets"/>
  }
  return <div>
    <h1>Create Wallet</h1>
    <Formik initialValues={{name: ''}} onSubmit={(values, {setSubmitting ,setErrors}) => {
      setSubmitting(true)
      fetch(process.env.REACT_APP_WM_ENDPOINT + "/wallet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "bearer " + authentication.token
        },
        body: JSON.stringify(values),
      }).then(response => {
        if (response.ok) {
          setCreated(true)
        } else {
          alert("Fail to create wallet")
        }
      }).catch(e => {
        alert(e.message)
      }).finally(() => {
        setSubmitting(false)
      })

    }}>
      {({

          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) =>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input onBlur={handleBlur} name="name" onChange={handleChange}/>
          <button disabled={isSubmitting} type="submit">Create</button>
        </form>}
    </Formik>
  </div>
}

export default CreateWalletPage;
