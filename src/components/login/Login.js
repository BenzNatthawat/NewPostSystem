import React from 'react'
import { Grid, Header, Segment, Message, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import Login_Form from './Login_form'

const Login = () => {
  const submit = values => {
    console.log(values)
  }
  return (
  <div className='login-form'>
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          LOGIN
        </Header>
        <Login_Form  onSubmit={submit}/>
        <Message>
          New to us? <Link to="/register">Sign Up</Link>
        </Message>
        <Link to="/"><Icon name='arrow alternate circle left outline' size='large' />Back</Link>
      </Grid.Column>
    </Grid>
  </div>
  )
}

export default Login