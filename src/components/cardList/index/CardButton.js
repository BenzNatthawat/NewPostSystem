import React, { Component } from 'react'
import './Card.css'
import { NavLink } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import store from '../../../varibal'

class ButtonExampleEmphasisShorthand extends Component {

  Modal = (cardid) => {
    store.show = true
    store.cardid = cardid
  }
  
  render() {
    return (
    <div className='footer-button'>
      <NavLink to={`news/${this.props.cardid}`}><Button color='teal' content='Edit' /></NavLink >
      <Button color='red' onClick={() => {this.Modal(this.props.cardid); this.props.action()} }>Delete</Button>
    </div>
    )
  }

} 

export default ButtonExampleEmphasisShorthand