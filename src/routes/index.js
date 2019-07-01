import React from 'react'
import { Switch, Route } from 'react-router-dom'

import CardList from '../components/CardList'
import NewPost from '../components/NewPost'
import ViewPost from '../components/ViewPost'

const Routes = () => (
  <Switch data-testid="routes">
    <Route exact path='/' component={CardList} />
    <Route exact path='/newpost' component={NewPost} />
    <Route exact path='/viewpost/:id' component={ViewPost} />
    <Route exact path='*' component={CardList} />
  </Switch>
)

export default Routes
