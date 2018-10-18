import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class LoginForm extends Component {

  render() {
    const { handleSubmit } = this.props
    return (
      <div>
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <div>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div>
        <button type="submit">
          Submit
        </button>
        <button type="button">
          Clear Values
        </button>
      </div>
    </form>
      </div>
    )
  }
}

LoginForm = reduxForm({
  form: 'LoginForm'
})(LoginForm)

export default LoginForm