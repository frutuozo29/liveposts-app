import React from 'react'
import { Switch, Route } from 'react-router-dom'

import CardList from '../components/CardList'
import NewPost from '../components/NewPost'

const Routes = () => (
  <Switch data-testid="routes">
    <Route exact path='/' component={NewPost} />
    <Route exact path='/newpost' component={NewPost} />
    <Route exact path='*' component={CardList} />
  </Switch>
)

export default Routes
