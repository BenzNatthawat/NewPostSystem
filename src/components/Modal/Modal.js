import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import { Mutation } from 'react-apollo'
import { ModalStoreConsumer } from '../../hook/ModalStoreProvider'

const Modal_del = () => {
  return (
    <div>
    <ModalStoreConsumer>
      {store => {
        const { id, functionGql, message, show } = store.Modal
        const handleCloseModal = () => {
          store.submitModal('');
        }
        return (
        <Modal size='mini' open={show}>
          <Modal.Header>แน่ใจ!!!!</Modal.Header>
            <Modal.Content>
              <p>{message} : {id}</p>
            </Modal.Content>
            <Modal.Actions>
              <Button negative onClick={() => handleCloseModal()}>ยกเลิก</Button>
              <Mutation mutation={functionGql} variables={{ id }}>
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