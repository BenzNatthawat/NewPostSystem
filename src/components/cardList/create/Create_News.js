import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

class FormExampleSubcomponentControl extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Titel' placeholder='Input Titel' />
        </Form.Group>
        <Form.TextArea label='Detail' placeholder='Input Detail' />
        <Form.Group>
        <Form.Button color='blue'>SAVE</Form.Button>
        <Form.Button color='red'>CANCEL</Form.Button>
        </Form.Group>
      </Form>
    )
  }
}

export default FormExampleSubcomponentControl