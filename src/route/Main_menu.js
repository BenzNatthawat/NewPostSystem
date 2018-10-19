import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Template_News_all from '../containers/templates/Template_News_all'
import Template_News_edit from '../containers/templates/Template_News_edit'
import Create_News from '../containers/templates/Template_News_create'
import Login_Form from '../components/login/Login'
import register_Form from '../components/register/register'

const Main_menu = () => {
  return (
    <Switch>
      <Route path='/login' component={Login_Form} />
      <Route path='/register' component={register_Form} />
      <Route exact path='/' component={Template_News_all} />
      <Route path='/news/:id' component={Template_News_edit} />
      <Route path='/add' component={Create_News} />
    </Switch>
  )
}


export default Main_menu;