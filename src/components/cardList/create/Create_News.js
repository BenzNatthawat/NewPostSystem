import React, { Component } from 'react'
import { Button, TextArea, Form } from 'semantic-ui-react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { ALL_NEWS } from '../../../containers/pages/Page_News_all'

const POST_CREATENEWS = gql`
  mutation postcreateNews($topic: String!, $description: String!) {
    createNews (data: {topic:$topic,description:$description}){
      id
      topic
      description
      user {
        id
      }
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

        <Mutation 
          mutation={POST_CREATENEWS}
          variables={{ topic, description }}
          onCompleted={() => this.props.history.push('/')}
          update={(store, { data: { createNews } }) => {
            const data = store.readQuery({ query: ALL_NEWS })
            data.newses.push(createNews)
            store.writeQuery({
              query: ALL_NEWS,
              data
            })
          }}
        >
          {(PostcreateNews, { loading, error }) => (
              <div>
                <Button onClick={PostcreateNews}>SAVE</Button>
                {loading && <p>กำลังบันทึก</p>}
                {error && <p>บันทึกไม่สำเร็จ ลองใหม่อีกครั้ง</p>}
              </div>
            )
          }
        </Mutation>
      </Form>
        
    )
  }
}

export default Create_News