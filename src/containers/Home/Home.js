import React, { Component } from 'react'
import Item from './ItemProduct/ItemProduct.js'
import '../../common/assets/css/grid.min.css'
import './Home.css'

class Home extends Component {
  render () {
    return (
      <div className='container home-container'>
        <div className='row'>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    )
  }
}

export default Home
