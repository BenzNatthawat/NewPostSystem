import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import { connect } from 'react-redux'

class FormExampleSubcomponentControl extends Component {
  handleChange = (e, { value }) => this.setState({ value })

  render() {
    let News_edit = this.props.NewsList
    News_edit = News_edit.filter( News_one => {
    if( News_one.id === Number(this.props.edit_id) )
        return News_one;
    } )

    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Titel' placeholder='Input Titel' value={News_edit[0].title} />
        </Form.Group>
        <Form.TextArea label='Detail' placeholder='Input Detail' value={News_edit[0].detail} />
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