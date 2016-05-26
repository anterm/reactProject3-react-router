import React, { Component } from 'react'
import { Route, IndexRoute } from 'react-router'

// компоненты
import App from './components/App'
import Main from './components/main/Main'
import Books from './components/books/Books'
import About from './components/about/About'

// маршруты
const routes = <Route path="/" component={App}>
  <Route path="books" component={Books} />
  <Route path="about" component={About} />
  <IndexRoute component={Main} />
</Route>

module.exports = routes