import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default class MenuExampleNameProp extends Component {
  state = {}

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    if(name === "login")
      this.setState({ login_member: 0 })
    else if(name === "logout")
      this.setState({ login_member: 1 })


  }

  render() {
    const { activeItem } = this.state
    let login_member = 1  
    return (
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
            name='login'
            active={activeItem === 'login'}
            onClick={this.handleItemClick}
            as={NavLink} to='/login'
          /> : 
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
            as={NavLink} to='/logout'
          />
        )}
      </Menu>

    )
  }
}