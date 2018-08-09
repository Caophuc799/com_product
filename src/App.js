/* global fetch */

import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import AppBar from './Views/components/AppBar/AppBar.js'
import Home from './Views/containers/Home/Home.js'
import './App.css'
import Product from './Views/containers/Product/Product.js'
// import { createProduct } from './api/ProductAPI'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      response: ''
    }
  }
  fetchProduct (data) {
    return fetch(`/products`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(data => data.json())
      .catch(err => err)
  }
  componentDidMount () {
    // var data = {
    //   name: 'Xoài cát hoà lộc',
    //   count: 10
    // }
    // // createProduct(data)
    // fetch('/products')
    //   .then(res => res.json())
    //   .then(users => this.setState({ users }))
  }

  render () {
    return (
      <div className='App'>
        <AppBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/product' component={Product} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)
