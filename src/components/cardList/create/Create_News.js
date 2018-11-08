import React, { Component } from 'react'
import { Button, TextArea, Form } from 'semantic-ui-react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const POST_CREATENEWS = gql`
  mutation postcreateNews($topic: String!, $description: String!) {
    createNews (data: {topic:$topic,description:$description}){
      id
    }
  }
`

class Create_News extends Component {
  state = {
    topic: '',
    description: '',
  }
  render() {
    const { topic, description } = this.state
    return (
      <Form>
        <Form.Field>
          <label>Topic</label>
          <input 
            value={topic}
            placeholder='topic'
            onChange={e => this.setState({ topic: e.target.value })}
          />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <TextArea 
            value={description}
            placeholder='description' 
            onChange={e => this.setState({ description: e.target.value })}
          />
        </Form.Field>

        <Mutation mutation={POST_CREATENEWS} variables={{ topic, description }}>
          {PostcreateNews => <Button onClick={PostcreateNews}>SAVE</Button>}
        </Mutation>
      </Form>
        
    )
  }
}

export default Create_News