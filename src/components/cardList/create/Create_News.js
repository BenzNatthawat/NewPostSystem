import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

class Create_News extends Component {

  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit} className='ui form'>
        <div className='field'>
          <Field
            name="title"
            component="input"
            type="text"
            placeholder="Input Titel"
          />
        </div>
        <div className='field'>
          <Field
            name="detail"
            component="textarea"
            type="text"
            placeholder="Input Detail"
          />
        </div>
        <button type="submit" className='ui button'>SAVE</button>
      </form>
    )
  }
}

Create_News = reduxForm({
  form: 'Create_News'
})(Create_News)

export default Create_News