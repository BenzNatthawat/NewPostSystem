import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

import { connect } from 'react-redux'

class FormExampleSubcomponentControl extends Component {
  handleChange = (e, { value }) => this.setState({ value })

  render() {
    console.log(this.props.match.params.id);
    console.log(this.props.NewsList);
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

function mapStateToProps(state){
  return {
    NewsList: [...state.News.data]
  }
}

export default connect(mapStateToProps)(FormExampleSubcomponentControl)