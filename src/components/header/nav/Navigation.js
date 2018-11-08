import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default class MenuExampleNameProp extends Component {
  state = {}

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    if(name === "login")
      this.setState({ login_member: 1 })
    else if(name === "logout")
      this.setState({ login_member: 0 })
  }
  logout = () => {
    localStorage.removeItem("userId_login")
  }
  
  render() {
    const { activeItem } = this.state
    let login_member = 0
    if(localStorage.userId_login)
       login_member = 1
    return (
      <div style={{float: "right"}}>
      <Menu pointing>
        <Menu.Item
          name='all'
          active={activeItem === 'all'}
          onClick={this.handleItemClick}
          as={NavLink} to='/'
        />
        <Menu.Item
          name='name'
          active={activeItem === 'name'}
          onClick={this.handleItemClick}
          as={NavLink} to='/name'
        />
        <Menu.Item
          name='add'
          active={activeItem === 'add'}
          onClick={this.handleItemClick}
          as={NavLink} to='/add'
        />
        {(
          login_member === 1 ?
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            as={NavLink} to='/logout  '
            onClick={this.logout}
          /> : 
            <Menu.Item
              name='login'
              active={activeItem === 'login'}
              onClick={this.handleItemClick}
              as={NavLink} to='/login'
            />
        )}
        {(
          <Menu.Item
          name='register'
          active={activeItem === 'register'}
          onClick={this.handleItemClick}
          as={NavLink} to='/register'
        />
        )}
      </Menu>
    </div>
    )
  }


}