import React from 'react'
import { Switch, Route } from 'react-router-dom'

import CardList from '../components/CardList'

const Routes = () => (
  <Switch data-testid="routes">
    <Route exact path='/' component={CardList} />
    <Route exact path='*' component={CardList} />
  </Switch>
)

export default Routes
