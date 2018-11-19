import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { ModalStoreConsumer } from '../../hook/ModalStoreProvider'

const DELETE = gql`
  mutation DeleteNews( $id:ID! ) {
    deleteNews( where:{ id: $id } ){
      id
    }
  }
`

const Modal_del = () => {
  return (
    <div>
    <ModalStoreConsumer>
      {store => {
        const id = store.Modal.id
        const handleCloseModal = () => {
          store.submitModal('');
        }
        return (
        <Modal size='mini' open={store.Modal.show}>
          <Modal.Header>แน่ใจ!!!!</Modal.Header>
            <Modal.Content>
              <p>{store.Modal.message} : {store.Modal.id}</p>
            </Modal.Content>
            <Modal.Actions>
              <Button negative onClick={() => handleCloseModal()}>ยกเลิก</Button>
              <Mutation mutation={DELETE} variables={{ id }}>
              {DeleteNews  => {
                return <Button color='green' onClick={() => {
                  handleCloseModal()
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