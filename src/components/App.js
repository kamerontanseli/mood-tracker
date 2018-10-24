import React from 'react'
import { Route, Switch } from 'react-router-dom'
import NotFound from './NotFound'
import Insights from './Insights'
import Survey from './Survey'

const App = () => (
  <Switch>
    <Route exact path="/" component={Insights} />
    <Route exact path="/survey" component={Survey} />
    <Route exact path="*" component={NotFound} />
  </Switch>
)

export default App