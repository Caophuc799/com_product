import React, { Component } from 'react'
import Item from './ItemProduct/ItemProduct.js'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import '../../common/assets/css/grid.min.css'
import './Home.css'
import { fetchProducts, deleteProduct } from '../../../Actions/Product'

// import store from '../../Store'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {
    this.props.fetchProducts()
  }

  render () {
    const { products } = this.props
    return (
      <div className='container home-container'>
        <div className='row'>
          {
            products.length > 0
              ? products.map((item) => {
                return (
                  <Item product={item} history={this.props.history} deleteProduct={this.props.deleteProduct} />
                )
              }) : ''
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ products }) => ({
  products: products.data || []
})

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
  deleteProduct: (id) => dispatch(deleteProduct(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)

// export default Home
