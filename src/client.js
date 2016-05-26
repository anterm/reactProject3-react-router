import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory as history } from 'react-router'
import routes from './routes'

render(
  <Router history={history}>
    {routes}
  </Router>,
  document.getElementById('content')
)