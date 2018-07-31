/* global fetch */

import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import AppBar from './components/AppBar/AppBar.js'
import Home from './containers/Home/Home.js'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      response: ''
    }
  }

  componentDidMount () {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }))
  }

  render () {
    return (
      <div className='App'>
        <AppBar />
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)
