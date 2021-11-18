import React, { Component } from 'react';
import { useFormik } from "formik"

const App = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    onSubmit: values => {
      console.log(values)
    }
  })

  return (
      <div className="bg-dark col-md-4">
          <div className="d-flex flex-wrap "> 
          <div className="card m-3">
          <div className="card-body text-light bg-dark border border-light">
        <form onSubmit={formik.handleSubmit}>
        <input
        name="username"
        type="username"
        placeholder="Enter your username"
        value={formik.values.username}
        onChange={formik.handleChange}
      />
      <input
        name="password"
        type="password"
        placeholder="Enter your password"
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      <button className="btn btn-secondary ms-5 mb-5" type="submit">Submit</button>
        </form>
        </div>
            </div>
        </div>
    </div>
  )
}

export default App

