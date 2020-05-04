import React from "react";
import {Formik} from "formik";
import {AuthenticationContext} from "./App";
import {Redirect} from "react-router-dom";

const LoginPage = () => {
  const [authentication, setAuthentication] = React.useContext(AuthenticationContext);
  console.log(authentication)
  if (authentication != null) {
    return <Redirect to="/"/>
  }

  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{userName: '', password: ''}}
        validate={values => {
          const errors = {};
          if (!values.userName) {
            errors.userName = 'Required';
          }
          if (!values.password) {
            errors.password = "Required";
          }
          return errors;
        }}
        onSubmit={(values, {setSubmitting, setErrors}) => {
          fetch("http://localhost:5000/authentication", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(values)
          }).then(r => {
            if (r.status === 400) {
              setErrors({userName: "Username or password invalid "})
              setSubmitting(false)
            } else if (r.status !== 200) {
              setErrors({userName: "there is an error"})
              setSubmitting(false)
            } else {
              r.json().then(d => {
                localStorage.setItem("jwt", d.token)
                setAuthentication(d);
                setSubmitting(false)
              })
            }
          }).catch(() => {
            setErrors({userName: "there is an error"})
            setSubmitting(false)
          });
        }}
      >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="userName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.userName}
            />
            {errors.userName && touched.userName && errors.userName}
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};
export default LoginPage;
