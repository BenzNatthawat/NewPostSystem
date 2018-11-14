import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import store from '../../varibal'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

const DELETENEWS = gql`
  mutation DeleteNews( $id:ID! ) {
    deleteNews( where:{ id: $id } ){
      id
    }
}
`

class Modal_del extends Component {

  state = {
    show : false
  }
  
  close = () => {
    console.log("xxxx")
    store.show = false
    store.cardid = ''
    this.setState({show: false})
    
  }

  render() {
    let id = store.cardid
    return (
    <div>
      <Modal size='mini' open={store.show} onClose={this.close}>
        <Modal.Header>แน่ใจ!!!!</Modal.Header>
          <Modal.Content>
            <p>ท่านแน่ใจหรือไม่ที่จะลบข่าวนี้ ไอดี:{store.cardid}</p>
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={() => this.close()}>ยกเลิก</Button>
            <Mutation mutation={DELETENEWS} variables={{ id }}>
            {DeleteNews  => {
              return <Button color='green' onClick={() => {
                this.close()
                DeleteNews()
              }}>
                ตกลง
              </Button>}
            }
            </Mutation>
          </Modal.Actions>
      </Modal>
    </div>
    )
  }
} 

export default Modal_del