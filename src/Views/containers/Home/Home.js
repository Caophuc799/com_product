import React, { Component } from 'react'
// import Item from './ItemProduct/ItemProduct.js'
import { Link } from 'react-router-dom'
import '../../common/assets/css/grid.min.css'
import './Home.css'

import store from '../../Store'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      products: []
    }
    this.getListProducts = this.getListProducts.bind(this)
  }

  componentDidMount () {
    this.getListProducts()
  }

  componentWillMount () {
    store.subscribe(() => {
      this.getListProducts()
    })
  }

  getListProducts () {
    const state = store.getState()
    if (state.products) {
      this.setState({products: state.products.items})
    }
  }
  render () {
    const { products } = this.state
    console.log(products)
    return (
      <div className='container home-container'>
        <div className='row'>

          <Link to='/product' >link</Link>
          <hr />
          {
            products.length > 0
              ? products.map((item) => {
                return (
                  <div>
                    {item.name} {item.price}
                    <hr />
                  </div>
                )
              }) : ''
          }
          {/* <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item /> */}
        </div>
      </div>
    )
  }
}

export default Home
