import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class registerForm extends Component {

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
          <form onSubmit={handleSubmit} className='ui form'>
          <div className='ui stacked segment'>
            <div className='field'>
              <div className='ui fluid left icon input'>
                <Field
                  name="first_name"
                  component="input"
                  type="text"
                  placeholder="First Name"
                />  
                <i aria-hidden="true" className="user icon"></i>
              </div>
            </div>
            <div className='field'>
              <div className='ui fluid left icon input'>
                <Field
                  name="last_name"
                  component="input"
                  type="text"
                  placeholder="Last Name"
                />  
                <i aria-hidden="true" className="user icon"></i>
              </div>
            </div>
            <div className='field'>
              <div className='ui fluid left icon input'>
                <Field
                  name="username"
                  component="input"
                  type="text"
                  placeholder="User"
                />  
                <i aria-hidden="true" className="users icon"></i>
              </div>
            </div>
            <div className='field'>
              <div className='ui fluid left icon input'>
                <Field
                  name="password"
                  component="input"
                  type="password"
                  placeholder="Password"
                />
                <i aria-hidden="true" className="lock icon"></i>
              </div>
            </div>
            <div className='field'>
              <div className='ui fluid left icon input'>
                <Field
                  name="repassword"
                  component="input"
                  type="password"
                  placeholder="Re Password"
                />
                <i aria-hidden="true" className="lock icon"></i>
              </div>
            </div>
            <div>
              <button type="submit" className='ui teal large fluid button'>
                Submit
              </button>
            </div>
          </div>
          </form>
      </div>
    )
  }
}

registerForm = reduxForm({
  form: 'registerForm'
})(registerForm)

export default registerForm