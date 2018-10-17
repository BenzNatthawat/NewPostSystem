import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Template_News from '../containers/templates/Template_News'

const Main_menu = () => {
  return (
    <Switch>
      <Route path='/' component={Template_News} />
    </Switch>
  )
}


export default Main_menu;