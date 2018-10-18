import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

class FormExampleSubcomponentControl extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { handleSubmit } = this.props
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Titel' placeholder='Input Titel' />
        </Form.Group>
        <Form.TextArea label='Detail' placeholder='Input Detail' />
        <Form.Group>
        <Form.Button color='red'>CANCEL</Form.Button>
        <Form.Field control={Button} primary
        type='submit'>
        SAVE
        </Form.Field>
        </Form.Group>
      </Form>
    )
  }
}

FormExampleSubcomponentControl = reduxForm({
  form : 'FormExampleSubcomponentControl'
})(FormExampleSubcomponentControl)

FormExampleSubcomponentControl = connect(
  state => ({
    initialValues: {
      user: JSON.parse(localStorage.getItem("userId"))
    }
  })
)(FormExampleSubcomponentControl)

export default FormExampleSubcomponentControl