import React, { Component } from 'react'

import Logo from '../../components/header/logo/Logo'
import Navigation from '../../components/header/nav/Navigation'

class Header_Component extends Component {
  render() {
    return (
        <header className='padding-news'>
          <div className='ui two column grid'>
            <div className='row'>
              <div className='column'>
          		  <Logo/>
              </div>
              <div className='column'>
          		  <Navigation/>
              </div>
            </div>
          </div>
        </header>
    );
  }
}

export default Header_Component;