import React, { Component } from 'react'
import { Switch, Route, Redirect   } from 'react-router-dom'

import Page_News_all from '../containers/pages/Page_News_all'
import Page_News_edit from '../containers/pages/Page_News_edit'
import Page_News_create from '../containers/pages/Page_News_create'
import Page_News_user from '../containers/pages/Page_News_user'
import PrivateRoute from './PrivateRoute'

class Menu_news extends Component{
  render(){
    return(
      <Switch>
        <Route exact path='/' component={Page_News_all} />
        <Route path='/news/:id' component={Page_News_edit} />
        <PrivateRoute path='/name' component={Page_News_user} />
        <Route path='/add' component={Page_News_create} />
        <Redirect to="/"/>
      </Switch>
   )
  }
}

export default Menu_news;