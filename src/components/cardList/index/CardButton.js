import React, { Component } from 'react'
import './Card.css'
import { NavLink } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import { ModalStoreConsumer } from '../../../hook/ModalStoreProvider'

class ButtonExampleEmphasisShorthand extends Component {

  
  render() {
    return (
    <div className='footer-button'>
      <NavLink to={`news/${this.props.cardid}`}><Button color='teal' content='Edit' /></NavLink >
      <ModalStoreConsumer>
        {store => (<Button color='red' onClick={() => {store.submitModal(true, this.props.cardid)}}>Delete</Button>)}
      </ModalStoreConsumer>
    </div>
    )
  }

} 

export default ButtonExampleEmphasisShorthand