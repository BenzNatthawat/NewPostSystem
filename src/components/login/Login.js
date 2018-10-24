import React, { Component } from 'react'
import { Grid, Header, Message, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import LoginForm from './Login_form'
import { connect } from 'react-redux'
import { user_login_Action } from '../../redux/action/login'

class Login extends Component {  
  submit = values => {
    const {history} = this.props
    this.props.login(values,history)
  }
  render() {
    return (
    <div className='login-form'>
      <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            LOGIN
          </Header>
          <LoginForm onSubmit={this.submit}/>
          <Message>
            New to us? <Link to="/register">Sign Up</Link>
          </Message>
          <Link to="/"><Icon name='arrow alternate circle left outline' size='large' />Back</Link>
        </Grid.Column>
      </Grid>
    </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (data,history) => {
      dispatch(user_login_Action.login(data,history))
    }
  }
}

export default connect(null, mapDispatchToProps)(Login)