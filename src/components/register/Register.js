import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Segment,Icon } from 'semantic-ui-react'
import logo from '../../images/logo.jpg'
import { Link } from 'react-router-dom'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const POST_CREATEUSER = gql`
  mutation PostcreateUser($name:String!,$username:String!,$password:String!){
      createUser (data:{name:$name,username:$username,password:$password}){
        id
    }
  }
`

class registerForm extends Component {
    state = {
      name: '',
      username: '',
      password: '',
      repassword: ''
    }
  render() {
    const { name, username, password, repassword } = this.state
    return (
      <div className='login-form'>
        {/*
          Heads up! The styles below are necessary for the correct render of this example.
          You can do same with CSS, the main idea is that all the elements up to the `Grid`
          below must have a height of 100%.
        */}
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              <Image circular src={logo} /> News Post System
            </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input 
                  fluid 
                  icon='user' 
                  iconPosition='left' 
                  placeholder='name' 
                  type='text'
                  value={name}
                  onChange={e => this.setState({ name: e.target.value}) }
                />

                <Form.Input
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='username'
                  type='text'
                  value={username}
                  onChange={e => this.setState({ username: e.target.value}) }
                />

                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  value={password}
                  onChange={e => this.setState({ password: e.target.value}) }
                />

                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Re Password'
                  type='password'
                  value={repassword}
                  onChange={e => this.setState({ repassword: e.target.value}) }
                />
              <Mutation 
                mutation={POST_CREATEUSER} 
                variables={{ name, username, password }}
                onCompleted={ data => {
                  window.localStorage.setItem( 'user_login', data.createUser.id )
                  this.props.history.push('/')
                }}
              >
                {PostcreateUser => <Button color='teal' fluid size='large' onClick={PostcreateUser}>Register</Button>}
              </Mutation>
              </Segment>
              
            </Form>
            <Link to='/' style={{margin:'10px',display:'block'}}><Icon disabled name='home' size='large' />Home</Link>

          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default registerForm