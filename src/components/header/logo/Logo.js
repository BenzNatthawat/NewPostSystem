import React from 'react'

import logo from '../../../images/logo.jpg'
import { Header, Image } from 'semantic-ui-react'

const HeaderExampleImage = () => (
  <Header as='h2'>
    <Image circular src={logo} /> News Post System
  </Header>
)

export default HeaderExampleImage