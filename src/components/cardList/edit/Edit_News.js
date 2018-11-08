import React, { Component } from 'react'
import { Button, TextArea, Form } from 'semantic-ui-react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const UPDATENEWS = gql`
  mutation UpdateNews($topic:String!,$description:String!,$id:ID!){
    updateNews(data:{topic:$topic,description:$description},where:{id:$id}){
      id
    }
  }
`
class Edit_News extends Component {
  state={
    topic: this.props.newsall.topic,
    description: this.props.newsall.description
  }
  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { topic, description } = this.state
    const id = this.props.id
    if(this.props.mess === 'error' )
      return (
        <div>ค้นหา ไม่เจอข่าวที่ต้องการแก้ไข</div>
      )
    else
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
          <Mutation mutation={UPDATENEWS} variables={{ topic, description, id }}>
            {(UpdateNews, { loading, error }) => (
              <div>
                <Button onClick={UpdateNews}>SAVE</Button>
                {loading && <p>กำลังบันทึก</p>}
                {error && <p>บันทึกไม่สำเร็จ ลองใหม่อีกครั้ง</p>}
              </div>
            )}
          </Mutation>
        </Form>
      )
  }
}

export default Edit_News