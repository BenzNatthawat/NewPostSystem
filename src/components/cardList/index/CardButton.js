import React, { Component } from 'react'
import './Card.css'
import { NavLink } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import { Mutation } from 'react-apollo'
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
    const id = this.props.cardid
    return (
    <div className='footer-button'>
      <NavLink to={`news/${this.props.cardid}`}><Button color='teal' content='Edit' /></NavLink >
        <Mutation mutation={DELETENEWS} variables={{ id }}>
          {DeleteNews  => {
            return <Button color='red' onClick={DeleteNews}>DELETE</Button>}
          }
        </Mutation>
    </div>
    )
  }
} 

export default ButtonExampleEmphasisShorthand