import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Login_Form from '../components/login/Login'
import register_Form from '../components/register/Register'
import Template_News from '../containers/templates/Template_News'

class Main_menu extends Component{
  render(){
    return(
      <Switch>
        <Route exact path='/login' component={Login_Form} />
        <Route exact path='/register' component={register_Form} />
        <Route component={Template_News} />
      </Switch>
   )
  }
}

export default Main_menu;