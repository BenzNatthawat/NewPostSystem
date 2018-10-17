import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import CardList from '../../components/cardList/index/CardList'
import Create_News from '../../components/cardList/create/Create_News'
import Edit_News from '../../components/cardList/edit/Edit_News'

class Body_Component extends Component {
  render() {
    return (
        <section className='padding-news'>
            <Switch>
              <Route exact path='/' component={CardList} />
              <Route path='/news/:id' component={Edit_News} />
              <Route path='/add' component={Create_News} />
            </Switch>
        </section>
    );
  }
}

export default Body_Component;