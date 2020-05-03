import React from "react";
import {Formik} from "formik";

const LoginPage = () => (
  <div>
    <h1>Login</h1>
    <Formik
      initialValues={{ userName: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.userName) {
          errors.userName = 'Required';
        }
        if(!values.password) {
          errors.password = "Required";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
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
export default LoginPage;
