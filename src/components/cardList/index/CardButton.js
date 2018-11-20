import React, { Component } from 'react'
import './Card.css'
import { NavLink } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import { ModalStoreConsumer } from '../../../hook/ModalStoreProvider'
import gql from 'graphql-tag'

const DELETENEWS = gql`
  mutation DeleteNews( $id:ID! ) {
    deleteNews( where:{ id: $id } ){
      id
    }
  }
`

class ButtonExampleEmphasisShorthand extends Component {
  render() {

  const { cardid } = this.props

    return (
    <div className='footer-button'>
      <NavLink to={`news/${cardid}`}><Button color='teal' content='Edit' /></NavLink >
      <ModalStoreConsumer>
        {store => {
          const handleShowModal = () => {
            store.submitModal(cardid, true, DELETENEWS, 'ท่านต้องการที่จะลบข่าวนี้ ใช่หรือไม่')
          }
          return (<Button color='red' onClick={() => handleShowModal()}>Delete</Button>)}
        }
      </ModalStoreConsumer>
    </div>
    )
  }

} 

export default ButtonExampleEmphasisShorthand