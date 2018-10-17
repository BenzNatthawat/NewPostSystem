import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

import './Card.css'
import { NavLink } from 'react-router-dom'

class ButtonExampleEmphasisShorthand extends Component {

  render() {

    return (
    <div className='footer-button'>
      <NavLink to={`news/${this.props.cardid}`}><Button color='teal' content='Edit' /></NavLink >
      <NavLink to={`news/${this.props.cardid}`}><Button color='red' content='Delete' /></NavLink >
    </div>
    )
  }
}

export default ButtonExampleEmphasisShorthand