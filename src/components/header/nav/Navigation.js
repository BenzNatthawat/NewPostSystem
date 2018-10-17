import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default class MenuExampleNameProp extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
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
        <Menu.Item
          name='logout'
          active={activeItem === 'logout'}
          onClick={this.handleItemClick}
          as={NavLink} to='/logout'
        />
      </Menu>

    )
  }
}