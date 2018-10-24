import React, { Component } from 'react'
import { Grid, Header } from 'semantic-ui-react'

import { connect } from 'react-redux'
import RegisterForm from './Register_form'
import { userAction } from '../../redux/action/users'

class Register extends Component {  
  submit = values => {
    if(values.password === values.repassword){
      delete values.repassword;
      this.props.addUser(values)
    }
    else
      console.log(false)
  }
  render() {
    return (
    <div className='login-form'>
      <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            REGISTER
          </Header>
          <RegisterForm onSubmit={this.submit}/>
        </Grid.Column>
      </Grid>
    </div>
    )
  }
}

const mapDispatchToProps = (dispatch, state) => {
  return{
    addUser: (data) => {
      dispatch(userAction.addUser(data))
    }
  }
}

export default connect(null, mapDispatchToProps ) ( Register )