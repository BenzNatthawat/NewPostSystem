import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { ModalStoreConsumer } from '../../hook/ModalStoreProvider'

const DELETENEWS = gql`
  mutation DeleteNews( $id:ID! ) {
    deleteNews( where:{ id: $id } ){
      id
    }
}
`

const Modal_del = () => {
  const {cardid} = ''
  return (
    <div>
    <ModalStoreConsumer>
      {store => {
        const id = store.Modal.cardid
        const handleShowModal = (cardid) => {
          store.submitModal(false, cardid);
        }
        return (
        <Modal size='mini' open={store.Modal.show}>
          <Modal.Header>แน่ใจ!!!!</Modal.Header>
            <Modal.Content>
              <p>ท่านแน่ใจหรือไม่ที่จะลบข่าวนี้ ไอดี:{cardid}</p>
            </Modal.Content>
            <Modal.Actions>
              <Button negative onClick={() => handleShowModal('')}>ยกเลิก</Button>
              <Mutation mutation={DELETENEWS} variables={{ id }}>
              {DeleteNews  => {
                return <Button color='green' onClick={() => {
                  handleShowModal('')
                  DeleteNews()
                }}>
                  ตกลง
                </Button>}
              }
              </Mutation>
            </Modal.Actions>
          </Modal>
        )
      }}
    </ModalStoreConsumer>
    </div>
    )
}

export default Modal_del