import {AuthenticationContext} from "./App";
import {getEndpoint} from "./api";
import {Formik} from "formik";
import React from "react";
import {get, post} from "./httpClient";
import history from "./history";

const AddTransactionPage = () => {
  const [wallets, setWallets] = React.useState([])
  React.useEffect(() => {
    get(getEndpoint() + "/wallets").then(d => setWallets(d.items))
  }, [])
  return <Formik initialValues={{walletId: null}} onSubmit={(values, {setSubmitting}) => {
    values.walletId = parseInt(values.walletId)
    setSubmitting(true)
    post(getEndpoint() + "/transactions", values).then(d => {
      setSubmitting(false)
      history.push("/")
    }).catch(e => {
      alert(e)
      setSubmitting(false)
    })
  }}>
    {({handleSubmit, values, isSubmitting, handleBlur, handleChange}) => {
      return <form onSubmit={handleSubmit}>
        <div>
          <label>Amount :</label>
          <input required name="amount" value={values.amount} onChange={handleChange} type="number"
                 placeholder="Amount"/>
        </div>
        <div>
          <label>Wallet :</label>
          <select required name="walletId" onChange={handleChange} onBlur={handleBlur} value={values.walletId}>
            <option></option>
            {wallets.map((wallet) => {
              return <option key={wallet.id} value={wallet.id}>{wallet.name}</option>
            })}
          </select>
        </div>
        <div>
          <label>Category :</label>
          <select></select>
        </div>
        <button type="submit" disabled={isSubmitting}>Add</button>
      </form>
    }}
  </Formik>
}

export default AddTransactionPage;
