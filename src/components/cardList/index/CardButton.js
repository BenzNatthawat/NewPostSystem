import React, { Component } from 'react'
import './Card.css'
import { NavLink } from 'react-router-dom'

import { connect } from 'react-redux'

import { Button } from 'semantic-ui-react'
// import Modal from '../../Modal/Modal'
import * as type from '../../../constants/ActionTypes';

class ButtonExampleEmphasisShorthand extends Component {
  state = { open: false }

  handleClickModal(cardid) {
    this.props.showModal(cardid)
  }

  render() {
    return (
    <div className='footer-button'>
      <NavLink to={`news/${this.props.cardid}`}><Button color='teal' content='Edit' /></NavLink >
      <Button onClick={() => this.handleClickModal(this.props.cardid) } color='red' content='Delete' />
    </div>
    )
  }
} 

const mapDispatchToProps = (dispatch) => {
	return{
		showModal: (cardid) => {
      dispatch({
        type: type.MODAL.SHOW,
        payload: cardid
      })
		}
	}
}

export default connect(null, mapDispatchToProps)(ButtonExampleEmphasisShorthand)